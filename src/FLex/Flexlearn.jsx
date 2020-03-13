import React, { useState } from "react";
import s from './Flexlearn.module.css'
import News from "./news";
import searcjLogo from '../search-logo-clipart-9.png'
import ignlogo from '../ign-entertainment-inc-vector-logo.png'
import { Spring, Transition } from "react-spring/renderprops-universal";
import leftbtn from '../Leftbtn.png'
const Flex1 = () => {
    const [show, setShow] = useState({ display: 'none' })
    const [effect, setEffect] = useState(false)
    const [paint, setPaint] = useState({ color: 'black' })
    const [toggle, settoggle] = useState(false)

    let effects = () => {
        setShow({ display: 'flex' })
        setEffect(true)
        setPaint({ color: 'red' })
    }

    let ckeareffects = () => {
        setShow({ display: 'none' })
        setEffect(false)
        setPaint({ color: 'black' })
    }
    return (
        <div className={s.main}>


            <div className={s.mainHeader}>

                <div className={s.header}>

                    <img onClick={() => settoggle(!toggle)} className={s.logoheader} src={leftbtn} alt="" />





                    <div className={s.logo2}>   Россия</div>
                    <img src={ignlogo} />
                </div>
                <div className={s.Header2}>
                    <button> Вход  </button>
                    <img src={searcjLogo} />
                    {effect ?
                        <Spring
                            from={{ transform: 'rotate(-270deg)' }}
                            to={{ transform: 'rotate(-90deg)' }}

                            config={{ duration: 300 }}
                        >
                            {propss =>

                                <div style={propss} className={s.text1}> > </div>}
                        </Spring>
                        :

                        <div onMouseEnter={effects} className={s.text1}> > </div>}


                    <div style={paint} onMouseEnter={effects} className={s.text}>More</div>
                    <div className={s.text}>3DS</div>
                    <div className={s.text}>XBOX One</div>
                    <div className={s.text}>Switch</div>
                    <div className={s.text}>PS4</div>
                    <div className={s.text}>PC</div>
                </div>
                <div onMouseLeave={ckeareffects} style={show} className={s.hiddenhedder}>
                    <div className={s.maincolons}>
                        <div className={s.colons1}>
                            <p> <span> IGN RUSSIA</span>
                            </p>
                            <p>Об IGN Russia
                        </p>
                            <p>Команда сайта
                        </p>
                            <p>Рекламодателям
                        </p>
                            <p>Пользовотельское
                        </p>
                            <p>Конфиденциальность
                        </p>
                            <p>Правила
                        </p>
                            <p>RSS
                        </p>
                            <p>О нашей системе
                        </p>

                        </div>
                        <div className={s.colons}>

                        </div>
                        <div className={s.colons}>

                            <p><span> SOCIAL </span>
                            </p>
                            <p>Facebook
                        </p>
                            <p>Twitter
                        </p>
                        </div>

                        <div className={s.colons}>
                            <p> <span> ENTERTAINMENT </span>
                            </p>
                            <p>Видео
                        </p>
                            <p>Рецензии
                        </p>
                            <p>Новости
                        </p>
                            <p>Спецы
                        </p>
                            <p>Превью
                        </p>
                            <p>Фильмы
                        </p>
                            <p>Железо
                        </p>
                            <p>Игры
                        </p>

                        </div>
                        <div className={s.colons}>
                            <p><span> GAMING </span>
                            </p>
                            <p>PC
                        </p>
                            <p>PS4
                        </p>
                            <p>XBOX One
                        </p>
                            <p>PS3
                        </p>
                            <p>3DS
                        </p>
                            <p>PS Vita
                        </p>
                            <p>Switch
                        </p>
                            <p>Xbox 360
                        </p>
                            <p>Wii U
                        </p>
                        </div>
                    </div>
                </div>
            </div>

            <Transition
                items={toggle}
                from={{ opacity: 1, right: 500 }}
                enter={{ opacity: 1, right: 0 }}
                leave={{ opacity: 1, right: 500 }}
                config={{ duration: 150 }}>

                {toggle => toggle && (propss =>
                    <div className={s.effectbar} style={propss} >

                        <Transition
                            items={toggle}
                            from={{ opacity: 0, marginLeft: '85%' }}
                            enter={{ opacity: 1, marginLeft: '85%' }}
                            leave={{ opacity: 0 }}
                            config={{ duration: 550 }}>

                            {toggle => toggle && (propss => <span style={propss} onClick={() => settoggle(!toggle)} className={s.closebtn}> X </span>)}
                        </Transition >





                        <div className={s.titlehbar}> <span className={s.span} > IGN Russia </span> </div>
                        <div className={s.titlehbar}> <span> PC </span> </div>
                        <div className={s.titlehbar}> <span> PS4 </span> </div>
                        <div className={s.titlehbar}> <span> Switch </span> </div>
                        <div className={s.titlehbar}> <span> Xbox one </span> </div>
                        <div className={s.titlehbar}> <span> 3DS </span> </div>

                    </div>)}

            </Transition >

            <News />
            <News />



        </div>



    )
}

export default Flex1