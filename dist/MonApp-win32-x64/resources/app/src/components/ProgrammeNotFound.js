// src/components/ProgrammeNotFound.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const ProgrammeNotFound = () => {
    const { discipline, niveau } = useParams();

    return (
        <Alert variant="danger" className="m-4">
            <h4>Programme non configuré</h4>
            <p>Le programme pour {discipline} ({niveau}) n'a pas été trouvé.</p>
            <p>Veuillez vérifier la configuration.</p>
        </Alert>
    );
};

export default ProgrammeNotFound;