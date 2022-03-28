from math import *
from tracemalloc import stop

#sex
print("""
 /$$   /$$                                     /$$      /$$  /$$$$$$  /$$$$$$$  /$$$$$$$$ /$$$$$$ /$$   /$$
| $$  | $$                                    | $$$    /$$$ /$$__  $$| $$__  $$|__  $$__/|_  $$_/| $$$ | $$
| $$  | $$ /$$   /$$  /$$$$$$   /$$$$$$       | $$$$  /$$$$| $$  \ $$| $$  \ $$   | $$     | $$  | $$$$| $$
| $$$$$$$$| $$  | $$ /$$__  $$ /$$__  $$      | $$ $$/$$ $$| $$$$$$$$| $$$$$$$/   | $$     | $$  | $$ $$ $$
| $$__  $$| $$  | $$| $$  \ $$| $$  \ $$      | $$  $$$| $$| $$__  $$| $$__  $$   | $$     | $$  | $$  $$$$
| $$  | $$| $$  | $$| $$  | $$| $$  | $$      | $$\  $ | $$| $$  | $$| $$  \ $$   | $$     | $$  | $$\  $$$
| $$  | $$|  $$$$$$/|  $$$$$$$|  $$$$$$/      | $$ \/  | $$| $$  | $$| $$  | $$   | $$    /$$$$$$| $$ \  $$
|__/  |__/ \______/  \____  $$ \______/       |__/     |__/|__/  |__/|__/  |__/   |__/   |______/|__/  \__/
                     /$$  \ $$                                                                             
                    |  $$$$$$/                                                                             
                     \______/                                                                              
""")

#data initialise
data=[]
lenthstotarget=[]
iriskept=[]
i=0

#lenth beetween 2 values fonction
def lenth(lul0,lul1):
    len=sqrt((lul1[0]-lul0[0])**2 + (lul1[1]-lul0[1])**2)
    return(len)

#k and tested value setup
testedvaluex=float(input("entrez x de votre iris :"))
testedvaluey=float(input("entrez y de votre iris :"))
k=int(input("k? :"))
testedvalue=[testedvaluex,testedvaluey]

#data file creation
with open("iris.csv","r") as filecsv:
    for garbage in filecsv.readlines():
        if i==0:
            i=1
        else:
            sex=garbage.split(",")
            data.append([float(sex[0]),float(sex[1]),int(sex[2])])
for i in range(0,len(data)):
    wipp=[data[i][0],data[i][0]]
    lenthstotarget.append(lenth(testedvalue,wipp))
for i in range (k):
    iriskept.append([float('inf'),3])

def maxi(tab):
    imax=0
    for i in range(1,len(tab)):
        if tab[i][0]>tab[imax][0]:
            imax=i
    return(imax)
for i in range(len(data)):
    hint=maxi(iriskept)
    if lenthstotarget[i]<iriskept[hint][0]:
        iriskept[hint][0]=lenthstotarget[i]
        iriskept[hint][1]=data[i][2]
print(iriskept)
