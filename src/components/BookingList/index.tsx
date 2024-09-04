import { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import sampleBookings from "@/data/bookinglist";
import { CalendarMonth, Phone } from "@mui/icons-material";
import { Pagination } from "@mui/material";

interface Booking {
  time: string;
  client: string;
  date: string;
  location: string;
  status: string;
  number: string;
  message: string;
}

interface BookingListProps {
  selectedDate: Date;
}

const BookingList: React.FC<BookingListProps> = ({ selectedDate }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // Simulate fetching from storage
    localStorage.setItem("bookings", JSON.stringify(sampleBookings));
    const storedBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    ) as Booking[];
    setBookings(storedBookings);
  }, []);

  // Convert selectedDate to a local date string for accurate comparison
  const selectedDateString = selectedDate.toLocaleDateString("en-CA"); // Format as 'YYYY-MM-DD'

  // Filter bookings based on the selected date
  const selectedDateBookings = bookings.filter(
    (booking) => booking.date === selectedDateString
  );

  return (
    <div>
      <div className="p-3 sm:p-6 bg-white rounded-xl sm:rounded-3xl shadow-md border border-gray flex flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 xxxl:grid-cols-4 gap-4">
          {selectedDateBookings.length === 0 ? (
            <p className="text-center text-black p-4">
              No bookings for this date.
            </p>
          ) : (
            selectedDateBookings.map((booking, index) => (
              <div
                key={index}
                className="bg-white border border-gray rounded-lg shadow p-4 hover:bg-body transition duration-200 flex flex-col gap-2"
              >
                <div className="flex justify-between gap-2 items-center flex-wrap">
                  <p className="text-black text-xl font-bold">
                    {booking.client}
                  </p>
                  <p
                    className={`py-1 px-2 w-fit text-xs rounded-md ${
                      booking.status === "Pending"
                        ? "bg-orange text-white"
                        : booking.status === "Cancelled"
                        ? "bg-red text-white"
                        : "bg-green text-white"
                    }`}
                  >
                    {booking.status}
                  </p>
                </div>

                <div className="flex justify-between gap-2 items-center flex-wrap">
                  <div className="flex items-center gap-2">
                    <AccessTimeIcon className=" text-primary" />
                    <p className="text-black text-wrap">{booking.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarMonth className=" text-primary" />
                    <p className="text-black">{booking.date}</p>
                  </div>
                </div>
                <div className="flex justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <LocationOnIcon className=" text-primary" />
                    <p className="text-black">{booking.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className=" text-primary" />
                    <p className="text-black">{booking.number}</p>
                  </div>
                </div>
                <div>
                  <h6 className="text-black font-bold">Message:</h6>
                  <p className="text-black">{booking.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center">
          <Pagination count={10} variant="outlined" />
        </div>
      </div>
    </div>
  );
};

export default BookingList;
