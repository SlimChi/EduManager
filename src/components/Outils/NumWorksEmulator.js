import React, { useState } from 'react';

const NumWorksEmulator = () => {
    const [status, setStatus] = useState('loading'); // 'loading', 'ready', 'error'

    return (
        <div style={{
            position: 'relative',
            minHeight: '500px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            padding: '20px'
        }}>
            {status === 'error' && (
                <div className="text-center">
                    <p>Impossible de charger la calculatrice</p>
                    <a
                        href="https://www.numworks.com/simulator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Ouvrir dans un nouvel onglet
                    </a>
                </div>
            )}

            <iframe
                src="https://www.numworks.com/simulator/"
                style={{
                    width: '100%',
                    height: '700px',
                    border: 'none',
                    display: status === 'ready' ? 'block' : 'none',

                }}
                onLoad={() => setStatus('ready')}
                onError={() => setStatus('error')}
                allowFullScreen
            />

            {status === 'loading' && (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Chargement...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NumWorksEmulator;