import { UseGlobalContext } from "../../context";
import CartList from "./CartList";
import './Cart.scss'
import Footer from "../../components/Footer";


function Cart() {
    const {added} = UseGlobalContext()
    return (
      <div className="containner">
          <div className="container-cart">
            {added.map((item)=><CartList key={item.id} {...item}/>)}
            <button onClick={()=>{
                localStorage.removeItem('cart')
                location.reload()
                }}>
                clear
            </button>
        </div>  
            <Footer/>
      </div>
      
    );
}

export default Cart;