import book from '../../resources/img/book.png'
import styles from './About.module.scss'

const About = () => {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.about__inner}>
                    <div className={styles.about__image}>
                        <img src={book} />
                    </div>
                    <div className={styles.about__info}>
                        <div className={styles.about__title}>About Smarties</div>
                        <div className={styles.about__mob}>
                            <img src={book} />
                        </div>
                        <div className={styles.about__text}>
                            <p><span>Smarties</span> is a solution to many existing problems concerning people’s education Nunc ut condimentum urna, ut aliquam libero. In fringilla est erat, in tristique velit cursus id. </p>
                            <p>Morbi id urna nec est ultricies porttitor quis vitae odio. Pellentesque imperdiet dui eu pharetra ullamcorper. Nunc ullamcorper augue molestie tellus ornare, a scelerisque elit aliquet. Phasellus convallis finibus rhoncus. Suspendisse non arcu augue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;