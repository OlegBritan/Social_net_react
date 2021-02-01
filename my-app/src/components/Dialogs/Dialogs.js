import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import classes from './Dialogs.module.css';

const DialogItems = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path} activeClassName={classes.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={classes.dialog}>{props.massage}</div>;
};

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let DialogsElements = state.dialogsData.map((el) => {
    return <DialogItems name={el.name} id={el.id} />;
  });
  let messagesElements = state.messagesData.map((el) => {
    return <Message massage={el.message} />;
  });
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <div>{DialogsElements}</div>
        
      </div>

      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
