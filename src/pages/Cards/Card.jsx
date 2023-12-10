/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { UseGlobalContext } from "../../context"




export default function Card({id, name, price, description, img}) {
 const {addCart} = UseGlobalContext()
    return (
        <div className="card" key={id}>
            <img src={img} alt='yoq' />
            <h3>{name}</h3>
            <h6>{price} so'm</h6>
            <p>{description}</p>
            <button onClick={()=>addCart(id)}>Buyurtma berish</button>
        </div>

    )
}
