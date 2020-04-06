// Create app namespace to hold all methods
const app = {

};

// Collect user input
app.collectInfo = function () {

};

// Make an API fetch request with user inputted data
app.getInfo = function () {

    unsplashCall = () => {
        const randomPage = Math.floor(Math.random() * 3 + 1) + 10;
        const apiKey = `oXWNN3H3eBxih1adiK0VE1G9BG9XhdURrosI-WlOpzk`;
        const searchTerm = [`cozy cafe`, `coffee shop`, `cozy coffee`, `cafe`, `cozy`];
        const randomSearchTerm = searchTerm[Math.floor(Math.random() * searchTerm.length)]
        console.log(randomSearchTerm)
        const apiURL = `https://api.unsplash.com/search/photos?page=${randomPage}&query=${randomSearchTerm}&client_id=${apiKey}`
        const apiCall = async () => {
            await fetch(apiURL)
                .then(result => result.json())
                .then((data) => {
                    const landscapeArray = data.results.filter(landscapeImages => {
                        return landscapeImages.height < 3400
                    })

                    imageGenerator = () => {
                        const randomizeImage = landscapeArray[Math.floor(Math.random() * landscapeArray.length)]

                        const imageURL = randomizeImage.urls.regular
                        const imageHeight = randomizeImage.height;
                        document.getElementById('cafeImage').innerHTML = `
                            <img src=${imageURL} alt="cafe">
                            `;
                    }
                    imageGenerator();
                })
        }
        apiCall();
    }

    musicCall = () => {


        const audio = new Audio(`https://www.youtube.com/watch?v=5qap5aO4i9A`)
        audio.play();

        function onYouTubeIframeAPIReady() {
            var e = document.getElementById("youtube-audio"),
                t = document.createElement("img");
            t.setAttribute("id", "youtube-icon"), t.style.cssText = "cursor:pointer;cursor:hand", e.appendChild(t);
            var a = document.createElement("div");
            a.setAttribute("id", "youtube-player"), e.appendChild(a);
            var o = function (e) {
                var a = e ? "hFuieHT" : "hFuieHT.png";
                t.setAttribute("src", "https://i.imgur.com/" + a)
            };
            e.onclick = function () {
                r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0))
            };
            var r = new YT.Player("youtube-player", {
                height: "0",
                width: "0",
                videoId: e.dataset.video,
                playerVars: {
                    autoplay: e.dataset.autoplay,
                    loop: e.dataset.loop
                },
                events: {
                    onReady: function (e) {
                        r.setPlaybackQuality("small"), o(r.getPlayerState() !== YT.PlayerState.CUED)
                    },
                    onStateChange: function (e) {
                        e.data === YT.PlayerState.ENDED && o(!1)
                    }
                }
            })
        }

        onYouTubeIframeAPIReady();
    }
    console.log('haha')
    unsplashCall();
    musicCall();

};

// Display data on the page
app.displayInfo = function () {

};

// Start app
app.init = function () {
    app.getInfo();
};

document.addEventListener("DOMContentLoaded", function () {
    app.init();
});