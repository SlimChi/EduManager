import React from 'react';
import { useDrag } from 'react-dnd';

const Term = ({ term, showArrow = false }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'term',
        item: {
            id: term.id,
            type: term.type,
            value: term.value,
            currentSide: term.side
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const opacity = isDragging ? 0.4 : 1;
    const transform = isDragging ? 'scale(0.9)' : 'scale(1)';
    const transition = 'all 0.2s ease';

    if (term.noBox) {
        return (
            <span
                ref={drag}
                className={`operator-no-box ${term.type}-operator`}
                style={{ opacity, transform, transition }}
            >
                {term.value}
            </span>
        );
    }

    return (
        <div
            className={`term-container ${term.type === 'coefficient' ? 'coefficient-with-arrow' : ''}`}
            style={{ display: 'inline-block', position: 'relative' }}
        >
            {term.type === 'coefficient' && showArrow && (
                <>
                    {/* Version texte */}
                    <div className="coefficient-arrow">↓</div>

                    {/* Version SVG (décommentez pour utiliser) */}
                    { <svg className="coefficient-arrow-svg" viewBox="0 0 24 24" fill="#FF5722">
                        <path d="M12 2L4 12l1.5 1.5L12 6l6.5 7.5L20 12z" />
                    </svg> }
                </>
            )}
            <div
                ref={drag}
                className={`term ${term.type}-term`}
                style={{ opacity, transform, transition, cursor: 'move' }}
            >
                {term.value}
            </div>
        </div>
    );
};

export default Term;