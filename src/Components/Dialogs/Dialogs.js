import React from 'react';
import DialogsStyle from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={DialogsStyle.dialog_wrapper}>
      <div className = {DialogsStyle.dialogs_main_color}>Hello Dialogs Component</div>
    </div>
  )
}
export default Dialogs;