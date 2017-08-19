    

/*//counter code
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
	};*/


//submit username /password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
  //make a request to the server and send the name
  
  var request = new XMLHttpRequest();
     request.onreadystatechange = function()
	   	   {
		      if(request.readyState === XMLHttpRequest.DONE)
			{
			   //Take some action
			   if(request.status===200)
			      {
			          console.log('user logged in ');
			          alert('Logged in successfully');
			/*
			 //capture a list of name and render it as list
  var names = request.responseText;
  names= JSON.parse(names);
  var list = '';
  for (var i = 0; i<names.length;i++)
  {
      list += '<li>'+names[i]+'</li>';
  }
  var ul= document.getElementById('namelist');
  ul.innerHTML=list;
			  */       
			  }
			  else if (request.status===403){
			      alert('USERNAME/PASSWORD is incorrect');
			  }
			  else if (request.status===500){
			      alert('SOMETHING WENT WRONG ON THE SERVER');
			  }
			}
			//Not done yet
		   };
		   //make the request
		   //submit name
var username = document.getElementById('username').value ;
var id = document.getElementById('id').value;
var password = document.getElementById('password').value ;
console.log(username);
console.log(password);
/*var name = nameInput.value;*/
		   request.open('POST','http://ankurlogics.imad.hasura-app.io/create-user',true);
		   
		   request.setRequestHeader('Content-Type','application/json');
		   request.send(JSON.stringify({id:id,username:username,password:password}));
  
  
  
  
  
  
 
};







/*

//Counter code
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
};
*/




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