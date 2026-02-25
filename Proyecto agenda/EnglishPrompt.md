\# Appointment Calendar Web App (HTML, CSS, JavaScript Only)



\## 📌 Project Description



Create a web-based appointment calendar application using \*\*only HTML, CSS, and vanilla JavaScript\*\* (no frameworks or external libraries).



The application is designed for a \*\*professional user\*\* (not clients) to manage appointments for a \*\*single service\*\*.  

Only one client can be attended at a time, so overlapping appointments must be prevented.



---



\## ✅ Core Requirements



\### 1. Single Service Constraint

\- Only one appointment can exist per time slot.

\- Overlapping appointments must be prevented.

\- If a time slot is already booked, it cannot be selected again.



\### 2. Working Hours

\- Appointments are available only between \*\*10:00 and 20:00\*\*.

\- Each appointment lasts \*\*exactly 1 hour\*\*.

\- Only full-hour time slots are allowed:

&nbsp; - 10:00  

&nbsp; - 11:00  

&nbsp; - 12:00  

&nbsp; - ...  

&nbsp; - 19:00  



\### 3. Multiple Appointments per Client

\- A client may have multiple appointments on different days and times.



---



\## 📝 Appointment Creation Form



Create a basic form interface to add appointments.



The form must include:

\- Client name (required)

\- Date selection (required)

\- Time slot selection (required)

\- Optional notes field



\### Validation Rules

\- All required fields must be validated.

\- The system must prevent booking an already occupied time slot.

\- Display clear error messages when conflicts occur.



---



\## 📅 Calendar View (Complementary Interface)



\### 4. Monthly Calendar View

\- Display a monthly calendar layout.

\- Each day should visually indicate if it contains appointments.

\- Days must be clickable.



\### 5. Day Details View

When a user selects a day:

\- Show all booked appointments for that day.

\- Show all available time slots.

\- Clearly distinguish between:

&nbsp; - Booked slots

&nbsp; - Free slots



---



\## ⭐ Advanced Feature (For Higher Grade)



\### 6. Hover Preview

\- When hovering over a day in the calendar:

&nbsp; - Display a tooltip or small preview.

&nbsp; - Show that day's booked hours and free hours.



---



\## ⚙ Technical Requirements



\- Use only:

&nbsp; - HTML

&nbsp; - CSS

&nbsp; - Vanilla JavaScript (no frameworks)

\- Organize code into separate files:

&nbsp; - `index.html`

&nbsp; - `styles.css`

&nbsp; - `script.js`

\- Use JavaScript objects and arrays to store appointments.

\- Optionally use `localStorage` to persist data between sessions.

\- Write clean, well-structured, and readable code.



---



\## 🎨 UI Requirements



\- Clean and professional design.

\- Basic responsive layout.

\- Clear visual distinction between:

&nbsp; - Booked slots

&nbsp; - Available slots

&nbsp; - Selected day



---



\## 🎯 Expected Behavior



The professional user should be able to:



\- Add appointments through a form.

\- Automatically prevent scheduling conflicts.

\- View appointments in a calendar layout.

\- Click on a day to see:

&nbsp; - All scheduled appointments.

&nbsp; - All free time slots.

\- Hover over days to preview daily availability (advanced feature).

