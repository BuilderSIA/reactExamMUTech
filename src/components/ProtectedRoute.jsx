import { useNavigate } from "react-router-dom";
import { UseGlobalContext } from "../context";

export default function ProtectedRoute({children}) {
    const {user} = UseGlobalContext()
    const navigate = useNavigate()
    if(!user) return navigate('/')
    return children
}
