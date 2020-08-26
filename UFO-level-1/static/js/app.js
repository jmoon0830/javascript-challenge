// from data.js
var tableData = data;
// YOUR CODE HERE!
var button = d3.select("#filter-btn");

// change handler that filters based on input date
function handleChange () {
    var tbody = d3.select("tbody");
    tbody.html("");
    var inputElement = d3.select("input");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
    filteredData.forEach(addData);
};
// adds data to the table
function addData (ufo) {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        });
};

button.on("click", handleChange);