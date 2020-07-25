from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/drive")
def drive():
    return render_template("drive.html")

if __name__ == "__main__":
    app.run(debug=True)