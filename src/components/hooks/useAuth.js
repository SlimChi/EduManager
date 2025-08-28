import {useState, useEffect} from 'react';
import {authConfig} from '../auth/authConfig';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = () => {
            try {
                const authStatus = localStorage.getItem('isAuthenticated');
                console.log('🔐 Statut auth depuis localStorage:', authStatus);

                // FORCER la vérification auprès de authConfig
                if (authStatus === 'true') {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    // Nettoyage garantie
                    localStorage.removeItem('isAuthenticated');
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Erreur accès localStorage:', error);
                setIsAuthenticated(false);
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const login = (username, password) => {
        console.log('🔐 Tentative de connexion:', {username, password});
        console.log('🔐 Attendus:', {username: authConfig.username, password: authConfig.password});

        // Vérification STRICTE
        const isAuth = username.trim() === authConfig.username.trim() &&
            password.trim() === authConfig.password.trim();

        if (isAuth) {
            console.log('✅ Connexion réussie');
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            return true;
        }

        console.log('❌ Échec connexion');
        // FORCER la déconnexion en cas d'échec
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        return false;
    };

    const logout = () => {
        console.log('🔐 Déconnexion en cours...');
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        sessionStorage.clear();

        // FORCER le rechargement complet
        setTimeout(() => {
            window.location.href = '/login';
            window.location.reload(true);
        }, 100);
    };

    return {
        isAuthenticated,
        isLoading,
        login,
        logout
    };
};