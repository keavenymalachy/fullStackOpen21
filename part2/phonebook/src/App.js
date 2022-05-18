import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/personsmodule'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const checkName = persons.filter((person) => person.name === newName)
    const existingPerson = checkName[0]

    if (checkName.length === 1) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        //const existingPerson = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
        const changedPerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
            //console.log("Map testing: ", notes.map(note => note.id !== id ? note : response.data))
          }).catch(error => {
            alert(
              `the person was already deleted from server`
            )
            //setNotes(notes.filter(n => n.id !== id))
          })

      }
    } else {
      console.log('Name check: ', checkName);

      event.preventDefault()
      console.log('button clicked', event.target)

      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
          setNewName('')
          setNewNumber('')
        })


    }
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)
    //console.log("New filter: ", newFilter);
    //console.log('Filter: ', {persons.filter(person => person === newFilter)})
    const regex = new RegExp(newFilter, 'i')
    const filterResult = persons.filter(person => person.name.match(regex))
    console.log("Filter result: ", filterResult)
    setPersons(filterResult)
  }

  const deleteAPerson = id => {
    //console.log(`Delete ${id}`)

    if (window.confirm("Are you sure you want to delete this person?")) {
      personService
        .deleteAPerson(id)
        .then(returnedPersons => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={newFilter} onChange={handleFilterChange} />

      <h2>Add a new person</h2>

      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons persons={persons} deletePerson={deleteAPerson} />
    </div>
  )
}

export default App