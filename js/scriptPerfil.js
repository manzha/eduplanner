  // Perfil.html
  const updateBtn = document.getElementById('updateProfileBtn');
  const profileView = document.getElementById('profileView');
  const profileContainer = document.getElementById('profileContainer');

  updateBtn.addEventListener('click', () => {
    profileView.classList.add('hidden');
    // debugger;
    // Insertar formulario si aún no existe
    if (!document.getElementById('profileForm')) {
      profileContainer.insertAdjacentHTML('beforeend', `
        ${document.getElementById('profileFormTemplate').innerHTML}
      `);
      // Agregar evento al botón cancelar
      document.getElementById('cancelEditBtn').addEventListener('click', () => {
        profileContainer.querySelector('#profileForm').remove();
        profileView.classList.remove('hidden');
      });
    }
  });


  const modal = document.getElementById("passwordModal");
  const openBtn = document.getElementById("openModalBtn");
  const cancelBtn = document.getElementById("cancelModalBtn");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
  });

  cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // También cerrar al hacer clic fuera del modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });


  // password

  const toggleButtons = document.querySelectorAll(".toggle-password");
      
  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const input = document.getElementById(targetId);

      if (!input) return;

      const eyeClosed = button.querySelector(".icon-eye-closed");
      const eyeOpen = button.querySelector(".icon-eye-open");

      if (input.type === "password") {
        input.type = "text";
        eyeClosed.classList.add("hidden");
        eyeOpen.classList.remove("hidden");
      } else {
        input.type = "password";
        eyeClosed.classList.remove("hidden");
        eyeOpen.classList.add("hidden");
      }
    });
  });