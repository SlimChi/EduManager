import GeomAct2 from '../pages/Maths/seconde/geometrie/GeomAct2';
import FonctionCarre from '../pages/Maths/seconde/algebre/FonctionCarre';
import ProgrammePremierePhysique from "../data/ProgrammePremierePhysique";
import Act3et4stat2Var from "../pages/Maths/première/StatProba/Statistiques/Act3et4stat2Var";

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
                            {
                                id: 4,
                                title: ' Comment sont réparties les dépenses du club ?',
                                path: 'statistiques/stat-une-variable4',
                                component: 'StatUneVarAct4et5',
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
                            {
                                id: 3,
                                title: 'Probabilités',
                                path: 'probabilites/Act3proba',
                                component: 'EchantillonsAleatoiresAct1',
                            },
                            {
                                id: 4,
                                title: 'Activite 4',
                                path: 'probabilites/Act4proba',
                                component: 'EvaluerProbabiliteEvenement',
                            },
                            {
                                id: 5,
                                title: 'Activite 5',
                                path: 'probabilites/Act5proba',
                                component: 'ActDénombrerDonnéesArbre',
                            },
                            {
                                id: 6,
                                title: 'Bilan & exercices',
                                path: 'probabilites/Act6proba',
                                component: 'bilanExercicesProba',
                            },
                            {
                                id: 7,
                                title: 'Activite 7',
                                path: 'probabilites/Act7proba',
                                component: 'ExerciceProba',
                            },
                            {
                                id: 8,
                                title: 'Activite 8',
                                path: 'probabilites/Act8proba',
                                component: 'ExercicesProba2',
                            },
                            {
                                id: 9,
                                title: 'Activite 9',
                                path: 'probabilites/Act9proba',
                                component: 'ExerciceProba3',
                            }

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
                            title: 'Exercices equation du premier degre',
                            path: 'algebre/exercices-equation-premier-degre',
                            component: 'ExerciceEquationPremierDeg',
                        },
                        {
                            id: 4,
                            title: 'Fonctions carre',
                            path: 'algebre/fonction-carre',
                            component: 'FonctionCarre',
                        },
                        {
                            id: 5,
                            title: 'Exercices fonctions carre',
                            path: 'algebre/exercices-fonction-carre',
                            component: 'ExercicesFonctionCarre',
                        },
                        {
                            id: 6,
                            title: 'Evaluation fonction carre',
                            path: 'algebre/evaluation-fonction-carre',
                            component: 'EvaluationFonctionCarre',
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
                                title: 'Co-intervention Calculs commerciaux 1',
                                path: 'cointervention/cointervention1',
                                component: 'CalculCommerciauxCoIntervention',
                            },
                            {
                                id: 2,
                                title: 'Co-intervention Calculs commerciaux 2',
                                path: 'cointervention/cointervention2',
                                component: 'CalculsCommerciauxCoIntervention2',
                            },
                            {
                                id: 3,
                                title: 'Co-intervention Calculs commerciaux 3',
                                path: 'cointervention/cointervention3',
                                component: 'CalculsCommerciauxCoIntervention3',
                            },
                            {
                                id: 4,
                                title: 'Co-intervention Calculs commerciaux 4',
                                path: 'cointervention/cointervention4',
                                component: 'CalculsCommerciauxCoIntervention4',
                            }
                        ],
                    },
                    maintenances: {
                        activities: [
                            {
                                id: 1,
                                title: 'Co-intervention maintenances',
                                path: 'cointervention/cointerventionmaintenance1',
                                component: 'CoInterventionMaintenance1',
                            },
                            {
                                id: 2,
                                title: 'Co-intervention maintenances',
                                path: 'cointervention/cointerventionmaintenance2',
                                component: 'Cointervention1McdBtp',
                            },
                            {
                                id: 3,
                                title: 'Co-intervention maintenances',
                                path: 'cointervention/cointerventionmaintenance3',
                                component: 'Cointervention1Mspc',
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
                        {
                            id: 5,
                            title: 'Exercices vecteurs 🏕️',
                            path: 'geometrie/exercices-vecteurs',
                            component: 'ExercicesVecteurs',
                        },
                        {
                            id: 6,
                            title: 'Exercices vecteurs 🏕️ Suite',
                            path: 'geometrie/exercices-vecteurs2',
                            component: 'ExercicesVecteursPart2',
                        }
                    ],
                },
            },
        },
        Première: {
            ProgrammePremiereMaths: {
                stats: {
                    stats: {
                        activities: [
                            {
                                id: 1,
                                title: 'Statistique à deux variable',
                                path: 'statistiques/stat-deux-variable',
                                component: 'StatDeuxVariableSPremiere',
                            },
                            {
                                id: 2,
                                title: 'Représentations graphiques',
                                path: 'statistiques/stat-deux-variable2',
                                component: 'Act3et4stat2Var',
                            }
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


                        ],
                    },
                }
            }
        }
    },
    science: {
        Seconde: {
            ProgrammeSecondePhysique: {
                securite: {
                    activities: [
                        {
                            id: 1,
                            title: 'Sécurité chimie - Pictogrammes de sécurité',
                            path: 'securite/securite-chimie',
                            component: 'PictoSecuriteSeconde',
                        },
                    ],
                },
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
                        {
                            id: 3,
                            title: 'Exercices optiques ',
                            path: 'optique/exercices-optique',
                            component: 'ExercicesOptic',
                        },
                        {
                            id: 4,
                            title: 'QCM optiques ',
                            path: 'optique/exercices-optique2',
                            component: 'QcmOptic2nd',
                        },
                    ],
                },
                mecanique: {
                    activities: [
                        {
                            id: 0,
                            title: 'Délimiter un système et choisir un référentiel adapté.',
                            path: 'mecanique/referentiel-meca',
                            component: 'Act1ReferentielMeca',
                        },
                        {
                            id: 1,
                            title: 'Reconnaître un état de repos ou de mouvement d\'un objet par rapport à un autre objet..',
                            path: 'mecanique/trajectoire',
                            component: 'Act1et2Mecanic',
                        },
                        {
                            id: 2,
                            title: 'Représenter et caractériser une action mécanique',
                            path: 'mecanique/force',
                            component: 'Act1ForceMeca',
                        },
                        {
                            id: 3,
                            title: 'inventaire des actions mécaniques et conditions d’équilibre',
                            path: 'mecanique/force2',
                            component: 'Act2et3ForceMecanique',
                        },
                        {
                            id: 4,
                            title: 'Evaluation : Actions mécaniques',
                            path: 'mecanique/EvaluationForce',
                            component: 'EvaluationForce',
                        },
                        {
                            id: 5,
                            title: 'Représenter et caractériser une action mécanique',
                            path: 'mecanique/EvaluationForce2',
                            component: 'EvaluationMecaniqueForce',
                        },
                        {
                            id: 6,
                            title: 'QCM : Actions mécaniques',
                            path: 'mecanique/QCMASSP',
                            component: 'PremierCoursASSP',
                        },

                    ],
                }
            },
        },
        Première: {
            ProgrammePremierePhysique: {
                electricite: {
                    activities: [
                        {
                            id: 1,
                            title: 'Déterminer une puissance\n' +
                                'électrique',
                            path: 'electricite/act1et2Electricite',
                            component: 'Act1et2Electricite',
                        },
                    ],
                },
            },
        },
        Terminale: {
            ProgrammeTerminalePhysique3: {
                signaux: {
                    activities: [
                        {
                            id: 1,
                            title: 'Caractériser une source lumineuse par\n' +
                                'son spectre et son efficacité énergétique',
                            path: 'signaux/act1signaux',
                            component: 'Act1Signaux',
                        },
                        {
                            id: 2,
                            title: 'Bilan signaux',
                            path: 'signaux/bilan-signaux',
                            component: 'BilanSignaux',
                        },
                        {
                            id: 3,
                            title: 'Exercices signaux',
                            path: 'signaux/Exercices-signaux',
                            component: 'ExercicesSigaux',
                        }
                    ],
                },
            },
        },
    },
};
