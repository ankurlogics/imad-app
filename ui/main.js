//Counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick =function()
{
//Make a request to the counter endpoint

//capture the response and stroe it in a variable

//Render the variable in the correct span
counter= counter+1
var span = document.getElementById('count');
span.innerHTML=counter.toString();
};





/*console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML='New value';
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight, 1);
  img.style.marginLeft = '100px';  
};*/