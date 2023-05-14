import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form, ContactsList, Filter, Title } from './index';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
        { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
        { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
        { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (name, number, id) => {
    const isHaveContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isHaveContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id,
      name,
      number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const handleFilterChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const FilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  return (
    <div>
      <Title title="Phonebook" />
      <Form onSubmit={onAddContact} />
      <Title title="Contacts" />
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactsList
        contacts={FilteredContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
