import requests
import datetime

now = datetime.datetime.now()
URL='http://api.openweathermap.org/data/2.5/weather?'
appid = '1525ad2cc885ea19da708dcc43b08420'
cityId = ['1273874']

payload = { "appid": appid, "id": cityId[0]}

r = requests.get(URL,params = payload)

dataDict = {}
dataDict['time'] = now.strftime("%H:%M %Y-%m-%d")

for i in r.json():
	if isinstance(r.json()[i],unicode):
		dataDict[i] = r.json()[i]
	elif isinstance(r.json()[i],dict):
		for j in r.json()[i]:
			dataDict[j] = r.json()[i][j]
	elif isinstance(r.json()[i],list):
		for j in r.json()[i][0]:
			dataDict[j] = r.json()[i][0][j]

print(dataDict,len(dataDict))

serverURL = 'http://localhost:3000/posts'

r = requests.post(serverURL,data= dataDict)