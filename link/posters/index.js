
window.onload = function (){

    let query = location.search;
    let searchParams = new URLSearchParams(query);
    var id = searchParams.get('id');
    PDFObject.embed("./assets/posters/ICAPS-2021_Poster_"+id+".pdf","#pdf");
};
