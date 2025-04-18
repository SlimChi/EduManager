import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';
import BackButton from "../components/navigation/BackButton";
import {SPECIAL_ACTIVITIES} from '../config/activityConfig';
import {FaBook} from 'react-icons/fa';
import '../styles/chapitreactconfig.css';

const ChapitreActivitiesPage = () => {
    const {discipline, classId, programmeType, chapitreId} = useParams();
    const navigate = useNavigate();

    // Récupère les données spécifiques au chapitre
    const chapitreData = SPECIAL_ACTIVITIES[discipline]?.[classId]?.[programmeType]?.[chapitreId] || {};
    const {chapter, activities = []} = chapitreData;
    const statsActivities = chapitreData?.stats?.activities || [];
    const probasActivities = chapitreData?.probas?.activities || [];

    const handleSelectActivity = (path, e) => {
        if (e) e.stopPropagation();
        navigate(`/programmes/${discipline}/${classId}/${programmeType}/activites/${path}`);
    };

    // Icône personnalisée selon le type d'activité
    const getActivityIcon = (activityType) => {
        switch (activityType) {
            case 'stats':
                return <span className="emoji me-2">📊</span>;
            case 'geometrie':
                return <span className="emoji me-2">📐</span>;
            case 'algebre':
                return <span className="emoji me-2">🔢</span>;
            case 'algo':
                return <span className="emoji">💻</span>;
            case 'Calculs_commerciaux':
                return <span className="emoji me-2">💰</span>;
            case 'volumes':
                return <span className="emoji me-2">📦</span>;
            case 'aires':
                return <span className="emoji me-2">🔲</span>;
            case 'problemes':
                return <span className="emoji me-2">🧩</span>;
            case 'raisonnement':
                return <span className="emoji me-2">🧠</span>;
            case 'probabilités':
                return <span className="emoji me-2">🎲</span>;
            case 'acoustique':
                return <span className="emoji me-2">🎧</span>;
            default:
                return <span className="emoji me-2">📚</span>;
        }
    };

    return (
        <>
            <BackButton/>
            <div className="p-4">
                {chapter && (
                    <div className="chapter-section mb-4 p-4 rounded shadow-sm position-relative"
                         style={{
                             background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
                             borderLeft: '5px solid #3a7bd5'
                         }}>
                        <h2 className="mb-3 fw-bold" style={{
                            color: '#2c3e50',
                            fontSize: '1.8rem',
                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            letterSpacing: '0.5px'
                        }}>
                            <span style={{
                                background: 'linear-gradient(to right, #3a7bd5, #00d2ff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700
                            }}>
                                {chapter.title}
                            </span>
                            <FaBook className="ms-2" style={{color: '#3a7bd5'}}/>
                        </h2>

                        <button
                            onClick={(e) => handleSelectActivity(chapter.path, e)}
                            className="position-absolute top-0 end-0 m-3 d-flex align-items-center btn btn-primary"
                            style={{
                                background: 'linear-gradient(to right, #3a7bd5, #00d2ff)',
                                border: 'none',
                                borderRadius: '30px',
                                padding: '8px 20px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <FaBook className="me-2"/>
                            <span style={{fontWeight: 500}}>Accéder au chapitre</span>
                        </button>
                    </div>
                )}

                <h3 className="mb-4">Activités du chapitre</h3>
                <ListGroup>
                    {activities.map((activity, index) => (
                        <ListGroup.Item
                            key={activity.id}
                            action
                            onClick={() => handleSelectActivity(activity.path)}
                            className="d-flex justify-content-between align-items-center mb-3 p-3 shadow-sm rounded"
                            style={{borderLeft: '4px solid #0d6efd', transition: 'all 0.3s ease'}}
                        >
                            <div className="d-flex align-items-center">
                                {getActivityIcon(activity.type || chapitreId)}
                                <span className="fw-bold">Activité {index + 1}:</span>
                                <span className="ms-2">{activity.title}</span>
                            </div>
                            <span
                                className="text-primary d-flex align-items-center"
                                style={{cursor: 'pointer'}}
                                onClick={(e) => handleSelectActivity(activity.path, e)}
                            >
                                <FaBook className="me-1"/>
                                Commencer
                            </span>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                {chapitreId === 'stats' && (
                    <>
                        <h3 className="title-statistiques mb-4">Statistiques <span className="emoji">📊</span></h3>
                        <ListGroup className="mb-5">
                            {statsActivities.map((activity, index) => (
                                <ListGroup.Item
                                    key={`stat-${activity.id}`}
                                    action
                                    onClick={() => handleSelectActivity(activity.path)}
                                    className="d-flex justify-content-between align-items-center mb-3 p-3 shadow-sm rounded"
                                    style={{borderLeft: '4px solid #0d6efd'}}
                                >
                                    <div className="d-flex align-items-center">
                                        {getActivityIcon('stats')}
                                        <span className="fw-bold">Activité {index + 1} - Statistiques :</span>
                                        <span className="ms-2">{activity.title}</span>
                                    </div>
                                    <span
                                        className="text-primary d-flex align-items-center"
                                        style={{cursor: 'pointer'}}
                                        onClick={(e) => handleSelectActivity(activity.path, e)}
                                    >
                                        <FaBook className="me-1"/>
                                        Commencer
                                    </span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <h3 className="title-probabilites mb-4">Probabilités <span className="emoji">🎲</span></h3>
                        <ListGroup>
                            {probasActivities.map((activity, index) => (
                                <ListGroup.Item
                                    key={`proba-${activity.id}`}
                                    action
                                    onClick={() => handleSelectActivity(activity.path)}
                                    className="d-flex justify-content-between align-items-center mb-3 p-3 shadow-sm rounded"
                                    style={{borderLeft: '4px solid #198754'}}
                                >
                                    <div className="d-flex align-items-center">
                                        {getActivityIcon('probabilités')}
                                        <span className="fw-bold"> Activité {index + 1} - Probabilités :</span>
                                        <span className="ms-2">{activity.title}</span>
                                    </div>
                                    <span
                                        className="text-success d-flex align-items-center"
                                        style={{cursor: 'pointer'}}
                                        onClick={(e) => handleSelectActivity(activity.path, e)}
                                    >
                                        <FaBook className="me-1"/>
                                        Commencer
                                    </span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </>
                )}
            </div>
        </>
    );
};

export default ChapitreActivitiesPage;