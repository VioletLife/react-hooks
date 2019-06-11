import React, {useState, useEffect, useContext} from 'react'
import useLeavePage from "./useLeavePage";
export default ()=>{
    const [count,setCount] =useState(0);
    const [age,setAge] =useState(20);
    const [userName,setUserName]=useState('ZRL');
    const leaveStatus=useLeavePage(new Date().getTime().toString(16))
    let updateUserInformation=()=>{
        setCount(count+1);
        setUserName('190611');
        setAge(89);
    }
    useEffect(()=>{
        document.title='用户信息页面'
    })
    return (<div style={{backgroundColor:leaveStatus?'red':'green'}}>
        <p>You clicked {count} times</p>
        <span>{age}</span>
        <span>{userName}</span>
        <button onClick={updateUserInformation}>
            Click Me
        </button>
    </div>);
}
