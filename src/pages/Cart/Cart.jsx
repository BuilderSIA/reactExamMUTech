import { UseGlobalContext } from "../../context";
import CartList from "./CartList";



function Cart() {
    const {added,setRecipe} = UseGlobalContext()
    return (
        <div>
            {added.map((item)=><CartList key={item.id} {...item}/>)}
            <button onClick={()=>{
                localStorage.removeItem('cart')
                location.reload()
                }}>
                clear
            </button>
            <button onClick={()=>{
                setRecipe(added)
            }}>
                Buyurtma berish
            </button>
        </div>  
        
    );
}

export default Cart;