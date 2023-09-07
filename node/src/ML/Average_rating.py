import pandas as pd
import numpy as np
from math import sin, cos, sqrt, atan2, radians
import sys

cuisine,x,y = sys.argv[1],sys.argv[2],sys.argv[3]
x = float(x)
y = float(y)

def get_distance(lat1, lon1, lat2, lon2):
    R = 6373.0
    latr = radians(lat1)
    lonr = radians(lon1)
    laty = radians(lat2)
    lony = radians(lon2)
    dlon = lony - lonr
    dlat = laty - latr
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(abs(a)), sqrt(abs(1 - a)))
    distance = R * c
    return distance

def Average_rating():
    shops=pd.read_csv("zomato.csv",encoding='ISO-8859-1')
    shops=shops[shops['Country Code']==1]
    shops=shops.drop(['Restaurant ID','Country Code','City','Address','Locality Verbose','Locality','Currency'],axis=1)
    shops=shops.drop(['Rating color','Rating text','Votes'],axis=1)
    shops=shops.drop(['Restaurant Name'],axis=1)
    shops=shops[shops['Cuisines'].str.contains(cuisine)]
    shops=shops.drop(['Cuisines'],axis=1)
    longArr = shops['Longitude']
    longArr=np.array(longArr)
    latArr = shops['Latitude']
    latArr=np.array(latArr)
    LatLonglist=[]
    for i in range(len(longArr)):
        dist=get_distance(x,y,latArr[i],longArr[i])
        if dist < 10 :
            LatLonglist.append([latArr[i],longArr[i]])
    latList=[]
    for i in range(len(LatLonglist)):
        latList.append(LatLonglist[i][0])
    longList=[]
    for i in range(len(LatLonglist)):
        longList.append(LatLonglist[i][1])
    rslt_df = shops[shops['Latitude'].isin(latList)]
    rslt_df = shops[shops['Longitude'].isin(longList)]
    print(rslt_df["Aggregate rating"].mean())



Average_rating()