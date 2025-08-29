import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Composants d'authentification
import AuthGuard from './components/auth/AuthGuard';
import TopNavbar from './components/navigation/TopNavbar';
import Sidebar from './components/navigation/Sidebar';
import Login from './components/auth/Login';
// Pages de l'application
import ClassesPage from './pages/ClassesPage';
import DisciplinesPage from './pages/DisciplinesPage';
import ClassesEnCour from './pages/ClassesEnCour';
import ProgrammeSecondeMaths from './data/ProgrammeSecondeMaths';
import ProgrammeTerminalePhysique3 from './data/ProgrammeTerminalePhysique3';
import ProgrammeTerminaleMathsB from './data/ProgrammeTerminaleMathsB';
import ProgrammeSecondeMathsMRC from './data/ProgrammeSecondeMathsMRC';
import ProgrammeSecondePhysique from './data/ProgrammeSecondePhysique';
import ProgrammeCAPMaths from './data/ProgrammeCAPMaths';
import ProgrammeCAPPhysique from './data/ProgrammeCAPPhysique';
import CCFPage from './pages/CCFPage';
import CCFEngraisLiquide from './pages/CCF/CCFEngraisLiquide';
import ProgrammeNotFound from './components/ProgrammeNotFound';
import StatUneVariableSeconde from './pages/Maths/seconde/statistiques/statistiques/StatUneVariableSeconde';
import StatUneVariableAct2 from './pages/Maths/seconde/statistiques/statistiques/StatUneVariableAct2';
import StatUneVariableAct3 from './pages/Maths/seconde/statistiques/statistiques/StatUneVariableAct3';
import CCF2ToBM from './pages/CCF/CCF2ToBM';
import BookExtern from './pages/bookextern';
import ChapitreActivitiesPage from './pages/ChapitreActivitiesPage';
import FonctionsAffines from './pages/Maths/seconde/algebre/FonctionsAffines';
import GeomAct3Quellogochoisir from './pages/Maths/seconde/geometrie/GeomAct3Quellogochoisir';
import GeomAct4Thales from './pages/Maths/seconde/geometrie/GeomAct4Thales';
import GeometrieAct1 from './pages/Maths/seconde/geometrie/GeometrieAct1';
import Chapitre9pythagor from './pages/Maths/seconde/geometrie/Chapitre9pythagor';
import EquationSolver from './components/Outils/EquationSolver';
import TPSon from './pages/SciencePhysiqueChimie/seconde/Acoustique/TPSon';
import GeometryCalculator from './components/Outils/GeometryCalculator';
import Act1Proba from './pages/Maths/seconde/statistiques/probabilités/Act1Proba';
import Act2proba from './pages/Maths/seconde/statistiques/probabilités/Act2proba';
import CalculatorPage from './components/Outils/CalculatorPage';
import TP1Optique from './pages/SciencePhysiqueChimie/seconde/Optique/TP1Optique';
import TP2Optique from './pages/SciencePhysiqueChimie/seconde/Optique/TP2Optique';
import GeomAct2 from './pages/Maths/seconde/geometrie/GeomAct2';
import FonctionCarre from './pages/Maths/seconde/algebre/FonctionCarre';
import EquationsPremierDegreTest from './pages/Maths/seconde/algebre/EquationsPremierDegreTest';
import RappelVecteur from "./pages/Maths/Terminale/geometrie/RappelVecteur";
import Act1GeometrieVecteur from "./pages/Maths/Terminale/geometrie/Act1GeometrieVecteur";
import Act2Geometrie from "./pages/Maths/Terminale/geometrie/Act2Geometrie";
import Act3Equation1erDegre from "./pages/Maths/seconde/algebre/Act3Equation1erDegre";
import CalculCommerciauxCoIntervention from "./pages/Maths/seconde/cointervention/CalculCommerciauxCoIntervention";
import EvaluationAcoustic from "./pages/SciencePhysiqueChimie/seconde/Acoustique/EvaluationAcoustic";
import CalculsCommerciauxCoIntervention2 from "./pages/Maths/seconde/cointervention/CalculsCommerciauxCoIntervention2";
import Act1ForceMeca from "./pages/SciencePhysiqueChimie/seconde/Mecanique/Act1ForceMeca";
import Act1Signaux from "./pages/SciencePhysiqueChimie/Terminale/Act1Signaux";
import ExercicesFonctionCarre from "./pages/Maths/seconde/algebre/ExercicesFonctionCarre";
import Act3Geometrie from "./pages/Maths/Terminale/geometrie/Act3Geometrie";
import Act4Geometrie from "./pages/Maths/Terminale/geometrie/Act4Geometrie";
import Act2et3ForceMecanique from "./pages/SciencePhysiqueChimie/seconde/Mecanique/Act2et3ForceMecanique";
import CalculsCommerciauxCoIntervention3 from "./pages/Maths/seconde/cointervention/CalculsCommerciauxCoIntervention3";
import BilanSignaux from "./pages/SciencePhysiqueChimie/Terminale/BilanSignaux";
import EvaluationForce from "./pages/SciencePhysiqueChimie/seconde/Mecanique/EvaluationForce";
import EvaluationFonctionCarre from "./pages/Maths/seconde/algebre/EvaluationFonctionCarre";
import ExercicesVecteurs from "./pages/Maths/Terminale/geometrie/ExercicesVecteurs";
import EvaluationMecaniqueForce from "./pages/SciencePhysiqueChimie/seconde/Mecanique/EvaluationMecaniqueForce";
import ExercicesSigaux from "./pages/SciencePhysiqueChimie/Terminale/ExercicesSigaux";
import ExercicesOptic from "./pages/SciencePhysiqueChimie/seconde/Optique/ExercicesOptic";
import CalculsCommerciauxCoIntervention4 from "./pages/Maths/seconde/cointervention/CalculsCommerciauxCoIntervention4";
import EchantillonsAleatoiresAct1 from "./pages/Maths/seconde/statistiques/probabilités/EchantillonsAleatoiresAct1";
import EvaluerProbabiliteEvenement from "./pages/Maths/seconde/statistiques/probabilités/EvaluerProbabiliteEvenement";
import ExercicesVecteursPart2 from "./pages/Maths/Terminale/geometrie/ExercieVecteurPart2";
import CoInterventionMaintenance1 from "./pages/Maths/seconde/cointervention/CoInterventionMaintenance1";
import ActDénombrerDonnéesArbre from "./pages/Maths/seconde/statistiques/probabilités/ActDénombrerDonnéesArbre";
import BilanExercicesProba from "./pages/Maths/seconde/statistiques/probabilités/BilanExercicesProba";
import ExerciceProba from "./pages/Maths/seconde/statistiques/probabilités/ExerciceProba";
import ExerciceEquationPremierDeg from "./pages/Maths/seconde/algebre/ExerciceEquationPremierDeg";
import QcmOptic2nd from "./pages/SciencePhysiqueChimie/seconde/Optique/QcmOptic2nd";
import ExercicesProba2 from "./pages/Maths/seconde/statistiques/probabilités/ExercicesProba2";
import ExerciceProba3 from "./pages/Maths/seconde/statistiques/probabilités/ExerciceProba3";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import ProgrammePremiereMaths from "./data/ProgrammePremiereMaths";
import Act1Stat2var from "./pages/Maths/première/StatProba/Statistiques/Act1Stat2var";
import EmploiDuTemps from "./data/EmploiDuTemps";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

