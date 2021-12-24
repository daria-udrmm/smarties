import discord from '../../resources/img/discord.svg'
import twitter from '../../resources/img/twitter.svg'
import medium from '../../resources/img/medium.svg'
import styles from './Info.module.scss'

const Info = (props) => {

    const clickedButton = (e) => {
        e.preventDefault();
        props.changeClicked(true)
    }

    return (
        <>
            <h1 className={styles.info__title}>The first <span>learn-to-earn</span> platform for everyone.</h1>
            <p className={styles.info__description}><span>Lorem gorem play-to-earn</span>. You are here to lorem ipsum est nec urna id.</p>
            <div className={styles.info__buttons}>
                <a href='/' className={`${styles.info__btn} ${styles.info__btnLeft}`}
                onClick={(e) => clickedButton(e)}
                >Mint</a>
                <a href='/' className={`${styles.info__btn} ${styles.info__btnRight}`}>Our vision</a>
            </div>
            <div className={styles.info__social}>
                <div className={styles.info__item}>
                    <a href='/'><img src={discord}/></a>
                </div>
                <div className={styles.info__item}>
                    <a href='/'><img src={twitter}/></a>
                </div>
                <div className={styles.info__item}>
                    <a href='/'><img src={medium}/></a>
                </div>
            </div>
        </>
    )
}

export default Info;