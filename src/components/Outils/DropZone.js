import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ side, onDrop, children, className = '' }) => {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: 'term',
        drop: (item) => onDrop(item, side),
        canDrop: (item) => {
            // Empêche de déposer un terme du même côté
            return item.currentSide !== side;
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }));

    const getDropZoneStyle = () => {
        let style = {};
        if (isOver && canDrop) {
            style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
            style.border = '2px dashed #4CAF50';
        } else if (isOver) {
            style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
            style.border = '2px dashed #F44336';
        }
        return style;
    };

    return (
        <div
            ref={drop}
            className={`drop-zone ${side}-side ${className}`}
            style={getDropZoneStyle()}
        >
            {children}
        </div>
    );
};

export default DropZone;