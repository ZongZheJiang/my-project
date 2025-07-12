import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, projectType, body, imageSrc, link, openInNewTab = null }) => {
    const navigate = useNavigate();
    
    // Check if link is external
    const isExternal = link?.startsWith('http') || link?.startsWith('//');
    
    // Auto-decide: external links open in new tab by default
    const shouldOpenInNewTab = openInNewTab !== null 
        ? openInNewTab 
        : isExternal;

    const handleClick = () => {
        if (isExternal) {
            if (shouldOpenInNewTab) {
                window.open(link, '_blank', 'noopener,noreferrer');
            } else {
                window.location.href = link;
            }
        } else {
            navigate(link);
        }
    };

    const getProjectColor = (type) => {
        switch (type) {
            case 'Engineering':
                return 'badge-secondary';
            case 'Consultancy':
                return 'badge-accent';
            case 'Web Development':
                return 'badge-info';
            default:
                return 'badge-neutral';
        }
    };
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={imageSrc}
                    alt={title} 
                    className="w-full h-48 object-cover"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div class={`badge ${getProjectColor(projectType)} h-8 w-32 whitespace-nowrap`}>{projectType}</div>
                </h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleClick}>
                        Find Out More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;