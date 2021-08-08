
window.onload = function (){

    let query = location.search;
    let searchParams = new URLSearchParams(query);
    var id = searchParams.get('id');
    document.getElementById('pdf').src="./assets/IntEx-posters/"+id+"_IntEx.pdf";
};
