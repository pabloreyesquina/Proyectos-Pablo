""" La siguiente lista contiene algunas frutas:

fruits = ['banana', 'orange', 'mango', 'lemon']
Si una fruta no está en la lista, añádela e imprime la lista modificada. Si ya existe, imprime 'La fruta ya está en la lista'. """


""" fruits = ['banana', 'orange', 'mango', 'lemon', 'kiwi', 'apple']
nuevaFruta = input("Deme una nueva fruta: ")
if nuevaFruta in fruits:
    print("La fruta ya esta en la lista")
else:
    fruits.append(nuevaFruta)
    print(fruits)
 """

""" Aquí hay un diccionario persona. ¡Siéntete libre de modificarlo!
person = {
    'first_name': 'Asabeneh',
    'last_name': 'Yetayeh',
    'age': 250,
    'country': 'Finlandia',
    'is_married': True,
    'skills': ['JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
    'address': {
        'street': 'Calle Espacial',
        'zipcode': '02210'
    }
}
Comprueba si existe la clave skills en el diccionario; si existe, imprime la habilidad central de la lista skills.
Comprueba si existe la clave skills; si existe, verifica si la persona tiene la habilidad 'Python' e imprime el resultado.
Si las habilidades son sólo JavaScript y React, imprime 'Es desarrollador frontend'; si incluyen Node, Python y MongoDB, imprime 'Es desarrollador backend'; si incluyen React, Node y MongoDB, imprime 'Es desarrollador full-stack'; en caso contrario, imprime 'Título desconocido' — puedes anidar más condiciones para mayor precisión.
Si la persona está casada y vive en Finlandia, imprime la siguiente línea:
print('Asabeneh Yetayeh vive en Finlandia. Está casado.')
 """

person = {
    'first_name': 'Asabeneh',
    'last_name': 'Yetayeh',
    'age': 250,
    'country': 'Finlandia',
    'is_married': True,
    'skills': ['JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
    'address': {
        'street': 'Calle Espacial',
        'zipcode': '02210'
    }
}


if 'skills' in person:
    # Convertimos la lista a Set para comparar grupos de golpe
    skills = set(person['skills'])
    
    # Definimos los "perfiles" que buscamos
    frontend = {'JavaScript', 'React'}
    backend = {'Node', 'Python', 'MongoDB'}
    fullstack = {'React', 'Node', 'MongoDB'}

    # Imprimimos la habilidad central (Índice medio de la lista original)
    lista_original = person['skills']
    medio = len(lista_original) // 2
    print(f"Habilidad central: {lista_original[medio]}")

    # Comprobamos si tiene Python
    print(f"¿Sabe Python?: {'Python' in skills}")

    # Determinamos el título (Ordenado de más completo a menos)
    if fullstack <= skills:
        print('Es desarrollador full-stack')
    if backend <= skills:
        print('Es desarrollador backend')
    elif skills == frontend:
        print('Es desarrollador frontend')
    else:
        print('Título desconocido')

# --- 2. Lógica de Residencia y Estado Civil ---
if person['is_married'] and person['country'] == 'Finlandia':
    # Usamos f-string para que los datos salgan directos del diccionario
    print(f"{person['first_name']} {person['last_name']} vive en {person['country']}. Está casado.")


""" A continuación, una lista con las edades de 10 estudiantes:
ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Encuentra la mediana de las edades (un elemento medio o el promedio de dos elementos medios) """

ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 28, 26, 26, 27, 25, 13]

ages.sort()

print(len(ages))

# 2. Contamos cuántas edades hay
n = len(ages)

# 3. Calculamos el índice central (división entera)
mid = n // 2

if n % 2 != 0:
    # CASO IMPAR: La mediana es el número del centro
    median = ages[mid]
else:
    # CASO PAR: La mediana es el promedio de los dos números centrales
    # Los índices centrales son 'mid' y el anterior 'mid - 1'
    median = (ages[mid - 1] + ages[mid]) / 2

print(f"Edades ordenadas: {ages}")
print(f"El número de elementos es: {n}")
print(f"La mediana de las edades es: {median}")

