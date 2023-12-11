import './Navbar.scss'
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../context";

export default function Navbar() {
  const {login , setLogin,user,amount} = UseGlobalContext()

  return (
    <div className="navbar">
        <ul className='navbar-ul'>
            <li>
              <Link className="navbar-li-item" to='/cards'>
              Home
              </Link>
            </li>
            <li>
              <Link className="navbar-li-item" to='about_us'>
              About us
              </Link>
            </li>
            <li>
              <Link className="navbar-li-item" to='/cart'>
              Cart
              </Link>
              {amount}
            </li>
            <div className="navBTN" >
                    <Link to={'login'} >
                    {!user.name ? <button className='navBTN' onClick={()=> setLogin(!login)}>
                        Sign in
                     </button> : <button className='navBTN'> {user.name}</button>}
                    </Link>
                </div>
        </ul>
    </div>
  )
}
