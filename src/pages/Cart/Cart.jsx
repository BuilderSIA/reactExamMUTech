import { UseGlobalContext } from "../../context";
import CartList from "./CartList";


function Cart() {
    const {added} = UseGlobalContext()
    return (
        <div>
            {added.map((item)=><CartList key={item.id} {...item}/>)}
            <button onClick={()=>{
                localStorage.removeItem('cart')
                location.reload()
                }}>
                clear
            </button>
        </div>  
        
    );
}

export default Cart;