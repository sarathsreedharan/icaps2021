import requests
from flask import Flask, render_template, request, session
import sys
import os
import copy


dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.insert(0, dir_path)
from survey_creds import * 

import time
import json
app = Flask(__name__)

from firebase import Firebase
firebase = Firebase(FIREBASE_CONFIG)
db = firebase.database()
CHECKBOX = ["aug_9_8","aug_9_9","aug_9_16","aug_9_17","aug_9_22","aug_9_23","aug_10_8","aug_10_9","aug_10_16","aug_10_17","aug_10_22","aug_10_23","aug_11_8","aug_11_9","aug_11_17","aug_11_22","aug_11_23","aug_12_8","aug_12_9","aug_12_16","aug_12_17","aug_12_22","aug_12_23","aug_13_8","aug_13_9","aug_13_16","aug_13_17","aug_13_22","aug_13_23"]

@app.route("/chat", methods=['POST'])
def index():
    data_dict = {}
    data_dict["name"] = request.form.get("name")
    data_dict["email"] = request.form.get("email")
    data_dict["status"] = request.form.get("status")
    data_dict["other_researchers"] = request.form.get("other_researchers")
   
    for dt in CHECKBOX:
        data_dict[dt] = request.form.get(dt,0)
 
    db.child("CHAT").push(data_dict)
    return render_template('submit.html')
 
if __name__ == "__main__":
    app.run()
