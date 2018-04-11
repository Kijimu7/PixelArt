
// Select color input
console.log($("#colorPicker").val());
// Select size input
console.log($("#inputHeight").val());
console.log($("#inputWeight").val());
// Submit button
$("input[type='submit']").on("click", function(event){

event.preventDefault();
  console.log("LISTEN!");
    const height = $("#inputHeight").val();
    const width = $("#inputWeight").val();

    $("#pixelCanvas").empty();
    makeGrid(height,width);
});
// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {

  // for number up to Height
  for (let i = 0; i<height; i++){

  // create a row
  $("#pixelCanvas").append($("<tr></tr>"));
  // for number up to Width
  for (let j = 0; j<width; j++){
  // add a td to row
  console.log("td"+j);
  $("tr").last().append($("<td></td>"));
  }
  }

// color sqare when clicked
$("#pixelCanvas").on("click", "td", function(){

  //change background color of event target's
  $(this).css("background-color", $("#colorPicker").val());

  console.log(height,width);
});
// Your code goes here!

}
