import express from 'express';
import { generateId } from './generate.js';
import bodyParser from 'body-parser';
const port = 8888;

const app = express();
app.use(bodyParser.json());
app.post('/product/id', (req, res) => {
    console.log(`req.body: ${JSON.stringify(req.body)}`)
    const format = req.body.format;
    const formatOptions = { format };
    const length = req.body.generationSchema && req.body.generationSchema == 'FOO' ? 10 : req.body.generationSchema && req.body.generationSchema == 'BAR' ? 5 : -1;
    const type = req.body.generationSchema && req.body.generationSchema == 'FOO' ? 'distinguishable' : req.body.generationSchema && req.body.generationSchema == 'BAR' ? 'numeric' : -1;
    const generationOptions = {
        batchQuantity: req.body.batchQuantity || 0,
        length,
        type
    }
    const foo = generateId(generationOptions, formatOptions);
    foo.creationDateTime = new Date();
    console.log(foo);
    res.send(foo)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});