import React from 'react';
import DialogsStyle from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={DialogsStyle.dialogsWrapper}>
        <div className = {DialogsStyle.namesWrapper}>  
          <div className={DialogsStyle.namesTitle}>Names</div>
          <ul>
            <li className={DialogsStyle.dialog}>Дима Куликов</li>
            <li className={DialogsStyle.dialog + ' ' + DialogsStyle.active}>Тома Муратова</li>
            <li className={DialogsStyle.dialog}>Юлия Чеплянкая</li>
            <li className={DialogsStyle.dialog}>Вася Пупкин</li>
            <li className={DialogsStyle.dialog}>Мария Филатенко</li>
          </ul>
        </div>
       
        <div className = {DialogsStyle.messagesWrapper}>  
          <div className={DialogsStyle.messagesTitle}>Messages</div>
          <ul>
            <li className={DialogsStyle.dialog}>Привет, куда пропал?</li>
            <li className={DialogsStyle.dialog}>Пошли  в кино</li>
            <li className={DialogsStyle.dialog}>цштвф ыгзук</li>
            <li className={DialogsStyle.dialog}>Скинь реферат</li>
            <li className={DialogsStyle.dialog}>Что с Юлей?</li>
          </ul>
    </div>
    </div>
  )
}
export default Dialogs;