const express = require('express')
const request = require('request-promise-native');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));

app.get('/patients', async function(req, res) {
   const result = await request.get('http://localhost:3000/api/v1/patients');
   const patients = JSON.parse(result).data;
   res.render('patients', { patients });
});

app.listen(3001, function() {
  console.log('🤓 Backend Started!');
});