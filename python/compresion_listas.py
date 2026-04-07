# generar números

numbers = [i for i in range(11)]  # genera números de 0 a 10
print(numbers)                    # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

"""
lista = []
for i in range(11):
    lista.append(i)
print(lista)
"""
# también puedes hacer operaciones matemáticas durante la iteración
squares = [i * i for i in range(11)]
print(squares)                    # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
"""
lista = []
for i in range(11):
    lista.append(i*i)
print(lista)
"""

# también se pueden generar listas de tuplas
numbers = [(i, i * i) for i in range(11)]
print(numbers)                    # [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]
"""

# generar números pares
even_numbers = [i for i in range(21) if i % 2 == 0]  # genera pares de 0 a 20
print(even_numbers)                    # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# generar números impares
odd_numbers = [i for i in range(21) if i % 2 != 0]  # genera impares de 0 a 20
print(odd_numbers)                      # [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

# filtrar números: obtengamos los pares positivos
numbers = [-8, -7, -3, -1, 0, 1, 3, 4, 5, 7, 6, 8, 10]
positive_even_numbers = [i for i in range(21) if i % 2 == 0 and i > 0]
print(positive_even_numbers)           # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
"""
# aplanar una lista 2D
"""
print("Forma de compresión de listas: ")
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened_list = [number for row in list_of_lists for number in row]
print(flattened_list)                  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

print("Forma clásica de listas: ")
mi_Lista = []
for row in list_of_lists:
    for number in row:
        mi_Lista.append(number)
print(mi_Lista)
"""
# expresión - función lambda (anónimas, como las f. flecha en JS)
# función nombrada
"""
def add_two_nums(a, b):
    return a + b

print(add_two_nums(2, 3))  # 5

# con lambda
add_two_nums = lambda a, b: a + b
print(add_two_nums(2, 3))  # 5

# lambda autoejecutable
print((lambda a, b: a + b)(2, 3))  # 5

square = lambda x: x ** 2
print(square(3))    # 9
cube = lambda x: x ** 3
print(cube(3))      # 27

# múltiples variables
multiple_variable = lambda a, b, c: a ** 2 - 3 * b + 4 * c
print(multiple_variable(5, 5, 3))  # 22
# Lambda - anidadas:
def power(x):
    return lambda n: x ** n

cube = power(2)(3)   # la función power ahora se usa con dos pares de paréntesis
print(cube)          # 8
two_power_of_five = power(2)(5)
print(two_power_of_five)  # 32
"""
    
v1 = [3,2,0,-1,5]
v2 = [3,1,-5,0,4]   
producto = 0
for i in range(len(v1)):
    producto = producto + v1[i]*v2[i]
print(producto)

producto_escalar = sum([v1[i] * v2[i] for i in range(len(v1))])
print(producto_escalar)
"""
Crea la siguiente lista de tuplas usando una comprensión de listas:

[(0, 1, 0, 0, 0, 0, 0),
(1, 1, 1, 1, 1, 1, 1),
(2, 1, 2, 4, 8, 16, 32),
(3, 1, 3, 9, 27, 81, 243),
(4, 1, 4, 16, 64, 256, 1024),
(5, 1, 5, 25, 125, 625, 3125),
(6, 1, 6, 36, 216, 1296, 7776),
(7, 1, 7, 49, 343, 2401, 16807),
(8, 1, 8, 64, 512, 4096, 32768),
(9, 1, 9, 81, 729, 6561, 59049),
(10, 1, 10, 100, 1000, 10000, 100000)]
"""

"""
producto = lambda v1,v2,suma: suma = suma + v1[i]*v2[i] 
"""
countries = [[('Finlandia', 'Helsinki')], [('Suecia', 'Estocolmo')], [('Noruega', 'Oslo')]]
"""Salida:
[['Finlandia', 'FIN', 'Helsinki'], ['Suecia', 'SWE', 'Estocolmo'], ['Noruega', 'NOR', 'Oslo']]"""
flattened_list = [tupla for fila in countries for tupla in fila]
print(flattened_list)