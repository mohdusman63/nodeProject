const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', './template');
const mongoose = require('mongoose')

// var tableModel = require('../Schema/InventorySchema')
var tableModel = require('../SchemaAtt')

app.use(bodyParser.urlencoded({ extended: true }))
var getData = tableModel.find();
// var ascOrder = tableModel.find().sort({ firstname: 1 })
var aggratee = tableModel.aggregate([{ $match: { firstname: 'usman' } }, { $group: { _id: "$firstname", total: { $sum: '$money' } } }])
    // var ascOrder = tableModel.find({}, { firstname: 1 })
console.log('getData is ' + getData)
app.get('/', (req, res) => {
    getData.exec((err, data) => {

            if (err) throw err;
            // console.log(data)
            res.send('hiii')

        })
        // ascOrder.exec((err, data) => {

    //     if (err) throw err;
    //     console.log('sorted data is ' + data)


    // })
    aggratee.exec((err, data) => {

        if (err) throw err;
        console.log('aggra data is ' + data)
        data.forEach(element => {
            console.log(element)
        });


    })

})

app.listen(3000)