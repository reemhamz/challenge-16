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

    musicCall = () =>{
        const audio = new Audio(`https://www.youtube.com/watch?v=5qap5aO4i9A`)

        audio.play();


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