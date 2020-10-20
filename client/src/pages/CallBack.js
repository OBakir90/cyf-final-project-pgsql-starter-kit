import React, { useState, useEffect } from "react";


const CallBack = ()=>{
    const [userName, setUserName] = useState(null);
    useEffect(() => {

        fetch(`https://dev-graduate-directory.herokuapp.com/api/callback`)
      .then(res => res.json())
      .then(data => {
        setUserName(data);

    });
    },[]);
    console.log(userName);

}

export default CallBack;