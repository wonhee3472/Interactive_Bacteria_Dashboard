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