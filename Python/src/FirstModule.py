'''
Created on Dec 1, 2016

@author: p18enviroment
'''
def add(a,b):
    return a+b

def addFixedValue(a):
        y = 5
        return y +a

print add(1,2)
print addFixedValue(1)

def loopdaloop(a,b):
    start = a
    for i in range(b):
        i=i+1
        start = start*a
        print start
    return start

loopdaloop(2,500)

def googleplex(gp,n):
    for i in range(n):
        gp=gp**10
        print gp
    return gp

bigN = googleplex(10,4)
bigN = str(bigN)
print len(bigN)

"""
from decimal import Decimal, getcontext
getcontext().prec=1000
print sum(1/Decimal(16)**k * 
          (Decimal(4)/(8*k+1) - 
           Decimal(2)/(8*k+4) - 
           Decimal(1)/(8*k+5) -
           Decimal(1)/(8*k+6)) for k in range(1000))
"""

