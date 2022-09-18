window.onload = function createList(){

    //add new items to the array here!
    let myArrayOfLinks =[
        {"url": "https://www.google.com/","label":"This links to google!"},
        {"url": "Url Goes here","label":"Label Goes here"},
        {"url": "Url Goes here","label":"Label Goes here"}
    ]


    for(var i = 0; i < myArrayOfLinks.length; i++){
        //create anchor tag
        let articleElement = document.createElement('a');
        document.getElementById('myOL').append(articleElement);
        

        // get the link
        var myArray = myArrayOfLinks[i].label;
        let hrefValue = myArrayOfLinks[i].url;
        articleElement.href = hrefValue;
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(myArray));
        articleElement.appendChild(li);
    }
}