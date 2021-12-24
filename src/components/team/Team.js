import discord from '../../resources/img/discord.svg'
import twitter from '../../resources/img/twitter.svg'
import medium from '../../resources/img/medium.svg'
import person from '../../resources/img/person.png'
import styles from './Team.module.scss'

const Team = () => {
    return(
        <section className={styles.team}>
            <div className="container">
                <div className={styles.team__inner}>
                    <div className={styles.team__title}>Our Team</div>
                    <div className={styles.team__info}>
                        <div className={styles.team__description}>We’re bringing digital creatore, crypto natives, and collectors together to move culture forward.</div>
                        <div className={styles.team__btn}>
                            <a href="/">Talk to us</a>
                        </div>
                    </div>
                    <div className={styles.team__wrapper}>
                        <div className={styles.team__item}>
                            <div className={styles.team__image}>
                                <img src={person}/>
                            </div>
                            <div className={styles.team__name}>Alex Van Razer</div>
                            <div className={styles.team__media}>
                                <ul className={styles.team__social}>
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
                        </div>
                        <div className={styles.team__item}>
                            <div className={styles.team__image}>
                                <img src={person}/>
                            </div>
                            <div className={styles.team__name}>Alex Van Razer</div>
                            <div className={styles.team__media}>
                                <ul className={styles.team__social}>
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
                        </div>
                        <div className={styles.team__item}>
                            <div className={styles.team__image}>
                                <img src={person}/>
                            </div>
                            <div className={styles.team__name}>Alex Van Razer</div>
                            <div className={styles.team__media}>
                                <ul className={styles.team__social}>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;