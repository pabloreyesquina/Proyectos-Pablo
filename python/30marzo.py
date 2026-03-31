# Ejercicios y ejemplos del día 4 del curso 

multiline_string = '''I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python.'''
print(multiline_string)

# Otra forma
multiline_string = """I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python."""
print(multiline_string)


print('I hope everyone is enjoying the Python Challenge.\nAre you ?') # nueva línea
print('Days\tTopics\tExercises') # añade una tabulación
print('Day 1\t5\t5')
print('Day 2\t6\t20')
print('Day 3\t5\t23')
print('Day 4\t1\t35')
print('This is a backslash  symbol (\\)') # imprime barra invertida
print('In every programming language it starts with \"Hello, World!\"') # comillas dobles dentro de comillas simples


first_name = 'Asabeneh'
last_name = 'Yetayeh'
language = 'Python'
formated_string = 'I am %s %s. I teach %s' %(first_name, last_name, language)
print(formated_string)

# Cadenas y números
radius = 10
pi = 3.14
area = pi * radius ** 2
formated_string = 'The area of circle with a radius %d is %.2f.' %(radius, area) # 2 indica 2 decimales

python_libraries = ['Django', 'Flask', 'NumPy', 'Matplotlib','Pandas']
formated_string = 'The following are python libraries:%s' % (python_libraries)
print(formated_string) # imprime "The following are python libraries:['Django', 'Flask', 'NumPy', 'Matplotlib','Pandas']"

language = 'Python'
first_three = language[0:3] # empieza en índice 0, hasta 3 pero sin incluir 3
print(first_three) #Pyt
last_three = language[3:6]
print(last_three) # hon
# Otra forma
last_three = language[-3:]
print(last_three)   # hon
last_three = language[3:]
print(last_three)   # hon

greeting = 'Hello, World!'
print(greeting[::-1]) # !dlroW ,olleH