import json
# JSON
person_json = '''{
    "name": "Asabeneh",
    "country": "Finland",
    "city": "Helsinki",
    "skills": ["JavaScript", "React", "Python"]
}'''
""" # Convertir la cadena JSON a diccionario
person_dct = json.loads(person_json)
print(type(person_dct))
print(person_dct)
print(person_dct['name']) """

#Tarea: Llevar el contenido de person_json a un fichero, y desde ahi cargarlo(leerlo) a string y procesarlo como diccionario en python.

with open('./ficheros/person.json', 'w') as f:
    f.write(person_json)

with open('./ficheros/person.json', 'r') as f:
    person_dct = json.load(f)
    print(person_dct)

print(type(person_dct)) # Debería decir <class 'dict'>
print(person_dct['name']) # Accedemos como a cualquier diccionario