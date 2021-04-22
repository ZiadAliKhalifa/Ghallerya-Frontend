
export default function getFeaturedImages() {
    return fetch("https://api.pexels.com/v1/curated?per_page=20", {
        method: 'GET',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            "Authorization": process.env.REACT_APP_PEXELS_API_KEY || ""
        },
        redirect: 'follow'
    })
        .then(response => response.text())
        .then((response) => {
            let featuredImages: FeaturedImages = JSON.parse(response)
            return featuredImages;
        })
        .catch(error => console.log('error', error));
}
