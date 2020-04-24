import React from 'react';
import DialogsStyle from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={DialogsStyle.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Messages = (props) =>{
  return (
      <div className={DialogsStyle.dialog}>{props.message}</div>
  )
}
const Dialogs = () => {
  return (
    <div className={DialogsStyle.dialogsWrapper}>
      <div className={DialogsStyle.namesWrapper}>
        <div className={DialogsStyle.namesTitle}>Names</div>
        <ul>
          <li>
            <DialogItem name="Дима Куликов" id="1" />
          </li>
          <li>
            <DialogItem name="Тома Муратова" id="2" />
          </li>
          <li>
            <DialogItem name="Юлия Чеплянкая" id="3" />
          </li>
          <li>
            <DialogItem name="Вася Пупкин" id="4" />
          </li>
          <li>
            <DialogItem name="Мария Филатенко" id="5" />
          </li>
        </ul>
      </div>
      <div className={DialogsStyle.messagesWrapper}>
        <div className={DialogsStyle.messagesTitle}>Messages</div>
        <ul>
          <li><Messages message="Привет, куда пропал?" /></li>
          <li> <Messages message="Пошли  в кино?" /></li>
          <li><Messages message="цштвф ыгзук" /></li>
          <li><Messages message="Скинь реферат" /></li>
          <li><Messages message="Что с Юлей?" /></li>
        </ul>
      </div>
    </div>
  )
}
export default Dialogs;