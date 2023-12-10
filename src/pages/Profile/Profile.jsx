import { UseGlobalContext } from "../../context";


function Profile() {
    const {signOut,user} = UseGlobalContext();
    return (
        <div>
            <h2>
                {user.name ? 'Profile' : 'No user'}
            </h2>
            <button onClick={()=>signOut()}>
                Sign out
            </button>
        </div>
    );
}

export default Profile;Profile