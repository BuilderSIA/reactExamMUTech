/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
import { data } from "./data";
import { getStore, getUser } from "./utils";
import uuid from "react-uuid";


const initialState = {
    amount: 0,
    loading: false,
    total: 0,
    cart: data,
  };



export const AppContext = createContext()

export const AppProvider = ({children}) =>{

  
      const [state,dispatch] = useReducer(reducer, initialState);
  
  
  
      const clearCart = () =>{
        dispatch({type: "CLEAR"})
      }
      const inc = (id)=>{
        dispatch({type: "INC", payload: id})
      }
      const dec = (id)=>{
        dispatch({type: "DEC", payload: id})
      }
    //   const total = ()=>{
    //     dispatch({type: "TOTAL"})
    //   }
  
      // const toCent =  document.querySelector('.prodCont');
      // const toNone =  document.querySelector('.prodList');
      const [login, setLogin] = useState(false);
      const [name,setName] = useState('');
      // const [email,setEmail] = useState('');
      const [psw,setPsw] = useState('');
      const [user,setUser] = useState(getUser('user'));
      const [pname,setPname] = useState('');
      const [price,setPrice] = useState('');
      const [products,setProducts] = useState(data)
      const [modal,setModal] = useState(false);
      const [edit,setEdit] = useState(false);
      const [editID,setEditID] = useState(null);
      const [added, setAdded] = useState(getStore('cart'));
    
      const userid = uuid();
      const img = 'https://picsum.photos/200/300?random';
      
      const handSignIn = () =>{
        const newUser = { id:userid, name: name, password: psw};
        setUser(newUser)
      }
    
    //   const addProduct = () =>{
    //     if(!name && !price){
    //       console.log("Error");
    //     } else if(pname && edit){
    //       setProducts(products.map((item) => {
    //         if(item.id === editID){
    //           return {...item, name: pname, price:price}
    //         }
    //         return item
    //       }))
    //     }else{
    //       const newProduct = { id:id, img:img, name:pname,price:price}
    //       setProducts([...products , newProduct])
    //     }
    //   }
    
      const signOut = () =>{
        localStorage.removeItem('user');
        location.pathname = '/'
      }
    
      const deleteProd = (id) =>{
        const newProds = products.filter((item)=> item.id !== id);
        setProducts(newProds)
      }
      
      const editProd = (id) =>{
        const oldItem = products.find((item) => item.id === id);
        setEditID(id)
        setPname(oldItem.name)
        setPrice(oldItem.price)
        setModal(!modal)
        setEdit(true)
      }
      const addCart = (id)=>{
        const theItem = products.find((item)=> item.id === id);
        const cartItem = {id:theItem.id, name:theItem.name, amount:1}
        setAdded([...added , cartItem])
        location.reload()
      }
  
  
    
      useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('product',JSON.stringify(products))
        localStorage.setItem('cart',JSON.stringify(added))
        // total()
      },[user,products,added])
    
      return (
          <AppContext.Provider value={{
              ...state,
              name, setName,
              psw, setPsw,
              userid, img,
              login, setLogin,
              pname, setPname,
              price, setPrice,
              edit, setEdit,
              editID, setEditID,
              user, setUser,
              products, setProducts, editProd,
              deleteProd, signOut,
              handSignIn, useEffect,
              clearCart,inc,dec,
              addCart,added
          }}>
              {children}
          </AppContext.Provider>
      )
  }

export const UseGlobalContext = () => {
    return useContext(AppContext)
}