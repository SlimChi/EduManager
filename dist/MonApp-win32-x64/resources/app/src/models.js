// Modèle Discipline
export const Discipline = {
    id: String,
    title: String,
    description: String,
    color: String
};

// Modèle Chapitre
export const Chapitre = {
    id: String,
    disciplineId: String,
    title: String,
    description: String,
    objectifs: [String],
    duration: Number // en heures
};

// Modèle Séquence
export const Sequence = {
    id: String,
    chapitreId: String,
    title: String,
    order: Number,
    duration: Number // en heures
};

// Modèle Séance
export const Seance = {
    id: String,
    sequenceId: String,
    date: Date,
    title: String,
    objectifs: [String],
    ressources: [String],
    duration: Number // en minutes
};

// Modèle Activité
export const Activite = {
    id: String,
    seanceId: String,
    type: 'exercice' | 'evaluation' | 'experience',
    title: String,
    description: String,
    duration: Number,
    consignes: String,
    corrige: String
};