    const hamburger = document.getElementById('hamburger');
    const sidebar = document.querySelector('.sidebar-1');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('show-nav');
    });