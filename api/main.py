from flask import Flask
import csv
import json
from flask import jsonify
from pyrebase import pyrebase
from flask import request
from hidden import *
from flask_cors import CORS
app = Flask(__name__, static_url_path='')
CORS(app, resources={r"/api/*": {"origins": "*"}})

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
    #figure out how to handle case if data is not present in here
    try:
        jsonPage = db.child("hashes").equal_to(hashVal).get()
        return jsonify(jsonPage)
    except Exception as ex:
        print(ex)

@app.route('/api/post/', methods = ['POST'])
def helloText():
    pattern = request.form.get("pattern")
    hashVal = db.child("hashes").push(pattern)
    return jsonify({"hashVal":hashVal})
