import React, {useState} from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    Chip,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

// Couleurs spécifiques pour chaque classe et matière
const classColors = {
    '1MA': '#e3f2fd',
    '1MCV': '#fff3e0',
    '1MSPC': '#e8f5e9',
    '1MSPC G1': '#e8f5e9',
    '1MSPC G2': '#c8e6c9',
    '2ASSP': '#fce4ec',
    '2ASSP G1': '#fce4ec',
    '2ASSP G2': '#f8bbd0',
    '2ASSP2': '#f48fb1',
    '2MCDBTP': '#e8eaf6',
    'Parcours': '#fff9c4'
};

const subjectColors = {
    'Mathématiques': '#bbdefb',
    'Physique Chimie': '#c8e6c9',
    'Co-intervention Maths': '#ffecb3',
    'Parcours': '#fff9c4'
};

// Données de l'emploi du temps
const scheduleData = {
    days: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
    timeSlots: [
        '8h00-9h00', '9h00-10h00', '10h00-11h00', '11h00-12h00',
        '13h30-14h30', '14h30-15h30', '15h30-16h30', '16h30-17h30'
    ],
    schedule: {
        'Lundi': {
            '8h00-9h00': '',
            '9h00-10h00': 'Mathématiques\n1MA\nG201 cours EG',
            '10h00-11h00': 'Mathématiques\n1MSPC G1\nG201 cours EG',
            '11h00-12h00': 'Physique Chimie\n2ASSP G1\nH210 LABO chimie',
            '13h30-14h30': '',
            '14h30-15h30': '',
            '15h30-16h30': '',
            '16h30-17h30': ''
        },
        'Mardi': {
            '8h00-9h00': '',
            '9h00-10h00': 'Mathématiques\n2MCDBTP\nH200 cours MATHS SC',
            '10h00-11h00': 'Physique Chimie\n2ASSP G2\nH210 LABO chimie',
            '11h00-12h00': '',
            '13h30-14h30': 'Mathématiques\n1MA\nH306',
            '14h30-15h30': 'Mathématiques\n1MCV\nH306',
            '15h30-16h30': 'Mathématiques\n1MSPC G2\nG205 TER info\nH306',
            '16h30-17h30': ''
        },
        'Mercredi': {
            '8h00-9h00': 'Mathématiques\n1MCV\nH200 cours MATHS SC',
            '9h00-10h00': 'Physique Chimie\n1MSPC G1\nH210 LABO chimie',
            '10h00-11h00': 'Physique Chimie\n1MSPC G2\nH210 LABO chimie',
            '11h00-12h00': 'Mathématiques\n1MSPC G2\nH201 cours MATHS SC',
            '13h30-14h30': '',
            '14h30-15h30': '',
            '15h30-16h30': '',
            '16h30-17h30': ''
        },
        'Jeudi': {
            '8h00-9h00': '',
            '9h00-10h00': '',
            '10h00-11h00': 'Physique Chimie\n2MCDBTP\nH210 LABO chimie',
            '11h00-12h00': 'Physique Chimie\n1MSPC G1\nH306 cours chimie',

            '13h30-14h30': 'Parcours\n2MCDBTP\nH306',
            '14h30-15h30': 'Mathématiques\n2MCDBTP\nH306',
            '15h30-16h30': '',
            '16h30-17h30': ''
        },
        'Vendredi': {
            '8h00-9h00': '',
            '9h00-10h00': '',
            '10h00-11h00': '',
            '11h00-12h00': '',
            '13h30-14h30': '',
            '14h30-15h30': '',
            '15h30-16h30': '',
            '16h30-17h30': ''
        },
    },
    quartiles: {
        'Lundi': {
            '13h30-14h30': {q2: 'Co-intervention Maths\nM.DEHAUDT\nclasse 2MCDBTP\nH200 '}
        },
        'Mardi': {
            '11h00-12h00': {q2: 'Co-intervention Maths\nM.LOEULLET\nclasse 2MCDBTP\nH210 LABO'}
        },
        'Jeudi': {
            '9h00-10h00': {q2: 'Co-intervention Maths\nMme.Tempez\nclasse 1MA\nSalle H308'}
        },
        'Vendredi': {
            '8h00-9h00': {
                q1: 'Physique Chimie\n1MSPC\nH210 LABO chimie',
                q2: 'Physique Chimie\n2ASSP2\nH210 LABO chimie'
            },
            '9h00-10h00': {
                q1: 'Co-intervention Maths\nMme.Tempez\n1MCV\nH210 LABO chimie',
                q2: 'Physique Chimie\n2MCDBTP\nH210 LABO chimie'
            }
        }
    }
};

