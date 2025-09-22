import React, { useState, useRef, useEffect, FC, MouseEvent } from 'react';

interface Position {
    x: number;
    y: number;
}

interface DraggableCardProps {
    children?: React.ReactNode;
}


const DraggableCard: FC<DraggableCardProps> = ({ children }) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState<boolean>(false); 
    const startDragPosition = useRef<Position>({ x: 0, y: 0 });
    const startCardPosition = useRef<Position>({ x: 0, y: 0 }); 
    const handleMouseDown = (e: MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();

        setIsDragging(true);

        startDragPosition.current = { x: e.clientX, y: e.clientY };

        startCardPosition.current = { x: position.x, y: position.y };

        document.body.style.cursor = 'grabbing';
    };


    const handleMouseMove = (e: globalThis.MouseEvent): void => {
        if (!isDragging) return;

        const deltaX: number = e.clientX - startDragPosition.current.x;
        const deltaY: number = e.clientY - startDragPosition.current.y;

        const newX: number = startCardPosition.current.x + deltaX;
        const newY: number = startCardPosition.current.y + deltaY;

        setPosition({ x: newX, y: newY });
    };


    const handleMouseUp = (): void => {
        if (isDragging) {
            setIsDragging(false);
            document.body.style.cursor = 'default';
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const cardClasses: string = ` 
     select-none         
      
    ${isDragging ? 'z-50  ' : 'z-10  '}
  `;

    const transformStyle: React.CSSProperties = {
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out',
    };

    return (
        <div
            className={cardClasses}
            style={transformStyle}
            onMouseDown={handleMouseDown}
        >
            <div className={`cursor-${isDragging ? 'grabbing' : 'grab'}`}>
                {children || <p className="text-xl font-bold">TypeScript Card!</p>}
            </div>
        </div>
    );
};

export default DraggableCard;