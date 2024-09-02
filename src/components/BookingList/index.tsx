import { useEffect, useState } from "react";

interface Booking {
  time: string;
  client: string;
  date: string;
  location: string;
  status: string;
}

interface BookingListProps {
  selectedDate: Date;
}

const BookingList: React.FC<BookingListProps> = ({ selectedDate }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const sampleBookings = [
    { time: "10:00 AM", client: "John Doe", date: "2024-09-01", location: "Room 101", status: "Confirmed" },
    { time: "11:30 AM", client: "Jane Smith", date: "2024-09-01", location: "Room 102", status: "Pending" },
    { time: "1:00 PM", client: "Alice Johnson", date: "2024-09-02", location: "Room 103", status: "Confirmed" },
    { time: "3:30 PM", client: "Bob Brown", date: "2024-09-03", location: "Room 104", status: "Cancelled" },
    { time: "9:00 AM", client: "Emily Davis", date: "2024-09-01", location: "Room 105", status: "Confirmed" },
    { time: "2:00 PM", client: "Michael Wilson", date: "2024-09-02", location: "Room 106", status: "Pending" },
    { time: "4:00 PM", client: "Sarah Lee", date: "2024-09-01", location: "Room 107", status: "Confirmed" },
    { time: "5:00 PM", client: "David Taylor", date: "2024-09-03", location: "Room 108", status: "Pending" },
    { time: "7:00 PM", client: "Jessica Martinez", date: "2024-09-04", location: "Room 109", status: "Confirmed" },
    { time: "8:30 AM", client: "Daniel Garcia", date: "2024-09-02", location: "Room 110", status: "Confirmed" },
    { time: "12:00 PM", client: "Olivia Hernandez", date: "2024-09-01", location: "Room 111", status: "Pending" },
  ];

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(sampleBookings));
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]") as Booking[];
    setBookings(storedBookings);
  }, []);

  const selectedDateString = selectedDate.toISOString().split("T")[0];
  const pastBookings = bookings.filter(
    (booking) => selectedDate.getFullYear() === 1900 || new Date(booking.date) < selectedDate
  );
  const futureBookings = bookings.filter(
    (booking) => selectedDate.getFullYear() === 1900 || new Date(booking.date) >= selectedDate
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-400 text-center mb-4">
        Bookings {selectedDate.getFullYear() === 1900 ? "for All Dates" : `on ${selectedDateString}`}
      </h2>

      {/* Future Bookings Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-red-400 mb-2">Future Bookings</h3>
        <div className="overflow-x-auto">
          <div className="bg-white rounded-lg shadow w-full">
            {futureBookings.length === 0 ? (
              <p className="text-center text-red-400 p-4">No future bookings.</p>
            ) : (
              <table className="w-full bg-white">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">Time</th>
                    <th className="py-2 px-4 border-b border-gray-200">Client</th>
                    <th className="py-2 px-4 border-b border-gray-200">Location</th>
                    <th className="py-2 px-4 border-b border-gray-200">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {futureBookings.map((booking, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b border-gray-200">{booking.time}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{booking.client}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{booking.location}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{booking.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Past Bookings Section */}
      <div>
        <h3 className="text-xl font-semibold text-red-600 mb-2">Past Bookings</h3>
        <div className="overflow-x-auto">
          <div className="bg-white rounded-lg shadow w-full">
            {pastBookings.length === 0 ? (
              <p className="text-center text-gray-500 p-4">No past bookings.</p>
            ) : (
              <table className="w-full bg-white">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">Time</th>
                    <th className="py-2 px-4 border-b border-gray-200">Client</th>
                    <th className="py-2 px-4 border-b border-gray-200">Location</th>
                    <th className="py-2 px-4 border-b border-gray-200">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pastBookings.map((booking, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b border-gray-200">{booking.time}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{booking.client}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{booking.location}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{booking.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
