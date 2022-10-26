import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

import styles from './priceTree.module.scss'
import { useEffect } from 'react'

export const PriceTree = ({ list, filterParentTree, setFilterParentTree, setFilterChildrenTree }) => {

    const [isActive, setIsActive] = useState(false)
    const [filterList, setFilterList] = useState([])
    const [filterChildTree, setFilterChildTree] = useState()

    useEffect(() => {
        setFilterList(filterFunc())
    }, [list])

    const filterFunc = () => {
        return list.filter((x) => x.parent == '');
    }

    const namePrice = (str) => {
        return decodeURI(str).substring(decodeURI(str).indexOf('.')).split('.')
    }

    const handleClickParent = (filterTarget, filterTargetId) => {
        setFilterParentTree(filterTarget)
        setFilterChildTree(filterTargetId)
        setIsActive(true)
        if (filterParentTree === filterTarget) {
            setIsActive(!isActive)
        }
        if (filterParentTree !== filterTarget) {
            setFilterParentTree(filterTarget)
            setFilterChildTree(filterTargetId)
        }

    }
    
    const handleClickChildren = (name) => {
        return setFilterChildrenTree(name)
    }

    return (
        <div className={styles.tree}>
            <ul className={styles.tree__filter}>
                {filterList.map(item => (
                    <li className={styles.tree__filter_item} key={item.folder_id}>
                        <button className={styles.tree__filter_btn} onClick={() => handleClickParent(item.name, item.folder_id)}>
                            {namePrice(item.name)}
                            <Image src='/tree_arrow_top.svg' className={isActive && filterChildTree === item.folder_id && styles.tree__filter_img} width={12} height={6} alt="^" />
                        </button>
                        {isActive && filterChildTree === item.folder_id && <ul className={styles.tree__list && filter === item.folder_id && styles.active}>
                            {list.filter(x => x.parent == item.folder_id).map(x => (
                                <li className={styles.tree__list_item} onClick={() => handleClickChildren(x.name)}>{namePrice(x.name)}</li>
                            ))}
                        </ul>}
                    </li>
                ))}
            </ul>
        </div>
    )
}