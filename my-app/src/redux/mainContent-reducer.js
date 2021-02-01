const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
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
  newPostText: 'Input text'
}


const mainContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        messages: state.newPostText,
        likesCount: '8',
        dislikesCount: '9',
      };
      state.postData.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default mainContentReducer;
