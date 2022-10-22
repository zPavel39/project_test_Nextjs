import Image from 'next/image'
import { useState } from 'react'
import { Dropdown } from '../dropdown/dropdown'
import searchImg from './../../assets/svg/header/search_logo.svg'

import styles from './header.module.scss'

export const Header = () => {
    const [selected, setSelected] = useState('RU')
    return (
        <div className={styles.header}>
            <div className={styles.header__top}>
                <div className={styles.header__left}>
                    <a href="" className={styles.header__tell} type='tell'>+(373) 22 83-87-87</a>
                    <ul className={styles.header__list}>
                        <li className={styles.header__list_link}><a><Image src="/inst_logo.svg" width={24} height={24} alt="^" /></a></li>
                        <li className={styles.header__list_link}><a><Image src="/face_logo.svg" width={24} height={24} alt="^" /></a></li>
                        <li className={styles.header__list_link}><a><Image src="/viber_logo.svg" width={24} height={24} alt="^" /></a></li>
                        <li className={styles.header__list_link}><a><Image src="/whatsapp_logo.svg" width={24} height={24} alt="^" /></a></li>
                    </ul>
                </div>
                <Dropdown selected={selected} setSelected={setSelected}/>
            </div>
            <div className={styles.header__bottom}>
                <Image src="/Burger.svg" width={30} height={10} alt="=" />
                <div className={styles.header__info}>
                    <h1 className={styles.header__info_title}>YOUR LOGO</h1>
                    <span className={styles.header__info_text} >ADDITIONAL TEXT</span>
                </div>
                <button className={styles.header__searchBtn}>
                    <Image src={searchImg} className={styles.header__searchBtn_img}/>
                    <span className={styles.header__searchBtn_text}>Прайс-лист</span>
                </button>
            </div>
        </div>
    )
}