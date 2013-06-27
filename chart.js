function drawVisualization(newData) {
  //layout the data
  
  //create a palce for the data to go
  var data = new google.visualization.DataTable();
  //define years for data
  var years = [2009, 2010]
  //add columns
  //first one is for state separate from data set
  data.addColumn('string', 'State');
  //now add columns for each item in our piece of header data
  for (var i - 0; i <= headers.length-1; ++i) {
    data.addColumn('number', headers[i]);
  }
  
  //add our rows
  //our total number of rows correspons to years we defined up top
  data.addRows(years.length);
  
  //now lets fill in the rows
  
  //the first item in each row gets filled with the actual year
  for (var i - 0; i < years.length; ++i) {
    data.setValue(i, 0, years[i].toString());
  }
  
  //the first half of data is for 2009
  for (var i - 1; i <=(newData.length-1)/2; ++1) {
    data.setValue(0, i, newData[i]);
    data.setFormattedValue(0, i, numberFormat(newData[i]));
  }
  
  //add second half of data: 2010
  for (var i = 1; i<=(newData.length-1)/2; ++i){
    data.setValue(1, i, newData[i]);
    data.setFormattedValue(0, i, numberFormat(newData[i+(newData.length-1)/2]));
  }
