const calendarDates = document.querySelector(".calendar-dates");
const monthYear = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const today = new Date();

// Boton agregar actividad
const openBtn = document.getElementById("openMenuBtn");
const menu = document.getElementById("activityMenu");
const cancelBtn = document.getElementById("cancelBtn");
const addBtn = document.getElementById("addBtn");

// Popover para tasks
const taskPopover = document.getElementById("taskPopover");
const taskDateSpan = document.getElementById("taskDate");
const taskTitleSpan = document.getElementById("taskTitle");
const taskTypeSpan = document.getElementById("taskType");
const closePopoverBtn = document.getElementById("closeTaskPopoverBtn");

const deleteBtn = document.getElementById("deleteTaskBtn");

// Ver-Editar popover actividad
const popoverTitle = document.getElementById("popoverTitle");
const viewMode = document.getElementById("taskViewMode");
const editMode = document.getElementById("taskEditMode");
const editBtn = document.getElementById("editTaskBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const saveEditBtn = document.getElementById("saveEditBtn");
let currentTask = null; // Guardamos la tarea actual

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];


let tasks = [
  {
    fecha: "2025-08-29",
    titulo: "Examen: Prueba español",
    tipo: "examen",
  },
  {
    fecha: "2025-08-31",
    titulo: "Tarea: Matemáticas",
    tipo: "tarea",
  },
  {
    fecha: "2025-09-01",
    titulo: "Otro: Preparar exposición",
    tipo: "otro",
  },
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();



function renderCalendar(month, year) {
  calendarDates.innerHTML = "";
  monthYear.textContent = `${months[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const lastDay = new Date(year, month, daysInMonth).getDay();

  for (let i = firstDay - 1; i >= 0; i--) {
    const prevDay = daysInPrevMonth - i;
    const dayElement = document.createElement("div");
    dayElement.className = "bg-pale-purple text-muted";
    dayElement.textContent = prevDay;
    calendarDates.appendChild(dayElement);
  }


  // Populate the days
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.className = "min-h-24";
    day.textContent = i;

    // Highlight today's date
    if (
      i === today.getDate() &&
      year === today.getFullYear() &&
      month === today.getMonth()
    ) {
      day.classList.add("current-date");
    }

    const dateStr = new Date(year, month, i).toISOString().split("T")[0];
    const tasksForDay = tasks.filter((task) => task.fecha === dateStr);
    tasksForDay.forEach((task) => {
      const taskEl = document.createElement("div");
      taskEl.className = `mt-1 text-xs rounded px-2 py-1 ${
        task.tipo === "examen"
          ? "bg-red-100 text-red-700"
          : task.tipo === "tarea"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-green-100 text-green-700"
      }`;
      taskEl.textContent = task.titulo;
      day.appendChild(taskEl);
      taskEl.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que dispare el cierre global
        showTaskPopover(task, taskEl);
      });
    });

    calendarDates.appendChild(day);
  }

  for (let i = lastDay + 1; i < 7; i++) {
    const blank = document.createElement("div");
    blank.className = "bg-pale-purple";
    blank.textContent = i - lastDay;
    calendarDates.appendChild(blank);
  }
}

renderCalendar(currentMonth, currentYear);

prevMonthBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Mostrar el menú
openBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que el <a href="#"> recargue la página
  menu.classList.remove("hidden");
});

// Cerrar con los botones
cancelBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});

addBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});

// Cerrar si haces clic fuera del menú
document.addEventListener("click", (event) => {
  const isClickInside =
    menu.contains(event.target) || openBtn.contains(event.target);
  if (!isClickInside) {
    menu.classList.add("hidden");
  }
});

// Ocultar popover al hacer clic afuera
document.addEventListener("click", (e) => {
  if (
    !taskPopover.contains(e.target) &&
    !e.target.classList.contains("calendar-task")
  ) {
    taskPopover.classList.add("hidden");
  }
});

// Mostrar popover al hacer clic en una tarea
function showTaskPopover(task, taskEl) {
  // Rellenar datos
  taskDateSpan.textContent = task.fecha;
  taskTitleSpan.textContent = task.titulo;
  taskTypeSpan.textContent = task.tipo;

  // Posicionar el popover al lado de la tarea
  const rect = taskEl.getBoundingClientRect();
  const popoverWidth = taskPopover.offsetWidth || 384; // tailwind w-96 = 384px
  const popoverHeight = taskPopover.offsetHeight || 240; // estimación por padding y contenido

  // Calcular posición: a la derecha, centrado verticalmente
  const top = rect.top + window.scrollY + rect.height / 2 - popoverHeight / 2;
  const left = rect.right + window.scrollX + 12; // 12px espacio a la derecha

  // Aplicar posición
  taskPopover.style.top = `${top}px`;
  taskPopover.style.left = `${left}px`;

  // Mostrar popover
  taskPopover.classList.remove("hidden");

  currentTask = task;
}

// Ocultar al presionar cerrar
closePopoverBtn.addEventListener("click", () => {
  taskPopover.classList.add("hidden");
});

editBtn.addEventListener("click", () => {
  if (!currentTask) return;

  // Cambiar título
  popoverTitle.textContent = "Editar actividad";

  // Rellenar inputs con datos actuales
  document.getElementById("editTaskDate").value = currentTask.fecha;
  document.getElementById("editTaskTitle").value = currentTask.titulo;
  document.getElementById("editTaskType").value = currentTask.tipo;

  // Mostrar modo edición
  viewMode.classList.add("hidden");
  editMode.classList.remove("hidden");
});

cancelEditBtn.addEventListener("click", () => {
  popoverTitle.textContent = "Actividad";
  editMode.classList.add("hidden");
  viewMode.classList.remove("hidden");
});

saveEditBtn.addEventListener("click", () => {
  // Actualizar la tarea
  currentTask.fecha = document.getElementById("editTaskDate").value;
  currentTask.titulo = document.getElementById("editTaskTitle").value;
  currentTask.tipo = document.getElementById("editTaskType").value;

  // Actualizar vista
  document.getElementById("taskDate").textContent = currentTask.fecha;
  document.getElementById("taskTitle").textContent = currentTask.titulo;
  document.getElementById("taskType").textContent = currentTask.tipo;

  // (Opcional) podrías volver a renderizar el calendario aquí

  // Cambiar a modo vista
  popoverTitle.textContent = "Actividad";
  editMode.classList.add("hidden");
  viewMode.classList.remove("hidden");
});


deleteBtn.addEventListener("click", () => {
  if (!currentTask) return;

  // Eliminar del array de tasks
  tasks = tasks.filter((task) => task !== currentTask);

  // Cerrar el popover
  taskPopover.classList.add("hidden");

  // Limpiar referencia
  currentTask = null;

  // Opcional: volver a renderizar calendario
  renderCalendar(currentMonth, currentYear);
});

addBtn.addEventListener("click", () => {
  const date = document.getElementById("activityDate").value;
  const title = document.getElementById("activityTitle").value;
  const type = document.getElementById("activityType").value;

  if (!date || !title || !type) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Crear el task
  const newTask = {
    fecha: date,
    titulo: title,
    tipo: type,
  };

  // Agregarlo al array
  tasks.push(newTask);

  // Cerrar el formulario
  document.getElementById("activityMenu").classList.add("hidden");

  // (Opcional) Limpiar inputs
  document.getElementById("activityDate").value = "";
  document.getElementById("activityTitle").value = "";
  document.getElementById("activityType").value = "examen";

  // Redibujar el calendario para que aparezca el nuevo task
  renderCalendar(currentMonth, currentYear);
});
