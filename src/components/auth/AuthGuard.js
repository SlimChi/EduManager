import React from 'react';
import {useAuth} from '../../components/hooks/useAuth';
import Login from './Login';
import {Box, CircularProgress, Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom';

const AuthGuard = ({children}) => {
    const {isAuthenticated, isLoading, login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = (username, password) => {
        console.log('🔐 AuthGuard - traitement connexion');
        const success = login(username, password);

        if (success) {
            // Rechargement COMPLET pour éviter les problèmes d'état
            setTimeout(() => {
                navigate('/disciplines', {replace: true});
                window.location.reload(); // FORCER le rechargement
            }, 50);
        }
        return success;
    };

    if (isLoading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
            >
                <CircularProgress size={60} thickness={4}/>
                <Typography variant="h6" sx={{mt: 2}}>
                    Chargement...
                </Typography>
            </Box>
        );
    }

    if (!isAuthenticated) {
        console.log('🔐 Redirection vers login - non authentifié');
        return <Login onLogin={handleLogin}/>;
    }

    console.log('🔐 Accès autorisé - utilisateur authentifié');
    return children;
};

export default AuthGuard;