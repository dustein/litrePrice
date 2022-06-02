import express from 'express';

const app = express();
app.use(express.json())
interface literPrice {
   price: number;
   size: number
}

app.post("/calc", (req, res) => {
   const {price, size} = req.body;

   const result = (price/size*1000).toFixed(2)

   return res.status(200).send({price: result})
})

app.listen(3030, () => console.log("Servidor ativo 3030"))