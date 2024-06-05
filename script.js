async function getCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        const imageUrl = data[0].url;
        document.getElementById('catImage').innerHTML = `<img src="${imageUrl}" alt="Cat">`;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}
