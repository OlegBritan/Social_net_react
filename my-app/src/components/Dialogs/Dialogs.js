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
  

  let DialogsElements = props.state.dialogsData.map((el) => {
    return <DialogItems name={el.name} id={el.id} />;
  });

  
  let messagesElements = props.state.messagesData.map((el) => {
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
