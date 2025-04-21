import React, { useEffect, useRef } from 'react';

const AutoResizeTextarea = ({
                                id,
                                value,
                                onChange,
                                className,
                                minRows = 2,
                                maxRows = 10,
                                placeholder
                            }) => {
    const textareaRef = useRef(null);
    const lineHeight = 24; // Hauteur d'une ligne en px (à ajuster selon votre CSS)

    useEffect(() => {
        if (textareaRef.current) {
            // Réinitialiser la hauteur
            textareaRef.current.style.height = 'auto';

            // Calculer la nouvelle hauteur
            const newHeight = Math.min(
                Math.max(textareaRef.current.scrollHeight, minRows * lineHeight),
                maxRows * lineHeight
            );

            textareaRef.current.style.height = `${newHeight}px`;
        }
    }, [value, minRows, maxRows, lineHeight]);

    return (
        <textarea
            ref={textareaRef}
            id={id}
            className={className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={minRows}
            style={{
                minHeight: `${minRows * lineHeight}px`,
                maxHeight: `${maxRows * lineHeight}px`,
                overflowY: 'auto'
            }}
        />
    );
};

export default AutoResizeTextarea;