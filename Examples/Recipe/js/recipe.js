<!--recipe.js-->
//assign variables:
var i = 0;
//create table "ingredients":
var ingredients = [
    "2 skinless and boneless chicken breasts, butterflied and then cut in half",
    "Sea salt and freshly ground black pepper",
    "All-purpose flour, for dredging",
    "6 tablespoons unsalted butter",
    "5 tablespoons extra-version olive oil",
    "1/3 cup fresh lemon juice",
    "1/2 cup chicken stock",
    "1/4 cup brined caper, rinsed",
    "1/3 cup fresh parsley, chopped"
];
//create table:
document.write('<table class="text center tblborders">');
document.write('<thead><tr><th>Ingredients</th></tr></thead>');
//populate table with ingredients array by iterating for loop:
for (var i = 0; i < ingredients.length; i++)
{
    document.write('<tr><td>' + ingredients[i] + '</td></tr>'); 
}
document.write('<tfoot><tr><th>Measure and set aside before beginning</th></tr></tfoot>');
document.write('</table>');