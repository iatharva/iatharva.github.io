$(document).ready(function () {
    load();
});

function load() {

    //$("#noOfIngredient").focus();

    $("#addTbl").click(function () {
        $("#ingredient-group-append").empty();
        var NoOfIngre = $("#noOfIngredient").val();
        if (NoOfIngre > 0) {
            createControll(NoOfIngre);
        }
    });
   
}

function createControll(NoOfIngre) {
    var tbl = "";

    tbl = "<table class='table'>"+
            "<tr>"+
            "<th> Sr No. </th>"+
            "<th> Ingredient Name </th>"+
            "<th> Quantity </th>"+
            "</tr>";
    
    for(i=1; i<=NoOfIngre; i++) {
        tbl +="<tr>"+
                "<td>"+ i +"</td>"+
                "<td>"+
                    `<input type="text" id=ingred`+i+`Name placeholder="Ingredient" autofocus />`+
                `</td>`+
                `<td>`+
                    `<input type="text" id=qua`+i+`ntity placeholder="(quantity with unit)"/>`+
                `</td>`+
                `</tr>`;
    }
    tbl += `</table>`;
    $("#ingredient-group-append").append(tbl);

}