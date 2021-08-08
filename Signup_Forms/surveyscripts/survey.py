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

firebase_report = Firebase(FIREBASE_CONFIG_REPORT)
db_report = firebase_report.database()

CHECKBOX = ["aug_9_8","aug_9_9","aug_9_16","aug_9_17","aug_9_22","aug_9_23","aug_10_8","aug_10_9","aug_10_16","aug_10_17","aug_10_22","aug_10_23","aug_11_8","aug_11_9","aug_11_17","aug_11_22","aug_11_23","aug_12_8","aug_12_9","aug_12_16","aug_12_17","aug_12_22","aug_12_23","aug_13_8","aug_13_9","aug_13_16","aug_13_17","aug_13_22","aug_13_23"]

INCIDENT_REPORT = ["affiliation","contact","date_of_incident","email_id","event_description","event_location","gender_of_incident","is_review_cycle","is_student","is_student_perpetrator","ongoing","other_descr","other_prev_report_descr","other_type_descr","perpetrator_gender","prev_report","review_cycle","suggestions","time_of_incident","type_ncsc","type_ncsir","type_sh","type_ra","type_viol","type_dh","type_stalking","type_oimph","type_unknown","other_type_descr"]

@app.route("/chat", methods=['POST'])
def index():
    data_dict = {}
    data_dict["name"] = request.form.get("name")
    data_dict["email"] = request.form.get("email")
    data_dict["status"] = request.form.get("status")
    data_dict["other_researchers"] = request.form.get("other_researchers")
    data_dict["table"] = request.form.get("table")

   
    for dt in CHECKBOX:
        data_dict[dt] = request.form.get(dt,0)
 
    db.child("CHAT").push(data_dict)
    return render_template('submit.html')

@app.route("/incident_report", methods=['POST'])
def incident_report():
    data_dict = {}
    for val in INCIDENT_REPORT:
        data_dict[val] = request.form.get(val,"")
    db_report.child("incident_report").push(data_dict)
    return render_template('submit_incident_report.html') 


if __name__ == "__main__":
    app.run()
