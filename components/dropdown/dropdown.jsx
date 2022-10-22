import Image from 'next/image'
import { useState } from 'react'
import styles from './dropdown.module.scss'



export const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false)
    const language = ['RU', 'ENG', 'MOL']
    return (
        <div className={styles.dropdown}>
            {isActive && (
                <ul className={styles.dropdown__content}>
                    {language.map(language => (
                        <li className={styles.dropdown__item}
                            onClick={(e) => {
                                setSelected(language);
                                setIsActive(false);
                            }}>
                            <span>{language}</span></li>
                    ))}
                </ul>
            )}
            <button className={styles.dropdown__btn} onClick={e => setIsActive(!isActive)}>
                <span className={styles.dropdown__btn_value}>{selected}</span>
                <Image className={styles.dropdown__btn_img} src="/acord_top_header.svg" width={12} height={6} alt="^" />
            </button>
        </div>
    )
}