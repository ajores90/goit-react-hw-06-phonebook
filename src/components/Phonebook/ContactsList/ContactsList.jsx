import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactsContainer,
  ContactItem,
  DeleteButton,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  const handleDelete = id => {
    onDeleteContact(id);
  };

  return (
    <ContactsContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
        </ContactItem>
      ))}
    </ContactsContainer>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
