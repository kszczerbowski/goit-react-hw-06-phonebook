import React from 'react';
import { StyledDeleteButton } from './ContactListElement.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListElement = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li>
      <span id="name">{name}</span>: {number}
      <StyledDeleteButton
        onClick={() => {
          onDeleteContact(id);
        }}
        type="button"
      >
        Delete
      </StyledDeleteButton>
    </li>
  );
};
ContactListElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
