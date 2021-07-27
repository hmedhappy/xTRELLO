import React from 'react'
import SingleMessage from "./SingleMessage"

export default function ChatPanel() {
    return (
        <>
          {[...new Array(10)].map(e=><SingleMessage/>)}   
        </>
    )
}
