const groupArray = [
  {
    nombre: "Grupo A1",
    grado: "1°",
    letra: "A",
    turno: "Matutino",
    cicloEscolar: "2025-2026",
    ninas: 12,
    ninos: 10,
  },
  {
    nombre: "Grupo B2",
    grado: "2°",
    letra: "B",
    turno: "Vespertino",
    cicloEscolar: "2025-2026",
    ninas: 15,
    ninos: 13,
  },
  {
    nombre: "Grupo C3",
    grado: "3°",
    letra: "C",
    turno: "Matutino",
    cicloEscolar: "2025-2026",
    ninas: 10,
    ninos: 14,
  },
];
const studentArray = [
  {
    imagen: "img/student-profile.png",
    nombre: "Ana López García",
    fechaNacimiento: "2015-03-12",
    curp: "LOAA150312MDFRNN09",
    genero: "Femenino",
    grupo: "1° A",
    contactoEmergencia: "María García - 5523456789",
    tutores: "María",
    necesidades: "ADHD",
    observaciones: "Tiene hiperactividad"
  },
  {
    imagen: "img/student-profile.png",
    nombre: "Carlos Méndez Ruiz",
    fechaNacimiento: "2014-08-25",
    curp: "MERU140825HDFRRL03",
    genero: "Masculino",
    grupo: "2° B",
    contactoEmergencia: "Jorge Méndez - 5512345678",
    tutores: "Mayra",
    necesidades: "",
    observaciones: "No termina actividades"
  },
  {
    imagen: "img/student-profile.png",
    nombre: "Lucía Fernández",
    fechaNacimiento: "2013-11-10",
    curp: "FECL131110MDFRRZ06",
    genero: "Femenino",
    grupo: "3° C",
    contactoEmergencia: "Claudia Fernández - 5545671234",
    tutores: "María",
    necesidades: "",
    observaciones: ""
  },
];

