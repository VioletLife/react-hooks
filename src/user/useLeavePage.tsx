import React,{useState,useEffect} from 'react';
export default (userId:string)=>{
    const [isLeave,setIsLeave]=useState(false);
    let handleLeaveStatus=(status:boolean)=>{
        setIsLeave(status)
    }
    useEffect(()=>{

        setIsLeave(false);
        return ()=>{
            setIsLeave(true);
        }
    }, [isLeave])
    return isLeave;
}
