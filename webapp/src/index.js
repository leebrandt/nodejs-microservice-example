const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3000
const catalogController = require('./controllers/catalog-controller')

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/catalog', (req,res)=>{
  catalogController.getAllItems()
    .then(response => res.status(200).render('catalog', { items: response.data }))
    .catch(err => res.status(500).send(err));
});

app.get('/product/:id', (req,res)=>{
  catalogController.getItemDetails(req.params.id)
    .then(response => res.status(200).render('product', { product: response.data }))
    .catch(err => res.status(500).send(err));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
