function updateRankings() {
    let ranking_data=[3,2,1];
    // let ranking_data = scor;
    var tbody = document.getElementById("rankings");
    var rows = tbody.getElementsByTagName("tr");
    for( var i = 0; i<rows.length; i++){
        var cells = rows[i].getElementsByTagName("td");
        if (cells.length >= 2) {
            cells[1].innerText = ranking_data[i];
        }
    }
}
window.onload = updateRankings;




