import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {

    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}
            
            <aside className={sidebarClass}>
        

                <nav id={'hw5-menu'} className={s.nav}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        
                        className= {({isActive}) => (isActive ? s.active : '')}
                        onClick={handleClose}
                    >
                        Pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                       
                        // className={...} // делает студент
                        className= {({isActive}) => (isActive ? s.active : '')}
                        onClick={handleClose}
                    >
                        Junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                     
                        className= {({isActive}) => (isActive ? s.active : '')}
                        onClick={handleClose}
                    >
                        Junior Plus
                    </NavLink>
                </nav>
            </aside>
        </>
    )
}
