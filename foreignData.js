const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.set('view engine', 'ejs');
app.set('views', './template');
app.use(bodyParser.urlencoded({ extended: true }))
const EmpSchema = require('./SchemaAtt');
const userSchema = require('./ScmaAtt2')
const { error } = require('console');

app.get('/', (req, res) => {
    res.render('Attendence')
})
app.post('/', (req, res) => {
    var insertData = new EmpSchema({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        })
        //console.log(insertData)

    insertData.save((err, res1) => {
        if (err) throw error

        // let data_id = res1._id;
        else {
            var Data2 = new userSchema({
                    user_id: res1._id,
                    firstname: req.body.firstname,
                    email: req.body.email
                })
                // console.log('data 2 is ' + Data2)
            Data2.save((err, res1) => {
                res.send('2 nd data added')
            })
        }


    })

})


app.listen(3000)
