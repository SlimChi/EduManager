import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import BackButton from "../components/navigation/BackButton";
import { SPECIAL_ACTIVITIES } from '../config/activityConfig';
import {
    FaChartLine,
    FaShapes,
    FaCode,
    FaCalculator,
    FaBook,
    FaRulerCombined,
    FaChartBar,
    FaCube,
    FaProjectDiagram,
    FaBrain
} from 'react-icons/fa';
import {FcBullish, FcHeadset, FcRuler} from "react-icons/fc";
import {LucideBrain} from "lucide-react";
import {TbMathFunction} from "react-icons/tb";
import '../styles/chapitreactconfig.css';

const ChapitreActivitiesPage = () => {
    const { discipline, classId, programmeType, chapitreId } = useParams();
    const navigate = useNavigate();

    // Récupère les données spécifiques au chapitre
    const chapitreData = SPECIAL_ACTIVITIES[discipline]?.[classId]?.[programmeType]?.[chapitreId] || {};
    const { chapter, activities = [] } = chapitreData;
    const statsActivities = chapitreData?.stats?.activities || [];
    const probasActivities = chapitreData?.probas?.activities || [];
    const handleSelectActivity = (path) => {
        navigate(`/programmes/${discipline}/${classId}/${programmeType}/activites/${path}`);
    };

    // Titre personnalisé selon le chapitre
    const getChapitreTitle = () => {
        switch(chapitreId) {
            case 'stats': return 'Statistiques et probabilités';
            case 'algebre': return 'Algèbre – Analyse';
            case 'geometrie': return 'Géométrie';
            case 'algo': return 'Algorithmique et programmation';
            case 'Calculs_commerciaux': return 'Calculs commerciaux et financiers';
            default: return chapitreId;
        }
    };

    // Icône personnalisée selon le type d'activité
    const getActivityIcon = (activityType) => {
        switch (activityType) {
            case 'stats':
            case 'StatUneVariable':
                return <span className="emoji me-2">📊</span>;
            case 'geometrie':
            case 'Pythagore':
                return <span className="emoji me-2">📐</span>;
            case 'algebre':
            case 'Analyse':
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
            <BackButton />
        <div className="p-4">

            {/* Afficher le chapitre s'il existe */}
            {chapter && (
                <div className="chapter-section mb-4 p-4 rounded shadow-sm position-relative"
                     style={{
                         background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
                         borderLeft: '5px solid #3a7bd5'
                     }}>

                    {/* Titre stylé */}
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
                        <FaBook className="ms-2" style={{ color: '#3a7bd5' }} />
                    </h2>

                    {/* Bouton positionné en haut à droite */}
                    <Button
                        variant="primary"
                        onClick={() => handleSelectActivity(chapter.path)}
                        className="position-absolute top-0 end-0 m-3 d-flex align-items-center"
                        style={{
                            background: 'linear-gradient(to right, #3a7bd5, #00d2ff)',
                            border: 'none',
                            borderRadius: '30px',
                            padding: '8px 20px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                    >
                        <FaBook className="me-2" />
                        <span style={{ fontWeight: 500 }}>Accéder au chapitre</span>
                    </Button>

                    {/* Petite décoration mathématique optionnelle */}
                    <div className="position-absolute bottom-0 end-0 me-3 mb-2" style={{ opacity: 0.1 }}>
                        <svg width="80" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z M12 12L22 7 M12 12L2 7 M12 12V22 M22 7V17L12 22L2 17V7" stroke="#3a7bd5" strokeWidth="2"/>
                        </svg>
                    </div>
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
                        style={{
                            borderLeft: '4px solid #0d6efd',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <div className="d-flex align-items-center">
                            {getActivityIcon(activity.type || chapitreId)}
                            <span className="fw-bold">Activité {index + 1}:</span>
                            <span className="ms-2">{activity.title}</span>
                        </div>
                        <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSelectActivity(activity.path);
                            }}
                            className="d-flex align-items-center"
                        >
                            <FaBook className="me-1" />
                            Commencer
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {/* Afficher uniquement pour les chapitres de Statistiques */}
            {chapitreId === 'stats' && 'probas' &&  (
                <>
                    <h3 className="title-statistiques mb-4">Statistiques <span className="emoji">📊</span></h3>
                    <ListGroup className="mb-5">
                        {statsActivities.map((activity, index) => (
                            <ListGroup.Item
                                key={`stat-${activity.id}`}
                                action
                                onClick={() => handleSelectActivity(activity.path)}
                                className="d-flex justify-content-between align-items-center mb-3 p-3 shadow-sm rounded"
                                style={{ borderLeft: '4px solid #0d6efd' }}
                            >
                                <div className="d-flex align-items-center">
                                    {getActivityIcon('stats')}
                                    <span className="fw-bold">Activité {index + 1} - Statistiques :</span>
                                    <span className="ms-2">{activity.title}</span>
                                </div>
                                <Button variant="outline-primary" size="sm">
                                    <FaBook className="me-1" /> Commencer
                                </Button>
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
                                style={{ borderLeft: '4px solid #198754' }}
                            >
                                <div className="d-flex align-items-center">
                                    {getActivityIcon('probabilités')}
                                    <span className="fw-bold"> Activité {index + 1} - Probabilités :</span>
                                    <span className="ms-2">{activity.title}</span>
                                </div>
                                <Button variant="outline-success" size="sm">
                                    <FaBook className="me-1" /> Commencer
                                </Button>
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
