'''
Created on Dec 1, 2016

@author: p18enviroment
'''

def add(a,b):
    return a+b

def addFixedValue(a):
        y = 5
        return y +a

def loopdaloop(a,b):
    start = a
    for i in range(b):
        i=i+1
        start = start*a
        #print start
    return start

loopdaloop(2,500)

def googleplex(gp,n):
    
    for i in range(n):
        gp=gp**10
        #print gp
    return gp

def fibinoci():
    userInput = input("Enter the number of loops: ")
    userInput = int(userInput)
    array = [1]
    for i in range(userInput):
        array.append(array[i-1]+array[i])
        print(array[i])
    print(array[i])
    #again = input("Again?   ")


fibinoci()




