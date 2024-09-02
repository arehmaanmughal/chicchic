"use client";
import { useState } from "react";
import CalendarPopup from "@/components/CalendarPopup";
import LeftDrawer from "@/components/Drawer";
import BookingList from "@/components/BookingList";
import Modal from "@/components/Modal";
 // Assuming you have a Modal component

const SchedulerPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <LeftDrawer />
      <div className="p-4 mt-16 md:ml-[240px]">
        <button
          onClick={handleOpenModal}
          className="bg-red-400 text-white px-4 py-2 rounded mb-4"
        >
          Filter
        </button>
        {selectedDate ? (
          <BookingList selectedDate={selectedDate} />
        ) : (
          <BookingList selectedDate={new Date("1900-01-01")} /> // Show all bookings
        )}
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <CalendarPopup onSelectDate={handleDateSelect} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SchedulerPage;
