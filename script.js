var query = "covid";
var page = 1;
var beginDate = 20200101;
var endDate = 20200131;
var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${beginDate}&end_date=${endDate}&page=${page}&api-key=Fz0qIwh8wLeN9uGg1zpZG4ShSVFrcdGJ`
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)

})