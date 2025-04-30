import GeomAct2 from '../pages/Maths/seconde/geometrie/GeomAct2';
import FonctionCarre from '../pages/Maths/seconde/algebre/FonctionCarre';

export const SPECIAL_ACTIVITIES = {
    math: {
        Seconde: {
            ProgrammeSecondeMaths: {
                stats: {
                    stats: {
                        activities: [
                            {
                                id: 1,
                                title: 'Statistique à une variable',
                                path: 'statistiques/stat-une-variable',
                                component: 'StatUneVariableSeconde',
                            },
                            {
                                id: 2,
                                title: 'Représentations graphiques',
                                path: 'statistiques/stat-une-variable2',
                                component: 'StatUneVariableAct2',
                            },
                            {
                                id: 3,
                                title: 'Études statistiques',
                                path: 'statistiques/stat-une-variable3',
                                component: 'StatUneVariableAct3',
                            },
                        ],
                    },
                    probas: {
                        activities: [
                            {
                                id: 1,
                                title: 'Observer la fluctuation des fréquences',
                                path: 'probabilites/Act1Proba',
                                component: 'Act1Proba',
                            },
                            {
                                id: 2,
                                title: 'Probabilités',
                                path: 'probabilites/Act2proba',
                                component: 'Act2proba',
                            },
                        ],
                    },
                },
                algebre: {
                    activities: [
                        {
                            id: 1,
                            title: 'Équations du premier degré',
                            path: 'algebre/equations-second-degre-test',
                            component: 'EquationsPremierDegreTest',
                        },
                        {
                            id: 2,
                            title: 'Activite 2',
                            path: 'algebre/equations-premier-degre',
                            component: 'Act3EquationsPremierDegre',
                        },
                        {
                            id: 3,
                            title: 'Fonctions carre',
                            path: 'algebre/fonction-carre',
                            component: 'FonctionCarre',
                        },
                        {
                            id: 4,
                            title: 'Exercices fonctions carre',
                            path: 'algebre/exercices-fonction-carre',
                            component: 'ExercicesFonctionCarre',
                        },
                    ],
                },
                geometrie: {
                    chapter: {
                        id: 0,
                        title:
                            'Chapitre 3 - Introduction au calcul des périmètres et des aires',
                        path: 'geometrie/Chapitre9pythagor',
                        component: 'Chapitre9pythagor',
                    },
                    activities: [
                        {
                            id: 1,
                            title: "Calculs d'aires et de volumes",
                            path: 'geometrie/GeometrieAct1',
                            component: 'GeometrieAct1',
                        },
                        {
                            id: 2,
                            title: 'CALCULER DES PÉRIMÈTRES ET DES AIRES',
                            path: 'geometrie/GeometrieAct2',
                            component: 'GeomAct2',
                        },
                        {
                            id: 3,
                            title: 'Quel logo choisir ?',
                            path: 'geometrie/pythagore',
                            component: 'GeomAct3Quellogochoisir',
                        },
                        {
                            id: 4,
                            title: 'Théorème de Thalès',
                            path: 'geometrie/thales',
                            component: 'GeomAct4Thales',
                        },
                    ],
                },
                cointervention: {
                    mrc: {
                        activities: [
                            {
                                id: 1,
                                title: 'Co-intervention Calculs commerciaux ',
                                path: 'cointervention/cointervention1',
                                component: 'CalculCommerciauxCoIntervention',
                            },
                            {
                                id: 2,
                                title: 'Co-intervention statistiques',
                                path: 'cointervention/cointervention2',
                                component: 'CalculsCommerciauxCoIntervention2',
                            },
                        ],
                    },
                    maintenances: {
                        activities: [
                            {
                                id: 1,
                                title: 'Co-intervention maintenances',
                                path: 'cointervention/cointervention2',
                                component: 'MaintenancesCoIntervention',
                            },
                        ],
                    },
                },
            },
        },
        Terminale: {
            ProgrammeTerminaleMathsB: {
                geometrie: {
                    chapter: {
                        id: 0,
                        title:
                            'Chapitre 4 - Rappels première - Vecteurs',
                        path: 'geometrie/rappel-vecteur',
                        component: 'RappelVecteur',
                    },
                    activities: [
                        {
                            id: 1,
                            title: 'Pylônes du mont Chamonix ',
                            path: 'geometrie/act1-pylones',
                            component: 'Act1GeometrieVecteur',
                        },
                        {
                            id: 2,
                            title: 'Téléphérique 🚠',
                            path: 'geometrie/act2-telepherique',
                            component: 'Act2Geometrie',
                        },
                        {
                            id: 3,
                            title: 'Une histoire de tipi 🏕️',
                            path: 'geometrie/act3-tipi',
                            component: 'Act3Geometrie',
                        },
                        {
                            id: 4,
                            title: 'Découpe avec une fraiseuse 🏕️',
                            path: 'geometrie/act4-fraiseuse',
                            component: 'Act4Geometrie',
                        },
                    ],
                },
            },
        },
    },
    science: {
        Seconde: {
            ProgrammeSecondePhysique: {
                acoustique: {
                    activities: [
                        {
                            id: 1,
                            title: 'TP Son ',
                            path: 'acoustique/tp-son',
                            component: 'TPSon',
                        },
                        {
                            id: 2,
                            title: 'ÉVALUATION : Comment isoler une pièce du bruit ?',
                            path: 'acoustique/evaluation-son',
                            component: 'EvaluationAcoustic.js',
                        },
                    ],
                },
                optique: {
                    activities: [
                        {
                            id: 1,
                            title: 'TP1 : Décomposition de la lumière blanche ',
                            path: 'optique/tp-optique',
                            component: 'TP1Optique',
                        },
                        {
                            id: 2,
                            title: 'TP2 : Synthèse soustractive des couleurs ',
                            path: 'optique/tp-optique2',
                            component: 'TP2Optique',
                        },
                    ],
                },
                mecanique: {
                    activities: [
                        {
                            id: 1,
                            title: 'Représenter et caractériser une action mécanique',
                            path: 'mecanique/force',
                            component: 'Act1ForceMeca',
                        },
                        {
                            id: 2,
                            title: 'inventaire des actions mécaniques et conditions d’équilibre',
                            path: 'mecanique/force2',
                            component: 'Act2et3ForceMecanique',
                        },
                    ],
                }
            },
        },
        Terminale: {
            ProgrammeTerminalePhysique3: {
                signaux: {
                    activities: [
                        {
                            id: 1,
                            title: 'TP : Synthèse soustractive des couleurs',
                            path: 'signaux/act1signaux',
                            component: 'Act1Signaux',
                        },
                    ],
                },
            },
        },
    },
};
