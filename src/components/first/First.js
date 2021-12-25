import style from'./First.module.scss';
import bird from '../../resources/img/bird.png';
import smallBird from '../../resources/img/smallBird.png';
import arrow from '../../resources/img/arrow.svg'
import Info from '../info/Info';
import Mint from '../mint/Mint'
import { useState } from 'react';

const First = () => {

    const [clicked, setClicked] = useState(false);

    const [titles, setTitles] = useState([
        {
            title : 'Doloreto vi sopewa ihoga',
            id : 1,
            active: true
        },
        {
            title : 'Lorem ipsum dolor',
            id : 3,
            active: false
        },
        {
            title : 'Nusa zaqore da foperanza',
            id : 2,
            active: false
        }
    ])

    const changeClicked = (boolean) => {
        setClicked(boolean)
    }

    const clickTitle= (e, id) => {
        e.preventDefault();
        let newStep = titles.map(elem => {
            if (elem.id === id){
                return {...elem, active: !elem.active}
            } else {
                return {...elem, active: false}
            }
        });
        setTitles(newStep);
    }

    return(
        <>
            <section className={style.first}>
                <div className='container'>
                    <div className={style.first__inner}>
                        <div className={style.first__left}>
                            {clicked ? <Mint changeClicked={changeClicked} clicked={clicked}/> : <Info changeClicked={changeClicked}/> }
                        </div>
                        <div className={clicked? style.first__another : style.first__right}>
                            <div className={clicked? style.first__another : style.first__image}>
                                <img src={clicked&&window.innerWidth < 770? smallBird : bird}/>
                            </div>
                            <div className={clicked&&window.innerWidth < 770 ? style.first__normal : style.first__navigation}>
                                {titles.map(elem=>{
                                    return(
                                        <div key={Math.random()} className={elem.active ? `${style.first__item} ${style.first__active}` : `${style.first__item}`}
                                        onClick={(e)=>clickTitle(e, elem.id)}>
                                            <a href='/'><img src={arrow}/>{elem.title}</a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First;