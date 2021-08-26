import express from 'express';
import { generateId } from './generate.js';
const port = 8888;
const foo = generateId({ length: 10, type: 'distinguishable' }, { format: 'AKA_PROD_ID' });
console.log(foo);
const app = express();
app.post('/product/id', (req, res) => { res.send(foo) });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});