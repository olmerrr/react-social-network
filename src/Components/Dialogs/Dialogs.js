import React from 'react';
import DialogsStyle from './Dialogs.module.css';

import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={DialogsStyle.dialogsWrapper}>
      <div className={DialogsStyle.namesWrapper}>
        <div className={DialogsStyle.namesTitle}>Names</div>
        <ul>
          <li className={DialogsStyle.dialog}>
            <NavLink to='/dialogs/1'>Дима Куликов</NavLink>
            </li>
            <li className={DialogsStyle.dialog + ' ' + DialogsStyle.active}>
              <NavLink to='/dialogs/2'>Тома Муратова</NavLink>
            </li>
            <li className={DialogsStyle.dialog}>
            <NavLink to='/dialogs/3'>Юлия Чеплянкая</NavLink>
              </li>
            <li className={DialogsStyle.dialog}>
            <NavLink to='/dialogs/4'>Вася Пупкин</NavLink>
              </li>
            <li className={DialogsStyle.dialog}>
            <NavLink to='/dialogs/5'>Мария Филатенко</NavLink>
              </li>
          </ul>
        </div>

        <div className={DialogsStyle.messagesWrapper}>
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