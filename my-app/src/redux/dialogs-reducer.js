const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
  dialogsData: [
    { id: 1, name: 'Sash' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Sergey' },
    { id: 4, name: 'Dan' },
    { id: 5, name: 'Anton' },
    { id: 6, name: 'Andrew' },
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Ok' },
    { id: 3, message: 'Yes' },
    { id: 4, message: 'No' },
    { id: 5, message: 'How are you' },
    { id: 6, message: 'Hello' },
  ],
  newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
       state.newMessageBody = action.body;
       return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messagesData.push({ id: 6, message: body });
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
