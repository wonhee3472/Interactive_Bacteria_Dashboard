# Interactive_Bacteria_Dashboard
![](http://robdunnlab.com/wp-content/uploads/microbes-sem.jpg)

## Project Overview
Build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels

## JavaScript Skills
* Writing codes with `D3.json` library to load and retrieve a `.json` file

* Creating a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in the individual
  1. Used `sample_values` as the values for the bar chart
  2. Used `otu_ids` as the labels for the bar chart
  3. Ssed `otu_labels` as the hovertext for the bar chart

* Creating a bubble chart that displays each sample
  1. Used `otu_ids` for the x values for the marker colors
  2. Used `sample_values` for the y values and the marker size
  3. Used `otu_labels` for the text values

* Displaying the sample metadata (i.e., an individual's demographic information)

* Displaying each key-value pair from the metadata JSON object on the app

* Creating a gauge chart that shows the weekly washing frequency of the individual

## GitHub Page for the deployed app
https://wonhee3472.github.io/Interactive_Bacteria_Dashboard/
