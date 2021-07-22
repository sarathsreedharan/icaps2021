import requests
from flask import Flask, render_template, request, session
import sys
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.insert(0, dir_path)
from demo_creds import * 

import time
import json
app = Flask(__name__)

from firebase import Firebase
firebase = Firebase(FIREBASE_CONFIG)
db = firebase.database()


@app.route("/")
def index():
    vote_count = {}
    r = requests.get('https://sheets.googleapis.com/v4/spreadsheets/1im28-bXbSmg73ooUejdvSu0Dn6mt2ZYFAN2S-3SWY_s/values/C2:C1000?key='+GOOGLE_API_KEY)
    response_map = json.loads(r.text)
    for val_list in response_map['values']:
        val = val_list[0]
        if val not in vote_count:
           vote_count[val] = 0
        vote_count[val] += 1
    return json.dumps(vote_count)

@app.route("/fd")
def fd_clicked():
    db.child("click_stats").push({"clicked":"fd", "timestamp":time.time()})
    return "['Updated']"
    
@app.route("/tarski")
def tarski_clicked():
    db.child("click_stats").push({"clicked":"tarski", "timestamp":time.time()})
    return "['Updated']"

@app.route("/rosplan")
def rosplan_clicked():
    db.child("click_stats").push({"clicked":"rosplan", "timestamp":time.time()})
    return "['Updated']"

@app.route("/ros2")
def ros2_clicked():
    db.child("click_stats").push({"clicked":"ros2", "timestamp":time.time()})
    return "['Updated']"

@app.route("/val")
def val_clicked():
    db.child("click_stats").push({"clicked":"val", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/optic")
def optic_clicked():
    db.child("click_stats").push({"clicked":"optic", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/kcl_planner")
def kcl_planner_clicked():
    db.child("click_stats").push({"clicked":"kcl_planner", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/prp")
def prp_clicked():
    db.child("click_stats").push({"clicked":"prp", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/ff")
def ff_clicked():
    db.child("click_stats").push({"clicked":"ff", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/ibm_top_k")
def ibm_top_k_clicked():
    db.child("click_stats").push({"clicked":"ibm_top_k", "timestamp":time.time()})
    return "['Updated']"

@app.route("/pyperplan")
def pyperplan_clicked():
    db.child("click_stats").push({"clicked":"pyperplan", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/lapkt")
def lapkt_clicked():
    db.child("click_stats").push({"clicked":"lapkt", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/planutils")
def planutils_clicked():
    db.child("click_stats").push({"clicked":"planutils", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/planning_domains")
def planning_domains_clicked():
    db.child("click_stats").push({"clicked":"planning_domains", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/vs_code")
def vs_code_clicked():
    db.child("click_stats").push({"clicked":"vs_code", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/sublime")
def sublime_clicked():
    db.child("click_stats").push({"clicked":"sublime", "timestamp":time.time()})
    return "['Updated']"
 
@app.route("/atom")
def atom_clicked():
    db.child("click_stats").push({"clicked":"atom", "timestamp":time.time()})
    return "['Updated']"
 
if __name__ == "__main__":
    app.run()
