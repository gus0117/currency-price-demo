import React from 'react'

const BigCard = ({ currencyName, purchasePrice, salePrice, updateAt }) => {
  return (
    <div className='big-card'>
        <div className="title">{ currencyName }</div>
        <div className="values">
            <div className="purchase">
                <div className="label">Compra</div>
                <div className="val">${purchasePrice}</div>
            </div>
            <div className="sale">
                <div className="label">Venta</div>
                <div className="val">${salePrice}</div>
            </div>
        </div>
        <span className="updateAt">
            Actualizado {updateAt}
        </span>
        <div className="btn btn-success">
            Publica nuestras cotizaciones en tu sitio web
        </div>
    </div>
  )
}

export default BigCard