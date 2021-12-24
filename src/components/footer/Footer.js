import logo from '../../resources/img/logo.svg'
import discord from '../../resources/img/discord.svg'
import twitter from '../../resources/img/twitter.svg'
import medium from '../../resources/img/medium.svg'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className="container">
                <div className={styles.footer__inner}>
                    <div className={styles.footer__logo}>
                        <a href='/'>
                            <img src={logo}></img>
                        </a>
                    </div>
                    <div className={styles.footer__info}>
                        <div className={styles.footer__social}>
                            <ul>
                                <li>
                                    <a href="/">
                                        <img src={discord}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src={twitter}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src={medium}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__links}>
                            <ul>
                                <li>
                                    <a href='/'>Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href='/'>Privacy Policy</a>
                                </li>
                                <li>
                                    <a href='/'>Competition Rules</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__rights}>Copyright 2021. Smatries. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;