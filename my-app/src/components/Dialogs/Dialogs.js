import React from 'react';
import { NavLink } from 'react-router-dom';
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
  let dialogsData = [
    { id: 1, name: 'Sash' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Sergey' },
    { id: 4, name: 'Dan' },
    { id: 5, name: 'Anton' },
    { id: 6, name: 'Andrew' },
  ];

  let DialogsElements = dialogsData.map((el) => {
    return <DialogItems name={el.name} id={el.id} />;
  });

  let messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Ok' },
    { id: 3, message: 'Yes' },
    { id: 4, message: 'No' },
    { id: 5, message: 'How are you' },
    { id: 6, message: 'Hello' },
  ];
  let messagesElements = messagesData.map((el) => {
    return <Message massage={el.message} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{DialogsElements}</div>

      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
