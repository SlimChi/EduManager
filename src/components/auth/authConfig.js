// Fichier de configuration des identifiants - VÉRIFICATION URGENTE
console.log('⚠️ VÉRIFICATION AUTH CONFIG EN COURS...');

export const authConfig = {
    username: 'Slimane',
    password: 'SamyRabah',
    appName: 'EduManager',
    welcomeMessage: 'Bienvenue dans votre gestionnaire éducatif'
};

// Vérification IMMÉDIATE et EXPLICITE
console.log('🔍 AUTH CONFIG VÉRIFICATION:', {
    username: `"${authConfig.username}"`,
    password: `"${authConfig.password}"`,
    charCodes: {
        username: Array.from(authConfig.username).map(c => c.charCodeAt(0)),
        password: Array.from(authConfig.password).map(c => c.charCodeAt(0))
    },
    lengths: {
        username: authConfig.username.length,
        password: authConfig.password.length
    }
});

// Vérification supplémentaire
if (authConfig.username !== 'Slimane' || authConfig.password !== 'SamyRabah') {
    console.error('❌ ERREUR: Les identifiants ne correspondent pas!');
    console.error('Expected: username="Slimane", password="SamyRabah"');
    console.error('Actual:', authConfig);
} else {
    console.log('✅ Identifiants corrects');
}