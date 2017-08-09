//counter code
var button = document.getElementById('counter');
button.onclick = function()
	{
	   //	Make a request to the counter endpoint
	   var request = new XMLHttpRequest();
	   //Capture the response and store it in a variable
	   request.onreadystatechange = function()
	   	   {
		      if(request.readyState === XMLHttpRequest.DONE)
			{
			   //Take some action
			   if(request.status===200)
			      {
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			      }
			}
			//Not done yet
		   };
		   //make the request
		   request.open('GET','http://ankurlogics.imad.hasura-app.io/counter',true);
		   request.send(null);
	};
//submit name
var nameInput = document.getElementById('name') ;
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
  //make a request to the server and send the name
  //capture a list of name and render it as list
  var names = ['name1','name2','name3'];
};









/*//Counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick =function()
{
//Make a request to the counter endpoint
var request = new XMLHttpRequest();
//capture the response and stroe it in a variable

//Render the variable in the correct span
counter= counter+1
var span = document.getElementById('count');
span.innerHTML=counter.toString();
};*/





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