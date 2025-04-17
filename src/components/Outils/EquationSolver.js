import React, { useState } from 'react';
import Term from './Term';
import DropZone from './DropZone';
import '../../styles/EquationSolver.css';

const EquationSolver = () => {
    const generateRandomEquation = () => {
        const a = Math.floor(Math.random() * 5) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        const c = a * 2 + Math.floor(Math.random() * 5) + 1;

        return [
            { id: 1, value: `${a}`, type: 'coefficient', side: 'left', attachedTo: 2 },
            { id: 2, value: `x`, type: 'variable', side: 'left' },
            { id: 3, value: `+`, type: 'operator', side: 'left', noBox: true },
            { id: 4, value: `${b}`, type: 'constant', side: 'left' },
            { id: 5, value: '=', type: 'operator', side: 'left', noBox: true },
            { id: 6, value: `${c}`, type: 'constant', side: 'right', isOriginal: true }
        ];

    };

    const [terms, setTerms] = useState(generateRandomEquation());
    const [steps, setSteps] = useState([
        { type: 'title', content: 'ÉTAPE 1: Préparation' },
        { type: 'content', content: 'Déplacez les constantes à droite (Vert)' }
    ]);

    const [isSolved, setIsSolved] = useState(false);
    const [solution, setSolution] = useState(null);
    const [simplified, setSimplified] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [version, setVersion] = useState(0);

    const renderEquationLine = (leftTerms, rightTerms) => {
        return (
            <div className="equation-line">
                <div className="equation-part">
                    {leftTerms.map((term, index) => (
                        <React.Fragment key={`left-${term.id}-${index}`}>
                            {term.noBox ? (
                                <span className={`operator-no-box ${term.type}-operator`}>
                                    {term.value}
                                </span>
                            ) : (
                                <span className={`term-inline ${term.type}-term`}>
                                    {term.value}
                                </span>
                            )}
                            {index < leftTerms.length - 1 && '\u00A0'}
                        </React.Fragment>
                    ))}
                </div>

                <div className="equation-part">
                    {rightTerms.map((term, index) => (
                        <React.Fragment key={`right-${term.id}-${index}`}>
                            {term.noBox ? (
                                <span className={`operator-no-box ${term.type}-operator`}>
                                    {term.value}
                                </span>
                            ) : (
                                <span className={`term-inline ${term.type}-term`}>
                                    {term.value}
                                </span>
                            )}
                            {index < rightTerms.length - 1 && '\u00A0'}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    };

    const renderCurrentEquation = () => {
        const leftTerms = terms.filter(term => term.side === 'left' && !term.inFraction);
        const rightTerms = terms.filter(term => term.side === 'right' && !term.inFraction);
        return renderEquationLine(leftTerms, rightTerms);
    };

    const renderEquationFromTerms = (terms) => {
        const leftTerms = terms.filter(term => term.side === 'left');
        const rightTerms = terms.filter(term => term.side === 'right');
        return renderEquationLine(leftTerms, rightTerms);
    };

    const handleDrop = (item, side) => {
        if (side === 'fraction') {
            const coefficient = terms.find(t => t.type === 'coefficient' && t.side === 'left');
            const numerator = terms.find(t => t.side === 'right' && t.type === 'constant');

            if (coefficient && numerator) {
                const solutionValue = (parseInt(numerator.value) / parseInt(coefficient.value)).toFixed(2);

                const newTerms = [
                    { id: 2, value: 'x', type: 'variable', side: 'left' },
                    { id: 4, value: '=', type: 'operator', side: 'left', noBox: true },
                    {
                        ...numerator,
                        id: 6,
                        inFraction: true,
                        position: 'numerator',
                        fractionId: Date.now()
                    },
                    {
                        ...coefficient,
                        id: 7,
                        inFraction: true,
                        position: 'denominator',
                        fractionId: numerator.fractionId || Date.now()
                    }
                ];

                setTerms(newTerms);
                setSolution(solutionValue);
                setIsSolved(true);

                setSteps(prev => [
                    ...prev,
                    { type: 'separator', content: '──────────────' },
                    { type: 'title', content: 'ÉTAPE 3: Résolution finale' },

                    { type: 'equation', content: renderEquationFromTerms(newTerms) },
                    { type: 'content', content: `${coefficient.value}x = ${numerator.value}` },
                    { type: 'content', content: `x = ${numerator.value}/${coefficient.value}` },
                    { type: 'result', content: `Solution: x = ${solutionValue}` }
                ]);
            }
            return;
        }

        let operatorToMove = null;
        let operatorToRemove = null;

        if (item.type === 'constant') {
            const allTerms = [...terms];
            const itemIndex = allTerms.findIndex(t => t.id === item.id);

            if (itemIndex > 0 && allTerms[itemIndex - 1].type === 'operator' && allTerms[itemIndex - 1].value !== '=') {
                operatorToMove = allTerms[itemIndex - 1];
            }

            operatorToRemove = operatorToMove;
        }

        const updatedTerms = terms.map(term => {
            if (term.id === item.id) {
                const newValue = term.value.replace(/^[+-]/, '');
                return { ...term, side, value: newValue, inFraction: false };
            }

            if (operatorToMove && term.id === operatorToMove.id) {
                const newValue = term.value === '+' ? '-' : '+';
                return { ...term, side, value: newValue, inFraction: false };
            }

            return term;
        }).filter(term => !(operatorToRemove && term.id === operatorToRemove.id && term.side !== side));

        if (side === 'right') {
            const rightTerms = updatedTerms.filter(t => t.side === 'right');
            const originalConstant = rightTerms.find(t => t.isOriginal);
            const otherConstants = rightTerms.filter(t => t.type === 'constant' && !t.isOriginal);
            const operators = rightTerms.filter(t => t.type === 'operator' && t.value !== '=');
            const nonConstants = rightTerms.filter(t => t.type !== 'constant' && t.type !== 'operator');

            const newRightTerms = [
                ...nonConstants,
                ...(originalConstant ? [originalConstant] : []),
                ...operators,
                ...otherConstants
            ];

            const newTerms = updatedTerms
                .filter(t => t.side !== 'right')
                .concat(newRightTerms.map((t, i) => ({ ...t, id: 5 + i })));

            setTerms(newTerms);

            setSteps(prev => [
                ...prev,
                { type: 'content', content: `Terme ${item.value} déplacé à droite` },
                { type: 'equation', content: renderEquationFromTerms(newTerms) }
            ]);

            checkSolution(newTerms);
        } else {
            setTerms(updatedTerms);
            checkSolution(updatedTerms);
        }
    };

    const simplifyEquation = () => {
        const rightSide = terms.filter(term => term.side === 'right');
        const constants = rightSide.filter(t => t.type === 'constant');
        const operators = rightSide.filter(t => t.type === 'operator' && t.value !== '=');

        if (constants.length > 1) {
            let sum = parseInt(constants[0].value);
            let calculationString = constants[0].value;

            for (let i = 1; i < constants.length; i++) {
                const operator = operators[i-1]?.value || '+';
                const value = parseInt(constants[i].value);

                calculationString += ` ${operator} ${value}`;
                sum = operator === '+' ? sum + value : sum - value;
            }

            const newTerms = terms
                .filter(t => t.side !== 'right' || (t.type !== 'constant' && t.type !== 'operator'))
                .concat({
                    id: Date.now(),
                    value: sum.toString(),
                    type: 'constant',
                    side: 'right',
                    isOriginal: false
                });

            setTerms(newTerms);
            setSimplified(true);

            setSteps(prev => [
                ...prev,
                { type: 'separator', content: '──────────────' },
                { type: 'title', content: 'ÉTAPE 2: Simplification' },
                {
                    type: 'instruction',
                    content: 'Déplacez le coefficient en couleur bleu vers le dénominateur'
                },
                {
                    type: 'content',
                    content: `${calculationString} = ${sum}`,
                    isCalculation: true // Ajoutez cette propriété
                },
                { type: 'equation', content: renderEquationFromTerms(newTerms) }
            ]);
        }
    };

    const checkSolution = (currentTerms) => {
        const leftSide = currentTerms.filter(term => term.side === 'left');
        const rightSide = currentTerms.filter(term => term.side === 'right');

        const xOnLeft = leftSide.filter(t => t.type === 'variable').length === 1;
        const xOnRight = rightSide.filter(t => t.type === 'variable').length === 0;
        const constantsOnRight = rightSide.filter(t => t.type === 'constant').length > 0;

        if (xOnLeft && xOnRight && constantsOnRight) {
            setShowHelp(true);
        } else {
            setShowHelp(false);
            setIsSolved(false);
            setSolution(null);
        }
    };

    const resetEquation = () => {
        setTerms([]);
        setTimeout(() => {
            setTerms(generateRandomEquation());
            setIsSolved(false);
            setSolution(null);
            setSteps([
                { type: 'title', content: 'ÉTAPE 1: Préparation' },
                { type: 'content', content: 'Déplacez les constantes à droite' }
            ]);
            setSimplified(false);
            setShowHelp(false);
            setVersion(v => v + 1);
        }, 0);
    };

    const renderFraction = () => {
        const numerator = terms.find(t => t.position === 'numerator');
        const denominator = terms.find(t => t.position === 'denominator');

        return (
            <div className="fraction-result">
                <div className="fraction-display">
                    <div className="numerator">{numerator?.value || '?'}</div>
                    <div className="fraction-line"></div>
                    <div className="denominator">{denominator?.value || '?'}</div>
                </div>
                {solution && (
                    <div className="final-solution">
                        <div className="equals">=</div>
                        <div className="solution-value">{solution}</div>
                    </div>
                )}
            </div>
        );
    };

    const renderSteps = () => {
        return (
            <div className="steps-container">
                <h3>Détail des étapes :</h3>
                <div className="steps-list">
                    {steps.map((step, index) => {
                        if (step.type === 'separator') {
                            return (
                                <div key={index} className="step-separator">
                                    {step.content}
                                </div>
                            );
                        }
                        if (step.type === 'equation') {
                            return (
                                <div key={index} className="step-equation">
                                    {step.content}
                                </div>
                            );
                        }
                        return (
                            <div
                                key={index}
                                className={`step step-${step.type} ${
                                    step.isCalculation ? 'calculation-step' : ''
                                }`}
                            >
                                {step.content}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className="presentation-mode">
            <div className="equation-solver-container" key={version}>
                <div className="equation-area">
                    <button className="reset-button" onClick={resetEquation}>
                        Nouvelle équation aléatoire
                    </button><br/><br/>
                    {terms.some(t => t.inFraction) ? (
                        <div className="equation-display">
                            <div className="left-side">
                                <Term term={{ id: 2, value: 'x', type: 'variable' }} />
                            </div>
                            <div className="equals-sign">=</div>
                            {renderFraction()}
                        </div>
                    ) : (
                        <div className="equation-display">
                            <DropZone side="left" onDrop={handleDrop}>
                                {terms
                                    .filter(term => term.side === 'left' && term.value !== '=' && !term.inFraction)
                                    .map((term, index, array) => (
                                        <React.Fragment key={`left-${term.id}-${index}`}>
                                            <Term
                                                term={term}
                                                highlightCoefficient={isSolved} // Active l'animation seulement quand l'équation est résolue
                                            />
                                            {index < array.length - 1 && '\u00A0'}
                                        </React.Fragment>
                                    ))}
                            </DropZone>

                            <div className="equals-sign">=</div>

                            <DropZone side="right" onDrop={handleDrop}>
                                {terms
                                    .filter(term => term.side === 'right' && !term.inFraction)
                                    .map((term, index, array) => (
                                        <React.Fragment key={`right-${term.id}-${index}`}>
                                            <Term term={term} />
                                            {index < array.length - 1 && '\u00A0'}
                                        </React.Fragment>
                                    ))}
                            </DropZone>
                        </div>
                    )}

                    {simplified && !isSolved && (
                        <div className="fraction-zone">
                            <DropZone side="fraction" onDrop={handleDrop} className="fraction-drop-zone">
                                <div className="fraction-placeholder">
                                    <div className="numerator-placeholder">
                                        {terms.find(t => t.side === 'right' && t.type === 'constant')?.value || '?'}
                                    </div>
                                    <div className="fraction-line"></div>
                                    <div className="denominator-placeholder">
                                        Déposez le coefficient (bleu) ici
                                    </div>
                                </div>
                            </DropZone>
                        </div>
                    )}
                </div>

                {renderSteps()}

                {isSolved && (
                    <div className="solution-container">
                        <h2 className="solution-title">Solution trouvée !</h2>
                        <p className="solution-value">x = {solution}</p>
                    </div>
                )}

                <div className="controls">
                    {!simplified && showHelp && !terms.some(t => t.inFraction) && (
                        <button className="action-button" onClick={simplifyEquation}>
                            Simplifier le côté droit
                        </button>
                    )}
                    <button className="reset-button" onClick={resetEquation}>
                        Nouvelle équation aléatoire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EquationSolver;