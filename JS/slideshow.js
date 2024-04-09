document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleIndicators')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2500,
        ride: 'carousel'
    })
});


//for video carousel:
const videosContainer = document.querySelector('.video-container');
        const videos = document.querySelectorAll('.video-container video');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentIndex = 0;

        function showVideo(index) {
            const offset = index * -100 + '%';
            videosContainer.style.transform = `translateX(${offset})`;
        }

        function nextVideo() {
            currentIndex = (currentIndex + 1) % videos.length;
            showVideo(currentIndex);
        }

        function prevVideo() {
            currentIndex = (currentIndex - 1 + videos.length) % videos.length;
            showVideo(currentIndex);
        }

        // Add event listeners to arrow buttons
        prevButton.addEventListener('click', prevVideo);
        nextButton.addEventListener('click', nextVideo);
