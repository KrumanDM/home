import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: PropsType
}
type PropsType = {
    id: number

    user: PropsT 
    message: PropsTT
}
type PropsT = {
    avatar: string
    name: string
}
type PropsTT = {
    text: string
    time: string
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return ( 
        
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src={"https://sun9-12.userapi.com/impg/XeCpZ7CJ09s0Q509YFb23f4oC328B_Ka0_X7PQ/B0Td5417uS0.jpg?size=192x192&quality=95&sign=a377b1f413d33f47a3067b33e29741e5&type=album"}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        <b>Ivan</b>
                        
                        
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                    <a>Hello, she didn't do anything and rested all day, how are you?</a>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
            <div><h3>09:01</h3></div>
                {/**/}
            </div>
        </div>
    )
}

export default Message
