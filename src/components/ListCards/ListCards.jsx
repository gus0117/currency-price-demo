import React from 'react'
import Card from '../Card/Card'

const priceList = [
    {
        currencyName: "Dolar Oficial Promedio",
        purchasePrice: 349.02,
        salePrice: 367.39,
        updateAt: "11-10-2023 05:56 PM"
    },
    {
        currencyName: "Dolar Bolsa",
        purchasePrice: 856,
        salePrice: 856.30,
        updateAt: "11-10-2023 05:56 PM"
    },
    {
        currencyName: "Contado con liqui",
        purchasePrice: 824.53,
        salePrice: 857.52,
        updateAt: "11-10-2023 05:56 PM"
    },
    {
        currencyName: "Dolar Cripto",
        purchasePrice: 926,
        salePrice: 942,
        updateAt: "11-10-2023 05:56 PM"
    },
    {
        currencyName: "Dolar Solidario",
        salePrice: 639.63,
        updateAt: "11-10-2023 05:56 PM"
    },
    {
        currencyName: "Dolar Oficial Promedio",
        purchasePrice: 990,
        salePrice: 1010,
        updateAt: "11-10-2023 05:56 PM"
    }
]
const ListCards = () => {
  return (
    <div className='cards'>
        {
            priceList.map( price => (
                <Card 
                    currencyName={price.currencyName}
                    purchasePrice={price.purchasePrice}
                    salePrice={price.salePrice}
                />
            ))
        }
    </div>
  )
}

export default ListCards