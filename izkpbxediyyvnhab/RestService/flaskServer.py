import json
from flask import Flask, request, jsonify

from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm, form
from flask_cors import CORS
from kafka import KafkaProducer

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'

CORS(app)
bootstrap = Bootstrap(app)
moment = Moment(app)

@app.route('/llm', methods=['GET', 'POST'])
def query_records():
    record = json.loads(request.data)
    producer = KafkaProducer(bootstrap_servers='10.20.1.201:9092')
    producer.send('test', request.data)
    producer.flush()
    print("hello")
    print(record)
    return "hello"

app.run(host='0.0.0.0')



