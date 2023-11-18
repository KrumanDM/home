import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [disabledButton, setDisabledButton] = useState<boolean | null | undefined | string>('initial');

    const send = (x?: boolean | null) => () => {
        
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setDisabledButton(x);

        axios
            .post(url, {success: x})
            .then((res) => {
                console.log(res)
                setCode('Код 200!')
                setImage(success200)
                // дописать
                setText(res.data.errorText)
                setInfo(res.data.info)
                setDisabledButton('initial');
            })
            .catch((e) => {
                // дописать   
                console.log(e)    
                const status = e.response.status
                setText(e.response?.data?.errorText ||e.message)
                setInfo(e.response?.data?.info || e.name)
                //то есть к нам в любом случае придёт этот инфо или текст
                //не важно что в свиче какой код, только будет меняться путь в котором достаём

                //const {status, data} = e.response => setText(data?....)
                switch(status) {
                    case 500:  
                      setCode('500')
                      setImage(error500)
                      setDisabledButton('initial');
                      break;                 
                    case 400: 
                      setCode('400')
                      setImage(error400)
                      setDisabledButton('initial');
                      break;                    
                    default:
                        setCode('Error')
                        setImage(errorUnknown)                   
                        setDisabledButton('initial');
                  }
            })  
    }





    
    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={send(true)}
                        xType={'secondary'}
                        // дописать
                        disabled={disabledButton === true}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={send(false)}
                        xType={'secondary'}
                        disabled={disabledButton === false}

                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={send(undefined)}
                        xType={'secondary'}
                        // дописать
                        disabled={disabledButton === undefined}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={send(null)} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                        // дописать
                        disabled={disabledButton === null}
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {image && <img src={image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {code}
                        </div>
                        <div id={'hw13-text'} className={s.text}>
                            {text}
                        </div>
                        <div id={'hw13-info'} className={s.info}>
                            {info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13




  

 
