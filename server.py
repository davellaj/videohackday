from flask import Flask, render_template
from opentok import OpenTok
import sqlite3

api_key = '45793262'
api_secret = '4a05b4f33c5ae53d5ef10e3c6b38e6432de2d828'

app = Flask(__name__)
opentok = OpenTok(api_key, api_secret)
session = opentok.create_session()


conn = sqlite3.connect('dmp.db')

@app.route("/")
def index():
    key = api_key
    session_id = session.session_id
    token = opentok.generate_token(session_id)
    return render_template('index.html', api_key=key, session_id=session_id, token=token)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)