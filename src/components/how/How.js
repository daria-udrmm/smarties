
import video from '../../resources/img/video.png'
import styles from './How.module.scss'

const How = () => {
    return (
        <section className={styles.how}>
            <div className="container">
                <div className={styles.how__inner}>
                    <div className={styles.how__title}>How it Works</div>
                    <div className={styles.how__description}>Nunc ullamcorper augue molestie tellus ornare, a scelerisque elit aliquet. Phasellus convallis finibus rhoncus. Suspendisse non arcu augue. </div>
                    <div className={styles.how__video}>
                        <img src={video}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default How;