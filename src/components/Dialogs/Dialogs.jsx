import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let newSendMessage = React.createRef()

    let newMessage = () => {
        let text = newSendMessage.current.value;
        alert(text)
    }

    let onMessageChange = () => {
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea onChange={onMessageChange} ref={newSendMessage} value={props.dialogsPage.newMessageText}/>
                <div>
                    <button onClick={newMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;