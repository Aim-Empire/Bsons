// Modern Mobile Menu Upgrade - Auto-Replaces #mobile-menu on all pages
document.addEventListener('DOMContentLoaded', () => {
  const oldMenu = document.getElementById('mobile-menu');
  if (!oldMenu) {
    console.warn('Mobile menu (#mobile-menu) not found. Upgrade skipped.');
    return;
  }

  // Create new modern slide-in menu
  const newMenu = document.createElement('div');
  newMenu.id = 'mobile-menu';
  newMenu.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 translate-x-full transition-transform duration-500 ease-in-out';
  newMenu.innerHTML = `
    <div class="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gray-900/95 backdrop-blur-xl border-l border-green-500/30 shadow-2xl overflow-y-auto">
      <button id="menu-close" class="absolute top-5 right-5 text-white text-3xl focus:outline-none hover:text-green-400 transition">
        <i class="fas fa-times"></i>
      </button>
      <div class="px-8 py-20 space-y-8 text-center">
        <a href="pages/community.html" class="block text-xl font-medium text-gray-200 hover:text-green-400 transition-all duration-300 transform hover:scale-105 hover:font-semibold">Community</a>
        <a href="pages/plans.html" class="block text-xl font-medium text-gray-200 hover:text-green-400 transition-all duration-300 transform hover:scale-105 hover:font-semibold">Plans</a>
        <a href="pages/long-term.html" class="block text-xl font-medium text-gray-200 hover:text-green-400 transition-all duration-300 transform hover:scale-105 hover:font-semibold">Long Term Investment</a>
        <a href="pages/blog.html" class="block text-xl font-medium text-gray-200 hover:text-green-400 transition-all duration-300 transform hover:scale-105 hover:font-semibold">Blog</a>
        <a href="pages/faqs.html" class="block text-xl font-medium text-gray-200 hover:text-green-400 transition-all duration-300 transform hover:scale-105 hover:font-semibold">FAQs</a>
        <a href="pages/contact.html" class="block text-xl font-medium text-gray-200 hover:text-green-400 transition-all duration-300 transform hover:scale-105 hover:font-semibold">Contact Us</a>
      </div>
    </div>
  `;

  // Replace old menu
  oldMenu.replaceWith(newMenu);

  // Setup toggle & close
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
  }

  function closeMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

  console.log('Mobile menu upgraded to modern slide-in style!');
});
