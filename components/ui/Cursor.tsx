import React, { useEffect, useState, useRef } from 'react';

export const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
            }
            if (cursorRingRef.current) {
                // Add a slight delay/lerp to the ring for that "magnetic" feel
                setTimeout(() => {
                    if (cursorRingRef.current) {
                        cursorRingRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
                    }
                }, 80);
            }
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                target.classList.contains('group/vessel') // For MultiFormat nodes
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 -ml-1.25 -mt-1.25"
            />
            {/* Outer Ring */}
            <div
                ref={cursorRingRef}
                className={`fixed top-0 left-0 border border-brand/50 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out -ml-4 -mt-4
          ${isHovering ? 'w-12 h-12 bg-brand/10 scale-100' : 'w-8 h-8 scale-0 opacity-0'}
        `}
            />
            <style>{`
        body * { cursor: none !important; }
        /* Restore cursor for text selection if needed, but usually premium sites hide it fully or change it on hover */
      `}</style>
        </>
    );
};
