export const getContacts = ({ contacts }) => contacts.items;
export const getError = ({ contacts }) => contacts.error;
export const getIsLoading = ({ contacts }) => contacts.isLoading;

export const getFilter = ({ filter }) => filter.value;
