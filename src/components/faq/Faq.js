import { useState } from "react";
import styles from './Faq.module.scss'
import activeArrow from '../../resources/img/listArrow.svg'
import unactiveArrow from '../../resources/img/unactiveArrow.svg'

const Faq = () => {

    const [faq, setFaq] = useState([
        {
            id: 1,
            active: false,
            question: 'Why join the Fang Gang?',
            answer: `Fang Gang is a collection developed by experienced NFT creators who have been in the NFT space since early March. We've started as 1/1 artists with our own collections, helped other collections grow and are collectors ourselves.
            Launch happened and after the instant sell out the team immediately started delivering roadmap items. When we came close to completing the initial roadmap, we put out a Roadmap 2.0 full of new milestones, features to reward holders and ideas brought up by the community.
            We're committed to help the preservation of wildlife, that's why we donated 10ETH to two NGOs and are looking to extend our partnerships with them long term.
            Our long term vision is clear; Fang Gang was created with a brand in mind, expanding into the real world while also establishing a strong metaverse presence.
            One example of this will be our premium merch store, where we want to elevate the level of merch associated with an NFT project. With high quality merchandise, limited edition drops and unique items exclusive to Fang Gang holders.`
        },
        {
            id: 2,
            active: false,
            question: 'How was the minting process?',
            answer: `Fang Gang is a collection developed by experienced NFT creators who have been in the NFT space since early March. We've started as 1/1 artists with our own collections, helped other collections grow and are collectors ourselves.
            Launch happened and after the instant sell out the team immediately started delivering roadmap items. When we came close to completing the initial roadmap, we put out a Roadmap 2.0 full of new milestones, features to reward holders and ideas brought up by the community.
            We're committed to help the preservation of wildlife, that's why we donated 10ETH to two NGOs and are looking to extend our partnerships with them long term.
            Our long term vision is clear; Fang Gang was created with a brand in mind, expanding into the real world while also establishing a strong metaverse presence.
            One example of this will be our premium merch store, where we want to elevate the level of merch associated with an NFT project. With high quality merchandise, limited edition drops and unique items exclusive to Fang Gang holders.`
        },
        {
            id: 3,
            active: false,
            question: 'How can I join the Fang Gang?',
            answer: `Fang Gang is a collection developed by experienced NFT creators who have been in the NFT space since early March. We've started as 1/1 artists with our own collections, helped other collections grow and are collectors ourselves.
            Launch happened and after the instant sell out the team immediately started delivering roadmap items. When we came close to completing the initial roadmap, we put out a Roadmap 2.0 full of new milestones, features to reward holders and ideas brought up by the community.
            We're committed to help the preservation of wildlife, that's why we donated 10ETH to two NGOs and are looking to extend our partnerships with them long term.
            Our long term vision is clear; Fang Gang was created with a brand in mind, expanding into the real world while also establishing a strong metaverse presence.
            One example of this will be our premium merch store, where we want to elevate the level of merch associated with an NFT project. With high quality merchandise, limited edition drops and unique items exclusive to Fang Gang holders.`
        },
        {
            id: 4,
            active: false,
            question: 'What can I do with my Fangster?',
            answer: `Fang Gang is a collection developed by experienced NFT creators who have been in the NFT space since early March. We've started as 1/1 artists with our own collections, helped other collections grow and are collectors ourselves.
            Launch happened and after the instant sell out the team immediately started delivering roadmap items. When we came close to completing the initial roadmap, we put out a Roadmap 2.0 full of new milestones, features to reward holders and ideas brought up by the community.`
        }
    ])

    const clickQustion= (id) => {
        let newStep = faq.map(elem => {
            if (elem.id === id){
                return {...elem, active: !elem.active}
            } else {
                return {...elem, active: false}
            }
        });
        setFaq(newStep);
    }

    const allAnswer = (elem) =>{
        let myString = elem.answer.split('\n');
        return myString.map(one => {
            return(
                <div key={Math.random()} className={styles.faq__text}>{one}</div>
            )
        })
    }
    return (
        <section className={styles.faq}>
            <div className="container">
                <div className={styles.faq__inner}>
                    <div className={styles.faq__title}>What the FAQ?!</div>
                    <div className={styles.faq__wrapper}>
                        {faq.map(elem => {
                            return(
                                <div key={Math.random()} className={elem.active ? `${styles.faq__one} ${styles.faq__active}` : `${styles.faq__one}`}>
                                    <div className={styles.faq__top} onClick={()=>clickQustion(elem.id)}>
                                        <div className={styles.faq__name}>{elem.question}</div>
                                        <div className={styles.faq__arrow}>
                                            <img src={elem.active ? activeArrow : unactiveArrow}/>
                                        </div>
                                    </div>
                                    <div className={styles.faq__answer}>{allAnswer(elem)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;