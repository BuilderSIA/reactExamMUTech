import { UseGlobalContext } from "../../context";
import CartList from "./CartList";
import './Cart.scss'
import Footer from "../../components/Footer";


function Cart() {
    const {added} = UseGlobalContext()
    return (
        <div className="container-cart">
            {added.map((item)=><CartList key={item.id} {...item}/>)}
            <button onClick={()=>{
                localStorage.removeItem('cart')
                location.reload()
                }}>
                clear
            </button>
            <Footer/>
        </div>  
      
    );
}

export default Cart;