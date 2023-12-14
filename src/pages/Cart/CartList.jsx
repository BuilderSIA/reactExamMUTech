/* eslint-disable react/prop-types */


function CartList({ name, price, description, img,amount}) {
    return (
        <div className="cart">
            <img src={img} alt='yoq' />
            <h3>{name}</h3>
            <h6>{price} sum</h6>
            <p>{description}</p>
            <p>{amount}</p>
        </div>
    );
}
export default CartList;