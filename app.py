import sqlite3
import smtplib
from email.mime.text import MIMEText

# Conexión a la base de datos
conn = sqlite3.connect('escuela.db', check_same_thread=False)
cursor = conn.cursor()

# Crear tablas si no existen
cursor.execute('''
    CREATE TABLE IF NOT EXISTS niveles_educativos (
        id_nivel INTEGER PRIMARY KEY,
        nombre_nivel TEXT UNIQUE
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS grados (
        id_grado INTEGER PRIMARY KEY,
        nombre_grado TEXT UNIQUE
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS alumnos (
        id_alumno INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        direccion TEXT,
        telefono TEXT,
        correo_electronico TEXT UNIQUE,
        nivel_educativo INTEGER NOT NULL,
        grado INTEGER NOT NULL,
        FOREIGN KEY (nivel_educativo) REFERENCES niveles_educativos(id_nivel),
        FOREIGN KEY (grado) REFERENCES grados(id_grado)
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS inscripciones (
        id_inscripcion INTEGER PRIMARY KEY AUTOINCREMENT,
        id_alumno INTEGER NOT NULL,
        fecha_inscripcion DATE NOT NULL,
        año_academico INTEGER NOT NULL,
        FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno)
    )
''')

# Insertar datos iniciales si no existen
niveles = [
    ('Inicial/Jardín',),
    ('Preescolar',),
    ('Básica 1-9',)
]
cursor.executemany("INSERT OR IGNORE INTO niveles_educativos (nombre_nivel) VALUES (?)", niveles)

grados = [
    ('Jardín',), ('Preescolar',), ('1',), ('2',), ('3',),
    ('4',), ('5',), ('6',), ('7',), ('8',), ('9',)
]
cursor.executemany("INSERT OR IGNORE INTO grados (nombre_grado) VALUES (?)", grados)

conn.commit()

# Función para registrar un nuevo alumno
def registrar_alumno():
    try:
        nombre = input("Ingrese el nombre del alumno: ")
        apellido = input("Ingrese el apellido del alumno: ")
        fecha_nacimiento = input("Ingrese la fecha de nacimiento del alumno (AAAA-MM-DD): ")
        direccion = input("Ingrese la dirección del alumno: ")
        telefono = input("Ingrese el teléfono del alumno: ")
        correo_electronico = input("Ingrese el correo electrónico del alumno: ")
        nivel_educativo = int(input("Ingrese el nivel educativo del alumno (1-3): "))
        grado = int(input("Ingrese el grado del alumno (1-9): "))

        cursor.execute('''
            INSERT INTO alumnos (
                nombre, apellido, fecha_nacimiento, direccion, telefono, correo_electronico, nivel_educativo, grado
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', (nombre, apellido, fecha_nacimiento, direccion, telefono, correo_electronico, nivel_educativo, grado))
        
        conn.commit()
        print("Alumno registrado con éxito.")
        
        # Obtener los datos del alumno recién registrado
        alumno = cursor.execute('SELECT * FROM alumnos WHERE correo_electronico = ?', (correo_electronico,)).fetchone()
        enviar_correo(alumno)

    except sqlite3.Error as e:
        print(f"Error al registrar el alumno: {e}")
    except Exception as ex:
        print(f"Error inesperado: {ex}")

# Función para enviar datos por correo electrónico
def enviar_correo(alumno):
    try:
        correo_remitente = "mathiasenzlerhp@gmail.com"
        contraseña = "tembo01"  #contraseña que hay que cambiar despues jajaja
        correo_destinatario = "tu_correo@gmail.com"
        asunto = "Nuevo alumno registrado"
        cuerpo = f"""
        Nombre: {alumno[1]}
        Apellido: {alumno[2]}
        Fecha de nacimiento: {alumno[3]}
        Dirección: {alumno[4]}
        Teléfono: {alumno[5]}
        Correo electrónico: {alumno[6]}
        Nivel educativo: {alumno[7]}
        Grado: {alumno[8]}
        """

        msg = MIMEText(cuerpo)
        msg['Subject'] = asunto
        msg['From'] = correo_remitente
        msg['To'] = correo_destinatario

        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(correo_remitente, contraseña)
            server.sendmail(correo_remitente, correo_destinatario, msg.as_string())
        print("Correo enviado con éxito.")
    except Exception as e:
        print(f"Error al enviar el correo: {e}")

# Ejecutar función principal
if __name__ == "__main__":
    print("Sistema de Registro de Alumnos")
    while True:
        print("\n1. Registrar alumno\n2. Salir")
        opcion = input("Seleccione una opción: ")
        if opcion == "1":
            registrar_alumno()
        elif opcion == "2":
            break
        else:
            print("Opción no válida. Intente de nuevo.")
