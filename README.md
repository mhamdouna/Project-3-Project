# Project-3-Project
Cryptocurrency Visualisations 


Proposal 

Group 6
Team members:
Myrna Deseo
Mohammed Hamdouna
Rasika Senadheera

Cryptocurrencies Historical Prices
(Kaggle)
https://www.kaggle.com/datasets/odins0n/top-50-cryptocurrency-historical-prices

There are three CSV files used to extract, transform and load data.
The dataset contains all historical daily prices (open, high, low, close) for the three cryptocurrency we are using.  Price history is available on a daily basis from the launch of for the three cryptocurrency types.

	Bitcoin
	Ethereum
	Tether

Following are the columns in CSV files:

- SNo:      Serial Number
- Date:     Date of observation
- Price:    Price on the given day (Also the closing price for that day)
- Open:     Opening price on the given day
- High:     Highest price on the given day
- Low:      Lowest price on the given day
- Volume:   Volume of transactions on the given day
- Change%:  Percentage Change from the previous day

From the three data sets we are going to:
1.	Visualise the daily price trend from each currency
2.	Determine which currency is stronger or weaker based on a weekly, monthly and annual basis
3.	Use the visualized data to determine if an investor would have gained profit between two time points

Project 3 file folder contains the following:

   - "data_etl.ipynb" - extract, transform and load data;
   - "app.py" - Python file to import flask, which launches "index.html";
   - "templates" folder - contains "index.html";  and 
   - "static" folder - contains two folders:
      1. "Data" folder - csv files;
      2. "js" folder - "app.js" file.

The csv files were tranformed and merged using Pandas.
Flask API will launch the website by running "app.py" that will call the file "index.html" through the render_template command. 
The website content was created using d3.js, plotly for the graphs and the javascript file "app.js." 

