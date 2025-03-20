import React from 'react';

const Card = ({ title, body, imageSrc }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
            <img
                src={imageSrc}
                alt={title} />
            </figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Find Out More (Coming Soon)</button>
            </div>
            </div>
        </div>
    );
}

export default Card;