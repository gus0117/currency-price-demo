import React from 'react'

const Card = ({ currencyName, purchasePrice, salePrice }) => {

  return (
    <div className='card'>
        <a href="#" className="title">{ currencyName }</a>
        <div className="purchase">
            <div className="values">
                {purchasePrice ?
                    <>
                        <div className="label">Compra</div>
                        <div className="val">${ purchasePrice }</div>
                    </>
                    :
                    <div></div>
                }
            </div>
        </div>
        <div className="sale">
            <div className="values">
                <div className="label">Venta</div>
                <div className="val">${ salePrice }</div>
            </div>
        </div>
    </div>
  )
}

export default Card