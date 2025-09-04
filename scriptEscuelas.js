const schools = [
  {
    logo: "img/escuela1.png",
    name: "Benito Juárez",
    cct: "28DJN0019K",
    zone: "39",
    address: "Misión de Guadalupe 32539",
  },
  {
    logo: "img/escuela2.png",
    name: "Cecilia Lanz VDA De Meana",
    cct: "27EJN0067U",
    zone: "0",
    address: "Tacotalpa",
  },
  {
    logo: "img/escuela3.png",
    name: "Ixtal-A",
    cct: "5545454",
    zone: "50",
    address: "Villa",
  },
];

const editPopover = document.getElementById("editPopover");

// Boton agregar escuela
const openBtn = document.getElementById("openMenuBtn");
const menu = document.getElementById("addSchoolMenu");
const cancelBtn = document.getElementById("cancelBtn");

const viewMode = document.getElementById("taskViewMode");
const editMode = document.getElementById("taskEditMode");

const editBtn = document.getElementById("editTaskBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const saveEditBtn = document.getElementById("saveEditBtn");

const saveSchoolBtn = document.getElementById("saveSchoolBtn");
const updateSchoolBtn = document.getElementById("updateSchoolBtn");

let currentEditingIndex = null;

function renderSchoolTable(schoolArray) {
  const tableBody = document.getElementById("schoolTableBody");
  tableBody.innerHTML = ""; // Limpiar el contenido anterior

  schoolArray.forEach((school, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="px-4 py-3">
        <img src="${school.logo}" alt="Logo" class="w-10 h-10 rounded-full object-cover" />
      </td>
      <td class="px-4 py-3">${school.name}</td>
      <td class="px-4 py-3">${school.cct}</td>
      <td class="px-4 py-3">${school.zone}</td>
      <td class="px-4 py-3">${school.address}</td>
      <td class="px-4 py-3">
        <a href="#" class="editSchoolBtn" data-index="${index}">
          <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.4623 15.9368C3.56006 15.3068 2.83826 14.2268 2.83826 13.0568C2.65781 10.5368 2.65781 8.01684 2.83826 5.49684C2.92849 3.60684 4.64275 1.98684 6.53746 1.89684C7.8006 1.89684 9.06374 1.80684 10.3269 1.80684C11.7705 1.80684 13.3043 1.80684 14.7479 1.89684C15.7403 1.89684 16.6426 2.52684 17.0937 3.33684C17.2742 3.60684 17.5448 3.78684 17.9057 3.78684C18.6275 3.78684 19.0787 2.97684 18.7178 2.43684C17.9057 1.08684 16.4621 0.186836 14.8381 0.0968359C13.2141 0.00683594 11.7705 0.00683594 10.2367 0.00683594C8.70285 0.00683594 7.16903 0.00683594 5.63522 0.0968359C3.19916 0.186836 1.124 2.07684 1.03377 4.50684C0.853325 7.65684 0.853325 10.8068 1.03377 13.9568C1.124 15.5768 2.02624 16.9268 3.28938 17.6468C4.01118 18.0968 4.91342 17.5568 4.91342 16.7468C4.91342 16.4768 4.73297 16.1168 4.4623 15.9368Z"
                fill="#7B64B1"
              />
              <path
                d="M18.8982 9.09693C18.8982 8.46693 18.6275 7.83693 18.1764 7.38693L16.1012 5.40693C15.199 4.50693 13.6652 4.50693 12.6727 5.40693L6.44722 11.5269C5.00363 12.9669 4.91341 15.3969 6.357 16.8369C6.98857 17.5569 7.89081 17.9169 8.79306 18.0069C8.79306 18.0069 8.79305 18.0069 8.88328 18.0069C8.9735 18.0069 8.9735 18.0069 9.06373 18.0069H9.15395C9.24418 18.0069 9.3344 18.0069 9.3344 18.0069C11.0487 18.0069 15.0185 18.0069 16.823 17.9169C17.3644 17.9169 17.7253 17.4669 17.7253 16.9269C17.7253 16.3869 17.2741 16.0269 16.7328 16.0269C15.6501 16.0269 14.0261 16.1169 12.5825 16.1169L17.9959 10.8969C18.6275 10.4469 18.8982 9.81693 18.8982 9.09693ZM7.80059 12.7869L11.3193 9.36693L14.1163 12.1569L10.5975 15.5769C10.2366 15.9369 9.6953 16.1169 9.15395 16.1169C8.61261 16.1169 8.16148 15.9369 7.80059 15.4869C7.07879 14.7669 7.07879 13.5969 7.80059 12.7869ZM16.823 9.54693L15.3794 10.8969L12.6727 8.10693L14.0261 6.75693C14.2065 6.57693 14.5674 6.57693 14.8381 6.75693L16.9132 8.73693C17.0035 8.82693 17.0937 9.00693 17.0937 9.18693C17.0035 9.27693 17.0035 9.45693 16.823 9.54693Z"
                fill="#7B64B1"
              />
            </svg>
        </a>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function addTableListeners() {
  document.querySelectorAll(".editSchoolBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // <-- evita que el click llegue al listener global

      const schoolId = btn.dataset.index;
      showEditPopover(schoolId, btn);
    });
  });
}

function showEditPopover(index, editButton) {
  // Guardamos el índice actual para luego poder actualizarlo al guardar
  currentEditingIndex = index;

  const school = schools[index];
  // Mostrar el popover
  editPopover.classList.remove("hidden");

  // Calcular posición: a la izquierda del botón
  const rect = editButton.getBoundingClientRect();
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  // Asegúrate de que el contenedor padre tenga `relative` o `fixed` si se necesita
  editPopover.style.position = "absolute";
  editPopover.style.top = `${rect.top + scrollY}px`; // mantener altura
  editPopover.style.left = `${rect.left + scrollX - editPopover.offsetWidth - 10}px`; // 10px de separación a la izquierda

  // Llenar los campos
  document.getElementById("editSchoolName").value = school.name;
  document.getElementById("editSchoolCCT").value = school.cct;
  document.getElementById("editSchoolZone").value = school.zone;
  document.getElementById("editSchoolAddress").value = school.address;
  editPopover.dataset.editing = index;
}

function resetForm() {
  document.getElementById("schoolName").value = "";
  document.getElementById("schoolCCT").value = "";
  document.getElementById("schoolZone").value = "";
  document.getElementById("schoolAddress").value = "";
  document.getElementById("schoolLogo").value = "";

  document.getElementById("addSchoolMenu").dataset.editing = "";
  document.getElementById("addSchoolMenu").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  renderSchoolTable(schools);
  addTableListeners();
});

