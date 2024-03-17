import { useSelector } from 'react-redux';

import { ContactsItem } from 'components';
import { getContacts, getError, getFilter, getIsLoading } from 'store/selectors';

export const ContactsList = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsToShow = contacts.filter(({ name }) => name.toLowerCase().includes(filter));

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !error && (
        <ul>
          {contactsToShow.map(({ name, phone, id }) => {
            return <ContactsItem key={id} id={id} name={name} phone={phone} />;
          })}
        </ul>
      )}
      {error && <div>Something went wrong!</div>}
    </>
  );
};
