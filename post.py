import simplejson as json
import pymongo
from pymongo import MongoClient

client=MongoClient('localhost')
print client
db=client.trial
record=db.trialfield

page=open("schl.json","r")
parsed=json.loads(page.read())
for i in parsed:
    print i
    record.insert(i)
print "  "
print "-----------------------------------------------------"
print "Done posting"
print "-----------------------------------------------------"
