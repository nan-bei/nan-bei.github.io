
        let currentIndex = 0;

        function showSlide(index) {
            const items = document.querySelectorAll('.carousel-item');
            if (index >= items.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = items.length - 1;
            } else {
                currentIndex = index;
            }

            const offset = -currentIndex * 100;
            document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        // 自动播放（可选）
        setInterval(nextSlide, 3000); // 每3秒切换一次图片

 