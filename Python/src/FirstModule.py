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

loopdaloop(2,50)