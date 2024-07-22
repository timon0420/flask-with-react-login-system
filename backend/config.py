from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'my secret key'
app.config["JWT_SECRET_KEY"] = "super-secret"
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app)
jwt = JWTManager(app)