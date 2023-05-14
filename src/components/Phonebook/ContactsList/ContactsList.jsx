import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/ContactSlice';
import {
  ContactsContainer,
  ContactItem,
  DeleteButton,
} from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.phoneBook);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ContactsContainer>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <DeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsContainer>
  );
};

export default ContactsList;
