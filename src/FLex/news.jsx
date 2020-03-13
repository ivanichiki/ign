import React, { useEffect, useState } from "react";
import s from './news.module.css'
import { Spring } from 'react-spring/renderprops'
import {Scrollbars} from 'react-custom-scrollbars'



const News = () => {
    
    let [pos, setPos] = useState(0)
    let [visible, setVisible] = useState(true)
    let [hover, setHover] = useState(false)
    let [hover2, setHover2] = useState(false)
    let [id, getId] = useState()
    let [imgstate, setImgstate] = useState([{ img: 'https://sm.ign.com/t/ign_ru/slotter/default/nl5teepui4a11_6pjn.560.jpg', id: 0, text: 'Демоверсия Final Fantasy VII: Remake вышла! Делимся впечатлениями' },
    { img: 'https://sm.ign.com/t/ign_ru/screenshot/default/hlalyx-gameplay1-blogroll-1583171698114_uqxx.560.jpg', id: 1, text: '9-минутный отрывок и сразу три геймплейных трейлера Half-Life: Alyx' },
    { img: 'https://sm.ign.com/t/ign_ru/slotter/default/pa6clfwqaugwilnroeud_yh9s.560.jpg', id: 2, text: 'Как Изабель из Animal Crossing и Думгай из Doom стали главной игровой парой 2020 года' },
    { img: 'https://sm.ign.com/t/ign_ru/slotter/default/joxi-screenshot-1582287051627_fg5y.560.png', id: 3, text: 'Мастера делает практика: как разрабатывается арт-дизайн вв видеоиграх' },


    ])
    useEffect(() => {
        const handleScroll = () => {
            let temp = window.pageYOffset
            setVisible(200 > pos);
            setPos(temp)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })
    console.log(hover)
    console.log(id)


    let changesize = (id) => {
        setHover(true)
        setHover2(true)
        getId(id)

    }
    let removeSize = () => {
        setHover(false)
        getId(id)
    }

    let newimg = imgstate.map(el =>
        hover & el.id == id
            ?
            <Spring
                from={{ transform: 'scale(1)' }}
                to={{ transform: 'scale(1.05)' }}

                config={{ duration: 200 }}
            >
                {propss =>
                    <div onMouseLeave={() => removeSize()} className="imgNews "> <img style={propss} src={el.img} />
                        <div className={s.textonImg}> <div className={s.texttext}> {el.text} </div></div>
                    </div>}

            </Spring>
            :
            !hover & el.id == id
                ?
                <Spring
                    from={{ transform: 'scale(1.05)' }}
                    to={{ transform: 'scale(1.)' }}

                    config={{ duration: 200 }}
                >
                    {propss =>
                        <div onMouseLeave={() => removeSize()} onMouseEnter={() => changesize(el.id)}
                            className="imgNews "> <img style={propss} src={el.img} />
                            <div className={s.textonImg}> <div className={s.texttext}> {el.text} </div></div>
                        </div>}
                </Spring>
                :
                <div onMouseLeave={() => removeSize()} onMouseEnter={() => changesize(el.id)}
                    className="imgNews "> <img src={el.img} />
                    <div className='textonImg'> <div className='texttext'> {el.text} </div></div> </div>

    )
    console.log(hover)

    return (
        <div>

            {visible ?
                <Spring
                    from={{ height: 30 }}
                    to={{ height: 60 }}

                    config={{ duration: 250 }}


                >
                    {propss =>

                        <div style={propss} className="belownav">

                            <div className={s.bottombar}>
                                <div className={s.textblock}><span> Superman: Red Son </span> </div>
                                <div className={s.textblock}>ИгроМир & Comic Con Russia 2019</div>
                                <div className={s.textblock}>The Outer Worlds</div>
                                <div className={s.textblock1}>Spyro Reignited Trilogy</div>
                            </div>
                        </div>}
                </Spring>
                : <div></div>
            }
            <div className={s.wrap}>
               
            <Scrollbars style={{ width: 1300, height: 700 }}>

                    <div className={s.news } >
                        <div className={s.mainNews}>
                            {newimg}
                        </div>

                    </div>
                    </Scrollbars>
            </div>
                <div className={s.column}></div>
            
            </div>
    )
}

export default News;