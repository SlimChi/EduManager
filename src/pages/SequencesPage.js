import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import BackButton from "../components/navigation/BackButton";
import { SPECIAL_ACTIVITIES } from '../config/activityConfig';

const SequencesPage = () => {
    const { discipline, classId, programmeType } = useParams();
    const navigate = useNavigate();

    // Récupère les chapitres disponibles
    const programmeChapitres = SPECIAL_ACTIVITIES[discipline]?.[classId]?.[programmeType] || {};

    const handleSelectChapitre = (chapitreId) => {
        navigate(`/programmes/${discipline}/${classId}/${programmeType}/sequences/${chapitreId}`);
    };

    return (
        <div className="p-4">

            <BackButton />
            <h2>Chapitres disponibles</h2>
            <p>Sélectionnez un chapitre :</p>

            <ListGroup>
                {Object.keys(programmeChapitres).map((chapitreId) => (
                    <ListGroup.Item
                        key={chapitreId}
                        action
                        onClick={() => handleSelectChapitre(chapitreId)}
                        className="d-flex justify-content-between align-items-center p-3"
                    >
                        <span>{chapitreId === 'stats' ? 'Statistiques' :
                            chapitreId === 'algebre' ? 'Algèbre' :
                                chapitreId === 'geometrie' ? 'Géométrie' : chapitreId

                        }
                        </span>
                        <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSelectChapitre(chapitreId);
                            }}
                        >
                            Voir activités
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default SequencesPage;