// Création du thème Material-UI
const theme = createTheme({
    palette: {
        primary: {
            main: '#2c3e50',
        },
        secondary: {
            main: '#3498db',
        },
        background: {
            default: '#f5f7fa',
        },
    },
    typography: {
        h4: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 500,
        },
    },
});

const EmploiDuTemps = () => {
    const [selectedCell, setSelectedCell] = useState(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleCellClick = (day, time, quartile) => {
        setSelectedCell({day, time, quartile});
    };

    const getCellContent = (day, time, quartile) => {
        // Vérifier d'abord les quartiles
        if (scheduleData.quartiles[day] && scheduleData.quartiles[day][time]) {
            return scheduleData.quartiles[day][time][quartile] || '';
        }
        // Si pas de quartile, vérifier le planning régulier
        return scheduleData.schedule[day] && scheduleData.schedule[day][time]
            ? scheduleData.schedule[day][time]
            : '';
    };

    const getBackgroundColor = (content) => {
        if (!content) return 'transparent';

        // Chercher d'abord une correspondance de matière
        for (const [subject, color] of Object.entries(subjectColors)) {
            if (content.includes(subject)) {
                return color;
            }
        }

        // Ensuite chercher une correspondance de classe
        for (const [classe, color] of Object.entries(classColors)) {
            if (content.includes(classe)) {
                return color;
            }
        }

        return 'transparent';
    };

    const renderCellContent = (content) => {
        if (!content) return null;

        return content.split('\n').map((line, index) => (
            <div key={index} style={{
                textAlign: 'center',
                fontSize: '0.7rem',
                lineHeight: '1.1',
                margin: '1px 0'
            }}>
                {line}
            </div>
        ));
    };

    const hasQuartileContent = (day, time) => {
        return scheduleData.quartiles[day] && scheduleData.quartiles[day][time];
    };

    const hasAnyContent = (day, time) => {
        return (scheduleData.quartiles[day] && scheduleData.quartiles[day][time]) ||
            (scheduleData.schedule[day] && scheduleData.schedule[day][time]);
    };

    // Vérifier si c'est un créneau du matin
    const isMorningSlot = (time) => {
        return !time.includes('13h30') && !time.includes('14h30') &&
            !time.includes('15h30') && !time.includes('16h30');
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{flexGrow: 1, backgroundColor: 'background.default', minHeight: '100vh'}}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Emploi du Temps 2025/2026
                        </Typography>
                        <Button color="inherit" variant="outlined" size="small">
                            Exporter
                        </Button>
                    </Toolbar>
                </AppBar>

                <Box sx={{p: 3}}>
                    <Paper elevation={3} sx={{p: 2, mb: 3}}>
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}>
                            <Chip label="CHIHATI SLIMANE " color="primary"
                                  variant="outlined"
                                  size="small"/>
                            <Chip label="LP-PIERRE-JOSEPH LAURENT-ANICHE" color="secondary" variant="outlined"
                                  size="small"/>
                        </Box>
                    </Paper>

                    <TableContainer component={Paper} elevation={3} sx={{overflowX: 'auto'}}>
                        <Table sx={{minWidth: 800}} size="small" aria-label="emploi du temps">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        borderRight: '3px solid #ccc',
                                        minWidth: 100
                                    }}>
                                        Heures
                                    </TableCell>
                                    {scheduleData.days.map(day => (
                                        <TableCell key={day} align="center"
                                                   sx={{fontWeight: 'bold', bgcolor: 'primary.main', color: 'white'}}>
                                            {day}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {scheduleData.timeSlots.map((time, index) => (
                                    <React.Fragment key={time}>
                                        {/* Séparation matin/après-midi */}
                                        {time === '13h30-14h30' && (
                                            <TableRow>
                                                <TableCell colSpan={6} sx={{
                                                    bgcolor: 'grey.200',
                                                    fontWeight: 'bold',
                                                    textAlign: 'center',
                                                    py: 1,
                                                    borderBottom: '2px solid #ccc'
                                                }}>
                                                    APRÈS-MIDI
                                                </TableCell>
                                            </TableRow>
                                        )}
                                        <TableRow>
                                            <TableCell component="th" scope="row"
                                                       sx={{
                                                           fontWeight: 'bold',
                                                           bgcolor: isMorningSlot(time) ? '#e8f5e9' : '#e3f2fd',
                                                           borderRight: '2px solid #ccc'
                                                       }}>
                                                {time}
                                            </TableCell>
                                            {scheduleData.days.map(day => {
                                                const hasQuartile = hasQuartileContent(day, time);
                                                const hasContent = hasAnyContent(day, time);
                                                const q1Content = getCellContent(day, time, 'q1');
                                                const q2Content = getCellContent(day, time, 'q2');
                                                const regularContent = scheduleData.schedule[day] && scheduleData.schedule[day][time];
                                                const bgColor = getBackgroundColor(regularContent || q1Content || q2Content);

                                                return (
                                                    <TableCell
                                                        key={`${day}-${time}`}
                                                        sx={{
                                                            minWidth: 120,
                                                            height: 100,
                                                            p: 0,
                                                            border: '1px solid black',
                                                            position: 'relative'
                                                        }}
                                                    >
                                                        {hasContent ? (
                                                            hasQuartile ? (
                                                                <Box sx={{display: 'flex', height: '100%'}}>
                                                                    {/* Partie Q2 (Gauche) */}
                                                                    <Box
                                                                        onClick={() => handleCellClick(day, time, 'q2')}
                                                                        sx={{
                                                                            flex: 1,
                                                                            borderRight: '1px dashed #ccc',
                                                                            p: 0.5,
                                                                            cursor: 'pointer',
                                                                            backgroundColor: getBackgroundColor(q2Content),
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            justifyContent: 'center',
                                                                            '&:hover': {
                                                                                opacity: 0.9,
                                                                            }
                                                                        }}
                                                                    >
                                                                        {q2Content && renderCellContent(q2Content)}
                                                                        {q2Content && (
                                                                            <Box sx={{
                                                                                position: 'absolute',
                                                                                top: 2,
                                                                                left: 2,
                                                                                fontSize: '0.6rem',
                                                                                fontWeight: 'bold',
                                                                                color: 'secondary.dark'
                                                                            }}>
                                                                                Q2
                                                                            </Box>
                                                                        )}
                                                                    </Box>

                                                                    {/* Partie Q1 (Droite) */}
                                                                    <Box
                                                                        onClick={() => handleCellClick(day, time, 'q1')}
                                                                        sx={{
                                                                            flex: 1,
                                                                            p: 0.5,
                                                                            cursor: 'pointer',
                                                                            backgroundColor: getBackgroundColor(q1Content),
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            justifyContent: 'center',
                                                                            '&:hover': {
                                                                                opacity: 0.9,
                                                                            }
                                                                        }}
                                                                    >
                                                                        {q1Content && renderCellContent(q1Content)}
                                                                        {q1Content && (
                                                                            <Box sx={{
                                                                                position: 'absolute',
                                                                                top: 2,
                                                                                right: 2,
                                                                                fontSize: '0.6rem',
                                                                                fontWeight: 'bold',
                                                                                color: 'primary.dark'
                                                                            }}>
                                                                                Q1
                                                                            </Box>
                                                                        )}
                                                                    </Box>
                                                                </Box>
                                                            ) : (
                                                                // Case normale sans quartile
                                                                <Box
                                                                    onClick={() => handleCellClick(day, time, 'regular')}
                                                                    sx={{
                                                                        height: '100%',
                                                                        p: 0.5,
                                                                        cursor: 'pointer',
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        justifyContent: 'center',
                                                                        backgroundColor: bgColor,
                                                                        '&:hover': {
                                                                            opacity: 0.9,
                                                                        }
                                                                    }}
                                                                >
                                                                    {regularContent && renderCellContent(regularContent)}
                                                                </Box>
                                                            )
                                                        ) : (
                                                            <Box sx={{
                                                                height: '100%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: 'text.secondary',
                                                                fontSize: '0.8rem'
                                                            }}>
                                                                -
                                                            </Box>
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    </React.Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default EmploiDuTemps;