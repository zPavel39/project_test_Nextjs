import Image from 'next/image'
import { useState } from 'react'
import styles from './priceList.module.scss'

export const PriceList = ({ filterAllPrice, setCountSum, isIdBasket, setIsIdBasket }) => {
    const [isActive, setIsActive] = useState(true)
    const namePrice = (str) => {
        return decodeURI(str).substring(decodeURI(str).indexOf('.')).split('.')
    }
    const handleClick = (id, price) => {
        setCountSum(prev => prev + +price)
        setIsIdBasket(prev => [...prev, id])
    }
    console.log('isActive', isIdBasket)


    return (
        <div className={styles.price}>
            <ul className={styles.price__list}>
                {filterAllPrice.map(x => (
                    <li className={styles.price__item}>
                        <div className={styles.price__left}>
                            <h2 className={styles.price__left_title}>{namePrice(x.name)}</h2>
                            <a className={styles.price__left_link}>Подробнее<Image src='/price_arrow_right.svg' width={12} height={12} /></a>
                        </div>
                        <div className={styles.price__right}>
                            <span className={styles.price__right_price}>{x.price}&#8381;</span>
                            <div className={styles.price__right_btnBlock}>
                                <button className={styles.price__right_btn}
                                    onClick={(e) => {
                                        handleClick(String(x.id), x.price);
                                    } }
                                >
                                    <Image src='/basket.svg' width={52} height={52} />
                                </button>
                                
                                <button className={styles.price__right_btnCount}>
                                    <span>+</span>
                                    <span>0</span>
                                    <span>-</span>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}