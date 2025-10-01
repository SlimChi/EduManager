import GeomAct2 from '../pages/Maths/seconde/geometrie/GeomAct2';
import FonctionCarre from '../pages/Maths/seconde/algebre/FonctionCarre';
import ProgrammePremierePhysique from "../data/ProgrammePremierePhysique";
import Act3et4stat2Var from "../pages/Maths/première/StatProba/Statistiques/Act3et4stat2Var";
import BilanStat2Var from "../pages/Maths/première/StatProba/Statistiques/BilanStat2Var";
import ExerciceStat2Var from "../pages/Maths/première/StatProba/Statistiques/ExerciceStat2Var";
import Act3Mecanic from "../pages/SciencePhysiqueChimie/seconde/Mecanique/Act3Mecanic";
import BilanElectricite from "../pages/SciencePhysiqueChimie/premiere/electricite/BilanElectricite";
import GestionReservationCoInterv from "../pages/Maths/seconde/cointervention/GestionReservationCoInterv";
import Act3et4Chimie from "../pages/SciencePhysiqueChimie/seconde/chimie/Act3et4Chimie";
import EvaluationMeca from "../pages/SciencePhysiqueChimie/seconde/Mecanique/EvaluationMeca";

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
                            {
                                id: 5,
                                title: 'Exercices 1 et 2',
                                path: 'statistiques/stat-une-variableExo1et2',
                                component: 'Exercice1et2StatUneVar',
                            },
                            {
                                id: 6,
                                title: 'Exercices 3 et 4',
                                path: 'statistiques/stat-une-variableExo3et4',
                                component: 'Exercice3et4StatUneVar',
                            },
                            {
                                id: 7,
                                title: 'Exercices 5 et 6',
                                path: 'statistiques/stat-une-variableExo5et6',
                                component: 'Exercice6et7StatUneVar',
                            },
                            {
                                id: 8,
                                title: 'Exercices 8 et 9',
                                path: 'statistiques/exerciceFinStatUneVar',
                                component: 'ExerciceFinStatUneVar',
                            },
                            {
                                id: 9,
                                title: 'Les indicateurs de position',
                                path: 'statistiques/Act1IndicateurDePosition',
                                component: 'Act1IndicateurDePosition',
                            },
                            {
                                id: 10,
                                title: 'Comparer des séries statistiques avec des indicateurs',
                                path: 'statistiques/Act2IndicateurDeDisp',
                                component: 'Act2IndicateurDeDisp',
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
                            },
                            {
                                id: 5,
                                title: 'Co-intervention Calculs commerciaux 5',
                                path: 'cointervention/GestionReservationCoInterv',
                                component: 'GestionReservationCoInterv',
                            },
                            {
                                id: 6,
                                title: 'Co-intervention Calculs commerciaux 6',
                                path: 'cointervention/ActCoInterventionCalculCommerciaux',
                                component: 'ActCoInterventionCalculCommerciaux',
                            },
                            {
                                id: 7,
                                title: 'Co-intervention Calculs commerciaux 7',
                                path: 'cointervention/ActCoInterventionCalculCommerciaux2',
                                component: 'ActCoInterventionCalculCommerciaux2',
                            },
                            {
                                id: 8,
                                title: 'Co-intervention Calculs commerciaux 8',
                                path: 'cointervention/ActCoInterventionCalculCommerciaux3',
                                component: 'ActCoInterventionCalculCommerciaux3',
                            },
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
                            },
                            {
                                id: 3,
                                title: 'Bilan Études statistiques',
                                path: 'statistiques/bilan-stat-deux-variable',
                                component: 'BilanStat2Var',
                            },
                            {
                                id: 4,
                                title: 'Exercices 1 et 2',
                                path: 'statistiques/stat-deux-variableExo1et2',
                                component: 'ExerciceStat2Var',
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
                chimie: {
                    activities: [
                        {
                            id: 1,
                            title: 'Distinguer les atomes ',
                            path: 'chimie/distinguer-atomes',
                            component: 'DistinguerAtomes',
                        },
                        {
                            id: 2,
                            title: 'Déterminer la composition du sérum physiologique utilisé en soins',
                            path: 'chimie/Act1et2Chimie',
                            component: 'Act1et2Chimie',
                        },
                        {
                            id: 3,
                            title: 'Identifier les ions présents dans une solution médicamenteuse ',
                            path: 'chimie/Act3et4Chimie',
                            component: 'Act3et4Chimie',
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
                            title: 'Identifier la nature d\'un mouvement et déterminer la vitesse moyenne',
                            path: 'mecanique/naturedunmouvement',
                            component: 'Act3Mecanic',
                        },
                        {
                            id: 3,
                            title: 'Différencier les trajectoires rectilignes et quelconques',
                            path: 'mecanique/ActTrajectoireMouvement',
                            component: 'ActTrajectoireMouvement',
                        },
                        {
                            id: 4,
                            title: 'PRÉPARATION À L’ÉVALUATION',
                            path: 'mecanique/ActPrepaEvalMeca',
                            component: 'ActPrepaEvalMeca',
                        },
                        {
                            id: 5,
                            title: 'ÉVALUATION',
                            path: 'mecanique/EvaluationMeca',
                            component: 'EvaluationMeca',
                        },
                        {
                            id: 6,
                            title: 'Représenter et caractériser une action mécanique',
                            path: 'mecanique/force',
                            component: 'Act1ForceMeca',
                        },
                        {
                            id: 7,
                            title: 'inventaire des actions mécaniques et conditions d’équilibre',
                            path: 'mecanique/force2',
                            component: 'Act2et3ForceMecanique',
                        },
                        {
                            id: 8,
                            title: 'Evaluation : Actions mécaniques',
                            path: 'mecanique/EvaluationForce',
                            component: 'EvaluationForce',
                        },
                        {
                            id: 9,
                            title: 'Représenter et caractériser une action mécanique',
                            path: 'mecanique/EvaluationForce2',
                            component: 'EvaluationMecaniqueForce',
                        },
                        {
                            id: 10,
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
                        {
                            id: 2,
                            title: 'Évaluer une surconsommation électrique',
                            path: 'electricite/act3Electricite',
                            component: 'Act3Electricite1ere',
                        },
                        {
                            id: 3,
                            title: 'Bilan',
                            path: 'electricite/BilanElectricite',
                            component: 'BilanElectricite',
                        },
                        {
                            id: 4,
                            title: 'Exercices',
                            path: 'electricite/ExercicesElectricite',
                            component: 'ExercicesElectricite',
                        },
                        {
                            id: 5,
                            title: 'QCM',
                            path: 'electricite/ExerciceElectriciteSuite',
                            component: 'ExerciceElectriciteSuite',
                        },
                        {
                            id: 6,
                            title: 'Evaluation',
                            path: 'electricite/EvaElectriciteChauffage',
                            component: 'EvaElectriciteChauffage',
                        },
                        {
                            id: 7,
                            title: 'Transporter l\'énergie sous forme électrique',
                            path: 'electricite/ActTransportEnergie',
                            component: 'ActTransportEnergie',
                        }
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
