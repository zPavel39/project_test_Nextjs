import Image from "next/image"
import { useState } from "react"
import styles from './infoSection.module.scss'


export const InfoSection = ({setInputValue, inputValue, setFilterAllPrice, filterAllPrice, priceList}) => {
    const namePrice = (str) => {
        return decodeURI(str).substring(decodeURI(str).indexOf('.')).toLowerCase().split('.')
    };

    const handleClick = (e) => {
        e.preventDefault();
        const keys = ['name']
        setFilterAllPrice(prev => prev.filter((item) => namePrice(keys.some(key => item[key].toLowerCase().includes(inputValue)))))
    };
    return (
        <div className={styles.info}>
            <div className={styles.info__main}>
                <h2 className={styles.info__title}>Услуги</h2>
                <form className={styles.info__form} >
                    <input className={styles.info__form_input} placeholder='Поиск' onChange={(e) => setInputValue(e.target.value.toLowerCase())} />
                    <Image className={styles.info__form_searchImg} onClick={handleClick}  src='/linsa.svg' width={20} height={20} alt='search' />
                </form>
            </div>
            <p className={styles.info__description}>
                Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.
            </p>
        </div>
    )
}