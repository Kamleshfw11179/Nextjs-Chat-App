import React, {useContext} from "react";
import { Context } from "../context";
import {useRouter} from "next/router"
import axios from "axios";
// 
export default function Auth() {
  const {username,secret,setUsername,setSecret} = useContext(Context)
const router = useRouter()

  function onSubmit(e){
    e.preventDefault()
    try{
      axios.put("https://api.chatengine.io/users/",{username,secret},
      {headers:{"PRIVATE-KEY":"f71e7bbe-8df2-4657-ba3a-4a10aa418c7a"}})
      .then((res)=>{
        router.push("/chats")
      })
    }
    catch(err){
      console.log(err)
    }

  }
  return( 
    <>
  <div className="background">auth</div>;
  <div className="auth-container">
    <form className="auth-form" onSubmit={(e)=>{onSubmit(e)}}>
    <div className="auth-title">
    NextJS Chat
    </div>
    <div className="input-container">
      <input placeholder="email" className="text-input" onChange={e=>setUsername(e.target.value)}/>
      <input type="password" placeholder="password" className="text-input" onChange={e=>setSecret(e.target.value)}/>
    </div>
    <button type="submit" className="submit-button">
      Login/Signup
    </button>
    </form>
  </div>
  </>
  )
}
