
import styles from './Vision.module.scss'
import laptop from '../../resources/img/laptop.png'
import {useState} from 'react'
import arrow from '../../resources/img/arrow.svg'


const Vision = () => {

    const [blocks, setBlock] = useState([
        {
            id: 1,
            active: true,
            title: 'Smarties App',
            subtitle: 'Smarties App1',
            description: `Lorem ipsum dolor sit amet, consectetadipiscing elit. Duis sed ullamcorper metus, a ultricies mauris. Aliquam tempor magna et est sodales mollis. Morbi sed ante arcu. Vivamus purus erat, lacinia ac eleifend at, tincidunt at purus.
            Quisque at lacus laoreet odio tempor elementum. Praesent a aliquet erat, nec pulvinar enim. Cras non felis magna. Aliquam sit amet consectetur sapien. Donec vitae varius est, vitae commodo nisi.`,
            btnText: 'CTA2'
        },
        {
            id: 2,
            active: false,
            title: 'Smarties Education Club',
            subtitle: 'App2',
            description: `Lorem ipsum dolor sit amet, consectetadipiscing elit. Duis sed ullamcorper metus, a ultricies mauris. Aliquam tempor magna et est sodales mollis. Morbi sed ante arcu. Vivamus purus erat, lacinia ac eleifend at, tincidunt at purus.
            Quisque at lacus laoreet odio tempor elementum. Praesent a aliquet erat, nec pulvinar enim. Cras non felis magna.
            Aliquam sit amet consectetur sapien. Donec vitae varius est, vitae commodo nisi.`,
            btnText: 'CTA'
        },
        {
            id: 3,
            active: false,
            title: 'Smarties DAO',
            subtitle: 'Smarties App3',
            description: `Lorem ipsum dolor sit amet, consectetadipiscing elit. Duis sed ullamcorper metus, a ultricies mauris. Aliquam tempor magna et est sodales mollis. Morbi sed ante arcu. Vivamus purus erat, lacinia ac eleifend at, tincidunt at purus. Quisque at lacus laoreet odio tempor elementum. Praesent a aliquet erat, nec pulvinar enim. Cras non felis magna.
            Aliquam sit amet consectetur sapien. Donec vitae varius est, vitae commodo nisi.`,
            btnText: 'CTA'
        },
        {
            id: 4,
            active: false,
            title: 'Smarties Foundation',
            subtitle: 'Smarties App4',
            description: `Lorem ipsum dolor sit amet, consectetadipiscing elit. Duis sed ullamcorper metus, a ultricies mauris. Aliquam tempor magna et est sodales mollis. Morbi sed ante arcu. Vivamus purus erat, lacinia ac eleifend at, tincidunt at purus. Quisque at lacus laoreet odio tempor elementum.
            Praesent a aliquet erat, nec pulvinar enim. Cras non felis magna. Aliquam sit amet consectetur sapien. Donec vitae varius est, vitae commodo nisi.`,
            btnText: 'CTA'
        },
        
    ]);

    const clickVision = (id) => {
        let newList = blocks.map(elem => {
            if (elem.id === id){
                return {...elem, active:true}
            } else {
                return {...elem, active: false}
            }
        });
        setBlock(newList);
    }

    const allDescription = (elem) =>{
        let myString = elem.description.split('\n');
        return myString.map(one => {
            return(
                <div key={Math.random()} className={styles.vision__text}>{one}</div>
            )
        })
    }

    return (
        <section className={styles.vision}>
            <div className="container">
                <div className={styles.vision__inner}>
                    <div className={styles.vision__title}>Our Vision</div>
                    <div className={styles.vision__top}>
                        {blocks.map(elem => {
                            return(
                                <div key={Math.random()} className={elem.active ? `${styles.vision__one} ${styles.vision__active}` : `${styles.vision__one}`}
                                onClick={() => clickVision(elem.id)}
                                >{elem.active ? <img src={arrow}/> : null}{elem.title}</div>
                            )
                        })}
                    </div>
                    <div className={styles.vision__wrapper}>
                        {blocks.map(elem => {
                            if (elem.active){
                                return(
                                    <div key={Math.random()} className={styles.vision__item}>
                                        <div className={styles.vision__information}>
                                            <div className={styles.vision__subtitle}>{elem.title}</div>
                                            <div className={styles.vision__description}>
                                                {allDescription(elem)}
                                            </div>
                                            <div className={styles.vision__btn}>
                                                <a href='/'>{elem.btnText}</a>
                                            </div>
                                        </div>
                                        <div className={styles.vision__image}>
                                            <img src={laptop}></img>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision;