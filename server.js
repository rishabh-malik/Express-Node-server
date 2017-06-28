const express = require('express')
const hbs = require('hbs')
//to create an app
const app = express()

// partials are partial templates common to templates so that code is in one place
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

//helper is a func which can be used in templates
hbs.registerHelper('getCurrentYear',()=>{
 return new Date().getFullYear()
});

//creating a handlebar helper with arguments
hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
})

app.get('/', function (req, res) {
 res.render('home.hbs',{
     pageTitle:'Home Page',
    welcomeMessage:'Welcome to my website'
 });
})

app.get('/about',function(req,res){
    //rendering a page
    // enjecting values into template dynamically
    res.render('about.hbs',{
        pageTitle:'About Page'
    });
})

// to bind the application to listen to ports
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})