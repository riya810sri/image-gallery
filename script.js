document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', function() {
        lightbox.style.display = "none";
    });
});