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
              path: 'algebre/equations-premier-degre',
              component: 'EquationsPremierDegre',
            },
            {
              id: 2,
              title: 'Équations du second degré test',
              path: 'algebre/equations-second-degre-test',
              component: 'EquationsPremierDegreTest',
            },
            {
              id: 3,
              title: 'Fonctions affines',
              path: 'algebre/fonctions-affines',
              component: 'FonctionsAffines',
            },
            {
              id: 4,
              title: 'Fonctions carre',
              path: 'algebre/fonction-carre',
              component: 'FonctionCarre',
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
      },
    },
  },
};
