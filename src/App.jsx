import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactsForm, ContactsList, ContactsFilter } from './components';
import { fetchContacts } from 'store/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactsList />
    </>
  )
};
