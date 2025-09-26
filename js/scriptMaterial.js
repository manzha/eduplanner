const materiales = [
  {
    portada: "img/portada1.png",
    name: "El dinosaurio 1",
  },
  {
    portada: "img/portada1.png",
    name: "Harry potter 2",
  },
  {
    portada: "img/portada1.png",
    name: "El principito",
  },
];



let currentEditingIndex = null;

function renderMaterialTable(materialArray) {
  const tableBody = document.getElementById("materialTableBody");
  tableBody.innerHTML = ""; // Limpiar el contenido anterior

  materiales.forEach((material, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="px-4 py-3">
        <img src="${material.portada}" alt="Logo" class="w-10 h-10 rounded-full object-cover" />
      </td>
      <td class="px-4 py-3">${material.name}</td>
      <td class="px-4 py-3">
        <a href="#" class="openModal" data-index="${index}">
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
      <td class="px-4 py-3">
        <a href="#" class="" data-index="${index}">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1400_320)">
          <path d="M14.9829 7.13184C14.7939 6.66309 14.3213 6.28809 13.8486 6.19434C13.1869 6.10059 12.6198 6.00684 11.9581 5.91309V1.50684C11.9581 0.663086 11.2964 0.00683594 10.4456 0.00683594C9.59488 0.00683594 8.83866 0.663086 8.83866 1.50684V6.00684C8.17697 6.00684 7.51528 6.10059 6.85359 6.19434C6.38095 6.28809 5.90832 6.56934 5.71926 7.03809C5.53021 7.50684 5.62473 8.06933 5.81379 8.44433C6.66454 9.94433 7.89339 11.1631 9.50036 12.2881C9.78394 12.4756 10.0675 12.5693 10.3511 12.5693C10.6347 12.5693 11.0128 12.4756 11.2964 12.2881C12.6198 11.3506 13.8486 10.0381 14.8884 8.63183C15.0775 8.16308 15.172 7.60059 14.9829 7.13184Z" fill="#7B64B1"/>
          <path d="M10.3507 18.0068C8.74377 18.0068 7.23134 18.0068 5.7189 17.9131C3.26119 17.8193 1.18158 15.8506 0.898002 13.4131C0.803475 12.6631 1.37064 12.0068 2.12686 11.9131C2.88308 11.8193 3.54477 12.3818 3.6393 13.1318C3.73382 14.2568 4.6791 15.1006 5.81343 15.1943C8.8383 15.2881 11.8632 15.2881 14.8881 15.1943C16.0224 15.1943 16.9677 14.2568 17.0622 13.1318C17.1567 12.3818 17.8184 11.8193 18.5746 11.8193C19.3308 11.9131 19.898 12.5693 19.898 13.3193C19.7089 15.8506 17.6293 17.8193 15.0771 17.9131C13.4701 18.0068 11.8632 18.0068 10.3507 18.0068Z" fill="#7B64B1"/>
          </g>
          <defs>
          <clipPath id="clip0_1400_320">
          <rect width="19" height="18" fill="white" transform="translate(0.898438 0.00683594)"/>
          </clipPath>
          </defs>
          </svg>

        </a>
      </td>
    `;

    tableBody.appendChild(row);
  });

  const openButtons = document.querySelectorAll('.openModal');
  // Abrir modal al hacer click
 openButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // evitar que el link haga scroll
    modal.classList.remove('hidden');
  });
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

 // Selecciona todos los íconos con clase openModal

 const modal = document.getElementById('myModal');
 const closeBtn = document.getElementById('closeModal');
document.addEventListener("DOMContentLoaded", () => {
  renderMaterialTable(materiales);
  
   // Cerrar modal al hacer click en la X
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Cerrar modal al hacer click fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}); 



 

