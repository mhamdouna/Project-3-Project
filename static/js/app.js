// Fetch JSON data from URL and console log it

// let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

let bitcoin_file = "../../Data/Bitcoin.json"

let ethereum_file = "../../Data/Ethereum.json"

let tether_file = "../../Data/Tether.json"

d3.json(bitcoin_file).then(function(data) {
  console.log("***data***")
  console.log(data);
  // console.log(data.Price);
});

d3.json(ethereum_file).then(function(data) {
  console.log("***data***")
  console.log(data);
});

d3.json(tether_file).then(function(data) {
  console.log("***data***")
  console.log(data);
});

let selector = d3.select("#selDataset");

d3.json(bitcoin_file).then(function(data) {
  console.log("data")
  console.log(data);

  let priceBitcoin = data.Price
  console.log("price");
  console.log(priceBitcoin);

  let volumeBitcoin = data.Volume
  console.log("volume");
  console.log(volumeBitcoin);

  let percent_changeBitcoin = data.Percent_change
  console.log("percent_change");
  console.log(percent_changeBitcoin);

  let currencyBitcoin = data.Currency_Type
  console.log("currencyBitcoin");
  console.log(currencyBitcoin);
  currencyBitcoin.forEach((coin) => {
    selector.append("option").text(coin).property("value", coin);
    });

  cryptoData(currencyBitcoin);

  buildCharts(currencyBitcoin);

});

function cryptoData(name) {
    d3.json(bitcoin_file).then(function(data) {
      let priceBitcoin = data.Price
      console.log("price");
      console.log(priceBitcoin);

      let volumeBitcoin = data.Volume
      console.log("volume");
      console.log(volumeBitcoin);

      let percent_changeBitcoin = data.Percent_change
      console.log("percent_change");
      console.log(percent_changeBitcoin);

      // resultArray = priceBitcoin.filter(sampleObj => sampleObj.id == name);
      // console.log("resultArray");
      // console.log(resultArray);
      
      // result = resultArray[0];
      
      let PANEL = d3.select("#sample-metadata");
              
      PANEL.html("");
      
      Object.entries(priceBitcoin).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    })

};

//         resultArray = metadata.filter(sampleObj => sampleObj.id == name);
//         console.log("resultArray");
//         console.log(resultArray);

//         result = resultArray[0];

//         let PANEL = d3.select("#sample-metadata");
        
//         PANEL.html("");

//         Object.entries(result).forEach(([key, value]) => {
//             PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//           });
      
//     })
// }

function buildCharts(name) {
    d3.json(bitcoin_file).then(function(data) {
      let priceBitcoin = data.Price
      console.log("price");
      console.log(priceBitcoin);

      let volumeBitcoin = data.Volume
      console.log("volume");
      console.log(volumeBitcoin);

      let percent_changeBitcoin = data.Percent_change
      console.log("percent_change");
      console.log(percent_changeBitcoin);

      let dateBitcoin = data.Date
      console.log("date");
      console.log(dateBitcoin);

      plotData = [
      {
      y: priceBitcoin.map(priceBitcoin => `Price ${priceBitcoin}`),
      x: dateBitcoin,
      // text: otu_labels.slice(0, 10).reverse(),
      type: "scatter",
      // orientation: "h",
      }
      ];
        
      plotLayout = {
      title: "Price at Different Timepoints",
      // margin: { t: 30, l: 150 }
      };
              
      Plotly.newPlot("myDiv", plotData, plotLayout);
    });
  }
        
        
      
      // samples = data.samples
      //   console.log("samples");
      //   console.log(samples);

      //   resultArray = samples.filter(sampleObj => sampleObj.id == name);
      //   console.log("resultArray");
      //   console.log(resultArray);

      //   result = resultArray[0];

      //   otu_ids = result.otu_ids;
      //   otu_labels = result.otu_labels;
      //   sample_values = result.sample_values;

//         // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//         // Use sample_values as the values for the bar chart.
//         // Use otu_ids as the labels for the bar chart.
//         // Use otu_labels as the hovertext for the chart.
        
//         barData = [
//             {
//               y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
//               x: sample_values.slice(0, 10).reverse(),
//               text: otu_labels.slice(0, 10).reverse(),
//               type: "bar",
//               orientation: "h",
//             }
//           ];

//           barLayout = {
//             title: "Top 10 Bacteria Cultures Found",
//             margin: { t: 30, l: 150 }
//           };
      
//           Plotly.newPlot("bar", barData, barLayout);

//           //   Create a bubble chart that displays each sample.
            
//           bubbleLayout = {
//             title: "Bacteria Cultures Per Sample",
//             margin: { t: 0 },
//             hovermode: "closest",
//             xaxis: { title: "OTU ID" },
//             margin: { t: 30 }
//           };

//           //   Use otu_ids for the x values.
//           //   Use sample_values for the y values.
//           //   Use sample_values for the marker size.
//           //   Use otu_ids for the marker colors.
//           //   Use otu_labels for the text values

//           bubbleData = [
//             {
//               x: otu_ids,
//               y: sample_values,
//               text: otu_labels,
//               mode: "markers",
//               marker: {
//                 size: sample_values,
//                 color: otu_ids,
//                 colorscale: "Earth"
//               }
//             }
//           ];
      
//           Plotly.newPlot("bubble", bubbleData, bubbleLayout);
      
//     });
// }

// // Update all the plots when a new sample is selected.

function optionChanged(priceBitcoin) {
    // buildCharts(sampleID);
    cryptoData(priceBitcoin);
  }
