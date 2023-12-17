import './Navbar.scss'
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../context";

export default function Navbar() {
  const {login , setLogin,user,amount} = UseGlobalContext()

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="" alt="" />
        <h2>Logo</h2>
      </div>
        <ul className='navbar-ul'>
            <li>
              <Link className="navbar-li-item" to='/cards'>
              Bosh qism
              </Link>
            </li>
            <li>
              <Link className="navbar-li-item" to='about_us'>
              Haqida
              </Link>
            </li>
            <li>
              <Link className="navbar-li-item" to='/cart'>
              Cart
              </Link>
              {amount}
            </li>
        </ul>
            <div className="navBTN" >
                    <Link to={'login'} >
                    {!user.name ? <button data-label="Register" class="rainbow-hover" onClick={()=> setLogin(!login)}>
                        <span class="sp">Register</span>
                     </button> : <button  data-label="Register" class="rainbow-hover" > {user.name}</button>}
                    </Link>
                </div>
    </div>
  )
}