// Cerrar al hacer clic fuera del popover
document.addEventListener("click", (event) => {
  const isClickInside = editPopover.contains(event.target) || menu.contains(event.target) || openBtn.contains(event.target);;
  const isEditButton = event.target.closest(".editSchoolBtn");

  if (!isClickInside && !isEditButton) {
    editPopover.classList.add("hidden");
    menu.classList.add("hidden");
  }
});

// Cerrar al hacer clic en "Cancelar"
cancelEditBtn.addEventListener("click", () => {
  editPopover.classList.add("hidden");
  editMode.classList.add("hidden");
  viewMode.classList.remove("hidden");
});

// Mostrar el menú
openBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que el <a href="#"> recargue la página
  menu.classList.remove("hidden");
});

// Cerrar con los botones
cancelBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  resetForm();
});

updateSchoolBtn.addEventListener("click", () => {
  const index = editPopover.dataset.editing;
  const isEditing = true;

  const name = document.getElementById("editSchoolName").value.trim();
  const cct = document.getElementById("editSchoolCCT").value.trim();
  const zone = document.getElementById("editSchoolZone").value.trim();
  const address = document.getElementById("editSchoolAddress").value.trim();
  const logoFile = document.getElementById("editSchoolLogo")?.files[0];

  if (!name || !cct || !zone || !address) {
    alert("Completa todos los campos.");
    return;
  }

  const updateAndRender = (logoUrl) => {
    const schoolData = {
      logo: logoUrl,
      name,
      cct,
      zone,
      address,
    };

    if (isEditing) {
      schools[parseInt(index)] = schoolData;
    } else {
      schools.push(schoolData);
    }

    renderSchoolTable(schools);
    resetForm();
    addTableListeners();
  };

  if (logoFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      updateAndRender(e.target.result);
    };
    reader.readAsDataURL(logoFile);
  } else {
    const logoFallback = isEditing
      ? schools[parseInt(index)]?.logo
      : "https://via.placeholder.com/40";
    updateAndRender(logoFallback);
  }
});

saveSchoolBtn.addEventListener("click", function () {
  const name = document.getElementById("schoolName").value.trim();
  const cct = document.getElementById("schoolCCT").value.trim();
  const zone = document.getElementById("schoolZone").value.trim();
  const address = document.getElementById("schoolAddress").value.trim();
  const logoInput = document.getElementById("schoolLogo");
  const logoFile = logoInput.files[0];

  if (!name || !cct || !zone || !address || !logoFile) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const logoUrl = e.target.result;
    const schoolData = {
      logo: logoUrl,
      name,
      cct,
      zone,
      address,
    };
    schools.push(schoolData);
    renderSchoolTable(schools);
    resetForm();
    addTableListeners();
    // Opcional: Limpiar formulario
    document.getElementById("schoolName").value = "";
    document.getElementById("schoolCCT").value = "";
    document.getElementById("schoolZone").value = "";
    document.getElementById("schoolAddress").value = "";
    logoInput.value = "";

    // Ocultar modal si estás usando uno
    editPopover.classList.add("hidden");
  };

  reader.readAsDataURL(logoFile);
});
