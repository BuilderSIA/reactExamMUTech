
import { UseGlobalContext } from '../../context'
import Card from './Card'
import './Cards.scss'
export default function Cards() {
    const { cart } = UseGlobalContext()
    return (
        <>
            <div className='cart__box'>
                {cart.map((item) => <Card key={item.id} {...item} />)}
            </div>
        
        </>
    )
}
