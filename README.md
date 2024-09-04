This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Project Structure
The project is structured as follows:

.
├── components         # Reusable components (e.g., Drawer, Calendar, BookingList)
├── pages
│   ├── _app.tsx       # Custom App component
│   ├── index.tsx      # Main page
├── public             # Static assets (images, icons, etc.)
└── README.md          # Project documentation


Features

Left Drawer Navigation

A profile header featuring a picture and the user's occupation.
A list of dummy navigation options.
A list of staff members, including their names and occupations.

Implemented using a modern UI library (e.g., Material-UI).

Calendar View
A dropdown calendar displaying the current date by default.
Users can select different dates from the calendar.
Implemented using a date-picker library (e.g., react-datepicker, @mui/lab/DatePicker).

Booking View
Displays all past and future bookings based on the selected date.
Booking data is stored locally using client-side storage (e.g., localStorage).
The booking view can scroll vertically and horizontally.
Technologies Used
Next.js - The React framework used for building the application.
TypeScript - Used for type safety and better code maintainability.
Tailwind CSS - For modern and responsive styling.
Material-UI - For building the UI components like the left drawer and other elements.
localStorage - Used for storing booking data locally on the client-side.
Usage
Open the application in your browser.
Use the left drawer to navigate between different sections.
Select a date using the calendar popup.
View the bookings for the selected date in the booking view.
Development Process
The development process was broken down into the following steps:

Project Setup: 
Initialized the Next.js project with TypeScript and set up the necessary dependencies.

UI Design: 
Implemented the left drawer navigation, calendar popup, and booking view based on the provided design specifications.

Functionality Implementation: 
Integrated localStorage for storing booking data and ensured smooth interactions and transitions.
Testing and Debugging: Tested the application on different devices to ensure responsiveness and accessibility.

Documentation: 
Created a README file and a brief report describing the development process.
Challenges Faced
Responsive Design: 
Ensuring the UI was responsive on both desktop and mobile devices required careful consideration of CSS layouts and media queries.

Calendar Integration: 
Implementing a smooth and user-friendly calendar popup that integrates well with the booking view was challenging.

localStorage Management: 
Managing booking data in localStorage while ensuring data integrity and performance was crucial.
Future Improvements

