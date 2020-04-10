var feelArr = [
  'happy',
  'sad',
  'lonely',
  'love'
];
render(feelArr);
var newFeel = [];
var btnAdd = document.getElementById("btnAdd");
var input = document.getElementById("feel")
content.addEventListener("click",oneListClicked);
btnAdd.addEventListener("click",saveFeel);

function oneListClicked(event) {
  var button = event.target;
  var i = parseInt(button.dataset.id)
  feelArr.splice(i, 1);
  render(feelArr);
}

function saveFeel() {
   feelArr.push(input.value);
  render(feelArr);
  input.value="";
}

 
function render(feelArr) {
  var content = document.getElementById("content"); // truy xuat the <ul>
  var feeling = feelArr.map(function(x,i) {
      return "<li>" + x + "  <button data-id="+i+">delete</button></li>"; //return ket qua
  })
  return content.innerHTML = feeling.join('');   // inner feeling
}
  