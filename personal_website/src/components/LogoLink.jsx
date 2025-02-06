import React from 'react'

export default function LogoLink(props){
    const {name, img, source} = props;
    return(
        <li>
            <a href={source}><img src={img} alt={name} /></a>
        </li>
    );
}