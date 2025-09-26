
  document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.accordion-icon');

      // Alternar visibilidad
      content.classList.toggle('hidden');

      // Cambiar flechita
      if (content.classList.contains('hidden')) {
        icon.innerHTML = '<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.27748 9.46615L15.4802 3.12803C15.8071 2.78477 15.9885 2.32382 15.9853 1.84491C15.9821 1.36599 15.7945 0.907625 15.4631 0.568973C15.1317 0.230322 14.6831 0.0386185 14.2144 0.0353384C13.7457 0.0320583 13.2946 0.217465 12.9587 0.551446L8.01709 5.60128L3.07512 0.551446C2.91039 0.378442 2.71365 0.240608 2.49635 0.14595C2.27905 0.0512914 2.04551 0.00169531 1.80929 4.21186e-05C1.57307 -0.00161107 1.33888 0.0447116 1.12033 0.13632C0.901779 0.227928 0.703218 0.362995 0.536183 0.533677C0.369147 0.704359 0.236964 0.907253 0.147312 1.13057C0.057661 1.3539 0.0123281 1.59319 0.0139465 1.83457C0.0155639 2.07594 0.0641002 2.31458 0.156736 2.53663C0.249373 2.75867 0.384263 2.9597 0.553571 3.12803L6.75632 9.46615C6.92181 9.63539 7.11832 9.76965 7.33462 9.86125C7.55092 9.95285 7.78276 10 8.0169 10C8.25104 10 8.48288 9.95285 8.69918 9.86125C8.91547 9.76965 9.11199 9.63539 9.27748 9.46615Z" fill="#7B64B1"/></svg>';
      } else {
        icon.innerHTML = '<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.27748 0.533846L15.4802 6.87197C15.8071 7.21523 15.9885 7.67618 15.9853 8.15509C15.9821 8.63401 15.7945 9.09238 15.4631 9.43103C15.1317 9.76968 14.6831 9.96138 14.2144 9.96466C13.7457 9.96794 13.2946 9.78253 12.9587 9.44855L8.01709 4.39872L3.07512 9.44855C2.91039 9.62156 2.71365 9.75939 2.49635 9.85405C2.27905 9.94871 2.04551 9.9983 1.80929 9.99996C1.57307 10.0016 1.33888 9.95529 1.12033 9.86368C0.901779 9.77207 0.703218 9.637 0.536183 9.46632C0.369147 9.29564 0.236964 9.09275 0.147312 8.86943C0.057661 8.6461 0.0123281 8.40681 0.0139465 8.16543C0.0155639 7.92406 0.0641002 7.68542 0.156736 7.46337C0.249373 7.24133 0.384263 7.0403 0.553571 6.87197L6.75632 0.533846C6.92181 0.364605 7.11832 0.230347 7.33462 0.138748C7.55092 0.0471472 7.78276 -5.95128e-07 8.0169 -6.05362e-07C8.25104 -6.15597e-07 8.48288 0.0471471 8.69918 0.138748C8.91547 0.230347 9.11199 0.364605 9.27748 0.533846Z" fill="#7B64B1"/></svg>';
      }
    });
  });

  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("myModal");
  const select = document.getElementById("campoFormativoSelect");
  const modalPDA = document.getElementById("lenguajesModal");

  const closeModalBtns = [
    document.getElementById("closeModalBtnPDA"),
    document.getElementById("closeModalBtn2PDA")
  ];

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  select.addEventListener("change", (e) => {
    if (e.target.value === "lenguajes") {
      modalPDA.classList.remove("hidden");
      modalPDA.classList.add("flex");
    }
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modalPDA.classList.add("hidden");
      modalPDA.classList.remove("flex");
      select.value = "Seleccionar campo formativo"; // Reset al cerrar
    });
  });

  // Cerrar si das click fuera del modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });