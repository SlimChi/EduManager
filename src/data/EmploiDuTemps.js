import React, {useState, useEffect} from 'react';
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
    useMediaQuery,
    ToggleButtonGroup,
    ToggleButton
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
            '11h00-12h00': 'Mathématiques Chimie\n1MSPC G1\nH200 cours chimie',
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
            '13h30-14h30': {q1: 'Co-intervention Maths\nM.DEHAUDT\nclasse 2MCDBTP\nH200 '}
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
    const [currentWeek, setCurrentWeek] = useState('q1'); // q1 ou q2
    const [manualOverride, setManualOverride] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Déterminer automatiquement la semaine (Q1 ou Q2)
    useEffect(() => {
        if (!manualOverride) {
            // Calculer la semaine actuelle (paire = Q2, impaire = Q1)
            const now = new Date();
            const startOfYear = new Date(now.getFullYear(), 0, 1);
            const days = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
            const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);

            setCurrentWeek(weekNumber % 2 === 0 ? 'q2' : 'q1');
        }
    }, [manualOverride]);

    const handleWeekChange = (event, newWeek) => {
        if (newWeek !== null) {
            setManualOverride(true);
            setCurrentWeek(newWeek);
        }
    };

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

    // Afficher uniquement le contenu du quartile actuel
    const shouldShowQuartile = (quartile) => {
        return quartile === currentWeek;
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
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center'}}>
                            <Chip label="CHIHATI SLIMANE " color="primary" variant="outlined" size="small"/>
                            <Chip label="LP-PIERRE-JOSEPH LAURENT-ANICHE" color="secondary" variant="outlined"
                                  size="small"/>

                            <Box sx={{ml: 'auto', display: 'flex', alignItems: 'center', gap: 1}}>
                                <Typography variant="body2" sx={{fontWeight: 'bold'}}>
                                    Semaine actuelle:
                                </Typography>
                                <ToggleButtonGroup
                                    value={currentWeek}
                                    exclusive
                                    onChange={handleWeekChange}
                                    size="small"
                                >
                                    <ToggleButton value="q1" sx={{
                                        fontWeight: 'bold',
                                        bgcolor: currentWeek === 'q1' ? '#e3f2fd' : 'transparent',
                                        color: currentWeek === 'q1' ? '#1565c0' : 'inherit'
                                    }}>
                                        Q1
                                    </ToggleButton>
                                    <ToggleButton value="q2" sx={{
                                        fontWeight: 'bold',
                                        bgcolor: currentWeek === 'q2' ? '#e8f5e9' : 'transparent',
                                        color: currentWeek === 'q2' ? '#2e7d32' : 'inherit'
                                    }}>
                                        Q2
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                        </Box>
                    </Paper>

                    <TableContainer
                        component={Paper}
                        elevation={8}
                        sx={{
                            overflowX: 'auto',
                            borderRadius: 3,
                            background: 'linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%)',
                            border: '1px solid #e0e0e0',
                            p: 1
                        }}
                    >
                        <Table sx={{minWidth: 800}} size="small" aria-label="emploi du temps">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{
                                        fontWeight: 'bold',
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        borderRight: '3px solid #fff',
                                        minWidth: 100,
                                        py: 2,
                                        fontSize: '1.1rem',
                                        borderRadius: '8px 0 0 0',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }}>
                                        Heures
                                    </TableCell>
                                    {scheduleData.days.map(day => (
                                        <TableCell
                                            key={day}
                                            align="center"
                                            sx={{
                                                fontWeight: 'bold',
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                                py: 2,
                                                fontSize: '1.1rem',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                                '&:last-child': {
                                                    borderRadius: '0 8px 0 0'
                                                }
                                            }}
                                        >
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
                                                    bgcolor: 'white',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                    textAlign: 'center',
                                                    py: 1.5,
                                                    borderBottom: '2px solid #ccc',
                                                    fontSize: '1.1rem',
                                                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                                }}>
                                                    APRÈS-MIDI
                                                </TableCell>
                                            </TableRow>
                                        )}
                                        <TableRow sx={{
                                            '&:hover': {
                                                '& td': {
                                                    backgroundColor: 'rgba(25, 118, 210, 0.04)'
                                                }
                                            }
                                        }}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    bgcolor: isMorningSlot(time) ? '#e8f5e9' : '#e3f2fd',
                                                    borderRight: '2px solid #ccc',
                                                    py: 1.5,
                                                    fontSize: '0.95rem',
                                                    boxShadow: '1px 0 3px rgba(0,0,0,0.1)',
                                                    position: 'relative',
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        right: 0,
                                                        top: '10%',
                                                        height: '80%',
                                                        width: '2px',
                                                        bgcolor: isMorningSlot(time) ? '#4caf50' : '#2196f3'
                                                    }
                                                }}
                                            >
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
                                                            position: 'relative',
                                                            background: hasContent ? 'transparent' : 'rgba(245, 245, 245, 0.5)',
                                                            transition: 'all 0.2s ease',
                                                        }}
                                                    >
                                                        {hasContent ? (
                                                            hasQuartile ? (
                                                                // Afficher uniquement le quartile de la semaine en cours
                                                                <Box sx={{display: 'flex', height: '100%'}}>
                                                                    {shouldShowQuartile('q1') && q1Content && (
                                                                        <Box
                                                                            onClick={() => handleCellClick(day, time, 'q1')}
                                                                            sx={{
                                                                                width: '100%',
                                                                                p: 1,
                                                                                cursor: 'pointer',
                                                                                backgroundColor: getBackgroundColor(q1Content),
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                justifyContent: 'center',
                                                                                transition: 'all 0.2s ease',
                                                                                '&:hover': {
                                                                                    transform: 'scale(1.02)',
                                                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                                                                    zIndex: 1
                                                                                }
                                                                            }}
                                                                        >
                                                                            {q1Content && renderCellContent(q1Content)}
                                                                            <Box sx={{
                                                                                position: 'absolute',
                                                                                top: 4,
                                                                                right: 4,
                                                                                fontSize: '0.6rem',
                                                                                fontWeight: 'bold',
                                                                                color: 'primary.dark',
                                                                                backgroundColor: 'rgba(255,255,255,0.7)',
                                                                                px: 0.5,
                                                                                borderRadius: 2
                                                                            }}>
                                                                                Q1
                                                                            </Box>
                                                                        </Box>
                                                                    )}

                                                                    {shouldShowQuartile('q2') && q2Content && (
                                                                        <Box
                                                                            onClick={() => handleCellClick(day, time, 'q2')}
                                                                            sx={{
                                                                                width: '100%',
                                                                                p: 1,
                                                                                cursor: 'pointer',
                                                                                backgroundColor: getBackgroundColor(q2Content),
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                justifyContent: 'center',
                                                                                transition: 'all 0.2s ease',
                                                                                '&:hover': {
                                                                                    transform: 'scale(1.02)',
                                                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                                                                    zIndex: 1
                                                                                }
                                                                            }}
                                                                        >
                                                                            {q2Content && renderCellContent(q2Content)}
                                                                            <Box sx={{
                                                                                position: 'absolute',
                                                                                top: 4,
                                                                                left: 4,
                                                                                fontSize: '0.6rem',
                                                                                fontWeight: 'bold',
                                                                                color: 'secondary.dark',
                                                                                backgroundColor: 'rgba(255,255,255,0.7)',
                                                                                px: 0.5,
                                                                                borderRadius: 2
                                                                            }}>
                                                                                Q2
                                                                            </Box>
                                                                        </Box>
                                                                    )}
                                                                </Box>
                                                            ) : (
                                                                // Case normale sans quartile
                                                                <Box
                                                                    onClick={() => handleCellClick(day, time, 'regular')}
                                                                    sx={{
                                                                        height: '100%',
                                                                        p: 1.5,
                                                                        cursor: 'pointer',
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        justifyContent: 'center',
                                                                        backgroundColor: bgColor,
                                                                        transition: 'all 0.2s ease',
                                                                        '&:hover': {
                                                                            transform: 'scale(1.03)',
                                                                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                                                            zIndex: 1
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
                                                                fontSize: '0.8rem',
                                                                background: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.05) 5px, rgba(0,0,0,0.05) 10px)'
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
                    <Box sx={{
                        maxWidth: 900,
                        margin: 'auto',
                        p: 2,
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                        borderRadius: 4,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        marginTop: 2
                    }}>
                        <Typography
                            variant="h4"
                            align="center"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                color: '#2c3e50',
                                mb: 3,
                                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                            }}
                        >
                            Spécialités Bac Pro
                        </Typography>

                        <TableContainer
                            component={Paper}
                            elevation={8}
                            sx={{
                                borderRadius: 3,
                                overflow: 'hidden',
                                border: '1px solid #e0e0e0'
                            }}
                        >
                            <Table aria-label="spécialités bac pro table">
                                <TableHead>
                                    <TableRow sx={{
                                        background: 'linear-gradient(45deg, #2c3e50 0%, #4ca1af 100%)',
                                        '& th': {
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: isMobile ? '0.9rem' : '1rem',
                                            py: 2
                                        }
                                    }}>
                                        <TableCell sx={{width: '50%', borderRadius: '3px 0 0 0'}}>Spécialité Bac
                                            Pro</TableCell>
                                        <TableCell align="center" sx={{width: '25%'}}>Groupement de maths</TableCell>
                                        <TableCell align="center" sx={{width: '25%', borderRadius: '0 3px 0 0'}}>Groupement
                                            de physique-chimie</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{
                                        '&:nth-of-type(odd)': {backgroundColor: '#f9f9f9'},
                                        '&:hover': {backgroundColor: '#f0f7ff'}
                                    }}>
                                        <TableCell component="th" scope="row" sx={{fontWeight: 'medium'}}>
                                            Métiers de l'accueil
                                        </TableCell>
                                        <TableCell align="center" sx={{
                                            backgroundColor: '#e8f5e9',
                                            fontWeight: 'bold',
                                            color: '#2e7d32',
                                            fontSize: isMobile ? '0.9rem' : '1rem'
                                        }}>
                                            C
                                        </TableCell>
                                        <TableCell align="center" sx={{fontStyle: 'italic', color: '#757575'}}>
                                            Pas de physique-chimie
                                        </TableCell>
                                    </TableRow>

                                    <TableRow sx={{
                                        '&:nth-of-type(even)': {backgroundColor: '#f9f9f9'},
                                        '&:hover': {backgroundColor: '#f0f7ff'}
                                    }}>
                                        <TableCell component="th" scope="row" sx={{fontWeight: 'medium'}}>
                                            Maintenance des systèmes de production connectés
                                        </TableCell>
                                        <TableCell align="center" sx={{
                                            backgroundColor: '#fff3e0',
                                            fontWeight: 'bold',
                                            color: '#ef6c00',
                                            fontSize: isMobile ? '0.9rem' : '1rem'
                                        }}>
                                            B
                                        </TableCell>
                                        <TableCell align="center" sx={{
                                            backgroundColor: '#e3f2fd',
                                            fontWeight: 'bold',
                                            color: '#1565c0',
                                            fontSize: isMobile ? '0.9rem' : '1rem'
                                        }}>
                                            1
                                        </TableCell>
                                    </TableRow>

                                    <TableRow sx={{
                                        '&:nth-of-type(odd)': {backgroundColor: '#f9f9f9'},
                                        '&:hover': {backgroundColor: '#f0f7ff'}
                                    }}>
                                        <TableCell component="th" scope="row" sx={{fontWeight: 'medium'}}>
                                            Ouvrage du bâtiment : métallerie
                                        </TableCell>
                                        <TableCell align="center" sx={{
                                            backgroundColor: '#fff3e0',
                                            fontWeight: 'bold',
                                            color: '#ef6c00',
                                            fontSize: isMobile ? '0.9rem' : '1rem'
                                        }}>
                                            B
                                        </TableCell>
                                        <TableCell align="center" sx={{
                                            backgroundColor: '#e3f2fd',
                                            fontWeight: 'bold',
                                            color: '#1565c0',
                                            fontSize: isMobile ? '0.9rem' : '1rem'
                                        }}>
                                            3
                                        </TableCell>
                                    </TableRow>

                                    <TableRow sx={{
                                        '&:nth-of-type(even)': {backgroundColor: '#f9f9f9'},
                                        '&:hover': {backgroundColor: '#f0f7ff'}
                                    }}>
                                        <TableCell component="th" scope="row" sx={{fontWeight: 'medium'}}>
                                            Accompagnement soins et services à la personne option A - à domicile
                                        </TableCell>
                                        <TableCell align="center" sx={{
                                            backgroundColor: '#e8f5e9',
                                            fontWeight: 'bold',
                                            color: '#2e7d32',
                                            fontSize: isMobile ? '0.9rem' : '1rem'
                                        }}>
                                            C
                                        </TableCell>
                                        <TableCell align="center" sx={{
                                            backgroundColor: '#e3f2fd',
                                            fontWeight: 'bold',
                                            color: '#1565c0',
                                            fontSize: isMobile ? '0.9rem' : '1rem'
                                        }}>
                                            5
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Box sx={{
                            mt: 2,
                            p: 1.5,
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            borderRadius: 2,
                            borderLeft: '4px solid #4ca1af'
                        }}>
                            <Typography variant="caption" sx={{color: '#546e7a', fontStyle: 'italic'}}>
                                Tableau des spécialités Bac Pro avec leurs groupements respectifs en mathématiques et
                                physique-chimie.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default EmploiDuTemps;