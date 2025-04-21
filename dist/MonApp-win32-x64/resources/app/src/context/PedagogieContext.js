import React, { createContext, useState } from 'react';

export const PedagogieContext = createContext();

export const PedagogieProvider = ({ children }) => {
    const [currentDiscipline, setCurrentDiscipline] = useState(null);
    const [currentChapitre, setCurrentChapitre] = useState(null);
    const [currentSequence, setCurrentSequence] = useState(null);

    return (
        <PedagogieContext.Provider value={{
            currentDiscipline,
            setCurrentDiscipline,
            currentChapitre,
            setCurrentChapitre,
            currentSequence,
            setCurrentSequence
        }}>
            {children}
        </PedagogieContext.Provider>
    );
};