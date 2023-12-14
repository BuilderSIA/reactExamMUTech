import { UseGlobalContext } from "../../context";
import './Profile.scss'

function Profile() {
    const {signOut,user} = UseGlobalContext();
    return (
      <div className="container">
          <div className="card">
            <h2>
                {user.name ? user.name : 'No user'}
            </h2>
            <h3>
            {user.number ? user.number: ''}
            </h3>
            <button onClick={()=>signOut()}>
                Sign out
            </button>
        </div>
      </div>
    );
}

export default Profile;Profile