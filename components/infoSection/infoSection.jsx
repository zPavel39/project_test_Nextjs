import Image from "next/image"
import styles from './infoSection.module.scss'


export const InfoSection = () => {
    return (
        <div className={styles.info}>
            <div className={styles.info__main}>
                <h2 className={styles.info__title}>Услуги</h2>
                <form className={styles.info__form}>
                    <input className={styles.info__form_input} />
                    <Image  />
                </form>
            </div>
            <p className={styles.info__description}>
                Из-за ежедневного использования повседневная одежда быстро изнашивается и нуждается в профессиональном уходе. То, что чаще носится, должно и чаще чиститься! Подбирать для повседневной одежды правильные программы обработки – это задача профессионалов.
            </p>
        </div>
    )
}
