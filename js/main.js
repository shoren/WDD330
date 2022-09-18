window.onload = function createList(){

    //add new items to the array here!
    let myArrayOfLinks =[
        {"url": "https://www.google.com/","label":"Week 01"},
        {"url": "https://www.google.com/","label":"Week 02"},
        {"url": "Url Goes here","label":"Week 03"}
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