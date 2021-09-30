// from data.js
var tableData = data;


var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {  
    // console.log(dataRow);
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            // console.log(val);
        var cell = row.append("td");
        cell.text(val);
        });
    });
}

// Date Search
var filters = {};
console.log(filters);
function updateFilters() {
    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var filterID = changedElement.attr("id");


    if(elementValue) {
        filters[filterID] = elementValue;
    }
    else {
        delete filters[filterID];
    }

filterTable();
}

function filterTable() {
    let filteredData = tableData;

    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    buildTable(filteredData);
}

d3.selectAll(".filter").on("change", updateFilters);


buildTable(tableData);




// previous attempt:

// var filter = d3.select("#filters");
// var button = d3.select("#filter-btn");

// filter.on("submit", runEnter);
// button.on("click", runEnter);

// function runEnter() {
//     d3.event.preventDefault();
//     var inputElement = d3.select("#input");
//     var inputValue = inputElement.property("value");

    //console.log(inputValue);

//     var filteredData = tableData.filter(data => data.datetime === inputValue || 
//         data.city === inputValue || 
//         data.state === inputValue || 
//         data.country === inputValue || 
//         data.shape === inputValue);
//     console.log(filteredData);

//     // Display filtered results
//     filteredData.forEach((searchFilter) => {
//         console.log(searchFilter);
//         var row = tbody.append("tr");
//         Object.entries(searchFilter).forEach(([key, value]) => {
//             console.log(key,value);
//             var cell = row.append("td");
//             cell.text(value);

//     list.append(tbody).text(filteredData);
//         });
//     });
// };

