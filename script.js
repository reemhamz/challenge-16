// Create app namespace to hold all methods
const app = {

};

// Collect user input
app.collectInfo = function () {

    const mainPage = document.getElementById("mainSection");

    const generateButton = document.getElementById("generateVibes");
    generateButton.addEventListener(`click`, function (e) {
        e.preventDefault();

        mainPage.style.display = "block";

        app.getInfo();
        
        mainPage.scrollIntoView();
    })

    document.body.addEventListener('click', function (e) {
        console.log(e.target)
    })
};

// Make an API fetch request with user inputted data
app.getInfo = function () {

    unsplashCall = () => {
        const randomPage = Math.floor(Math.random() * 3 + 1) + 10;
        const apiKey = `oXWNN3H3eBxih1adiK0VE1G9BG9XhdURrosI-WlOpzk`;
        const searchTerm = [`cozy cafe`, `coffee shop`, `cozy coffee`, `cafe`, `cozy`, `coffee`, `coffee vibes`, `cup of tea`, `latte`, `latte art`, `cup of coffee`, `turkish coffee`];
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

    unsplashCall();
};

// Start app
app.init = function () {
    app.collectInfo();
};

document.addEventListener("DOMContentLoaded", function () {
    app.init();
});