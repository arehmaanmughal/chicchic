"use client";
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface CalendarPopupProps {
  onSelectDate: (date: Date | null) => void;
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    onSelectDate(date || null); // Convert undefined back to null for the parent component if needed
  };

  return (
    <div className="py-4">
      <DayPicker
        selected={selectedDate}
        onSelect={handleDateChange}
        mode="single"
        className="w-full text-black"
        aria-label="calendar-picker"
      />
      <label id="calendar-picker" className="sr-only">
        Select a date
      </label>
    </div>
  );
};

export default CalendarPopup;
