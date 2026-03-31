"""
supongamos que me dan una hora, ejemplo: 14:04 y una cantidad de minutos:
dar la hora que supone sumar a la hora inicial la cantidad de minutos.
Tanto hora inicial como minutos se piden al usuario.
"""
# Paso 1: entender qué es una hora en el contexto: "14"+":"+"04"
# Paso 1.1: como del usuario por defecto se toma str: se requiere separar
# directamente el "14" del ":" del "04", guardarlos en variables
# que pueden nombrarse: hora, afijo, minuto.
# Paso 2: un número de minutos tomado del usuario se promociona a int
# y se guarda en variable: minutosAdicionales
# Paso 3: se promociona minuto del Paso 1.1 a int, y hora también a int.
# Paso 4: se suma minutos a minutosAdicionales y se divide entre 60, el 
# resultado es el número de horas a sumar a la nueva variable: horasSumar, 
# el resto va a una nueva variable: minutosFinales
# Paso 5: Se suma a horas del Paso 3 horasSumar y se divide entre 24, de a
# ahí se toma el resto y eso es horaFinal.
# Paso 6: Se forma por promoción a str horaFinal+":"+minutosFinales
horaUsuario = input("Deme una hora: ") # "14:04"
minutosAdicionales = int(input("Deme unos minutos adicionales: "))
horaUsuario = horaUsuario.split(":") # [14,04]
print("hora usuario: ", horaUsuario[0], "minuto usuario: ", horaUsuario[1])
#quitar ceros posicionales en la hora:
horaUsuario[0] = int(horaUsuario[0])
horaUsuario[1] = int(horaUsuario[1])
print("hora usuario: ", horaUsuario[0], "minuto usuario: ", horaUsuario[1])
# se suma minutos a minutosAdicionales y el resultado se divide entre 60 para
# dar las horas enteras que luego se sumarán a las horas de la hora inicial
horasASumar = (horaUsuario[1] + minutosAdicionales)//60
#print("--- ",horasASumar)
horaUsuario[0] = horaUsuario[0] + horasASumar 
#print("--- ",horaUsuario[0])
# el resto, también conocido como módulo o residuo, 
# son los minutos que quedarán a la derecha de ":"
horaUsuario[1] = (horaUsuario[1] + minutosAdicionales)%60
#print("--- ",horaUsuario[1])
print("hora usuario nueva: ", horaUsuario[0], "minuto usuario nuevo: ", horaUsuario[1])
# PASO a DÍAS: el residuo a 24 de las horas que haya hasta ahora: si pasa de 23 se aplica
horaUsuario[0] = horaUsuario[0]%24
print("hora usuario nueva: ", horaUsuario[0], "minuto usuario nuevo: ", horaUsuario[1])
# reagrupamos elementos para dar un formato correcto: "hh:mm"
horaUsuarioFinal= str(horaUsuario[0]) +":"+ str(horaUsuario[1])
print(horaUsuarioFinal)
