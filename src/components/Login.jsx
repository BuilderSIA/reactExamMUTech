import { UseGlobalContext } from "../context";
import './Login.scss'
import Garfild from  '../img/112710-garfield-cartoon-free-transparent-image-hq-removebg-preview.png'
import { IoIosClose } from "react-icons/io";

function Login(){
    const {login, setLogin, name,  setName, handSignIn,email, number, setEmail} = UseGlobalContext()
    return (
        <div className="logCont">
            <form className="my-form"  onSubmit={handSignIn}>
                <div className="login-welcome-row">
                    <img src={Garfild}
                     alt="" 
                     />
                </div>
                <button onClick={()=>setLogin(!login)} className="closeBtn">
                <IoIosClose className="closeBtn-btn" />
                </button>
               <div className="inputs">
               <input type='text' 
                className="logInput" 
                placeholder="Name"
                 value={name } onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
               </div>
                <button className="logBtn">
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default Login;