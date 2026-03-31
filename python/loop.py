for i in range(10):
    print(f"Vuelta número: {i}")

language = 'Python'
for letter in language:
    print(letter)



for i in range(1, 8):
    print("#" * i)

for i in range(8):
    print("#" * 8)

for i in range(8):
    fila = ""
    for j in range(8):
        fila += "# "
        
    print(fila)

for i in range(11):
    resultado = i * i
    # Usamos f-string para montar la frase fácilmente
    print(f"{i} x {i} = {resultado}")


i=10
while i >=0:
    print(i)
    i -= 1

suma = 0
for i in range (0, 101, 2):
    suma = suma + i
print(suma)

#sumar los numeros entre 0 y 100, pero solo los múltiplos de 3
suma = 0
for i in range (0, 101, 3):
    suma = suma + i
print(suma)

suma_pares=0
suma_impares=0
for i in range (0, 101):
    if i % 2 == 0:
        suma_pares += i
    else:
        suma_impares += i
print(suma_pares)
print(suma_impares)





