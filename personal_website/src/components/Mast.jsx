import React from 'react'
import selfie1 from '../assets/spongebob.png'

export default function Mast(props){
    const {message} = props;
    return(
        <section className='mast'>
            <div className='selfie-container'>
                <img src={selfie1} alt="selfie" />
            </div>
            <div className='mast-para'>
                <p>
                    Hi I'm <em>Shintaro Aso</em>. {message}
                </p>
            </div>
        </section>
    );
}