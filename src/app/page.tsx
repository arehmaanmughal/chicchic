"use client";
import { useState, useEffect } from "react";
import CalendarPopup from "@/components/CalendarPopup";
import LeftDrawer from "@/components/Drawer";
import BookingList from "@/components/BookingList";
import Modal from "@/components/Modal";
import { FilterList, Search } from "@mui/icons-material";
import Searchbar from "@/components/Searchbar";
import BasicBreadcrumbs from "@/components/Breadcrumbs";

const SchedulerPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDateSelect = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    } else {
      setSelectedDate(new Date());
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  return (
    <div className="">
      <LeftDrawer />
      <div className="px-3 py-3 sm:py-12 mt-14 sm:mt-16 md:ml-[240px] flex flex-col gap-8">
        <div className="hidden sm:flex justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            Booking List
          </h2>
          <BasicBreadcrumbs />
        </div>
        <div className="flex flex-col gap-3">
        <div className="flex items-center flex-wrap justify-end">
          <div className="hidden sm:block">
            <Searchbar />
          </div>
          <div className="block sm:hidden">
            <Search />
          </div>
          <button
            onClick={handleOpenModal}
            className="text-black px-4 py-2 rounded-3xl flex items-center gap-2"
            aria-label="filter-by-date"
          >
            <FilterList />
            Filter
          </button>
        </div>

        <BookingList selectedDate={selectedDate} />

        </div>
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
