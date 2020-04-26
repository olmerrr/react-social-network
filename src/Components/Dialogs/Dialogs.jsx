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

let MessageItem = (props) =>{
  return (
      <div className={DialogsStyle.dialog}>{props.message}</div>
  )
}
let Dialogs = () => {
  let dialogs = [
    {id: 1,name: 'Дима'},
    {id: 2,name: 'Тома'},
    {id: 3,name: 'Юлия'},
    {id: 4,name: 'Вася'},
    {id: 5,name: 'Мария'}
  ];
  
  let messages = [
    {id: 1,message: "Привет, куда пропал?"},
    {id: 2,message: "Пошли  в кино?"},
    {id: 3,message: "цштвф ыгзук"},
    {id: 4,message: "Скинь реферат"},
    {id: 5,message: "Что с Юлей?"}
  ];

  let dialogsElements = dialogs.map( (dialog) =>
    <DialogItem name = {dialog.name} id = {dialog.id} />
  ); 

  let messagesElements = messages.map( (message) =>
    <MessageItem message = {message.message} id = {message.id} />
  ); 
  
 

  return (
    <div className={DialogsStyle.dialogsWrapper}>
      <div className={DialogsStyle.namesWrapper}>
        <div className={DialogsStyle.namesTitle}>Names</div>
        {dialogsElements}
      </div>
      <div className={DialogsStyle.messagesWrapper}>
        <div className={DialogsStyle.messagesTitle}>Messages</div>
        {messagesElements}       
      </div>
    </div>
  )
}
export default Dialogs;