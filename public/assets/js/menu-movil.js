      const btn = document.getElementById('menu-btn');
      const menu = document.getElementById('mobile-menu');

      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menu.classList.toggle('bg-gray-700');
        menu.classList.toggle('bg-gray-900');
      });