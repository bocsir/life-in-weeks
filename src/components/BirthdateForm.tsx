import React, { useState, useEffect, ChangeEvent } from 'react';

interface BirthDateFormProps {
    setWeeksEndured:  React.Dispatch<React.SetStateAction<number>>;
}

const BirthDateForm: React.FC<BirthDateFormProps> = ({setWeeksEndured}) => {
    const [dateValue, setDateValue] = useState<Date>();

    const updateWeeksEndured = (date: Date | undefined) => {
        if (!date) return;
        
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
        setWeeksEndured(diffWeeks);
    }

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newDate = new Date(e.target.value);
        setDateValue(newDate);
    }

    useEffect(() => {
        updateWeeksEndured(dateValue);
    }, [dateValue]);

    return (
        <form className="w-full max-w-7xl">
            <div className="flex gap-2">
                <label>birthdate:</label>
                <input 
                    value={dateValue ? dateValue.toISOString().split('T')[0] : ''} 
                    onChange={handleDateChange} 
                    className="bg-black pl-2 pr-2 border rounded-sm" 
                    type="date"
                />
            </div>
        </form>
    );
}

export default BirthDateForm;