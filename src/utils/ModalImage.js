import React from 'react';
import {FaTimes} from 'react-icons/fa';

const ModalImage = ({imageUrl, altText, onClose}) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '20px'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    position: 'relative',
                    maxWidth: '120%',
                    maxHeight: '120%'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '0',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                    onClick={onClose}
                >
                    <FaTimes/>
                </button>
                <img
                    src={imageUrl}
                    alt={altText}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '80vh',
                        border: '2px solid white',
                        borderRadius: '8px'
                    }}
                />
                <p style={{color: 'white', textAlign: 'center', marginTop: '10px'}}>
                    {altText} - Cliquez en dehors pour fermer
                </p>
            </div>
        </div>
    );
};

export default ModalImage;