import ProgrammeSecondeMaths from './ProgrammeSecondeMaths';
import  ProgrammeTerminaleMaths_B  from './ProgrammeTerminaleMaths_B';
import ProgrammeSecondeMathsMRC  from './ProgrammeSecondeMathsMRC';
import ProgrammeCAPMaths  from './ProgrammeCAPMaths';
import ProgrammeSecondePhysique  from './ProgrammeSecondePhysique';
import ProgrammeTerminalePhysique_3  from './ProgrammeTerminalePhysique_3';
import ProgrammeCAPPhysique  from './ProgrammeCAPPhysique';
import CCFPage from "../pages/CCFPage";

// Configuration complète des classes pour chaque discipline
export const CLASSES_CONFIG = {
    math: {
        'Seconde': {
            icon: 'BiAbacus',  // Nouvelle icône
            color: '#e7893a',
            niveau: 'Seconde',
            component: 'ProgrammeSecondeMaths',
            programmeComponent: ProgrammeSecondeMaths
        },
        // 'Seconde MRC': {
        //     icon: 'BiCalculator',  // Nouvelle icône
        //     color: '#f8d23f',
        //     niveau: 'Seconde',
        //     component: 'ProgrammeSecondeMathsMRC',
        //     programmeComponent: ProgrammeSecondeMathsMRC
        // },
        'Terminale': {
            icon: 'BiFunction',  // Nouvelle icône
            color: '#569ae1',
            niveau: 'Terminale',
            component: 'ProgrammeTerminaleMaths_B',
            programmeComponent: ProgrammeTerminaleMaths_B
        },
        'CAP': {
            icon: 'BiCalculator',  // Gardée pour CAP
            color: '#de85b2',
            niveau: 'CAP',
            component: 'ProgrammeCAPMaths',
            programmeComponent: ProgrammeCAPMaths
        },
        'CCF': {
            icon: 'BiBook', // Icône plus appropriée
            color: '#0edea8',
            niveau: 'CCF', // Niveau spécifique
            component: 'CCF', // Nom cohérent
            programmeComponent: CCFPage
        }
    },
    science: {
        'Seconde': {
            icon: 'BiFlask',  // Nouvelle icône
            color: '#e74c3c',
            niveau: 'Seconde',
            component: 'ProgrammeSecondePhysique',
            programmeComponent: ProgrammeSecondePhysique
        },
        'Terminale': {
            icon: 'BiTestTube',  // Nouvelle icône
            color: '#56be3f',
            niveau: 'Terminale',
            component: 'ProgrammeTerminalePhysique_3',
            programmeComponent: ProgrammeTerminalePhysique_3
        },
        'CAP': {
            icon: 'BiAtom',  // Gardée pour CAP
            color: '#dad044',
            niveau: 'CAP',
            component: 'ProgrammeCAPPhysique',
            programmeComponent: ProgrammeCAPPhysique
        }
        ,
        'CCF': {
            icon: 'BiBook', // Icône plus appropriée
            color: '#0edea8',
            niveau: 'CCF', // Niveau spécifique
            component: 'CCF', // Nom cohérent
            programmeComponent: CCFPage
        }
    }
};

// Fonction pour récupérer les données du programme
// Fonction pour récupérer les données du programme
export const getProgrammeData = (discipline, niveau, classId) => {
    const classConfig = CLASSES_CONFIG[discipline]?.[classId];

    if (!classConfig) {
        console.error(`Configuration non trouvée pour ${discipline}/${classId}`);
        return null;
    }

    return {
        discipline,
        niveau,
        classId,
        title: `${discipline === 'math' ? 'Mathématiques' : 'Sciences Physique'} - ${classId}`,
        color: classConfig.color
        // On ne retourne plus programmeComponent ici
    };
};

// Fonction utilitaire pour vérifier la configuration
export const validateConfig = () => {
    Object.entries(CLASSES_CONFIG).forEach(([discipline, classes]) => {
        console.log(`Vérification de la configuration pour ${discipline}`);
        Object.entries(classes).forEach(([className, config]) => {
            if (!config.programmeComponent) {
                console.error(`Composant manquant pour ${discipline}/${className}`);
            }
        });
    });
};

// Exécute la validation au chargement
validateConfig();