/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */

import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="navbar">
            <Link to='/'>
                Bosh sahifa
            </Link>
            <Link to='about_us'>
                Biz haqimizda
            </Link>
            <Link to='cart'>
                Buyurtmalar
            </Link>
            <Link>
            <button>
                Ro'yhatdan o'tish
            </button>
            </Link>
            <Link>
                Kirish
            </Link>
        </div>
    );
}

export default Navbar;