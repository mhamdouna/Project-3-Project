# Imports and setup
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc

from flask import Flask, jsonify
import datetime as dt

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///crypto_currency.sql")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the table
Currency = Base.classes.crypto_currency
print(Currency)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

#################################################
# Weclome route
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"Bitcoin /api/v1.0/bitcoin<br/>"
        f"Ethereum: /api/v1.0/ethereum<br/>"
        f"Tether: /api/v1.0/tether<br/>"
    )

#################################################
# Bitcoin route
#################################################

@app.route("/api/v1.0/bitcoin")
def bitcoin():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all bitcoin values values"""

    # Query all "Bitcoin" data from DB
    bitcoin_data = session.query(Currency).filter(Currency.Currency_Type == "Bitcoin").all()
    print(bitcoin_data[0])
    session.close()

# Jsonify list
    return jsonify(bitcoin_data)


#################################################
# Ethereum route
#################################################

@app.route("/api/v1.0/ethereum")
def Ethereum():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all Ethereum data"""
    # Query all "Ethereum" data from DB

    ethereum_data = session.query(Currency).filter(Currency.Currency_Type == "Ethereum").all()

    session.close()

# Jsonify list
    return jsonify(ethereum_data)

# #################################################
# # Tether route
# #################################################

@app.route("/api/v1.0/tether")
def Tether():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all Tether data"""

    # Query all "Tether" data from DB
    tether_data = session.query(Currency).filter(Currency.Currency_Type == "Tether").all()

    session.close()

# Jsonify list
    return jsonify(tether_data)

# Debugger initiation
if __name__ == '__main__':
    app.run(debug=True)
