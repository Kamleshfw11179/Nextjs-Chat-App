import React ,{useState,useEffect,useContext} from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic"


const ChatEngine = dynamic(()=>
  import("react-chat-engine").then((module)=>module.ChatEngine)
)

const MessageFormSocial = dynamic(()=>
  import("react-chat-engine").then((module)=>module.MessageFormSocial)
)
export default function Chats() {
  const {username,secret} = useContext(Context)
  console.log(username,secret)
  const [showChat,setShowchat] = useState(false);
  const router = useRouter()
  useEffect(()=>{
    if(typeof document!==undefined){
      setShowchat(true)
    }
  },[])
  useEffect(()=>{
    if(username.length==0||secret.length==0){
      router.push("/")
    }
  },[username,secret])
  if(!showChat) return(<div></div>)
  return <div className="background">
    <div className="shadow">
      <ChatEngine
      height='calc(100vh-200px'
      projectID="Please use your own project id"
      userName={username}
      userSecret={secret}
      renderNewMessageForm={()=><MessageFormSocial />}
      >

      </ChatEngine>
    </div>
  </div>;
}

// pages/chats.js