function renderGroupTable(groupArray) {
  const tableBody = document.getElementById("groupTableBody");
  tableBody.innerHTML = ""; // Limpiar contenido anterior

  groupArray.forEach((group, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="px-4 py-3">${group.nombre}</td>
      <td class="px-4 py-3">${group.grado}</td>
      <td class="px-4 py-3">${group.letra}</td>
      <td class="px-4 py-3">${group.turno}</td>
      <td class="px-4 py-3">${group.cicloEscolar}</td>
      <td class="px-4 py-3">${group.ninas}</td>
      <td class="px-4 py-3">${group.ninos}</td>
      <td class="px-4 py-3">
        <a href="#" class="viewGroupBtn" data-index="${index}">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7984 8.80713C19.3984 4.10713 15.2984 0.307129 10.4984 0.307129C10.3984 0.307129 10.2984 0.307129 10.1984 0.307129C8.29844 0.307129 6.29844 0.407129 4.39844 0.507129C2.29844 0.607129 0.698438 2.20713 0.498438 4.20713C0.198437 8.00713 0.198437 11.9071 0.498438 15.7071C0.698438 17.8071 2.39844 19.4071 4.49844 19.5071C6.39844 19.6071 8.29844 19.6071 10.1984 19.6071C12.0984 19.6071 13.8984 19.6071 15.7984 19.5071C17.8984 19.4071 19.6984 17.7071 19.7984 15.6071C19.8984 13.6071 19.8984 11.6071 19.8984 9.70713C19.8984 9.40713 19.8984 9.10713 19.7984 8.80713ZM17.6984 15.6071C17.5984 16.7071 16.7984 17.6071 15.6984 17.6071C13.8984 17.7071 11.9984 17.7071 10.1984 17.7071C8.29844 17.7071 6.39844 17.7071 4.59844 17.6071C3.49844 17.6071 2.59844 16.7071 2.59844 15.7071C2.29844 12.0071 2.29844 8.20713 2.59844 4.50713C2.69844 3.50713 3.49844 2.60713 4.59844 2.60713C6.39844 2.40713 8.29844 2.30713 10.1984 2.30713H10.4984C10.5984 2.30713 10.7984 2.30713 10.8984 2.30713C11.2984 3.00713 11.7984 3.90713 12.0984 4.80713C12.3984 5.70713 12.6984 6.80713 12.8984 7.60713C13.0984 8.40713 13.6984 8.90713 14.4984 8.90713H17.8984C17.8984 9.20713 17.9984 9.50713 17.9984 9.80713C17.8984 11.7071 17.7984 13.6071 17.6984 15.6071Z" fill="#7B64B1"/>
            <path d="M6.69824 9.80713H10.2982C10.8982 9.80713 11.2982 9.40713 11.2982 8.80713C11.2982 8.20713 10.8982 7.80713 10.2982 7.80713H6.69824C6.09824 7.80713 5.69824 8.20713 5.69824 8.80713C5.69824 9.40713 6.09824 9.80713 6.69824 9.80713Z" fill="#7B64B1"/>
            <path d="M13.4982 12.6069H6.69824C6.09824 12.6069 5.69824 13.0069 5.69824 13.6069C5.69824 14.2069 6.09824 14.6069 6.69824 14.6069H13.4982C14.0982 14.6069 14.4982 14.2069 14.4982 13.6069C14.4982 13.0069 13.9982 12.6069 13.4982 12.6069Z" fill="#7B64B1"/>
          </svg>
        </a>
      </td>
    `;

    tableBody.appendChild(row);
  });

   // Abrir en modo vista (puedes adaptar con dataset más adelante)
   document.querySelectorAll(".viewGroupBtn").forEach((viewBtn) => {
    viewBtn?.addEventListener("click", () => {
      console.log("Botón de vista clickeado", viewBtn.dataset.index);
      const groupId = viewBtn.dataset.index;
      const currentGroup = groupArray[groupId];
      currentGroupIndex = groupId;
      openGroupModal("view", currentGroup);
    });
  }); 
}

function renderStudentTable(studentArray) {
  const tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = ""; // Limpiar contenido anterior

  studentArray.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="px-2 py-3"><img src="${student.imagen}" alt="Imagen de perfil" class="w-10 h-10 rounded-full object-cover" /></td>
      <td class="px-4 py-3">${student.nombre}</td>
      <td class="px-4 py-3">${student.fechaNacimiento}</td>
      <td class="px-4 py-3">${student.curp}</td>
      <td class="px-4 py-3">${student.genero}</td>
      <td class="px-4 py-3">${student.grupo}</td>
      <td class="px-4 py-3">${student.contactoEmergencia}</td>
      <td class="px-4 py-3">
        <a href="#" class="viewStudentBtn" data-index="${index}">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7984 8.80713C19.3984 4.10713 15.2984 0.307129 10.4984 0.307129C10.3984 0.307129 10.2984 0.307129 10.1984 0.307129C8.29844 0.307129 6.29844 0.407129 4.39844 0.507129C2.29844 0.607129 0.698438 2.20713 0.498438 4.20713C0.198437 8.00713 0.198437 11.9071 0.498438 15.7071C0.698438 17.8071 2.39844 19.4071 4.49844 19.5071C6.39844 19.6071 8.29844 19.6071 10.1984 19.6071C12.0984 19.6071 13.8984 19.6071 15.7984 19.5071C17.8984 19.4071 19.6984 17.7071 19.7984 15.6071C19.8984 13.6071 19.8984 11.6071 19.8984 9.70713C19.8984 9.40713 19.8984 9.10713 19.7984 8.80713ZM17.6984 15.6071C17.5984 16.7071 16.7984 17.6071 15.6984 17.6071C13.8984 17.7071 11.9984 17.7071 10.1984 17.7071C8.29844 17.7071 6.39844 17.7071 4.59844 17.6071C3.49844 17.6071 2.59844 16.7071 2.59844 15.7071C2.29844 12.0071 2.29844 8.20713 2.59844 4.50713C2.69844 3.50713 3.49844 2.60713 4.59844 2.60713C6.39844 2.40713 8.29844 2.30713 10.1984 2.30713H10.4984C10.5984 2.30713 10.7984 2.30713 10.8984 2.30713C11.2984 3.00713 11.7984 3.90713 12.0984 4.80713C12.3984 5.70713 12.6984 6.80713 12.8984 7.60713C13.0984 8.40713 13.6984 8.90713 14.4984 8.90713H17.8984C17.8984 9.20713 17.9984 9.50713 17.9984 9.80713C17.8984 11.7071 17.7984 13.6071 17.6984 15.6071Z" fill="#7B64B1"/>
            <path d="M6.69824 9.80713H10.2982C10.8982 9.80713 11.2982 9.40713 11.2982 8.80713C11.2982 8.20713 10.8982 7.80713 10.2982 7.80713H6.69824C6.09824 7.80713 5.69824 8.20713 5.69824 8.80713C5.69824 9.40713 6.09824 9.80713 6.69824 9.80713Z" fill="#7B64B1"/>
            <path d="M13.4982 12.6069H6.69824C6.09824 12.6069 5.69824 13.0069 5.69824 13.6069C5.69824 14.2069 6.09824 14.6069 6.69824 14.6069H13.4982C14.0982 14.6069 14.4982 14.2069 14.4982 13.6069C14.4982 13.0069 13.9982 12.6069 13.4982 12.6069Z" fill="#7B64B1"/>
          </svg>
        </a>
      </td>
    `;

    tableBody.appendChild(row);
  });

  // Abrir en modo vista (puedes adaptar con dataset más adelante)
  document.querySelectorAll(".viewStudentBtn").forEach((viewBtn) => {
    viewBtn?.addEventListener("click", () => {
      console.log("Botón de vista clickeado", viewBtn.dataset.index);
      const studentId = viewBtn.dataset.index;
      const currentStudent = studentArray[studentId];
      currentStudentIndex = studentId;
      openStudentModal("view", currentStudent);
    });
  }); 
}

