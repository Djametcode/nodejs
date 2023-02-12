const { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: people
    })
}

const addPeople = (req, res) => {
    const {name} = req.body;

    if (!name) {
        res.status(400).json({
            succes: false,
            msg: 'please provide name'
        })
    }
    res.status(200).send({
        succes: true,
        data: [...people, {
            name
        }]
    })
    console.log(name)
}

const updatePeople = (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((item) => item.id === Number(id))

    if(!person) {
        res.status(404).send({
            status: 'fail',
            message: `theres no people with id ${id}`
        })
    }
    const newPeople = people.map((persons) => {
        if(persons.id === Number(id)) {
            persons.name = name
        }
        return persons
    })
    res.status(200).send({
        statuss: 'success',
        data: newPeople
    })
}

const deletePeople = (req, res) => {
    const {id} = req.params
    const person = people.find((item) => item.id === Number(id));

    if (!person) {
       return res.status(404).send({
        status: 'fails',
        msg: 'theres no item with that id'
       })
    }
    const newPerson = people.filter((item) => item.id !== Number(id))
    return res.status(200).send({
        status: 'success',
        data: newPerson
    })
}

module.exports = {
    getPeople,
    addPeople,
    updatePeople,
    deletePeople
}