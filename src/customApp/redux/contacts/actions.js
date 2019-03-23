const actions = {
  CONTACTS_FETCH_REQUEST: "CONTACTS_FETCH_REQUEST",
  CONTACTS_FETCH_SUCCESS: "CONTACTS_FETCH_DONE",
  CONTACTS_FETCH_ERROR: "CONTACTS_FETCH_ERROR",
  SET_HOVERED_CONTACT: "SET_HOVERED_CONTACT",
  getContacts: () => ({
    type: actions.CONTACTS_FETCH_REQUEST
  }),
  getContactsSuccess: (result, total_count, page) => ({
    type: actions.CONTACTS_FETCH_SUCCESS,
    result,
    total_count,
    page
  }),
  getContactsError: () => ({
    type: actions.CONTACTS_FETCH_ERROR
  }),
  setHoveredContact: contact => ({
    type: actions.SET_HOVERED_CONTACT,
    payload: contact
  })
};

export default actions;
