import React, {useState} from 'react';
import {
    Box,
    Paper,
    TextField,
    Button,
    Typography,
    Container,
    Alert,
    Fade,
    Slide
} from '@mui/material';
import {Lock as LockIcon} from '@mui/icons-material';
import {authConfig} from '../../components/auth/authConfig';

const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simuler un délai pour l'authentification
        setTimeout(() => {
            if (onLogin(username, password)) {
                // Connexion réussie
            } else {
                setError('Identifiant ou mot de passe incorrect');
            }
            setIsLoading(false);
        }, 800);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: 2
                }}
            >
                <Slide in direction="down" timeout={500}>
                    <Paper
                        elevation={10}
                        sx={{
                            padding: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            borderRadius: 2,
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                                color: 'white',
                                mb: 2
                            }}
                        >
                            <LockIcon fontSize="medium"/>
                        </Box>

                        <Typography component="h1" variant="h4" gutterBottom sx={{fontWeight: 'bold'}}>
                            {authConfig.appName}
                        </Typography>

                        <Typography variant="body2" sx={{mb: 3, textAlign: 'center', color: 'text.secondary'}}>
                            {authConfig.welcomeMessage}
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} sx={{mt: 1, width: '100%'}}>
                            {error && (
                                <Fade in={!!error}>
                                    <Alert severity="error" sx={{mb: 2}}>
                                        {error}
                                    </Alert>
                                </Fade>
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Identifiant"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={isLoading}
                                sx={{mb: 2}}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                                sx={{mb: 3}}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                disabled={isLoading}
                                sx={{py: 1.5, fontWeight: 'bold'}}
                            >
                                {isLoading ? 'Connexion...' : 'Se connecter'}
                            </Button>
                        </Box>
                    </Paper>
                </Slide>
            </Box>
        </Container>
    );
};

export default Login;