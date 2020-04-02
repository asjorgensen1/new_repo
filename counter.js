function count() {
  var counter = 0;
  counter++;
  return function showCount() {
    var str = '<div>' + counter + '</div>';
    var outerElement = document.getElementById('counterElementOuter');
    outerElement.outerHTML(str);
  }
}

function main() {
  console.log("called");
  var countObj = new count();
  setTimeout(countObj.showCount, 1000);
}

