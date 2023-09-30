import React, { useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const isLoading = useSelector<AppStoreType, boolean>(newState => newState.loading.isLoading)
    
    // const Loading = useSelector<AppStoreType, boolean>(newState => newState.loading.isLoading)
    const dispatch = useDispatch();
    
    const timerIdRef = useRef<number>(0)

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
        // const action = loadingAC(true);
        // dispatch(action);
        
        // // setTimeout
        // if (isLoading === true) {
            
        //     setTimeout(() => {
        //         const action = loadingAC(false);
        //         dispatch(action);
        //       }, 1500)
        // }
        


        ////2 примера выбрать один
        if (!isLoading) {
            dispatch(loadingAC(true))

            clearTimeout(timerIdRef.current)

            timerIdRef.current = window.setTimeout(() => {
                dispatch(loadingAC(false))
            }, 1500)
        }
        
        if (!isLoading) {
            dispatch(loadingAC(true))
            const timeoutId = setTimeout(() => {
                dispatch(loadingAC(false))
            }, 3000)
    
            return () => {
                clearTimeout(timeoutId)
            }
        }

    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
