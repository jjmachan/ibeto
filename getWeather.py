import requests
import datetime
import time

now = datetime.datetime.now()
URL='http://api.openweathermap.org/data/2.5/weather?'
appid = '1525ad2cc885ea19da708dcc43b08420'
cityId = ['1273874']

payload = { "appid": appid, "id": cityId[0]}

r = requests.get(URL,params = payload)

dataDict = {}
time= now.strftime("%H:%M %Y-%m-%d")

for i in r.json():
	if isinstance(r.json()[i],unicode):
		dataDict[i] = r.json()[i]
	elif isinstance(r.json()[i],dict):
		for j in r.json()[i]:
			dataDict[j] = r.json()[i][j]
	elif isinstance(r.json()[i],list):
		for j in r.json()[i][0]:
			dataDict[j] = r.json()[i][0][j]

temp = dataDict['id']
dataDict["id"] = time
dataDict['weather-id'] = temp
mainData = {}
for i in ['temp','pressure','humidity','main']:
	mainData[i] = dataDict[i]
print(mainData)

weatherDataURL = 'http://localhost:3000/weatherData'
todayURL = 'http://localhost:3000/today'

weatherData = requests.post(weatherDataURL,data= dataDict)
today = requests.post(todayURL,data=mainData)