import React from 'react'



export default function Card({id, name, price, description, img}) {

    return (
        <div className="card">
            <img src={img} alt='yoq' />
            <h3>{name}</h3>
            <h6>{price} so'm</h6>
            <p>{description}</p>
            <button>Buyurtma berish</button>
        </div>

    )
}
