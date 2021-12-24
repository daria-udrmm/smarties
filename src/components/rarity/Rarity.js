import icon from '../../resources/img/icon.png'
import iconTwo from '../../resources/img/personTwo.png'
import iconThree from '../../resources/img/personThree.png'
import star from '../../resources/img/goldStar.png'
import starTwo from '../../resources/img/silverStar.png'
import starThree from '../../resources/img/bronzeStar.png'
import styles from './Rarity.module.scss'

const Rarity = () => {
    return (
        <section className={styles.rarity}>
            <div className="container">
                <div className={styles.rarity__inner}>
                    <div className={styles.rarity__title}>Rarity NFT</div>
                    <div className={styles.rarity__wrapper}>
                        <div className={styles.rarity__item}>
                            <div className={styles.rarity__info}>
                                <div className={styles.rarity__star}>
                                    <img src={starTwo}/>
                                </div>
                                <div className={styles.rarity__name}>Common</div>
                            </div>
                            <div className={styles.rarity__image}>
                                <img src={icon}/>
                            </div>
                        </div>
                        <div className={styles.rarity__item}>
                            <div className={styles.rarity__info}>
                                <div className={styles.rarity__star}>
                                    <img src={star}/>
                                </div>
                                <div className={styles.rarity__name}>Rare</div>
                            </div>
                            <div className={styles.rarity__image}>
                                <img src={iconTwo}/>
                            </div>
                        </div>
                        <div className={styles.rarity__item}>
                            <div className={styles.rarity__info}>
                                <div className={styles.rarity__star}>
                                    <img src={starThree}/>
                                </div>
                                <div className={styles.rarity__name}>Legendary</div>
                            </div>
                            <div className={styles.rarity__image}>
                                <img src={iconThree}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rarity;