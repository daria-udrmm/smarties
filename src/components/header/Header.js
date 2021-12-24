import { useState } from 'react'
import logo from '../../resources/img/logo.svg'
import close from '../../resources/img/close.svg'
import styles from './Header.module.scss'

const Header = () => {

    const [styleMenu, setStyleMenu] = useState('none');

    const menuClick = () =>{
        setStyleMenu('block');
    }

    return(
        <header className={styles.header}>
            <div className="container">
                <div className={styleMenu === 'block' ? `${styles.header__active} ${styles.header__inner}` : ` ${styles.header__inner}`}>
                    <div className={styles.header__logo}>
                        <a href='/'>
                            <img src={logo}></img>
                        </a>
                    </div>
                    <div className={styles.header__info} style={window.innerWidth < 992 ? {display: styleMenu} : null}>
                        <nav>
                            <ul className={styles.header__menu}>
                                <li className={styles.header__item}>
                                    <a href='/'>Launch details</a>
                                </li>
                                <li className={styles.header__item}>
                                    <a href='/'>Whitelist</a>
                                </li>
                                <li className={styles.header__item}>
                                    <a href='/'>Launch details</a>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles.header__btn}>
                            <a href='/'>Launch app</a>
                        </div>
                    </div>
                    <div className={styles.header__click}>
                        <div className={styles.header__lines}
                        style={styleMenu === 'block' ? {display : 'none'} : {display : 'block'}} 
                        onClick={menuClick}
                        >
                            <div className={styles.header__line}></div>
                            <div className={styles.header__line}></div>
                            <div className={styles.header__line}></div>
                        </div>
                        <div className={styles.header__close}
                        style={{display : styleMenu}}
                        onClick={() => setStyleMenu('none')}
                        >
                            <img src={close}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;