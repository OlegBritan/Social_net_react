import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
const Dialog = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={classes.dialog}>{props.massage}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogPersons}>
        <Dialog name="Sash" id="1" />
        <Dialog name="Sveta" id="2" />
        <Dialog name="Sergey" id="3" />
        <Dialog name="Dan" id="4" />
        <Dialog name="Anton" id="5" />
        <Dialog name="Andrey" id="6" />
      </div>

      <div className={classes.messages}>
        <Message massage="Hi" />
        <Message massage="Ok" />
        <Message massage="Yes" />
        <Message massage="No" />
        <Message massage="How are you ?" />
        <Message massage="Hello" />
      </div>
    </div>
  );
};

export default Dialogs;




