import React, { useEffect, useState } from 'react'
import  randomstring  from "randomstring";

export default function SingleMessage() {

    const [hash, sethash] = useState(randomstring.generate(7))
    const [ramsomText, setramsomText] = useState("")
    useEffect(() => {
        sethash(randomstring.generate(7)) ;

        fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
        .then(response=>response.json())
        .then(data=>setramsomText(data[0]))
    }, [])
    return (
        <>
            <div className="single-messagee">
                <img alt="mes" width="35" src={`https://i.pravatar.cc/150?u=${hash}`} style={{borderRadius:"50%",margin:"5px"}}/>
                <p style={{color:'white'}}>{ramsomText}</p>
            </div>

            <style jsx>{`
            .single-messagee{
                background-color: #4f5962a8;
                border-radius: 10px;
                padding: 5px;
                margin: 5px 5px;
                width: 85%;
                display: flex;
                justify-content: center;
                align-items: end;
            }
            
            `}</style>
        </>
    )
}
