import React from "react";

interface GridComponentProps {
    weeksEndured: number;
}

const Grid: React.FC<GridComponentProps> = ({weeksEndured}) => {

    const ROWS = 80;
    const COLS = 52;

    const cells = Array(ROWS * COLS).fill(null);

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <div
                className="grid gap-0.5 bg-gray-400 p-0.5 rounded"
                style={{
                    gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                }}
            >
                {cells.map((_, index) => (
                   
                    <div
                        key={index}
                        className={`aspect-square ${(index < weeksEndured) ? "bg-black" : "bg-white"} hover:bg-amber-300 transition-colors`}
                        title={`Cell ${index + 1}`}
                    >
                    </div>
                    
                ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
                {ROWS} years × {COLS} weeks = {ROWS * COLS} total weeks
            </div>
        </div>
    );
};

export default Grid;