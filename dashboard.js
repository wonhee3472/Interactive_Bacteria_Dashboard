function initialPage() {
    // Grabbing a reference to the dropdown select element
    var selector = d3.select('#selDataset');

    // Using the list of sample names to populate the select options
    d3.json('samples.json').then((data) => {
        console.log(data);

        var sampleNames = data.names;
        
        sampleNames.forEach((sample) => {
            selector
                .append('option')
                .text(sample)
                .property('value', sample);
        });
        
        // Using the first sample from the list to build the inital plots
        var firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);
    });
}

// Calling the function to initialize the dashboard 
initialPage();

function optionChanged(newSample) {
    // Fetching new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
}

// Demographics Panel
function buildMetadata(sample) {
    d3.json('samples.json').then((data) => {
        var metadata = data.metadata;
        // Filtering the data for the object with the desired sample number
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        // Using d3 to select the panel with id of '#sample-metadata'
        var PANEL = d3.select('#sample-metadata');

        // Using .html("") to clear any existing metadata
        PANEL.html("");
        
        // Using 'Object.entries' to add each key and value pair to the panel
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append('h6').text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

// Creating a buildCharts function
function buildCharts(sample) {
    // Using d3.json to load and retrieve the samples.json file
    d3.json('samples.json').then((data) => {
        // Creating a variable that holds the samples array
        var samples = data.samples;
        // Creating a variable that filters the samples for the object with the desired sample number
        var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        // Creating a variable that holds the first sample in the array
        var result = resultArray[0];

        // Creating variables thathold the otu_ids, otu_labels, and sample_values
        var ids = result.otu_ids;
        var labels = result.otu_labels.slice(0,10).reverse();
        var values = result.sample_values.slice(0,10).reverse();
        var bubbleLabels = result.otu_labels;
        var bubbleValues = result.sample_values;
        
        // Creating the yticks for the bar chart
        // by getting the top 10 otu_ids and map them in a descending order
        // This makes the otu_ids with the least amount of bacteria plotted last
        var yticks = ids.map(sampleObj => 'OTU ' + sampleObj).slice(0,10).reverse();

        console.log(yticks)

        // Creating the trace for the bar chart
        var barData = [{
            x: values,
            y: yticks,
            type: 'bar',
            orientation: 'h',
            text:labels
        }];

        // Creating the layout for the bar chart
        var barLayout = {
            title: 'Top 10 Bacteria Cultures Found'
        };

        // Using Plotly to plot the data with the layout
        Plotly.newPlot('bar', barData, barLayout);

        // Create a bubble chart
        var bubbleData = [{
            x: ids,
            y: bubbleValues,
            text: bubbleLabels,
            mode: 'markers',
            marker: {
                size: bubbleValues,
                color: bubbleValues,
                colorscale: "Portland"
            }
        }];

        var bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            xaxis: {title: 'OTU ID'},
            yaxis: {title: 'Sample Volume'},
            automargin: true,
            hovermode: 'closest'
        };

        Plotly.newPlot('bubble', bubbleData, bubbleLayout)

        // Creating a Gauge Chart
        var metadata = data.metadata;
        var gaugeArray = metadata.filter(metaObj => metaObj.id == sample);

        var gaugeResult = gaugeArray[0];

        var wfreqs = gaugeResult.wfreq;

        var gaugeData = [{
            value: wfreqs,
            type: "indicator",
            mode: "gauge+number",
            title: {text: "<b> Belly Button Washing Frequency </b> <br></br> Scrubs Per Week"},
            gauge: {
                axis: {range: [null, 10], dtick:'2'},
                bar: {color:"black"},
                steps:[
                    {range: [0, 2], color: "red"},
                    {range: [2, 4], color: "orange"},
                    {range: [4, 6], color: "yellow"},
                    {range: [6, 8], color: "lightgreen"},
                    {range: [8, 10], color: "green"}
                ],
                dtick: 2
            }
        }];

        var gaugeLayout = {
            automargin: true
        };

        Plotly.newPlot('gauge', gaugeData, gaugeLayout)
    });
}