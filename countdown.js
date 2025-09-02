const FULL_DASH = 2 * Math.PI * 40; // circunferencia del círculo (r=40)

const targetDate = new Date("September 20, 2025 08:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const total = targetDate - now;

  if (total <= 0) {
    clearInterval(timer);
    return;
  }

  const totalSeconds = Math.floor(total / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Actualizar números
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  // Máximo de días como referencia para el progreso
  const maxDays = 30;
  updateCircle("days-circle", days, maxDays);
  updateCircle("hours-circle", hours, 24);
  updateCircle("minutes-circle", minutes, 60);
  updateCircle("seconds-circle", seconds, 60);
};

const updateCircle = (id, value, max) => {
  const circle = document.getElementById(id);
  const offset = FULL_DASH * (1 - value / max);
  circle.style.strokeDashoffset = offset;
};

// Inicializar circunferencias
document.querySelectorAll(".progress-ring__circle").forEach((circle) => {
  circle.setAttribute("stroke-dasharray", FULL_DASH);
  circle.setAttribute("stroke-dashoffset", FULL_DASH);
});

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
