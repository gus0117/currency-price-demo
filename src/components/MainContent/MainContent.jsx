import React from 'react'
import ListCards from '../ListCards/ListCards'
import BigCard from '../BigCard/BigCard'

const MainContent = () => {
  return (
    <div className='container center-content'>
        <BigCard 
            currencyName={"Dolar Blue"}
            purchasePrice={990}
            salePrice={1010}
            updateAt={"11-10-2023 05:56 PM"}
        />
        <ListCards />
    </div>
  )
}

export default MainContent