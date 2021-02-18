import React from 'react'

export default function InfoCard(props) {
    console.log(props.info)
    
    return (
        <div>
            <h2>{props.info.title}</h2>
            <p>{props.info.explanation}</p>
        </div>
    )
}