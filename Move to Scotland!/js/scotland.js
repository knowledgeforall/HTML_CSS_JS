<!--scotland.js-->
function myFunc(){
    //assigns a node list to variable "flags"
    var flags = document.getElementsByClassName("flag");
    //iterate through the node list and add class "flaglink" during each pass
    for (var i = 0;i < flags.length;i++)
        flags[i].classList.add("flaglink");

    //assigns a node list to variable "shadow"
    var shadow = document.getElementsByClassName("media");
    //iterate through the node list and add class "thr3d" during each pass
    for (var i = 0;i < shadow.length;i++)
        shadow[i].classList.add("thr3d");

    //assigns a node list to variable "border"
    var border = document.getElementsByClassName("media");
    //iterate through the node list and add class "imageborder" during each pass
    for (var i = 0;i < border.length;i++)
        border[i].classList.add("imageborder");
}

    //create array "bannedList"
    var bannedList = [
        "Pit Bull Terrier",
        "Japanese Tosa",
        "Dogo Argentino",
        "Fila Brasileiro"
        ];
    //create a fuction to call on load
    function myPets() {
        //create a header and insert it into table "bannedDogs"
        document.getElementById("bannedDogs").innerHTML= ('<thead><tr><th>Banned Dogs:</th></tr></thead>');
        //populate table with bannedList array by iterating for loop:
        for (var i = 0; i < bannedList.length; i++) {
            {
                document.getElementById("bannedDogs").innerHTML += ('<tr><td>' + bannedList[i] + '</td></tr>');//I struggled for several days and rewrote the code several different ways before replacing the "write" method with "getElementByID" method and finally after 2 more days realized the reason it would only give me the last line of the array was because I had an "=" instead of a "+="
            }
        }
    
    }