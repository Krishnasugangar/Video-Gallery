    document.addEventListener('DOMContentLoaded', function() {
        const sideBar = document.querySelector('.side-bar');
        const menuBtn = document.querySelector('#menu-btn');
        const video = document.querySelector('.video-container video');
        const videoLinks = document.querySelectorAll('.menu-list li');
        const videoInfo = document.querySelector('.video-info');
        const container = document.querySelector('.container');

        menuBtn.addEventListener('click', () => {
            sideBar.classList.toggle('hidden');
            container.classList.toggle('sidebar-hidden');
        });

        videoLinks.forEach(link => {
            link.addEventListener('click', function() {
                const src = this.getAttribute('data-src');
                const title = this.textContent.trim();

                video.src = src;
                video.load();
                video.play();

                videoLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');

                videoInfo.querySelector('h3').textContent = title;
                videoInfo.querySelector('p').textContent = getVideoDescription(title);

                if (window.innerWidth <= 1200) {
                    sideBar.classList.add('hidden');
                    container.classList.add('sidebar-hidden');
                }
            });
        });

        function getVideoDescription(title) {
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
            return descriptions[title] || 'Food preparation video';
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                sideBar.classList.remove('hidden');
                container.classList.remove('sidebar-hidden');
            }
        });

        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 1200 &&
                !sideBar.contains(e.target) &&
                e.target !== menuBtn &&
                !menuBtn.contains(e.target)) {
                sideBar.classList.add('hidden');
                container.classList.add('sidebar-hidden');
            }
        });
    });