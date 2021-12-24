import plan from '../../resources/img/plan.png'
import styles from './Learn.module.scss'

const Learn = () => {
    const imageBlock = (
        <div className={styles.learn__image}>
            <img src={plan}/>
        </div>
    )
    return (
        <section className={styles.learn}>
            <div className="container">
                <div className={styles.learn__inner}>
                    <div className={styles.learn__left}>
                        <div className={styles.learn__title}>Learn And Earn $BOOK</div>
                        {window.innerWidth < 576 ? imageBlock : null}
                        <div className={styles.learn__description}>$BOOK Token is designed in such a way that incentivises learning and knowledge acquisition through simple and intuitive methods.</div>
                        <div className={styles.learn__btn}>
                            <a href="#">Launch app</a>
                        </div>
                    </div>
                    <div className={styles.learn__right}>
                        {window.innerWidth > 576 ? imageBlock : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learn;