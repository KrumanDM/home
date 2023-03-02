import React from 'react'
import s from './FriendMessage.module.css'

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

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src="https://sun9-12.userapi.com/impg/XeCpZ7CJ09s0Q509YFb23f4oC328B_Ka0_X7PQ/B0Td5417uS0.jpg?size=192x192&quality=95&sign=a377b1f413d33f47a3067b33e29741e5&type=album"
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <b>Ivan</b>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <a>Hello, how are you, what did you do yesterday?</a>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <div><h3>9:00</h3></div>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
