import { UseGlobalContext } from "../../context";
import './Profile.scss'

function Profile() {
    const {signOut,user} = UseGlobalContext();
    return (
      <div className="container">
          <div className="card">
            <h2>
                {user.name ? 'Profile' : 'No user'}
            </h2>
            <button onClick={()=>signOut()}>
                Sign out
            </button>
        </div>
      </div>
    );
}

export default Profile;Profile