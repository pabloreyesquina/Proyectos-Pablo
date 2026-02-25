// --- Gestión de Estado ---
let currentDate = new Date();
let selectedDate = new Date();
let appointments = JSON.parse(localStorage.getItem('appointments_es')) || [];

// --- Configuración ---
const START_HOUR = 10;
const END_HOUR = 19; // La última cita empieza a las 19:00

// --- Elementos del DOM ---
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

// --- Inicialización ---
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

// --- Renderizado del Calendario (Lunes a Domingo) ---
function renderCalendar() {
    // Limpiar días previos (mantener cabeceras de días de la semana)
    const headers = Array.from(calendarGrid.querySelectorAll('.weekday'));
    calendarGrid.innerHTML = '';
    headers.forEach(h => calendarGrid.appendChild(h));

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Nombre del mes en español
    const monthName = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(currentDate);
    monthYearDisplay.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    // Ajuste para calendario de Lunes a Domingo
    // getDay() retorna 0 para Domingo, 1 para Lunes, etc.
    // Queremos: 0=Lun, 1=Mar, ..., 6=Dom
    let firstDayOfMonth = new Date(year, month, 1).getDay();
    firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Ajuste Lunes = 0

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Días del mes anterior (relleno)
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        const dayDiv = createDayElement(daysInPrevMonth - i, true);
        calendarGrid.appendChild(dayDiv);
    }

    // Días del mes actual
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

        // Característica Avanzada: Vista previa al pasar el ratón (Tooltip)
        addHoverPreview(dayDiv, dayDate, dayAppointments);

        dayDiv.addEventListener('click', () => {
            selectedDate = dayDate;
            renderCalendar();
            renderDayDetails(dayDate);
            // Auto-rellenar fecha en el formulario
            document.getElementById('appointment-date').value = formatDateForInput(dayDate);
        });

        calendarGrid.appendChild(dayDiv);
    }
}

function createDayElement(num, isOtherMonth) {
    const div = document.createElement('div');
    div.className = 'day';
    if (isOtherMonth) div.classList.add('other-month');
    div.textContent = num;
    return div;
}

// --- Renderizado de Detalles del Día ---
function renderDayDetails(date) {
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const dateLabel = new Intl.DateTimeFormat('es-ES', options).format(date);
    selectedDayLabel.textContent = dateLabel.charAt(0).toUpperCase() + dateLabel.slice(1);

    slotsContainer.innerHTML = '';

    const dayAppointments = appointments.filter(app => isSameDay(new Date(app.date), date));
    appointmentCountLabel.textContent = `${dayAppointments.length} Cita${dayAppointments.length !== 1 ? 's' : ''}`;

    for (let hour = START_HOUR; hour <= END_HOUR; hour++) {
        const timeString = `${hour}:00`;
        const appointment = dayAppointments.find(app => app.time === timeString);

        const slotDiv = document.createElement('div');
        slotDiv.className = `slot ${appointment ? 'booked' : 'free'}`;

        slotDiv.innerHTML = `
            <span class="slot-time">${timeString}</span>
            <span class="slot-info">${appointment ? appointment.name : 'Disponible'}</span>
        `;

        slotsContainer.appendChild(slotDiv);
    }
}

// --- Lógica de Reserva ---
function handleBooking(e) {
    e.preventDefault();

    const name = document.getElementById('client-name').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    const notes = document.getElementById('notes').value;

    if (!name || !date || !time) {
        showNotification('Por favor, completa todos los campos obligatorios.', 'error');
        return;
    }

    // Evitar solapamientos
    const isConflict = appointments.some(app => app.date === date && app.time === time);
    if (isConflict) {
        showNotification('¡Error! Esta franja ya está ocupada.', 'error');
        return;
    }

    const newAppointment = { id: Date.now(), name, date, time, notes };
    appointments.push(newAppointment);

    localStorage.setItem('appointments_es', JSON.stringify(appointments));

    showNotification('¡Cita registrada correctamente!', 'success');
    bookingForm.reset();

    // Actualizar vistas
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

    let content = `<div class="tooltip-title">Disponibilidad</div>`;

    const bookedCount = dayAppointments.length;
    const freeCount = (END_HOUR - START_HOUR + 1) - bookedCount;

    content += `
        <div class="tooltip-item booked"><span>Ocupado:</span> <span>${bookedCount}</span></div>
        <div class="tooltip-item free"><span>Libre:</span> <span>${freeCount}</span></div>
    `;

    if (dayAppointments.length > 0) {
        content += `<div style="margin-top: 5px; font-size: 0.75rem; opacity: 0.7; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 5px;">Próxima: ${dayAppointments[0].time}</div>`;
    }

    tooltip.innerHTML = content;
    dayDiv.appendChild(tooltip);
}

init();
