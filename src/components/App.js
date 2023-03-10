import { StyledContainer } from './App.styled';
import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const phonebookListStringified = JSON.stringify(contacts);
    window.localStorage.setItem('phonebook-list', phonebookListStringified);
  }, [contacts]);

  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledContainer>
  );
};
