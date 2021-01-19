// from data.js
var tableData = data;

// YOUR CODE HERE!

// define tbody
tbody = d3.select('tbody')


// add data to table rows

tableData.forEach((city) => {

    var row = tbody.append('tr');

    Object.entries(city).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});


// add filter inputs and labels

filterList = d3.select('ul')

filters = ['City', 'State Code', 'Country', 'Shape']
inputsArray = []

filters.forEach((criteria) => {

    var listItem = filterList.append('li');
        listItem.attr("class", "filter list-group-item");
        
    var label = listItem.append('label');
        label.text(`Enter a ${criteria}`);
        
    var input = listItem.append('input');
        input.attr("class", "form-control");
        input.attr("type", "text");
        input.attr("id", "filterInput");
        inputsArray.push(input.value)

});



// filter function

function filterFunction() {

    var inputsArray = []
    var inputs = document.getElementsByClassName("form-control");
    
    for (var x = 0, len = inputs.length; x < len; x++) {
        input = inputs[x].value;
        inputsArray.push(input);
    };

    console.log(inputsArray);  

    var table, tr, td, i;
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");
    
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");

        rowArrayData = [];
        
        for (var j = 0; j < td.length; j++) {
        cell = tr[i].getElementsByTagName("td")[j].innerText;

        //console.log(cell);

        rowArrayData.push(cell);

        //console.log(rowArrayData);
                
            if (inputsArray[j] == "") {
                rowArrayData[j] = ""
            }
            else {
                rowArrayData[j] = rowArrayData[j]
            };
    
            console.log(rowArrayData)

            //if (inputsArray == rowArrayData) {
        
            if (inputsArray[0] == rowArrayData[0] && 
                inputsArray[1] == rowArrayData[1] &&
                inputsArray[2] == rowArrayData[2] &&
                inputsArray[3] == rowArrayData[3] &&
                inputsArray[4] == rowArrayData[4]) {
                    
                    tr[i].style.display = ""
                 }
            else {
                tr[i].style.display = "none"
            };    
        };
    }; 
};
