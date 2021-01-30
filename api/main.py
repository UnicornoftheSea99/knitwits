from flask import Flask
import csv
import json
from flask import jsonify
import pyrebase
from flask import request

app = Flask(__name__, static_url_path='')

config = {
    "apiKey": "AIzaSyARn9HJzYzxkCjo6fcpGFbqjxbtbXehSK0",
    "authDomain": "knitwit-fc18c.firebaseapp.com",
    "databaseURL": "https://knitwit-fc18c-default-rtdb.firebaseio.com",
    "projectId": "knitwit-fc18c",
    "storageBucket": "knitwit-fc18c.appspot.com",
    "messagingSenderId": "19386219340",
    "appId": "1:19386219340:web:384f3cd772423b5bde2de9"
  }

firebase = pyrebase.initialize_app(config)
db = firebase.database()

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
