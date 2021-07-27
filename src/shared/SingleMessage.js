import React, { useEffect, useState } from 'react'
import  randomstring  from "randomstring";

export default function SingleMessage({message:{content,username:current}={}}) {
    const [user, ] = useState(JSON.parse(localStorage.getItem('auth')))
    const [hash, sethash] = useState(randomstring.generate(7))
    useEffect(() => {
        sethash(randomstring.generate(7)) ;
    }, [])
    return (
        <>
            <div className="single-messagee" style={current===user.username ? {backgroundColor: '#9e9ecca1',flexDirection:'row-reverse',borderRadius:'35px 30px 0px 30px'}:{borderRadius: '35px 30px 35px 0px'}}>
                <img alt="mes" width="35" src={`https://i.pravatar.cc/150?u=${hash}`} style={{borderRadius:"50%",margin:"5px"}}/>
                <p style={{color:'white'}}>{content}</p>
            </div>

            <style jsx>{`
            .single-messagee{
                background-color: #4f5962a8;
                border-radius: 10px;
                padding: 5px;
                margin: 5px 5px;
                width: 85%;
                display: flex;
                justify-content: end;
                align-items: end;
            }
            
            `}</style>
        </>
    )
}
