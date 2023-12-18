import './Navbar.scss'
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../context";
import LogoSVG from '../img/logo-big-removebg-preview.png'
// import HomeIcon from '../icons/Home_custom_icon (1).json'

export default function Navbar() {
  const {login , setLogin,user,amount} = UseGlobalContext()

  return (
    <div className="navbar">
       <Link className='navbar-link-logo' to='/cards'>
       <div className="navbar-logo">
        <img src={LogoSVG} alt="" />
        <span>BIG BURGER</span>
      </div>
      <div className="beta-box">
        <h4>Beta</h4>
      </div>
       </Link>  
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
                    {!user.name ? <button data-label="Register" className="rainbow-hover" onClick={()=> setLogin(!login)}>
                        <span className="sp">Register</span>
                     </button> : <button  data-label="Register" className="rainbow-hover" > {user.name}</button>}
                    </Link>
                </div>
    </div>
  )
}
