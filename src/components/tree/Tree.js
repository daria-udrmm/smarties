import { useState } from "react"
import styles from './Tree.module.scss'
import house from '../../resources/img/house.png'
import path from '../../resources/img/path.png'
import smallPath from '../../resources/img/smallPath.png'

const Tree = () => {

    const [steps, setSteps] = useState([
        {
            title: 'Quisque at lacus laoreet odio',
            step: 1,
            active: true,
            color: true,
            extra: [
                {
                    subtext: 'NFT collection launch',
                    description: 'Duis sed ullamcorper metus, a ultricies mauris. Aliquam tempor magna et est sodales mollis. Morbi sed ante arcu.'
                },
                {
                    subtext: 'Marketing campaign',
                    description: 'Vestibulum ac massa sed neque rutrum scelerisque eget eget eros. Mauris quis risus facilisis, varius turpis vitae, mattis quam.'
                },
                {
                    subtext: 'Community fund establishment',
                    description: 'Fusce nibh felis, elementum ac eros non, bibendum varius nisi. Aliquam at ipsum pellentesque, iaculis dolor sit amet, pretium risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                }
            ]
        },
        {
            title: 'Quisque at lacus laoreet odio',
            step: 2,
            active: false,
            color: false,
            extra: [
                {
                    subtext: 'NFT collection launch',
                    description: '2Duis sed ullamcorper metus, a ultricies mauris. Aliquam tempor magna et est sodales mollis. Morbi sed ante arcu.'
                },
                {
                    subtext: 'Marketing campaign',
                    description: '2Vestibulum ac massa sed neque rutrum scelerisque eget eget eros. Mauris quis risus facilisis, varius turpis vitae, mattis quam.'
                },
                {
                    subtext: 'Community fund establishment',
                    description: '2Fusce nibh felis, elementum ac eros non, bibendum varius nisi. Aliquam at ipsum pellentesque, iaculis dolor sit amet, pretium risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                }
            ]
        },
        {
            title: 'Quisque at lacus laoreet odio',
            step: 3,
            active: false,
            color: false,
            extra: [
                {
                    subtext: 'NFT collection launch',
                    description: '3Duis sed ullamcorper metus, a ultricies mauris. Aliquam tempor magna et est sodales mollis. Morbi sed ante arcu.'
                },
                {
                    subtext: 'Marketing campaign',
                    description: '3Vestibulum ac massa sed neque rutrum scelerisque eget eget eros. Mauris quis risus facilisis, varius turpis vitae, mattis quam.'
                },
                {
                    subtext: 'Community fund establishment',
                    description: '3Fusce nibh felis, elementum ac eros non, bibendum varius nisi. Aliquam at ipsum pellentesque, iaculis dolor sit amet, pretium risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                }
            ]
        },
        {
            title: 'Quisque at lacus laoreet odio',
            step: 4,
            active: false,
            color: false,
            extra: [
                {
                    subtext: 'NFT collection launch',
                    description: '4Duis sed ullamcorper metus, a ultricies mauris. Aliquam tempor magna et est sodales mollis. Morbi sed ante arcu.'
                },
                {
                    subtext: 'Marketing campaign',
                    description: '4Vestibulum ac massa sed neque rutrum scelerisque eget eget eros. Mauris quis risus facilisis, varius turpis vitae, mattis quam.'
                },
                {
                    subtext: 'Community fund establishment',
                    description: '4Fusce nibh felis, elementum ac eros non, bibendum varius nisi. Aliquam at ipsum pellentesque, iaculis dolor sit amet, pretium risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                }
            ]
        }
    ])

    const fullDescription = (elem) => {
        return elem.map(step => {
            return (
                <div key={Math.random()} className={styles.tree__item}>
                    <div className={styles.tree__subtitle}>{step.subtext}</div>
                    <div className={styles.tree__addition}>{step.description}</div>
                </div>
            )
        })
    }

    const clickStep = (id) => {
        let newStep = steps.map(elem => {
            if (elem.step === id){
                return {...elem, active: true, color: true}
            } else if (elem.step < id) {
                return {...elem,  active: false, color: true}
            } else {
                return {...elem, active: false, color: false}
            }
        });
        setSteps(newStep);
    }

    const myImage = window.innerWidth > 768 ? path : smallPath;

    return(
        <section className={styles.tree}>
            <div className="container">
                <div className={styles.tree__inner}>
                    <div className={styles.tree__title}>Fusce nibh felis elementum?</div>
                    <div className={styles.tree__description}>Nunc ullamcorper augue molestie tellus ornare, a scelerisque elit aliquet. Phasellus convallis finibus rhoncus. Suspendisse non arcu augue. </div>
                    <div className={styles.tree__wrapper}>
                        <div className={styles.tree__left}>
                            <div className={styles.tree__image}>
                                <img src={house}/>
                                <div className={styles.tree__path}>
                                    <img src={myImage}/>
                                    <div className={styles.tree__steps}>
                                        {steps.map(elem => {
                                            return (
                                                <div key={Math.random()} className={elem.color ? `${styles.tree__count} ${styles.tree__active}` : `${styles.tree__count}`}
                                                onClick={() => clickStep(elem.step)}
                                                >{elem.step}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tree__right}>
                            {steps.map(elem => {
                                if (elem.active){
                                    return(
                                        <div key={Math.random()} className={styles.tree__one}>
                                            <div className={styles.tree__step}>
                                                <div className={styles.tree__num}>{elem.step}</div>
                                                <div className={styles.tree__name}>{elem.title}</div>
                                            </div>
                                            {fullDescription(elem.extra)}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tree;