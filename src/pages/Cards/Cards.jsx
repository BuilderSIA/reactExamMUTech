import { UseGlobalContext } from '../../context'
import Card from './Card'

export default function Cards() {
    const { cart } = UseGlobalContext()
    return (
        <div className='carts__wrapper'>
            <div className='cart__box'>
                {cart.map((item) => <Card key={item.id} {...item} />)}
            </div>
        </div>
    )
}
