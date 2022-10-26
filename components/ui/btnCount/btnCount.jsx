import Image from 'next/image'
import styles from './btnCount.module.scss'

export const BtnCount = ({ count }) => {

    return (
        <div className={styles.btnCount}>
            <button className={styles.btnCount__btn}>
                <Image src='/minus.svg' width={12} height={12}/>
            </button>
            <span className={styles.btnCount__count}>{count}</span>
            <button className={styles.btnCount__btn}>
                <Image src='/plus.svg' width={12} height={12} />
            </button>
        </div>
    )
}