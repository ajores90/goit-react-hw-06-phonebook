import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/ContactSlice';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  InputContainer,
  ButtonContainer,
} from './Form.styled';

const Form = () => {
  const [state, setState] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.phoneBook);

  const handleChange = event => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} already exists in the contact book.`);
    } else {
      dispatch(addContact(contact));
    }

    event.target.reset();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <StyledLabel htmlFor={nameId}>
          Name
          <StyledInput
            onChange={handleChange}
            type="text"
            name="name"
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel htmlFor={numberId}>
          Number
          <StyledInput
            onChange={handleChange}
            type="tel"
            name="number"
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>
      </InputContainer>
      <ButtonContainer>
        <StyledButton type="submit">Add contact</StyledButton>
      </ButtonContainer>
    </StyledForm>
  );
};

export default Form;
