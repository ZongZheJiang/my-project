import React from 'react';
import selfPortrait from '../assets/self-portrait.jpeg';

const IntroBanner = () => {    
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                src={selfPortrait}
                alt="Self Portrait" 
                style={{ width: '100%', height: 'auto', maxWidth: '400px' }}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Jiang Zong Zhe</h2>
                <p>Hello! I am a Year 2 Computer Science student from Nanyang Technological University. I enjoy creating applications.</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}   

export default IntroBanner;