// Composant principal de l'application une fois connecté
const MainApp = () => {
    return (
        <div className="app-layout">
            <TopNavbar/>
            <div className="main-content">
                <Sidebar/>
                <div className="page-content">
                    <Routes>
                        <Route path="/classes" element={<ClassesPage/>}/>
                        <Route path="/disciplines" element={<DisciplinesPage/>}/>
                        <Route path="/emploi-du-temps" element={<EmploiDuTemps/>}/>
                        <Route
                            path="/disciplines/:discipline/classes"
                            element={<ClassesEnCour/>}
                        />

                        {/* Routes pour les programmes */}
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths"
                            element={<ProgrammeSecondeMaths/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammePremiereMaths"
                            element={<ProgrammePremiereMaths/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMathsMRC"
                            element={<ProgrammeSecondeMathsMRC/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMathsB"
                            element={<ProgrammeTerminaleMathsB/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeCAPMaths"
                            element={<ProgrammeCAPMaths/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique"
                            element={<ProgrammeSecondePhysique/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeTerminalePhysique3"
                            element={<ProgrammeTerminalePhysique3/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeCAPPhysique"
                            element={<ProgrammeCAPPhysique/>}
                        />

                        {/* Routes pour les séquences et activités */}
                        <Route
                            path="/programmes/:discipline/:classId/:programmeType/sequences/:chapitreId"
                            element={<ChapitreActivitiesPage/>}
                        />

                        {/* Routes spécifiques pour les activités */}
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/statistiques/stat-une-variable"
                            element={<StatUneVariableSeconde/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/statistiques/stat-une-variable2"
                            element={<StatUneVariableAct2/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/statistiques/stat-une-variable3"
                            element={<StatUneVariableAct3/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act1Proba"
                            element={<Act1Proba/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act2proba"
                            element={<Act2proba/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act3proba"
                            element={<EchantillonsAleatoiresAct1/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act4proba"
                            element={<EvaluerProbabiliteEvenement/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act5proba"
                            element={<ActDénombrerDonnéesArbre/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act6proba"
                            element={<BilanExercicesProba/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act7proba"
                            element={<ExerciceProba/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act8proba"
                            element={<ExercicesProba2/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/probabilites/Act9proba"
                            element={<ExerciceProba3/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/equations-second-degre-test"
                            element={<EquationsPremierDegreTest/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/equations-premier-degre"
                            element={<Act3Equation1erDegre/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/exercices-equation-premier-degre"
                            element={<ExerciceEquationPremierDeg/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/fonctions-affines"
                            element={<FonctionsAffines/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/fonction-carre"
                            element={<FonctionCarre/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/exercices-fonction-carre"
                            element={<ExercicesFonctionCarre/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/algebre/evaluation-fonction-carre"
                            element={<EvaluationFonctionCarre/>}
                        />
                        <Route
                            path={'/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/GeometrieAct1'}
                            element={<GeometrieAct1/>}
                        />
                        <Route
                            path={'/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/GeometrieAct2'}
                            element={<GeomAct2/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/pythagore"
                            element={<GeomAct3Quellogochoisir/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/thales"
                            element={<GeomAct4Thales/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/geometrie/chapitre9pythagor"
                            element={<Chapitre9pythagor/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/cointervention/cointervention1"
                            element={<CalculCommerciauxCoIntervention/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/cointervention/cointervention2"
                            element={<CalculsCommerciauxCoIntervention2/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/cointervention/cointervention3"
                            element={<CalculsCommerciauxCoIntervention3/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/cointervention/cointervention4"
                            element={<CalculsCommerciauxCoIntervention4/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeSecondeMaths/activites/cointervention/cointerventionmaintenance1"
                            element={<CoInterventionMaintenance1/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/acoustique/tp-son"
                            element={<TPSon/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/acoustique/evaluation-son"
                            element={<EvaluationAcoustic/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/optique/tp-optique"
                            element={<TP1Optique/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/optique/tp-optique2"
                            element={<TP2Optique/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/optique/exercices-optique"
                            element={<ExercicesOptic/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/optique/exercices-optique2"
                            element={<QcmOptic2nd/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeTerminalePhysique3/activites/signaux/act1signaux"
                            element={<Act1Signaux/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeTerminalePhysique3/activites/signaux/bilan-signaux"
                            element={<BilanSignaux/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeTerminalePhysique3/activites/signaux/Exercices-signaux"
                            element={<ExercicesSigaux/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/mecanique/force"
                            element={<Act1ForceMeca/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/mecanique/force2"
                            element={<Act2et3ForceMecanique/>}
                        />
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/mecanique/EvaluationForce"
                            element={<EvaluationForce/>}/>
                        <Route
                            path="/programmes/science/:classId/ProgrammeSecondePhysique/activites/mecanique/EvaluationForce2"
                            element={<EvaluationMecaniqueForce/>}/>
                        <Route path="/calculator" element={<CalculatorPage/>}/>
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMathsB/activites/geometrie/rappel-vecteur"
                            element={<RappelVecteur/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMathsB/activites/geometrie/act1-pylones"
                            element={<Act1GeometrieVecteur/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMathsB/activites/geometrie/act2-telepherique"
                            element={<Act2Geometrie/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMathsB/activites/geometrie/act3-tipi"
                            element={<Act3Geometrie/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMathsB/activites/geometrie/act4-fraiseuse"
                            element={<Act4Geometrie/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMathsB/activites/geometrie/exercices-vecteurs"
                            element={<ExercicesVecteurs/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammeTerminaleMathsB/activites/geometrie/exercices-vecteurs2"
                            element={<ExercicesVecteursPart2/>}
                        />
                        <Route
                            path="/programmes/math/:classId/ProgrammePremiereMaths/activites/statistiques/stat-deux-variable"
                            element={<Act1Stat2var/>}
                        />
                        {/* Routes pour les CCF */}
                        <Route path="/ccf" element={<CCFPage/>}/>
                        <Route path="/ccf/:ccfId" element={<CCF2ToBM/>}/>
                        <Route
                            path="/ccf/engrais-liquide"
                            element={<CCFEngraisLiquide/>}
                        />

                        {/* Autres routes */}
                        <Route path="/LIVRES" element={<BookExtern/>}/>
                        <Route
                            path="/programme-non-trouve"
                            element={<ProgrammeNotFound/>}
                        />
                        <Route path="/equation-solver" element={<EquationSolver/>}/>
                        <Route
                            path="/geometry-calculator"
                            element={<GeometryCalculator/>}
                        />

                        {/* Route par défaut */}
                        <Route path="/" element={<ClassesPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Routes>
                    {/* Route publique pour le login */}
                    <Route path="/login" element={<Login onLogin={() => {
                    }}/>}/>

                    {/* Routes protégées - AuthGuard doit wrapper MainApp */}
                    <Route path="/*" element={
                        <AuthGuard>
                            <MainApp/>
                        </AuthGuard>
                    }/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
