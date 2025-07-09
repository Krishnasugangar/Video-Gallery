 const menuBtn = document.querySelector('#menu-btn');
    const sidebar = document.querySelector('.side-bar');
    const mainContent = document.querySelector('.main-content');
    const video = document.querySelector('video');
    const videoInfo = document.querySelector('.video-info');
    const videoLinks = document.querySelectorAll('.menu-list li');

    const descriptions = {
      'Cheese Burger': 'Watch the delicious cheese melting on our signature burger',
      'Pizza Decoration': 'Artistic pizza decoration process in 4K',
      'Sandwich': 'Fresh sandwich preparation with premium ingredients',
      'Pouring Coffee': 'Slow-motion coffee pouring perfection',
      'Chocolate Closeup': 'Decadent chocolate in extreme closeup',
      'Slicing Cake': 'Satisfying cake slicing in ultra HD',
      'Donuts Zooming': 'Colorful donuts zooming in 60fps',
      'Instant Noodles': 'Steaming hot noodles preparation'
    };

    // Toggle sidebar and adjust content
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      mainContent.classList.toggle('expanded');
      
      // Change icon based on sidebar state
      if (sidebar.classList.contains('hidden')) {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
      } else {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
      }
    });

    // Handle video link clicks
    videoLinks.forEach(link => {
      link.addEventListener('click', () => {
        const src = link.getAttribute('data-src');
        const title = link.textContent.trim();
        video.src = src;
        video.play();

        videoLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');

        videoInfo.querySelector('h3').textContent = title;
        videoInfo.querySelector('p').textContent = descriptions[title] || 'Delicious food video';

        // On mobile, hide sidebar after selecting a video
        if (window.innerWidth <= 768) {
          sidebar.classList.add('hidden');
          mainContent.classList.add('expanded');
          menuBtn.classList.remove('fa-times');
          menuBtn.classList.add('fa-bars');
        }
      });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        // On desktop, ensure sidebar is visible
        sidebar.classList.remove('hidden');
        mainContent.classList.remove('expanded');
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
      }
    });