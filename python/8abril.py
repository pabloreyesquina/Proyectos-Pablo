import re
import keyword

txt = 'I love to teach python and javaScript'
# Devuelve un objeto Match con span y match
match = re.match('I love to teach', txt, re.I)
print(match)  # <re.Match object; span=(0, 15), match='I love to teach'>
# Podemos usar span para obtener la posición inicial y final como tupla
span = match.span()
print(span)     # (0, 15)
# Tomamos inicio y fin desde span
start, end = span
print(start, end)  # 0, 15
substring = txt[start:end]
print(substring)       # I love to teach


texto = "dato1\tdato2\t\tdato3\t\tdato4"
texto2 = "Hola	que haces	no tengo ni idea	de como funciona esto	que tal			jdfaj		 jdf"
print(texto)
print(texto2)

print(texto.split("\t"))
print(texto2.split("\t"))   

print(re.split("\t", texto))
print(re.split("\t", texto2))


def es_nombre_variable_valido(nombre):
    # 1. Definimos el patrón básico (ASCII)
    patron = r'^[a-zA-Z_][a-zA-Z0-9_]*$'
    
    # 2. Verificamos:
    # - Si cumple el patrón Regex
    # - Y NO es una palabra reservada
    if re.match(patron, nombre) and not keyword.iskeyword(nombre):
        return True
    return False

# Pruebas
print(es_nombre_variable_valido("mi_variable")) # True
print(es_nombre_variable_valido("if"))          # False (Palabra reservada)
print(es_nombre_variable_valido("123variable")) # False (Empieza por número)

print(keyword.kwlist)

test_words = [
    # --- VÁLIDOS ---
    "nombre",               # Simple
    "mi_variable",          # Snake case estándar
    "_contador",            # Empieza con guion bajo (válido)
    "variable123",          # Alfanumérico
    "CAPS_LOCK",            # Mayúsculas (constantes)
    "__init__",             # Dunders (métodos especiales)
    
    # --- INVÁLIDOS POR SINTAXIS ---
    "1variable",            # Empieza con número
    "nombre-empleado",      # Contiene guion medio
    "dato casa",            # Contiene un espacio
    "valor$",               # Carácter especial no permitido
    "¿interrogacion?",      # Carácter especial no permitido
    "",                     # Cadena vacía
    
    # --- INVÁLIDOS POR SER PALABRAS RESERVADAS (Keywords) ---
    "if",                   # Condicional
    "else",                 # Condicional
    "for",                  # Bucle
    "while",                # Bucle
    "class",                # Definición de clase
    "def",                  # Definición de función
    "import",               # Importación
    "None",                 # Valor nulo
    "True",                 # Booleano
    "async",                # Programación asíncrona
    "await"                 # Programación asíncrona
]

# Patrón de validación (ASCII estándar)
patron = r'^[a-zA-Z_][a-zA-Z0-9_]*$'

print(f"{'VARIABLE':<15} | {'¿ES VÁLIDA?'}")
print("-" * 30)

for palabra in test_words:
    # Comprobamos las dos condiciones
    cumple_formato = bool(re.match(patron, palabra))
    es_reservada = keyword.iskeyword(palabra)
    
    # Es válida solo si cumple formato y NO es reservada
    if cumple_formato and not es_reservada:
        resultado = "✅ Válida"
    else:
        resultado = "❌ Inválida"
    
    print(f"{palabra:<15} | {resultado}")