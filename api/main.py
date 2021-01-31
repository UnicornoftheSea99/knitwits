from flask import Flask
import csv
import json
from flask import jsonify
from flask import render_template
from pyrebase import pyrebase
from flask import request
from hidden import *
from flask_cors import CORS
import pdfkit
import ast

app = Flask(__name__,
            static_url_path='',
            static_folder='web/static',
            template_folder='templates')

CORS(app, resources={r"/api/*": {"origins": "*"}})
def noquote(s):
    return s
pyrebase.quote = noquote

config = {
    "apiKey": apiKey,
    "authDomain": authDomain,
    "databaseURL": databaseURL,
    "projectId": "knitwits-69eff",
    "storageBucket": "knitwits-69eff.appspot.com",
    "messagingSenderId": messagingSenderId,
    "appId": "1:1093837080388:web:281705266de3afe0df3911"
  }

firebase = pyrebase.initialize_app(config)
db = firebase.database()

@app.route("/")
def hello():
    return jsonify({"Hello!":"World"})

@app.route("/api/get/<hashVal>")
def getHash(hashVal):
    try:
        jsonPage = db.order_by_key().equal_to(hashVal).get().val()
        print(jsonPage)
        return jsonify(jsonPage)
    except Exception as ex:
        print("error", ex)
        return jsonify({"error":"does not exist"})

@app.route('/api/post/', methods = ['POST'])
def helloText():
    pattern = request.form.get("pattern")
    x = db.child(hash(pattern)).set(pattern)
    return jsonify({"hashVal":"-"+hash(pattern)})

@app.route('/api/pdf/<hashVal>', methods=["GET"])
def getPDF(hashVal):
    try:
        jsonPage = db.order_by_key().equal_to(hashVal).get().val()
        #fix text in database so we don't use this solution
        text = jsonPage[hashVal].replace("\\\\", "\\").replace("/", "of").replace('"rows":1}', '"rows":1},').replace('"rows":1},,', '"rows":1},').replace('"rows":1},}', '"rows":1}}')
        text = json.loads(text)
        x = render_template("patternpdf.html", text=text, hashVal = hashVal)
        pdfkit.from_string(x, False)
        return x

    except Exception as ex:
        print("error", ex)
        return jsonify({"error":"does not exist"})
