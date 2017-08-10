var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
            'article-one':  {   
                title: 'Article One | AnKur Pathak',
                heading:'Article One',
                date:' Sep 6 2017',
                content: 
                `<p> This is the content for my first article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>
                 <p> This is the content for my first article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>
                 <p> This is the content for my first article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>`
                    }, 
            'article-two': {   
                title: 'Article Two | AnKur Pathak',
                heading:'Article Two',
                date:' Sep 6 2017',
                content: 
                `<p> This is the content for my Second article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>
                 <p> This is the content for my second article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>
                 <p> This is the content for my second article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>`
                    },
            'article-three': {   
                title: 'Article Three | AnKur Pathak',
                heading:'Article Three',
                date:' Sep 6 2017',
                content: 
                `<p> This is the content for my Three article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>
                 <p> This is the content for my Three article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>
                 <p> This is the content for my Three article which is completely would be a dummy article and I don't want to go in a deep explanation. This will increase the readability of the code and this is the one of the most appealing content of the web page.
                 </p>`
                    }
};
function createTemplate(data){
var title= data.title;
var date=data.date;
var heading= data.heading;
var content= data.content;
var htmlTemplate=
                `
                <!doctype html>
<html>
    
     <head>
           <title>${title}</title>
           <meta name= "viewport" content= "width=device-width initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet"/>
     </head>
     <body>
         <div class="container">
         <div>
             <a href="/">Home</a>
         </div>
         <hr/>
         <h3>
             ${heading}
         </h3>
         <div> 
               ${date}
             </div>
             <div>
                ${content}
             </div>
            </div>
     </body>
    
</html>
                `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
    counter= counter+1;
  res.send(counter.toString());
});

app.get('/:articleNames', function (req, res) {
    // articleName== article-one
    //articles[articleName]=={}content object for article-one
    var articleName=req.params.articleNames;
  res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[]; 
app.get('/submit-name/', function (req, res) {
  //Get the name from the request
  var name = req.query.name;
  
  names.push(name);
  //JSON
  res.send(JSON.stringify(names));//TODO
  
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
