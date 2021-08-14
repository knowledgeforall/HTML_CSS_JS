<!--charactercards.js-->
//works with "onload" in the HTML tag to execute js immediately after page loads
 function myFunc(){

    //assigns a node list to variable "marvelcards"
    var cards = document.getElementsByClassName("marvelcard");

    //iterate through the node list and add class "thr3d" during each pass:
    for (var i = 0;i < cards.length;i++)
        cards[i].classList.add("thr3d");

    // Add a link after all the cards
    //creates the anchor for the link
    var link = document.createElement("a")
    //assign an ip address to link anchor
    link.setAttribute("href", "https://marvel.fandom.com/wiki/Marvel_Database")
    //create clickable text for link
    link.innerText = "Marvel Database"
     //sets positioning data
    link.style.float = "left";
    link.style.padding = "10px 10px";
    link.style.marginBottom = "25px";
    link.style.marginTop = "600px";
    //places the link into the HTML page body
    document.body.appendChild(link)
}
