import dialogsReducer from "./dialogs-reducer";
import mainContentReducer from "./mainContent-reducer";

let store = {
  _callSubscriber() {
    console.log('State Changed');
  },
  _state: {
    dialogsPage: {
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
    },
    mainContentPage: {
      postData: [
        {
          id: 1,
          messages: 'Hi ,how are you?',
          likesCount: '3',
          dislikesCount: '1',
        },
        {
          id: 2,
          messages: 'My first post',
          likesCount: '2',
          dislikesCount: '4',
        },
        {
          id: 3,
          messages: 'My second post',
          likesCount: '4',
          dislikesCount: '4',
        },
        { id: 4, messages: 'My post', likesCount: '8', dislikesCount: '9' },
      ],
      newPostText: 'Input text',
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.mainContentPage = mainContentReducer(this._state.mainContentPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);

  },
};




export default store;
