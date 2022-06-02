const mongoose = require('mongoose')

const password = process.argv[2]

const personName = process.argv[3]
const personNumber = process.argv[4]

//const url = `mongodb+srv://malachyk100:${password}@firstdb.ltk7f1c.mongodb.net/?retryWrites=true&w=majority`
const url = `mongodb+srv://malachyk100:${password}@FirstDB.ltk7f1c.mongodb.net/phonebookApp?retryWrites=true&w=majority`


mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {

    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })

} else {

    const person = new Person({
        name: personName,
        number: personNumber,
    })

    person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
    })
}