/* eslint-disable react/prop-types */


function CartList({ name, price, description, img}) {
    return (
        <div className="card">
            <img src={img} alt='yoq' />
            <h3>{name}</h3>
            <h6>{price} sum</h6>
            <p>{description}</p>
        </div>
    );
}

export default CartList;