
import style from'./Last.module.scss'

const Last = () => {
    return (
        <section className={style.last}>
            <div className="container">
                <div className={style.last__inner}>
                    <div className={style.last__left}>
                        <div className={style.last__title}>Short title goes here</div>
                        <div className={style.last__description}>Small description goes here, up to 10 words max.</div>
                        <div className={style.last__buttons}>
                            <div className={`${style.last__btn} ${style.last__community}`}>
                                <a href='/'>Join our community</a>
                            </div>
                            <div className={`${style.last__btn} ${style.last__whitelist}`}>
                                <a href='/'>Join whitelist</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Last;