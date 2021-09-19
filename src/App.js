import ContactsList from './components/ContactsList/ContactsList';
import AddContacts from './components/AddContacts/AddContacts';
import Filter from './components/Filter/Filter';
import Title from './components/Title/Title';
import PropTypes from 'prop-types';

export default function App() {
  return (
    <>
      <h1>Телефонная книга</h1>
      <Title title={'Добавить контакт'} />
      <AddContacts />
      <Filter />
      <Title title={'Список контактов'} />
      <ContactsList />
    </>
  );
}
App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
