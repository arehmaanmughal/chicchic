"use client";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CalendarPopupProps {
  onSelectDate: (date: Date | null) => void; // Accepts a Date or null
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  return (
    <div className="py-4">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        className="w-full"
        dateFormat="MMMM d, yyyy" // Example of a custom date format
        ariaLabelledBy="calendar-picker" // Accessibility enhancement
      />
      <label id="calendar-picker" className="sr-only">
        Select a date
      </label>
    </div>
  );
};

export default CalendarPopup;
