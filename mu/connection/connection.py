import firebase_admin
from firebase_admin import credentials

# Cargo el certificado de mi proyecto firebase
firebase_sdk = credentials.Certificate('data.json')
#Hacemos referencia a la base de datos en tiempo real de firebasse
firebase_admin.initialize_app(firebase_sdk,{'databaseURL':'https://app-python-44c9b-default-rtdb.firebaseio.com/'})