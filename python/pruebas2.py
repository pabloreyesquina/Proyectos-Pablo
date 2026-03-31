""" Une las cadenas 'Thirty', 'Days', 'Of', 'Python' en 'Thirty Days Of Python'.
Une las cadenas 'Coding', 'For', 'All' en 'Coding For All'.
Declara la variable company y asígnale el valor inicial "Coding For All".
Imprime la variable company usando print().
Usa len() y print() para mostrar la longitud de la cadena company.
Usa el método upper() para convertir todos los caracteres a mayúsculas.
Usa el método lower() para convertir todos los caracteres a minúsculas.
Aplica capitalize(), title() y swapcase() sobre la cadena 'Coding For All'.
Extrae mediante slicing la primera palabra de 'Coding For All'. """

print("Thirty" + " " + "Days" + " " + "Of" + " " + "Python")
print("Coding" + " " + "For" + " " + "All")
company = "Coding For All"
print(company)
print(len(company))
print(company.upper())
print(company.lower())
print(company.capitalize())
print(company.title())
print(company.swapcase())
print(company[0:6])

print(company.index("For"))
print(company.find("For"))

print(company.replace("Coding", "Python"))
print(company.replace(" ", ""))

texto = '''
desarrollar la lógica de un programa para contar el número de ocurrencias de una palabra en un texto.
'''

palabra = input ("Escriba una palabra a buscar y le diré el número de ocurrencias: ")
print(f"En el texto aparece {palabra} ")

palabras = company.split()
p1, p2, p3 = palabras
print(f"{p1[0]}{p2[0]}{p3[0]}")

#¿La cadena 'Coding For All' empieza con la subcadena 'Coding'?
print(company.startswith("Coding"))

#Dada la lista ['Django', 'Flask', 'Bottle', 'Pyramid', 'Falcon'], únela en una cadena separada por espacios.

frameworks = ['Django', 'Flask', 'Bottle', 'Pyramid', 'Falcon']
print(" ".join(frameworks))

""" Usa la secuencia de escape de nueva línea para separar las siguientes oraciones:
I am enjoying this challenge.
I just wonder what is next. """

print("I am enjoying this challenge.\nI just wonder what is next.")


first, second, third,*rest, tenth = ["coche", True, 2,3,4,5,6,7,8,9,10]
#Recomponer en una variable el anterior array
arraynuevo=[]
arraynuevo.append(first)
arraynuevo.append(second)
arraynuevo.append(third)
arraynuevo.append(rest)
arraynuevo.append(tenth)
print(arraynuevo)


