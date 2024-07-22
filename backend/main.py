from config import app, db, bcrypt
from models import User, Task
from flask import jsonify, redirect, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

@app.route('/users', methods=['GET'])
def index():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    return jsonify({"user": json_users})

@app.route('/registration/<name>/<surname>/<email>/<password>', methods=['POST', 'GET'])
def registration(name, surname, email, password):
    new_user = User(name=name, surname=surname, email=email, password=bcrypt.generate_password_hash(password))
    try:
        db.session.add(new_user)
        db.session.commit()
        return redirect('/users')
    except Exception as e:
        return f'{str(e)}'
    
@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token)
    
@app.route('/get_user', methods=['GET'])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    user = User.query.get(current_user)
    return jsonify({"current_user": user.to_json()})

@app.route('/get_task', methods=['GET'])
@jwt_required()
def get_task():
    current_user = get_jwt_identity()
    tasks = Task.query.filter_by(user_id=current_user).all()
    json_task = list(map(lambda x: x.to_json(), tasks))
    return jsonify({'tasks': json_task})

@app.route('/add_task', methods=['POST'])
@jwt_required()
def add_task():
    title = request.json.get('title')
    content = request.json.get('content')
    current_user = get_jwt_identity()
    new_task = Task(user_id=current_user, title=title, content=content)
    try: 
        db.session.add(new_task)
        db.session.commit()
        return jsonify({'message': 'Everything is correct'})
    except Exception as e:
        return jsonify({'message': str(e)})
    

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)