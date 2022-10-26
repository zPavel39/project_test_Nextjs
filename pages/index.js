import { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { Header } from '../components/header/header'
import { InfoSection } from '../components/infoSection/infoSection'
import { PriceTree } from '../components/priceTree/priceTree'
import styles from '../styles/Home.module.scss'
import { PriceList } from '../components/priceList/priceList'
import { ModalWindow } from '../components/ModalWindow/ModalWindow'


export const getStaticProps = async () => {
  const response = await axios.get('https://himinfo.net/cl/test/api/?PriceTree={}')
  const result = await response.data.price
  const responseList = await axios.get('https://himinfo.net/cl/test/api/?PriceList={"id":"100489"}')
  const res = await responseList.data.price_list

  return {
    props: { priceDB: result, priceListDB: res }
  }
}


export default function Home({ priceDB, priceListDB }) {

  const [list, setList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [filterAllPrice, setFilterAllPrice] = useState([])
  const [filterParentTree, setFilterParentTree] = useState('')
  const [filterChildrenTree, setFilterChildrenTree] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [count, setCountSum] = useState(0)
  const [isIdBasket, setIsIdBasket] = useState([])



  console.log('priceList', priceList)


  useEffect(() => {
    setList(priceDB)
    setPriceList(priceListDB)
    setFilterAllPrice(priceList)
  }, [])


  const filterPriceList = () => {
    return priceList.filter((x) => x.top_parent === filterParentTree)
  }

  useEffect(() => {
    setFilterAllPrice(filterPriceList())
  }, [filterParentTree])
  console.log('filterAllPrice', filterAllPrice)

  useEffect(() => {
    setFilterAllPrice(filterPriceList().filter(x => x.group_c === filterChildrenTree))
  }, [filterChildrenTree])

  console.log('inputValue', inputValue)
  console.log('count', count)

  return (
    <div className={styles.home}>
      <Header />
      <InfoSection
        inputValue={inputValue}
        setInputValue={setInputValue}
        setFilterAllPrice={setFilterAllPrice}
        filterAllPrice={filterAllPrice}
        priceList={priceList}
      />
      <div className={styles.home__main}>
        <PriceTree
          list={list}
          filterParentTree={filterParentTree}
          setFilterParentTree={setFilterParentTree}
          setFilterChildrenTree={setFilterChildrenTree}
        />
        <div className={styles.home__priceList}>
          <PriceList
            filterAllPrice={filterAllPrice}
            setCountSum={setCountSum}
            setIsIdBasket={setIsIdBasket}
            isIdBasket={isIdBasket}
          />
        </div>
      </div>
      {count !== 0 && <ModalWindow count={count} isIdBasket={isIdBasket} />}
    </div>
  )
}