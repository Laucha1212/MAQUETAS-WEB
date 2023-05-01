edad = int(input("ingrese su edad: "))

if edad == 18:
    print("tenes 18. podes estar en secundario o terminarlo")
elif edad < 18 and edad < 13:
    print("sos menor de edad y estas en primaria")
elif edad < 18 and edad > 13:
    print("sos menor de edad y estas en secundaria")
elif edad > 18 and edad < 60:
    print("estas en edad de trabajo.")
elif edad > 60:
    print("estas jubilado/a")
else: print("error.")
