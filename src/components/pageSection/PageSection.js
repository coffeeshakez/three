import React from 'react';
import './PageSectionStyles.css';

const PageSection = ({title, children}) => (
    <div className="page-section">
        <h1 className="page-section__heading">{title}</h1>
        <div className="page-section__content">{children}</div>
    </div>
)

export default PageSection;
