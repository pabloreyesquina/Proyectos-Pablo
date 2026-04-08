import re
""" """
txt = 'i love to teach python and javaScript'
""" # Devuelve un objeto Match con span y match
match = re.match('I like to teach', txt, re.I)
if None==match:
    raise AttributeError("No se encuentra el patrón al principio del texto. Se detiene la ejecución")
print(match)  # <re.Match object; span=(0, 15), match='I love to teach'>
# Podemos usar span para obtener la posición inicial y final como tupla
span = match.span()
print(span)     # (0, 15)       

# Tomamos inicio y fin desde span
start, end = span
print(start, end)  # 0, 15

substring = txt[start:end]
print(substring)       # I love to teach
 """"""
"""
txt = '''Python is the most beautiful first language that a human being has ever created.
I recommend python for a first programming language'''

# Devuelve un objeto Match con span y match
match = re.search('first', txt, re.I) # SÓLO DA LA PRIMERA APARCICIÓN
print(match)  # <re.Match object; span=(100, 105), match='first'>
# Podemos usar span para obtener inicio y fin como tupla
span = match.span()
print(span)     # (100, 105)
# Tomamos inicio y fin
start, end = span
print(start, end)  # 100 105
substring = txt[start:end]
print(substring)       # first
"""
"""
txt = '''Python is the most beautiful language that a human being has ever created.
I recommend python for a first programming Language, instead of Xython'''
# ponemos ''' y no sólo ' para reconozca los saltos de línea en el string

# Devuelve una lista
#matches = re.findall('language', txt, re.I) #ya no devuelve un objeto "Match", sino una lista
#matches = re.findall('Python|python', txt)
matches = re.findall('[PpLX]ython', txt)
print(matches)  # ['language', 'language']
"""
"""
# BUSCA Y REEMPLAZA:
txt = '''Python is the most beautiful language that a human being has ever created.
I recommend python for a first programming language'''

match_replaced = re.sub('Python|python', 'JavaScript', txt, re.I)
print(match_replaced)  # JavaScript is the most beautiful language that a human being has ever created.
# o bien
match_replaced = re.sub('[Pp]ython', 'JavaScript', txt, re.I)
print(match_replaced)  # JavaScript is the most beautiful language that a human being has ever created.
"""
"""
txt = '''%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing. 
T%he%re i%s n%o%th%ing as r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing p%e%o%ple.
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs. 
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher?'''

matches = re.sub('%', '', txt)
print(matches)
"""
 """# OBTENCIÓN DE LAS LÍNEAS SEPARADAS POR SALTOS DE LÍNEA, EN LISTA
txt = '''I am teacher and  I love teaching.
There is nothing as rewarding        as educating and empowering people.
I found teaching more interesting   than any other jobs.
Does this motivate you  to be a teacher?'''
print(re.split('\n', txt)) # dividir usando \n - salto de línea
# para mejor referencia consultar https://docs.python.org/es/3.12/library/re.html


""" Ejercicios: Nivel 2
Escribe un patrón que valide un nombre de variable válido en Python. """


def es_variable_valida(nombre):
    # Definir el patrón regex
    patron = r'^[a-zA-Z_][a-zA-Z0-9_]*$'
    
    # Comprobar coincidencia
    if re.match(patron, nombre):
        return True
    return False

# Pruebas
print(es_variable_valida("variable_1"))  # True
print(es_variable_valida("_privada"))    # True
print(es_variable_valida("2variable"))   # False (no puede iniciar con número)
print(es_variable_valida("patron8!")) # False (no permite guiones medios)
print(es_variable_valida("suma total"))  # False (no permite espacios)


#Limpia el siguiente texto eliminando etiquetas HTML.
text = '''
HTML
Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <img /> and <input /> directly introduce content into the page. Other tags such as <p> surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page.

HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.
'''

patron_HTML = r'<[^>]+>'

print(re.sub(patron_HTML, '', text))

paragraph = '''I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'''

# 1. Limpieza: Eliminamos puntuación y normalizamos a minúsculas
# El patrón r'[^\w\s]' elimina todo lo que no sea letra, número o espacio.
clean_text = re.sub(r'[^\w\s]', '', paragraph).lower()

# 2. Tokenización: Convertimos el string en una lista de palabras
words = clean_text.split()

# 3. Conteo: Usamos un diccionario para almacenar las frecuencias
counts = {}
for word in words:
    counts[word] = counts.get(word, 0) + 1

# 4. Extracción de los 3 más frecuentes:
# Ordenamos los items del diccionario por el valor (frecuencia) de forma descendente
sorted_words = sorted(counts.items(), key=lambda item: item[1], reverse=True)

# 5. Resultado
top_three = sorted_words[:3]

print("Las tres palabras más frecuentes son:")
for word, freq in top_three:
    print(f"{word}: {freq}")