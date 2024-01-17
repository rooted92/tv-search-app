const form = document.querySelector('#search-form');
// const searchField = document.querySelector('#search-field');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userSearchTerm = form.elements.query.value;
    console.log(userSearchTerm);
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${userSearchTerm}`)
    console.log(res.data);
    removeImages();
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    console.log(shows);
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

const removeImages = () => {
    const images = document.querySelectorAll('img');
    for(let img of images){
        img.remove();
    }
}