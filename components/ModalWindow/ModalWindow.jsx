import Image from 'next/image'
import { useState } from 'react'
import { BtnCount } from '../ui/btnCount/btnCount'
import styles from './ModalWindow.module.scss'

export const ModalWindow = ({ isIdBasket, count }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={isActive ? styles.modal__btnActive : styles.modal}>
            <h2 className={styles.modal__title}>Корзина</h2>
            <button className={styles.modal__btn} onClick={(e) => setIsActive(!isActive)}>
                <Image className={isActive ? styles.modal__btn_img : 'nul'} src="/popap_arrow_top.svg" width={34} height={34} />
            </button>
            <div className={styles.modal__description}>
                <div className={styles.modal__block}>
                    <span className={styles.modal__block_info}>Количество услуг в корзине</span>
                    <span className={styles.modal__block_result}>{isIdBasket.length}</span>
                </div>
                <div className={styles.modal__block}>
                    <span className={styles.modal__block_info}>Сумма заказа</span>
                    <span className={styles.modal__block_result}>{count}</span>
                </div>
            </div>
            <ul className={styles.modal__list}>
                <li className={styles.modal__service}>
                    <span className={styles.modal__service_title}>Химчистка</span>
                    <ul className={styles.modal__listItem}>
                        <li className={styles.modal__itemService}>
                            <span className={styles.modal__itemService_title}>Пальто, полупальто с подстежкой из натурального меха</span>
                            <div className={styles.modal__check}>
                                <span className={styles.modal__check_price}>1 400₽</span>
                                <BtnCount count={isIdBasket.length} />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
