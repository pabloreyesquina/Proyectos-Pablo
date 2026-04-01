import json

countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo, Democratic Republic of the',
  'Congo, Republic of the',
  'Costa Rica',
  "Côte d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor-Leste)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

#Itera los países y extrae aquellos que contienen la cadena land.
listaLand = list()
for pais in countries: #pais es string
    if "land" in pais.lower():
        listaLand.append(pais)
        print (pais, end=", ")


#Dada la lista fruits = ['banana', 'orange', 'mango', 'lemon'], invierte los elementos usando un bucle.

fruits = ['banana', 'orange', 'mango', 'lemon']
listaInvertida = []
for i in range(len(fruits)-1,-1,-1):
    listaInvertida.append(fruits[i])

print(listaInvertida)


""" Ve a la carpeta data y usa el archivo countries-data.py.
¿Cuántos idiomas distintos hay en los datos?
¿Cuál es el idioma usado por más países?
Encuentra los diez países con mayor población. """

#Como se lee un archivo .txt externo con python

#Para leer linea por linea (mejor para archivos grandes)

""" with open("./ficheros/countries-data.txt", 'r', encoding='utf-8') as archivo:
    for linea in archivo:
        # .strip() elimina el salto de línea (\n) al final de cada frase
        print(linea.strip())
 """
    
# Leer todas la lineas y guardarlas en una lista:


with open('./ficheros/countries-data.json', 'r', encoding='utf-8') as f:
    countries_data = json.load(f)

# --- PREGUNTA 1: ¿Cuántos idiomas distintos hay? ---
todos_los_idiomas = []
for pais in countries_data:
    for idioma in pais['languages']:
        todos_los_idiomas.append(idioma)

# El set() elimina los duplicados de la lista
idiomas_unicos = set(todos_los_idiomas)
print(f"1. Hay {len(idiomas_unicos)} idiomas distintos.")

# --- PREGUNTA 2: ¿Cuál es el idioma usado por más países? ---
#conteo_idiomas = {}
""" for idioma in todos_los_idiomas:
    # Si el idioma ya está en el diccionario, sumamos 1, si no, empezamos en 1
    conteo_idiomas[idioma] = conteo_idiomas.get(idioma, 0) + 1

# Buscamos el idioma que tiene el valor máximo de repeticiones
idioma_top = max(conteo_idiomas, key=conteo_idiomas.get)
print(f"2. El idioma más usado es el {idioma_top} ({conteo_idiomas[idioma_top]} países).") """

#Otra forma:

conteo_idiomas = {}
for idioma in todos_los_idiomas:
    if idioma in conteo_idiomas:
        # Si ya lo tenemos apuntado, le sumamos 1 al contador
        conteo_idiomas[idioma] += 1
    else:
        # Si es la primera vez que aparece, lo anotamos con el número 1
        conteo_idiomas[idioma] = 1


print(conteo_idiomas)
# Para encontrar el máximo sin usar el 'key' de max(), podríamos hacer esto:
idioma_top = ""
max_veces = 0

# Iteramos directamente sobre el diccionario (esto nos da las CLAVES)
for idioma in conteo_idiomas:
    # Usamos la clave 'idioma' para acceder al valor en el diccionario
    cantidad = conteo_idiomas[idioma]
    
    if cantidad > max_veces:
        max_veces = cantidad
        idioma_top = idioma

print(f"El ganador es {idioma_top} con {max_veces} países.")




# --- PREGUNTA 3: Diez países con mayor población ---
# Ordenamos la lista de diccionarios por la clave 'population' de mayor a menor
paises_ordenados = sorted(countries_data, key=lambda x: x['population'], reverse=True)

# Tomamos los primeros 10 con el slicing [:10]
top_10 = paises_ordenados[:10]

print("\n3. Los 10 países con más población:")
for i, pais in enumerate(top_10, 1):
    print(f"   {i}. {pais['name']} - {pais['population']:,} habitantes")  