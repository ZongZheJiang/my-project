import React from "react";


const Hero = ({ title, body, imageSrc }) => { 
    return (
        <div
        class="hero min-h-screen"
        style={{ backgroundImage: `url(${imageSrc})` }}>
            <div class="hero-overlay"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">{title}</h1>
                <p class="mb-5">
                    {body}
                </p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );

}

export default Hero;