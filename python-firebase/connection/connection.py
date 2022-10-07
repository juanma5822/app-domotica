import firebase_admin
from firebase_admin import credentials

# Cargo el certificado de mi proyecto firebase
firebase_sdk = credentials.Certificate('connection/app-python-44c9b-firebase-adminsdk-fzq3o-2490222592.json')
#Hacemos referencia a la base de datos en tiempo real de firebasse
firebase_admin.initialize_app(firebase_sdk,{'databaseURL':'https://app-python-44c9b-default-rtdb.firebaseio.com/'})
