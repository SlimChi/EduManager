import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const BreadcrumbNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const paths = location.pathname.split('/').filter(Boolean);

    const getDisplayName = (path) => {
        const map = {
            'disciplines': 'Disciplines',
            'math': 'Mathématiques',
            'science': 'Sciences Physiques',
            'chapitres': 'Chapitres',
            'sequences': 'Séquences',
            'seances': 'Séances'
        };
        return map[path] || path;
    };

    return (
        <Breadcrumb>
            {paths.map((path, index) => (
                <Breadcrumb.Item
                    key={index}
                    active={index === paths.length - 1}
                    onClick={() => index < paths.length - 1 ?
                        navigate(`/${paths.slice(0, index + 1).join('/')}`) : null}
                    className={index < paths.length - 1 ? 'cursor-pointer' : ''}
                >
                    {getDisplayName(path)}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default BreadcrumbNav;