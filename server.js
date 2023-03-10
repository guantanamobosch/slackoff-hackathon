const express = require('express');
const app = express();

const employeesController = require('./controllers/employees.js');
const employersController = require('./controllers/employers.js');


// look in views for renders
app.set('view engine', 'ejs');

app.use(express.static('public'));

// basic home route - welcome page?
app.get('/', (req, res) => {
    res.render('login')
})

// routing to the controllers for employees and employers
app.use('/employees', employeesController);
app.use('/employers', employersController);

app.get('/*', (req, res) => {
    res.render('404');
})



app.listen(4000, () => {
    console.log('I am listening on port 4000');
})