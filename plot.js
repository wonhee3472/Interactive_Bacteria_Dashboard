// var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// var topSevenCities = sortedCities.slice(0,7)

// var topSevenCityNames = topSevenCities.map(city => city.City);

// var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

// var trace = {
//     x: topSevenCityNames,
//     y: topSevenCityGrowths,
//     type: 'bar'
// }

// var data = [trace]

// var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: 'City'},
//     yaxis: {title: 'Population Growth, 2016-2017'}
// }

// Plotly.newPlot('bar-plot', data, layout)

// Extract only the wfreq (weekly belly button washing frequency)
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// Sort the wfreq array in descending order
// d3.json('samples.json').then(function(data){
//     wfreq_sorted = data.metadata.map(person => person.wfreq).sort((a,b) => a - b).reverse();
//     console.log(wfreq_sorted)
// });

// Delete null values from the wfreq_sorted
// d3.json('samples.json').then(function(data){
//     wfreq_sorted = data.metadata.map(person => person.wfreq).sort((a,b) => a - b).reverse();
//     filteredWfreq = wfreq_sorted.filter(element => element != null);
//     console.log(filteredWfreq);
// })

// Print all the metadata of the first person in the samples.json() dataset
// d3.json('samples.json').then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ":" + value);});
// });

