// Perform API request with these parameters
const searchBtn = document.getElementById('search');

function fetchArticles() {
    const searchTerm = document.getElementById('search-term').value;
    const numRecords = document.getElementById('number-of-records').value;
    const startYear = document.getElementById('start-year').value;
    const endYear = document.getElementById('end-year').value;

    let apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&begin_date=${startYear}&end_date=${endYear}&api-key=AEDuhIAlPvSW537CveAAAgJpT2Mlxemh`;


    if (startYear !== '' && endYear !== ""){
        apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&begin_date=${startYear}&end_date=${endYear}&api-key=AEDuhIAlPvSW537CveAAAgJpT2Mlxemh`;
    }
    else if (startYear == '' && endYear == ''){
        apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=AEDuhIAlPvSW537CveAAAgJpT2Mlxemh`;
    }
    else if (startYear !== '' && endYear == ''){
        apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&begin_date=${startYear}&api-key=AEDuhIAlPvSW537CveAAAgJpT2Mlxemh`;
    }
    else if (startYear == '' && endYear !== ''){
        apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&end_date=${endYear}&api-key=AEDuhIAlPvSW537CveAAAgJpT2Mlxemh`;
    }
 // API request URL
 // Make the request
 fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
        // Handle the response data
         console.log(data);
     })
     .catch(error => {
         console.error('Error fetching data:', error);
     });
}

searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    fetchArticles()
});