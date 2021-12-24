import styles from'./Mint.module.scss'
import back from '../../resources/img/back.png'
import Timer from '../timer/Timer';

const Mint = (props) => {
    

    const clickedButton = (e) => {
        e.preventDefault();
        props.changeClicked(false)
    }

    return (
        <>
            <div className={styles.mint__block}>
                <div className={styles.mint__top}>
                    <div className={styles.mint__one}>
                        <div className={styles.mint__sale}>Available</div>
                        <div className={styles.mint__price}>10500 / <span>10500</span></div>
                    </div>
                    <div className={styles.mint__one}>
                        <div className={styles.mint__sale}>Presale</div>
                        <div className={styles.mint__price}>1050 / <span>10500</span></div>
                    </div>
                    <div className={styles.mint__one}>
                        <div className={styles.mint__sale}>Public Sale</div>
                        <div className={styles.mint__price}>8500 / <span>8500</span></div>
                    </div>
                </div>
                <div className={styles.mint__presale}>
                    <div className={styles.mint__flex}>
                        <div className={styles.mint__left}>
                            <div className={styles.mint__title}>Presale Price</div>
                            <div className={styles.mint__date}>
                                <div className={styles.mint__what}>Presale</div>
                                <div className={styles.mint__month}>Nov 25</div>
                            </div>
                        </div>
                        <div className={styles.mint__right}>
                            <div className={styles.mint__cost}>0.064 ETH</div>
                            <div className={styles.mint__limit}>Limit per wallet: 3</div>
                        </div>
                    </div>
                    <Timer/>
                </div>
                <div className={`${styles.mint__presale} ${styles.mint__white}`}>
                    <div className={styles.mint__flex}>
                        <div className={styles.mint__left}>
                            <div className={styles.mint__title}>Presale Price</div>
                            <div className={styles.mint__date}>Nov 25</div>
                        </div>
                        <div className={styles.mint__right}>
                            <div className={styles.mint__cost}>0.064 ETH</div>
                            <div className={styles.mint__limit}>Limit per wallet: 3</div>
                        </div>
                    </div>
                </div>
                <div className={styles.mint__buttons}>
                    <div className={styles.mint__back}>
                        <a href='/' onClick={(e) => clickedButton(e)}>
                            <img src={back}/>
                        </a>
                    </div>
                    <div className={styles.mint__btn}>
                        <a href='/'>Mint</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mint;