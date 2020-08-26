// from data.js
var tableData = data;
// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var drop_down = d3.select("#filter-drop");
// initial table of first 10 objects
function init () {
    var tbody = d3.select("tbody");
    tbody.html("");
    for (var i = 0; i<10; i++) { 
        addData(tableData[i]);
    }
};
// change handler that filters based on drop down
function handleChange () {
    var tbody = d3.select("tbody");
    tbody.html("");
    var inputElement = d3.select("input");
    var inputValue = inputElement.property("value");
    var filter_select =  drop_down.property("value");
    if (filter_select === "date") {
        var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
        console.log(filteredData);
        filteredData.forEach(addData);
    }
    else if (filter_select === "state") {
        var filteredData = tableData.filter(ufo => ufo.state === inputValue);
        console.log(filteredData);
        filteredData.forEach(addData);
        var label = d3.select("#filter-label");
        label.text("Enter a state");
    }
    else if (filter_select === "city") {
        var filteredData = tableData.filter(ufo => ufo.city === inputValue);
        console.log(filteredData);
        filteredData.forEach(addData);
    }
    else if (filter_select === "country") {
        var filteredData = tableData.filter(ufo => ufo.country === inputValue);
        console.log(filteredData);
        filteredData.forEach(addData);
    }
    else if (filter_select === "shape") {
        var filteredData = tableData.filter(ufo => ufo.shape === inputValue);
        console.log(filteredData);
        filteredData.forEach(addData);
    }
};
// function adds the table values 
function addData (ufo) {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        });
};
// changes the filter statement based on filter selected
function labelChange () {
    var filter_select =  drop_down.property("value");
    if (filter_select === "date") {
        var label = d3.select("#filter-label");
        label.text("Enter a date");
    }
    else if (filter_select === "state") {
        var label = d3.select("#filter-label");
        label.text("Enter a state");
    }
    else if (filter_select === "city") {
        var label = d3.select("#filter-label");
        label.text("Enter a city");
    }
    else if (filter_select === "country") {
        var label = d3.select("#filter-label");
        label.text("Enter a country");
    }
    else if (filter_select === "shape") {
        var label = d3.select("#filter-label");
        label.text("Enter a shape");
    }
};
drop_down.on("change", labelChange);
button.on("click", handleChange);

init();