import express from 'express';

const app = express();

app.get('/', (req, res)=>{
  res.send('<h2>Hello lokis ;)</h2>');
});

app.get('/about', (req, res)=>{
  res.send('<h2>Lokis quieres saber más?</h2>');
})

const port = process.env.PORT || 4700;

app.listen(port);
console.log(`server on port ${port}`);