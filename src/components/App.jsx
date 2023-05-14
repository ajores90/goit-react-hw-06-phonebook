import { Form, ContactsList, Filter, Title } from './index';

const App = () => {
  return (
    <div>
      <Title title="Phonebook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
