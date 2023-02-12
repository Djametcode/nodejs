const express = require('express')
const cors = require('cors')
const { product, itemLatihan, people } = require('./data')
const peoples = require('./route/people')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/people', peoples)
app.use(express.static('./methods-public'))



// app.get('/', (req, res) => {
//     res.send('<h1>Go To Api </h1> <a href="/products/">Products</a>')
// })
// app.get('/products', (req, res) => {
//     const newProduct = product.map((item) => {
//         const {id, name, price} = item;
//         return {id, name, price}
//     })
//     res.status(200).json(newProduct)
// })
// app.get('/products/:productID', (req, res) => {
//     const { productID } = req.params;
//     const singleProduct = product.find((item) => item.id === Number(productID));
//     if (!singleProduct) {
//         res.status(404).send('Produk yang anda cari tidak ada')
//     }
//     res.json(singleProduct)
// })
// app.get('/products/:productID/review/:reviewID', (req, res) => {
//     console.log(req.params)
//     res.send('Hello world')
// })

// app.get('/api/v1/query', (req, res) => {
//     const { search, limit } = req.query;
//     let newItem = [...product]
    
//     if (search) {
//         newItem = newItem.filter((item) => {
//             return item.info.includes(search)
//         })
//     }
//     if (limit) {
//         newItem = newItem.slice(0, Number(limit))
//     }
//     if (newItem.length < 1 ) {
//         return res.status(200).json({
//             status: 'success',
//             data: []
//         })
//     }
//     return res.status(200).json(newItem)
// });

// app.get('/api/v1/:itemID', (req, res) => {
//     const {itemID} = req.params;

//     const item = [...product];
//     const itemKhusus = item.filter((items) => items.id === Number(itemID))
//     return res.status(200).json(itemKhusus)
// })
// app.get('/api/latihan/:latihanID', (req, res) => {
//     const { latihanID } = req.params;
//     const filters = itemLatihan.filter((item) => item.price === Number(latihanID))
//     return res.status(200).json(filters)
// })

// app.get('/logger', (req, res) => {
//     res.send("Logger main app")
// })
app.listen(port, () => {
    console.log(`server running at port 5000`)
})