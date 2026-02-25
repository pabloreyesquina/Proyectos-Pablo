// --- State Management ---
let currentDate = new Date();
let selectedDate = new Date();
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

// --- Config ---
const START_HOUR = 10;
const END_HOUR = 19; // Last slot starts at 19:00

// --- DOM Elements ---
const calendarGrid = document.getElementById('calendar-grid');
const monthYearDisplay = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const todayBtn = document.getElementById('todayBtn');
const bookingForm = document.getElementById('booking-form');
const slotsContainer = document.getElementById('slots-container');
const selectedDayLabel = document.getElementById('selected-day-label');
const appointmentCountLabel = document.getElementById('appointment-count');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');

// --- Initialization ---
function init() {
    renderCalendar();
    renderDayDetails(selectedDate);
    setupEventListeners();
}

// --- Event Listeners ---
function setupEventListeners() {
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    todayBtn.addEventListener('click', () => {
        currentDate = new Date();
        selectedDate = new Date();
        renderCalendar();
        renderDayDetails(selectedDate);
    });

    bookingForm.addEventListener('submit', handleBooking);
}

// --- Calendar Rendering ---
function renderCalendar() {
    // Clear previous days (keep weekdays headers)
    const headers = Array.from(calendarGrid.querySelectorAll('.weekday'));
    calendarGrid.innerHTML = '';
    headers.forEach(h => calendarGrid.appendChild(h));

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearDisplay.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Previous month's trailing days
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        const dayDiv = createDayElement(daysInPrevMonth - i, true);
        calendarGrid.appendChild(dayDiv);
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDate = new Date(year, month, i);
        const dayDiv = createDayElement(i, false, dayDate);

        if (isSameDay(dayDate, new Date())) dayDiv.classList.add('today');
        if (isSameDay(dayDate, selectedDate)) dayDiv.classList.add('selected');

        const dayAppointments = appointments.filter(app => isSameDay(new Date(app.date), dayDate));
        if (dayAppointments.length > 0) {
            dayDiv.classList.add('has-appointments');
            const dot = document.createElement('div');
            dot.className = 'appointment-dot';
            dayDiv.appendChild(dot);
        }

        // Advanced Feature: Hover Preview
        addHoverPreview(dayDiv, dayDate, dayAppointments);

        dayDiv.addEventListener('click', () => {
            selectedDate = dayDate;
            renderCalendar();
            renderDayDetails(dayDate);
            // Auto-fill date in form
            document.getElementById('appointment-date').value = formatDateForInput(dayDate);
        });

        calendarGrid.appendChild(dayDiv);
    }
}

function createDayElement(num, isOtherMonth, date = null) {
    const div = document.createElement('div');
    div.className = 'day';
    if (isOtherMonth) div.classList.add('other-month');
    div.textContent = num;
    return div;
}

// --- Day Details Rendering ---
function renderDayDetails(date) {
    selectedDayLabel.textContent = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).format(date);
    slotsContainer.innerHTML = '';

    const dayAppointments = appointments.filter(app => isSameDay(new Date(app.date), date));
    appointmentCountLabel.textContent = `${dayAppointments.length} Appts`;

    for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
        const timeString = `${hour}:00`;
        const appointment = dayAppointments.find(app => app.time === timeString);

        const slotDiv = document.createElement('div');
        slotDiv.className = `slot ${appointment ? 'booked' : 'free'}`;

        slotDiv.innerHTML = `
            <span class="slot-time">${timeString}</span>
            <span class="slot-info">${appointment ? appointment.name : 'Available'}</span>
        `;

        slotsContainer.appendChild(slotDiv);
    }
}

// --- Booking Logic ---
function handleBooking(e) {
    e.preventDefault();

    const name = document.getElementById('client-name').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    const notes = document.getElementById('notes').value;

    if (!name || !date || !time) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Check for overlap
    const isConflict = appointments.some(app => app.date === date && app.time === time);
    if (isConflict) {
        showNotification('This time slot is already booked!', 'error');
        return;
    }

    const newAppointment = { id: Date.now(), name, date, time, notes };
    appointments.push(newAppointment);

    localStorage.setItem('appointments', JSON.stringify(appointments));

    showNotification('Appointment booked successfully!', 'success');
    bookingForm.reset();

    // Refresh views
    selectedDate = new Date(date);
    currentDate = new Date(date);
    renderCalendar();
    renderDayDetails(selectedDate);
}

// --- Helpers ---
function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

function formatDateForInput(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function showNotification(message, type) {
    notificationMessage.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function addHoverPreview(dayDiv, date, dayAppointments) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    let content = `<div class="tooltip-title">Availability</div>`;

    // Count free/booked
    const bookedCount = dayAppointments.length;
    const freeCount = (END_HOUR - START_HOUR + 1) - bookedCount;

    content += `
        <div class="tooltip-item booked"><span>Booked:</span> <span>${bookedCount}</span></div>
        <div class="tooltip-item free"><span>Free:</span> <span>${freeCount}</span></div>
    `;

    if (dayAppointments.length > 0) {
        content += `<div style="margin-top: 5px; font-size: 0.7rem; opacity: 0.7;">First: ${dayAppointments[0].time}</div>`;
    }

    tooltip.innerHTML = content;
    dayDiv.appendChild(tooltip);
}

init();
