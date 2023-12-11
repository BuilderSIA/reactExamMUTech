/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { UseGlobalContext } from "../../context"




export default function Card({id, name, price, description, img,amount}) {
 const {addCart, inc, dec, setItemAmount} = UseGlobalContext()
    // const itAmount = amount;
 
    return (
        <div className="card" key={id}>
            <img src={img} alt='yoq' className="item-img" />
            <h3 className="item-name">{name}</h3>
            <h6 className="item-price">{price} so'm</h6>
            <p className="item-info">{description}</p>
            <div className="item-amount-cont">
            <button className="value-dec" onClick={() => dec(id,amount)}>-</button>
            <input className="item-amount-value" type="text" value={amount} />
            <button className="value-inc" onClick={() => inc(id,amount)}>+</button>
            </div>
            <button onClick={()=>addCart(id)}>Tanlash</button>
        </div>
    )
}
