import React from 'react';
import './CardStyles.css';
import { Link } from 'gatsby';

export const Card = ({title, description, imageUrl, url, linkState}) => {
    return(
        <Link to={url} state={linkState} className="card">
            <img className="card__image" src={imageUrl}></img>
            <div className="card-info-container">
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
        </Link>
    )
}

export default Card;