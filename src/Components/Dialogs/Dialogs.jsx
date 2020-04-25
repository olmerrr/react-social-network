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

  let dialogsData = [
    {id: 1,name: 'Дима'},
    {id: 2,name: 'Тома'},
    {id: 3,name: 'Юлия'},
    {id: 4,name: 'Вася'},
    {id: 5,name: 'Мария'}
  ];

  let messagesData = [
    {id: 1,message: "Привет, куда пропал?"},
    {id: 2,message: "Пошли  в кино?"},
    {id: 3,message: "цштвф ыгзук"},
    {id: 4,message: "Скинь реферат"},
    {id: 5,message: "Что с Юлей?"}
  ];

 

  return (
    <div className={DialogsStyle.dialogsWrapper}>
      <div className={DialogsStyle.namesWrapper}>
        <div className={DialogsStyle.namesTitle}>Names</div>
        <ul>
          <li>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          </li>
          <li>
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

          </li>
          <li>
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />

          </li>
          <li>
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />

          </li>
          <li>
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />

          </li>
        </ul>
      </div>
      <div className={DialogsStyle.messagesWrapper}>
        <div className={DialogsStyle.messagesTitle}>Messages</div>
        <ul>
          <li><Messages message = {messagesData[0].message} id = {messagesData[0].id} /></li>
          <li><Messages message = {messagesData[1].message} id = {messagesData[1].id} /></li>
          <li><Messages message = {messagesData[2].message} id = {messagesData[2].id} /></li>
          <li><Messages message = {messagesData[4].message} id = {messagesData[4].id} /></li>
          <li><Messages message = {messagesData[3].message} id = {messagesData[3].id} /></li>
 
        </ul>
      </div>
    </div>
  )
}
export default Dialogs;