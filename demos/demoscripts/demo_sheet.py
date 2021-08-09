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
firebase_vote = Firebase(FIREBASE_CONFIG_2)
db = firebase.database()
db_vote = firebase_vote.database()

DEMO_LIST = ['vote-376','vote-382','vote-391','vote-392','vote-383','vote-380','vote-388','vote-393','vote-381','vote-387','vote-385','vote-384','vote-375','vote-374','vote-386','vote-390','vote-378','vote-389','vote-377']

@app.route("/")
def index():
    vote_count = {}
    #db_vote
    total_count = 0
    data = db_vote.child("vote_tally").get().val()
    if not data:
       return json.dumps({'top_3': [0,0,0]})
    email_ids_seen_dict = {}
    for item in data:
        #raise Exception(str(data[item]['data']))
        data_map = data[item]['data']
        email_ids_seen_dict[data_map['id']] = data_map['Votes']
    for key in  email_ids_seen_dict:
        for vote in email_ids_seen_dict[key]:
            if vote not in vote_count:
                vote_count[vote] = 0
            vote_count[vote] += 1
            total_count += 1
    
    if len(vote_count) >= 3:
       vote_counts_top_3 = sorted(list(vote_count.values()), reverse=3)[:3]
    else:
       vote_keys = list(vote_count.keys())
       for i in range(3):
           if i < len(vote_keys):
              unsorted_top_3.append(vote_count[vote_keys[i]])
           else:
              unsorted_top_3.append(0)
       vote_counts_top_3 = sorted(unsorted_top_3)
    return json.dumps({'top_3': vote_counts_top_3, 'total': total_count})

@app.route("/total_count")
def count():
    vote_count = {}
    #db_vote
    data = db_vote.child("vote_tally").get().val()
    if not data:
       return json.dumps({'total_count':0})

    else:
       return json.dumps({'total_count':len(data)})

@app.route("/vote", methods=['GET', 'POST'])
def vote():
    data = request.data.decode('utf-8') #get_json(force=True)
    db_vote.child("vote_tally").push({'data': json.loads(data)})
            #{'id':data['id'], 'votes':data['Votes']})#"email_id":email_id,"demo_votes":votes})
    return ""

@app.route("/button_clicks", methods=['GET'])
def button_clicks():
    demo_id = request.args.get('demo_id') #get_json(force=True)
    button_type = request.args.get('button_type') #get_json(force=True)

    db.child("demo_cards_tally").push({'demo_id': demo_id, 'button_type': button_type})
            #{'id':data['id'], 'votes':data['Votes']})#"email_id":email_id,"demo_votes":votes})
    return ""

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
