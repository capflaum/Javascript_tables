// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((sightingEvent) => {
    console.log(sightingEvent);
    var row = tbody.append("tr");
    Object.entries(sightingEvent).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Date Search

var filter = d3.select("#filters");
var button = d3.select("#filter-btn");

filter.on("submit", runEnter);
button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");

    //console.log(inputValue);f

    var filteredData = tableData.filter(data => data.datetime === inputValue || 
                                        data.city === inputValue || 
                                        data.state === inputValue || 
                                        data.country === inputValue || 
                                        data.shape === inputValue);
    console.log(filteredData);

    // Display filtered results
    filteredData.forEach((searchFilter) => {
        console.log(searchFilter);
        var row = tbody.append("tr");
        Object.entries(searchFilter).forEach(([key, value]) => {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);

    list.append(tbody).text(filteredData);
        });
    });
};