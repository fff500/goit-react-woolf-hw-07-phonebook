import { useDispatch } from 'react-redux';

import { deleteContact } from 'store/operations';

import style from './ContactsItem.module.css';

export const ContactsItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.item}>
      <span>
        {name}: {phone}
      </span>
      <button
        className={style.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
