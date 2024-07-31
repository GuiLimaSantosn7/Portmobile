document.addEventListener('DOMContentLoaded', (event) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const downloadBtn = document.getElementById('download-button');
    let currentImageIndex;

    function showLightbox(index) {
        currentImageIndex = index;
        const imageUrl = thumbnails[index].src;
        lightboxImage.src = imageUrl;
        downloadBtn.href = imageUrl;
        lightbox.style.display = 'block';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
        const imageUrl = thumbnails[currentImageIndex].src;
        lightboxImage.src = imageUrl;
        downloadBtn.href = imageUrl;
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
        const imageUrl = thumbnails[currentImageIndex].src;
        lightboxImage.src = imageUrl;
        downloadBtn.href = imageUrl;
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            showLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Navegação por teclado (opcional)
    document.addEventListener('keydown', (event) => {
        if (lightbox.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'Escape') {
                closeLightbox();
            }
        }
    });
});
