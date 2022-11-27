console.log("app.js")

// Set csv file path
let csvFile = "/static/Data/final_data.csv";

// Read in the data
d3.csv(csvFile).then(function(data){
    console.log(data);
});

function buildChart (sample) {
    d3.csv(csvFile).then((data) => {

        // Create empty lists to hold all dates and prices
        let PriceList = [];
        let dateList = [];

        // Loop through all rows to pupulate lists created above
        for (let i =0; i < data.length; i++) {
            let dataResult = data[i];

            // Populate dateList with dates from all rows
            dateList.push(dataResult.Date);

            // loop through different currency types found in csv file and populate priceList
            if (dataResult.Currency_Type == sample) {
                PriceList.push(parseFloat(dataResult.Price));
            } else if (dataResult.Currency_Type == sample) {
                PriceList.push(parseFloat(dataResult.Price));
            } else if (dataResult.Currency_Type == sample) {
                PriceList.push(parseFloat(dataResult.Price));
            }

        };


    // Define x & y values
        let yTicks = PriceList;
        let xValues = dateList;

    // Set up line chart
        let barChart = {
            y: yTicks,
            x: xValues,
            type: "scatter"
        };

    // Set up layout
        let layout = {
            title: "Crypto Currency Prices"
        };

    // Call Plotly to plot above chart
        Plotly.newPlot("line", [barChart], layout);


    });

};


// Function for the information box box

function infoBox (sample) {
    d3.csv(csvFile).then((data) => {
        // Create empty lists to hold prices, volumes, high prices, and low prices
        let PriceList = [];
        let VolumeList = [];
        let HighList = [];
        let LowList = [];

        // Loop through all rows to pupulate lists created above
        for (let i =0; i < data.length; i++) {
            let dataResult = data[i];
    
            // Loop through all rows of the csv file to populate lists created above
            if (dataResult.Currency_Type == sample) {
                PriceList.push(parseFloat(dataResult.Price))  & VolumeList.push(parseFloat(dataResult.Volume)) & HighList.push(parseFloat(dataResult.High)) & LowList.push(parseFloat(dataResult.Low));
            } else if (dataResult.Currency_Type == sample) {
                PriceList.push(parseFloat(dataResult.Price))  & VolumeList.push(parseFloat(dataResult.Volume)) & HighList.push(parseFloat(dataResult.High)) & LowList.push(parseFloat(dataResult.Low));
            } else if (dataResult.Currency_Type == sample) {
                PriceList.push(parseFloat(dataResult.Price))  & VolumeList.push(parseFloat(dataResult.Volume)) & HighList.push(parseFloat(dataResult.High)) & LowList.push(parseFloat(dataResult.Low));
            }
    
        };


        // Clear medadata
        d3.select("#sample-crypto").html("");

        // Find average price, volume, high, and low values with 0 decimals
        let averagePrice = d3.mean(PriceList).toFixed(0);
        let averageVolume = d3.mean(VolumeList).toFixed(0);
        let averageHigh = d3.mean(HighList).toFixed(0);
        let averageLow = d3.mean(LowList).toFixed(0);
    

        // Input information in info box under div "sample-crypto"
        d3.select("#sample-crypto").append("h5").text("Average Price: $" + averagePrice);
        d3.select("#sample-crypto").append("h5").text("Average High Price: $" + averageHigh);
        d3.select("#sample-crypto").append("h5").text("Average Low Price: $" + averageLow);
        d3.select("#sample-crypto").append("h5").text("Average Volume: " + averageVolume);

    });

};


// function that initializes the dashboard at start up
function initialize() {

    // access the dropdown selector from the index.html file
    let select = d3.select("#selDataset");

    // use d3.json in order to get the sample names and populate the drop-down selector
    d3.csv(csvFile).then((data) => {


        // Create empty lists to hold all types of currency
        let bitcoinList = [];
        let ethereumList = [];
        let tetherList = [];
    
        // Loop through all rows to pupulate lists created above
        for (let i =0; i < data.length; i++) {
            let dataResult = data[i];
    
            // Loop through all rows to populate list created above
            if (dataResult.Currency_Type == "Bitcoin") {
                bitcoinList.push(dataResult.Currency_Type);
            } else if (dataResult.Currency_Type == "Ethereum") {
                ethereumList.push(dataResult.Currency_Type);
            } else if (dataResult.Currency_Type == "Tether") {
                tetherList.push(dataResult.Currency_Type);
            }
    
        };

        // Create a list of the 3 different currency types
        let allLists = [bitcoinList[0], ethereumList[0], tetherList[0]];

        allLists.forEach((currency) => {
            select.append("option")
                .text(currency)
                .property("value", currency);
        });

        // when initialized, pass in the information for the first sample
        // call the function to build the initial info box
        infoBox(bitcoinList[0]);

        // call the function to build the initial bar chart
        buildChart(bitcoinList[0]);

    });

};
   

// function that updates the dashboard
function optionChanged(item)
{
     // call the function to build the info box
     infoBox(item);


// call the function to build the line chart
    buildChart(item);

};

// call the initialize function
initialize();