// 获取所有图片元素
const images = document.querySelectorAll('.gallery-item img');

// 创建全屏预览容器
const overlay = document.createElement('div');
overlay.classList.add('fullscreen-overlay');
document.body.appendChild(overlay);

// 创建全屏图片元素
const fullscreenImage = document.createElement('img');
fullscreenImage.classList.add('fullscreen-image');
overlay.appendChild(fullscreenImage);

// 为每个图片添加点击事件
images.forEach(image => {
    image.addEventListener('click', () => {
        const largeImageSrc = image.getAttribute('data-src');
        fullscreenImage.src = largeImageSrc;
        overlay.style.display = 'flex';
    });
});

// 点击遮罩层时关闭预览
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});


