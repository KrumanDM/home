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
                    src="https://sun9-50.userapi.com/impg/Xy1Cf5fIOwNdM-F9Rqh8Z7dBHB-9pB_-74JuhQ/hkiADB2TWTg.jpg?size=895x928&quality=96&sign=be02b0cbe185901a11b35f486b070bb3&type=album"
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                    <div><h1>Papich</h1></div>
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                    <div><h1>Hello Guys</h1></div>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
            <div><h3>23:00</h3></div>
                {/**/}
            </div>
        </div>
    )
}

export default Message
