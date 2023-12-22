/* eslint-disable react/prop-types */
import './CardList.scss'


function CartList({ name, price, description, img,amount}) {
    return (
        <div className="cart">
           <div className="card-img">
           <img src={img} alt='yoq' />
           </div>
            <h3>{name}</h3>
            <h6>{price} sum</h6>
            <p>{description}</p>
            <p>{amount}</p>
         
        </div>
    );
}

export default CartList;