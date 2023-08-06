import React, {useState, useEffect} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)


    const start = () => {
        const id = +setInterval(()=>{
            setDate(new Date())
        }, 1000)
        setTimerId(id)
        
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    }

    const stop = () => {
        
        if(timerId){
            clearInterval(timerId);
            setTimerId(undefined);
        }
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }
    
    let formatterHMS = new Intl.DateTimeFormat("ru", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    const stringTime = formatterHMS.format(date) || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    
    let formatterDMY = new Intl.DateTimeFormat("ru", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    const stringDate = formatterDMY.format(date) || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    let formatterDay = new Intl.DateTimeFormat("en-US", {
        weekday: "long"
      });
    const stringDay = formatterDay.format(date) || <br/> // пишут студенты
    
    let formatterMonth = new Intl.DateTimeFormat("en-US", {
        month: "long"
      });
    const stringMonth = formatterMonth.format(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-date'}>{stringDate}</span>,{' '}
                            <span id={'hw9-month'}>{stringMonth}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={(timerId != undefined) ? true : false}// задизэйблить если таймер запущен, как только запускается таймер он получает timerId
                    onClick={start}  
                > 
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={(timerId === undefined) ? true : false}  // задизэйблить если таймер не запущен,как только запускается таймер он получает timerId
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}     

export default Clock
