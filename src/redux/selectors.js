import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter.filter;

export const getFilteredAndSortedContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts
      .filter(contact => {
        return contact.name?.toLowerCase().includes(filter.toLowerCase());
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  }
);
