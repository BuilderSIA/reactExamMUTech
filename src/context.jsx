/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
import { data } from "./data";
import { getStore, getUser } from "./utils";
import uuid from "react-uuid";



const initialState = {
    amount: '',
    loading: false,
    total: 0,
    cart: data,
  };



export const AppContext = createContext()


  

  

export const AppProvider = ({children}) =>{



      const [state,dispatch] = useReducer(reducer, initialState);
      const [itemAmount, setItemAmount] = useState(1);

  
  
      const clearCart = () =>{
        dispatch({type: "CLEAR"})
      }
      const inc = (id,e)=>{
        dispatch({type: "INC", payload: id})

          setItemAmount(e+1)
      }
      const dec = (id,e)=>{
        dispatch({type: "DEC", payload: id})
        
          setItemAmount(e)
       
      }
      // const total = ()=>{
      //   dispatch({type: "TOTAL"})
      // }

      
  
      // const toCent =  document.querySelector('.prodCont');
      // const toNone =  document.querySelector('.prodList');
      const [login, setLogin] = useState(false);
      const [name,setName] = useState('');
      const [email,setEmail] = useState('+998');
      const [psw,setPsw] = useState('');
      const [user,setUser] = useState(getUser('user'));
      const [pname,setPname] = useState('');
      const [price,setPrice] = useState('');
      const [products,setProducts] = useState(data)
    //   const [modal,setModal] = useState(false);
      const [edit,setEdit] = useState(false);
      const [editID,setEditID] = useState(null);
      const [added, setAdded] = useState(getStore('cart'));

      const userid = uuid();
      
      
      const handSignIn = () =>{
        const newUser = { id:userid, name: name, password: psw, number: email};
        setUser(newUser)
      }
    
    
      const signOut = () =>{
        localStorage.removeItem('user');
        location.pathname = '/'
      }
    
      const addCart = (id)=>{
        const theItem = products.find((item)=> item.id === id);
        const cartItem = {id:theItem.id, img:theItem.img, price:theItem.price, name:theItem.name, amount: itemAmount}
        setAdded([...added , cartItem])
        location.reload()
      }
  
  
    
      useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('product',JSON.stringify(products))
        localStorage.setItem('cart',JSON.stringify(added))
        // setAdded()
        // total()
      },[user,products,added])
    
      return (
          <AppContext.Provider value={{
              ...state,
              name, setName,
              psw, setPsw,
              email, setEmail,
              userid,
              login, setLogin,
              pname, setPname,
              price, setPrice,
              edit, setEdit,
              editID, setEditID,
              user, setUser,
              products, setProducts, signOut,
              handSignIn, useEffect,
              clearCart,inc,dec,
              addCart,
              itemAmount, setItemAmount, 
              added
          }}>
              {children}
          </AppContext.Provider>
      )
  }

export const UseGlobalContext = () => {
    return useContext(AppContext)
}