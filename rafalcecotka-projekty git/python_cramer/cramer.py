import numpy as np

print("Program oblicza układ równań wg metody Cramer’a")

lr=int(input("Liczba równań: "))
ln=int(input("Liczba niewiadomych: "))

if lr!=ln:
    print("W metodzie Cramera liczba równań musi się równać liczbie niewiadomych !")
    input("ENTER, aby wyjść…")
    exit()

i=1 #licznik liczby równań
listaw=[] #lista wyników
lista=([],[],[],[],[],[],[],[],[],[],[]) #złożona lista do zapisywania listy wyrazów z równań
while i<=lr:
    i2=1 # licznik niewiadomych w równaniu i
    while i2<=ln+1:
        if i2<=ln:
            r=int(input("Wprowadź niewiadomą numer {} dla równania {} :".format(i2,i)))
            lista[i-1].append(r)
            i2=i2+1
        else:
            r = int(input("Wprowadź wynik dla równania {} :".format(i)))
            listaw.append(r)
            i2 = i2 + 1
    i=i+1

lista=list(lista[:lr])
matrix=np.array(lista)
if np.linalg.det(matrix)==0:
    print("W metodzie Cramera wyznacznik główny nie może być równy 0 !")
    input("ENTER, aby wyjść…")
    exit()

k=0
while k<ln:
    matrix = np.array(lista)
    for m in range(0,lr):
        matrix[m,k]=listaw[m]
    print("Niewiadoma ",k+1, "= {:03.1f}".format(np.linalg.det(matrix)/np.linalg.det(np.array(lista))))
    k=k+1
print("Koniec obliczeń")

t=input("ENTER, aby wyjść… ")

