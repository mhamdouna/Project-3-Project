# Import and setup

from flask import Flask, render_template, redirect

# Create instance of flask app
app = Flask(__name__)

# Create route that renders index.html template

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
