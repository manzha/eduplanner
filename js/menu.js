function toggleSubmenu(arrow) {
    const submenu = arrow.parentElement.nextElementSibling;
    arrow.classList.toggle("rotate-180");
    submenu.classList.toggle("hidden");
  }

  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  const navItems = document.getElementsByClassName("nav-expand");
  const sidebarLogo = document.getElementById("sidebarLogo");
  let collapsed = false;

  toggleBtn.addEventListener("click", () => {
    collapsed = !collapsed;

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.toggle("hidden");
    }  
    if (sidebarLogo.classList.contains("h-12")) {
      sidebarLogo.src = "img/logo-mini.png";
      sidebarLogo.classList.remove("h-12");
      sidebarLogo.classList.add("h-6");
    } else {
      sidebarLogo.src = "img/edu-planner-logo.png";
      sidebarLogo.classList.remove("h-6");
      sidebarLogo.classList.add("h-12");
    }

    if (collapsed) {
      sidebar.classList.remove("w-64");
      sidebar.classList.add("w-16");

      toggleBtn.innerHTML = '<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.46615 9.27785L3.12803 15.4806C2.78477 15.8074 2.32382 15.9889 1.84491 15.9857C1.36599 15.9825 0.907625 15.7949 0.568973 15.4634C0.230322 15.132 0.0386184 14.6834 0.0353383 14.2148C0.0320582 13.7461 0.217465 13.295 0.551446 12.959L5.60128 8.01746L0.551445 3.07548C0.378442 2.91075 0.240608 2.71402 0.145949 2.49672C0.0512908 2.27942 0.0016947 2.04587 4.1499e-05 1.80965C-0.0016117 1.57343 0.044711 1.33925 0.136319 1.1207C0.227927 0.902145 0.362995 0.703585 0.533676 0.53655C0.704358 0.369513 0.907252 0.23733 1.13057 0.147678C1.35389 0.0580271 1.59319 0.0126942 1.83457 0.0143126C2.07594 0.01593 2.31458 0.0644663 2.53663 0.157102C2.75867 0.249739 2.9597 0.384629 3.12803 0.553937L9.46615 6.75668C9.63539 6.92218 9.76965 7.11869 9.86125 7.33499C9.95285 7.55128 10 7.78313 10 8.01726C10 8.2514 9.95285 8.48324 9.86125 8.69954C9.76965 8.91584 9.63539 9.11235 9.46615 9.27785Z" fill="#7B64B1"/></svg>';
    } else {
      sidebar.classList.remove("w-16");
      sidebar.classList.add("w-64");
      toggleBtn.innerHTML = '<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.533846 9.27785L6.87197 15.4806C7.21523 15.8074 7.67618 15.9889 8.15509 15.9857C8.63401 15.9825 9.09238 15.7949 9.43103 15.4634C9.76968 15.132 9.96138 14.6834 9.96466 14.2148C9.96794 13.7461 9.78253 13.295 9.44855 12.959L4.39872 8.01746L9.44855 3.07548C9.62156 2.91075 9.75939 2.71402 9.85405 2.49672C9.94871 2.27942 9.99831 2.04587 9.99996 1.80965C10.0016 1.57343 9.95529 1.33925 9.86368 1.1207C9.77207 0.902145 9.63701 0.703585 9.46632 0.53655C9.29564 0.369513 9.09275 0.23733 8.86943 0.147678C8.64611 0.0580271 8.40681 0.0126942 8.16543 0.0143126C7.92406 0.01593 7.68542 0.0644663 7.46337 0.157102C7.24133 0.249739 7.0403 0.384629 6.87197 0.553937L0.533847 6.75668C0.364606 6.92218 0.230347 7.11869 0.138748 7.33499C0.0471475 7.55128 -2.36581e-07 7.78313 -2.5705e-07 8.01726C-2.77519e-07 8.2514 0.0471475 8.48324 0.138748 8.69954C0.230347 8.91584 0.364606 9.11235 0.533846 9.27785Z" fill="#7B64B1"/></svg>';
    }
  });