document.addEventListener("DOMContentLoaded", () => {
  renderGroupTable(groupArray);
  renderStudentTable(studentArray);
  // addTableListeners();
});


const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    // Toggle active class on buttons
    tabButtons.forEach(btn => {
      btn.classList.remove("text-dark-purple", "font-semibold");
    });
    button.classList.add("text-dark-purple", "font-semibold");

    // Toggle visible content
    tabContents.forEach(content => {
      content.classList.add("hidden");
    });
    document.getElementById(`content-${target}`).classList.remove("hidden");
  });
});

// Activar la primera pestaña al cargar
document.getElementById("tab-grupos").click();


// Alumnos

const studentModal = document.getElementById("studentModal");
const deleteConfirmModal = document.getElementById("deleteConfirmModal");

const studentForm = document.getElementById("studentForm");
const addBtn = document.getElementById("addStudentBtn");
// const viewBtn = document.getElementById("viewStudentBtn");
const closeBtn = document.getElementById("closeStudentModalBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const editBtn = document.getElementById("editStudentBtn");
const deleteBtn = document.getElementById("deleteStudentBtn");
const saveEditBtn = document.getElementById("saveEditBtn");

const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

// Estado actual del alumno editado
let currentStudentIndex = null;

// Muestra el modal (modo lectura, edición o alta)
function openStudentModal(mode = "view", student = {}) {
  studentModal.classList.remove("hidden");

  const fields = studentForm.elements;
  for (const field of fields) {
    if (field.name) {
      field.value = student[field.name] || "";
    }

    if (mode === "view") {
      field.setAttribute("readonly", true);
      field.setAttribute("disabled", true);
      field.classList.add("bg-transparent");
      field.classList.remove("border", "border-gray-300", "mt-1", "rounded-xl", "px-3", "py-2");

      const label = field.closest("label"); // busca el contenedor <label>
      const span = label?.querySelector("span"); // encuentra el <span> dentro del <label>
      span?.classList.remove("text-blue"); // añade la clase
      document.getElementById("editButtons").classList.add("hidden");
      document.getElementById("studentImage").classList.remove("hidden");
      document.getElementById("studentImageFile").classList.add("hidden");
    } else {
      field.removeAttribute("readonly");
      field.removeAttribute("disabled");
      field.classList.remove("bg-transparent");
      field.classList.add("border", "border-gray-300", "mt-1", "rounded-xl", "px-3", "py-2");

      const label = field.closest("label"); // busca el contenedor <label>
      const span = label?.querySelector("span"); // encuentra el <span> dentro del <label>
      span?.classList.add("text-blue"); // añade la clase

      document.getElementById("editButtons").classList.remove("hidden");
      document.getElementById("studentImage").classList.add("hidden");
      document.getElementById("studentImageFile").classList.remove("hidden");
    }
  }

  document.getElementById("studentImage").src = student.imagen || "#";

}

// Abrir en modo alta
addBtn?.addEventListener("click", () => {
  currentStudentIndex = null;
  openStudentModal("edit");
});



// Editar dentro del modal
editBtn?.addEventListener("click", () => {
  openStudentModal("edit", getFormData());
});

// Eliminar
deleteBtn?.addEventListener("click", () => {
  deleteConfirmModal.classList.remove("hidden");
});

// Confirmar eliminación
confirmDeleteBtn?.addEventListener("click", () => {
  if (currentStudentIndex !== null) {
    studentArray.splice(currentStudentIndex, 1);
    renderStudentTable(studentArray);
  }
  deleteConfirmModal.classList.add("hidden");
  studentModal.classList.add("hidden");
});

// Cancelar eliminación
cancelDeleteBtn?.addEventListener("click", () => {
  deleteConfirmModal.classList.add("hidden");
});

// Cerrar modal
closeBtn?.addEventListener("click", () => {
  studentModal.classList.add("hidden");
});

cancelEditBtn?.addEventListener("click", () => {
  studentModal.classList.add("hidden");
});

saveEditBtn?.addEventListener("click", () => {
  const formData = new FormData(studentForm);

  const newStudent = {
    nombre: formData.get("nombre"),
    fechaNacimiento: formData.get("fechaNacimiento"),
    curp: formData.get("curp"),
    genero: formData.get("genero"),
    grupo: formData.get("grupo"),
    tutores: formData.get("tutores"),
    contactoEmergencia: formData.get("contactoEmergencia"),
    necesidades: formData.get("necesidades"),
    observaciones: formData.get("observaciones"),
    imagen: document.getElementById("studentImage")?.src || "" // si se usa imagen
  };

  // Añadir al arreglo
  if (currentStudentIndex === null) {
    // Es alta → push al arreglo
    studentArray.push(newStudent);
  } else {
    // Es edición → actualizar
    studentArray[currentStudentIndex] = newStudent;
  }

  // (Opcional) Volver a renderizar la tabla
  renderStudentTable(studentArray);

  // (Opcional) Cerrar el modal
  document.getElementById("studentModal")?.classList.add("hidden");

  // (Opcional) Resetear el formulario si es modo alta
  studentForm.reset();
});

// Obtener datos del formulario como objeto
function getFormData() {
  const data = {};
  const fields = studentForm.elements;
  for (const field of fields) {
    if (field.name) {
      data[field.name] = field.value;
    }
  }
  return data;
}

// Grupos

const groupModal = document.getElementById("groupModal");
const deleteGroupConfirmModal = document.getElementById("deleteGroupConfirmModal");

const groupForm = document.getElementById("groupForm");
const addGroupBtn = document.getElementById("addGroupBtn");
// const viewBtn = document.getElementById("viewGroupBtn");
const closeGroupModalBtn = document.getElementById("closeGroupModalBtn");
const cancelEditGroupBtn = document.getElementById("cancelEditGroupBtn");
const editGroupBtn = document.getElementById("editGroupBtn");
const deleteGroupBtn = document.getElementById("deleteGroupBtn");
const saveEditGroupBtn = document.getElementById("saveEditGroupBtn");

const cancelDeleteGroupBtn = document.getElementById("cancelDeleteGroupBtn");
const confirmDeleteGroupBtn = document.getElementById("confirmDeleteGroupBtn");

// Estado actual del alumno editado
let currentGroupIndex = null;

// Muestra el modal (modo lectura, edición o alta)
function openGroupModal(mode = "view", group = {}) {
  groupModal.classList.remove("hidden");

  const fields = groupForm.elements;
  for (const field of fields) {
    if (field.name) {
      field.value = group[field.name] || "";
    }

    if (mode === "view") {
      field.setAttribute("readonly", true);
      field.setAttribute("disabled", true);
      field.classList.add("bg-transparent");
      field.classList.remove("border", "border-gray-300", "mt-1", "rounded-xl", "px-3", "py-2");

      const label = field.closest("label"); // busca el contenedor <label>
      const span = label?.querySelector("span"); // encuentra el <span> dentro del <label>
      span?.classList.remove("text-blue"); // añade la clase
      document.getElementById("editGroupButtons").classList.add("hidden");
      document.getElementById("viewGroupButtons").classList.remove("hidden");
      document.getElementById("titleAddNewGroup").classList.add("hidden");
      document.getElementById("titleEditGroup").classList.add("hidden");
    } else {
      field.removeAttribute("readonly");
      field.removeAttribute("disabled");
      field.classList.remove("bg-transparent");
      field.classList.add("border", "border-gray-300", "mt-1", "rounded-xl", "px-3", "py-2");

      const label = field.closest("label"); // busca el contenedor <label>
      const span = label?.querySelector("span"); // encuentra el <span> dentro del <label>
      span?.classList.add("text-blue"); // añade la clase

      document.getElementById("editGroupButtons").classList.remove("hidden");
      document.getElementById("viewGroupButtons").classList.add("hidden");
      if(currentGroupIndex == null){
        document.getElementById("titleAddNewGroup").classList.remove("hidden");
        document.getElementById("titleEditGroup").classList.add("hidden");
      }else{
        document.getElementById("titleAddNewGroup").classList.add("hidden");
        document.getElementById("titleEditGroup").classList.remove("hidden");
      }
      
      
    }
  }

}

// Abrir en modo alta
addGroupBtn?.addEventListener("click", () => {
  currentGroupIndex = null;
  openGroupModal("edit");
});



// Editar dentro del modal
editGroupBtn?.addEventListener("click", () => {
  openGroupModal("edit", getFormDataGroup());
});

// Eliminar
deleteGroupBtn?.addEventListener("click", () => {
  deleteGroupConfirmModal.classList.remove("hidden");
});

// Confirmar eliminación
confirmDeleteGroupBtn?.addEventListener("click", () => {
  if (currentGroupIndex !== null) {
    groupArray.splice(currentGroupIndex, 1);
    renderGroupTable(groupArray);
  }
  deleteGroupConfirmModal.classList.add("hidden");
  groupModal.classList.add("hidden");
});

// Cancelar eliminación
cancelDeleteGroupBtn?.addEventListener("click", () => {
  deleteGroupConfirmModal.classList.add("hidden");
});

// Cerrar modal
closeGroupModalBtn?.addEventListener("click", () => {
  groupModal.classList.add("hidden");
});

cancelEditGroupBtn?.addEventListener("click", () => {
  groupModal.classList.add("hidden");
});

saveEditGroupBtn?.addEventListener("click", () => {
  const formData = new FormData(groupForm);

  const newGroup = {
    nombre: formData.get("nombre"),
    grado: formData.get("grado"),
    letra: formData.get("letra"),
    turno: formData.get("turno"),
    cicloEscolar: formData.get("cicloEscolar"),
    ninas: formData.get("ninas"),
    ninos: formData.get("ninos")
  };
  // Añadir al arreglo
  if (currentGroupIndex === null) {
    // Es alta → push al arreglo
    groupArray.push(newGroup);
  } else {
    // Es edición → actualizar
    groupArray[currentGroupIndex] = newGroup;
  }

  // (Opcional) Volver a renderizar la tabla
  renderGroupTable(groupArray);

  // (Opcional) Cerrar el modal
  document.getElementById("groupModal")?.classList.add("hidden");

  // (Opcional) Resetear el formulario si es modo alta
  groupForm.reset();
});

// Obtener datos del formulario como objeto
function getFormDataGroup() {
  const data = {};
  const fields = groupForm.elements;
  for (const field of fields) {
    if (field.name) {
      data[field.name] = field.value;
    }
  }
  return data;
}