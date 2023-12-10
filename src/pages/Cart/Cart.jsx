import { UseGlobalContext } from "../../context";


function Cart() {
    const {added} = UseGlobalContext()
    return (
        <>
            {added.map((item)=>{
            console.log(item);
            })}
        </>  
        
    );
}

export default Cart;