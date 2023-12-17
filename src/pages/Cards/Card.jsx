/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './Card.scss'
import { UseGlobalContext } from "../../context"




export default function Card({id, name, price, description, img,amount}) {
 const {addCart, inc, dec} = UseGlobalContext()
    // const itAmount = amount;
 
    return (
       <div className="container-card">
            <div className="home-card" key={id}>
            <div className="card-img">
            <img src={img} alt='yoq' className="item-img" />
            </div>
            <h3 className="item-name">{name}</h3>
            <h6 className="item-price">{price} so'm</h6>



               <div class="rating">
               <input type="radio" id="star-1" name="star-radio" value="star-1"/>
               <label for="star-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
               </label>
               <input type="radio" id="star-2" name="star-radio" value="star-1"/>
               <label for="star-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
               </label>
               <input type="radio" id="star-3" name="star-radio" value="star-1"/>
               <label for="star-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
               </label>
               <input type="radio" id="star-4" name="star-radio" value="star-1"/>
               <label for="star-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
               </label>
               <input type="radio" id="star-5" name="star-radio" value="star-1"/>
               <label for="star-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
               </label>
               </div>

            <div className="item-amount-cont">
            <button className="value-dec" onClick={() => dec(id,amount)}>-</button>
            <input className="item-amount-value" type="text" value={amount} />
            <button className="value-inc" onClick={() => inc(id,amount)}>+</button>
            </div>
            <button className='home-card-button cta' onClick={()=>addCart(id)}><span class="hover-underline-animation"> Shop now </span>
    <svg viewBox="0 0 46 16" height="15px" width="23px" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg></button>
        </div>
       </div>
       
    )
}
