#27/03/2026

""" 
# Variables en Python
first_name = 'Asabeneh'
last_name = 'Yetayeh'
country = 'Finland'
city = 'Helsinki'
age = 250
is_married = True
skills = ['HTML', 'CSS', 'JS', 'React', 'Python']
person_info = {
   'firstname':'Asabeneh',
   'lastname':'Yetayeh',
   'country':'Finland',
   'city':'Helsinki'
   } 

print('First name:', first_name)
print('First name length:', len(first_name))
print('Last name: ', last_name)
print('Last name length: ', len(last_name))
print('Country: ', country)
print('City: ', city)
print('Age: ', age)
print('Married: ', is_married)
print('Skills: ', skills)
print('Person information: ', person_info)


print(first_name)
print(age)

# int a float
num_int = 10
print('num_int',num_int)         # 10
num_float = float(num_int)
print('num_float:', num_float)   # 10.0

# float a int
gravity = 9.81
print(int(gravity))             # 9

# int a str
num_int = 10
print(num_int)                  # 10
num_str = str(num_int)
print(num_str)                  # '10'

# str a int o float
num_str = '100000000000000000431.87'
print('num_int', int(float(num_str)))    # 10
print('num_float', float(num_str))  # 10.6

# str a list
first_name = 'Asabeneh'
print(first_name)               # 'Asabeneh'
first_name_to_list = list(first_name)
print(first_name_to_list)            # ['A', 's', 'a', 'b', 'e', 'n', 'e', 'h']


length = len(first_name_to_list)
print(length)                   # 8
 """



""" numero_uno = 85
numero_dos = 6


print(type(int(numero_uno/numero_dos)), numero_uno/numero_dos) #consume sobre todo procesador

division= numero_uno/numero_dos

print(type(division),division) #consume sobre todo memoria

print(numero_uno/numero_dos)

# DIVISION DE MÓDULO

print(numero_uno//numero_dos) """

""" El radio de un círculo es de 30 metros.
Calcule el área de un círculo y asigne el valor a una variable con el nombre de area_of_circle
Calcule la circunferencia de un círculo y asigne el valor a una variable con el nombre de circum_of_circle
Tome el radio como entrada del usuario y calcule el área. """
""" import math
radio = float(input ("Introduce el radio del círculo: "))
area_of_circle = math.pi*(radio**2)

print("El area del circulo es: ", area_of_circle)
circum_of_circle =  2*math.pi*radio
print ("La circunferencia del circulo es: ", circum_of_circle) """

for n in range(1, 6):
    # Calculamos los valores
    col1 = n
    col2 = 1
    col3 = n
    col4 = n**2
    col5 = n**3
    
    # Imprimimos con formato para que las columnas se vean ordenadas
    print(f"{col1:<2} {col2:<2} {col3:<2} {col4:<3} {col5:<3}")


""" Supongamos que me dan una hora, ejemplo 14:04 y una cantidad de minutos:
dar la hora que supone sumar a la hora inicial la cantidad de minutos. Tanto hora inicial
como minutos se piden al usuario.

Paso 1: entender qué es una hora en el contexto: "14" +":"+"04"
Paso 1.1: como del usuario por defecto se toma str: se requiere separar
 """

hora_input = input("Introduce la hora (HH:MM): ")
minutos_a_sumar = int(input("Minutos a sumar: "))

# Separar el string
h, m = hora_input.split(":")
h, m = int(h), int(m)

# Calcular total
total_minutos = h * 60 + m + minutos_a_sumar

# Convertir de vuelta
final_h = (total_minutos // 60) % 24
final_m = total_minutos % 60

print(f"Resultado: {final_h:02d}:{final_m:02d}")


