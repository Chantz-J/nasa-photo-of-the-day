import React from 'react'

export default function Picture(props) {
    return (
        <div>
            <img src={props.info.hdurl} alt={props.info.title} width='600px'></img>
            <p>{props.info.copyright}</p>
        </div>
    )
}