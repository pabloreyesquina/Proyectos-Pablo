from functools import reduce
from datetime import datetime
from datetime import date
from datetime import timedelta


countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
names = ['Asabeneh', 'Lidiya', 'Ermias', 'Abraham']
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#Ejercicios: Básico
#Explica la diferencia entre map, filter y reduce.
#Explica la diferencia entre funciones de orden superior, closures y decoradores.
#Define la función que llama (ver ejemplo).
#Imprime cada país de la lista countries usando un bucle for.
#Imprime cada nombre de la lista names usando un bucle for.
#Imprime cada número de la lista numbers usando un bucle for.

list(map(print, countries))
list(map(print, names))
list(map(print, numbers))

#Usa map para convertir cada país en countries a mayúsculas y genera una nueva lista.
countries_upper = list(map(lambda x: x.upper(), countries))
print(countries_upper)
#Usa filter para filtrar países que contienen 'land'.
countries_land = list(filter(lambda x: "land" in x, countries))
print(countries_land)

def contiene_land(pais):
    if "land" in pais:
        return True
    else:
        return False

print(list(filter(contiene_land,countries)))

#Usa filter para filtrar países con exactamente seis caracteres.

def six_characters (pais):
    if len(pais) == 6:
        return True
    else:
        return False
print(list(filter(six_characters,countries)))

countries_six = list(filter(lambda x: len(x)==6,countries))
print(countries_six)

#Usa filter para filtrar países que comienzan con 'E'.
def begin_e (pais):
    return pais[0]=="E"
print(list(filter(begin_e,countries)))
        
#Encadena dos o más iteradores de lista (por ejemplo arr.map(callback).filter(callback).reduce(callback))

print(list(map(lambda x: x.upper(), filter(contiene_land,countries))))

#Declara una función get_string_lists que reciba una lista y devuelva una lista con solo los elementos de tipo cadena.

def get_string_lists (lista):
    return list(filter(lambda x: type(x)==str,lista))
datos_mixtos = [10, "Python", True, "Zaragoza", 3.14, "DAW", ["otra", "lista"]]
resultado = get_string_lists(datos_mixtos)
# Imprimimos para verificar
print(f"Original: {datos_mixtos}")
print(f"Solo strings: {resultado}")

def sumar (acumulador, actual):
    return acumulador + actual
total = reduce(sumar, numbers)
print(total)

#Usa reduce para concatenar todos los países en una oración: Estonia, Finland, Sweden, Denmark, Norway, and Iceland are north European countries.

print(reduce(lambda x,y:x + ", " + y,countries))



date_string = "5 December, 2019"
print("date_string =", date_string)
date_object = datetime.strptime(date_string, "%d %B, %Y")
print("date_object =", date_object)


finDeCurso = datetime(year=2026, month=6, day=19, hour=14, minute=30, second=0)
hoy = datetime.today()

tiempoDiasDiff = finDeCurso-hoy

semanas=tiempoDiasDiff/timedelta(weeks=1)    
print(semanas)

print(finDeCurso-hoy)


#Para hacer:

#Obtén el día, mes, año, hora, minuto y timestamp actuales desde el módulo datetime.




#Formatea la fecha actual con el formato: "%m/%d/%Y, %H:%M:%S"
#Hoy es 5 de diciembre de 2019. Convierte esa cadena de fecha a un objeto datetime.
#Calcula la diferencia entre ahora y el próximo año nuevo.
#Calcula la diferencia entre el 1 de enero de 1970 y ahora.
#Piensa: ¿para qué puedes usar el módulo datetime? Por ejemplo:
#Análisis de series temporales
#Obtener timestamps para eventos en una aplicación
#Añadir la fecha de publicación en un blog

try:
    name = input('Introduce tu nombre:')
    year_born = input('¿En qué año naciste?:')
    age = 2026 - int(year_born)
    print(f'Eres {name}. Tu edad es {age}.')
except TypeError:
    print('Se produjo un error de tipo (TypeError)')
except ValueError:
    print('Se produjo un ValueError')
except ZeroDivisionError:
    print('Se produjo una división por cero (ZeroDivisionError)')
else:
    print('Este bloque se ejecuta normalmente después de try')
finally:
    print('Este bloque siempre se ejecuta.')