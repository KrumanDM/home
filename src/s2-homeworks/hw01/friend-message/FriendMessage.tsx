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
                    src="https://sun9-13.userapi.com/impg/nnpHrfDRM9d7QV-uqizF4d88WDrJK1f3z0J0ig/DwexDKfALTY.jpg?size=749x681&quality=95&sign=44ea026a328a18d763e2a4594ea5c272&type=album"
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <div><h1>Dmitry</h1></div>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <div><h1>Hello Guys</h1></div>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <div><h3>23:00</h3></div>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
