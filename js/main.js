window.onload = function createList(){

    //add new items to the array here!
    let myArrayOfLinks =[
        {"url": "week01.html","label":"Week 01"},
        {"url": "week02.html","label":"Week 02"},
        {"url": "week03.html","label":"Week 03"},
        {"url": "week04.html","label":"Week 04"},
        {"url": "week05.html","label":"Week 05"},
        {"url": "week08.html","label":"Week 08"},
        {"url": "week09.html","label":"Week 09"},
        {"url": "week10.html","label":"Final Project Rough Draft"},
        {"url": "week12.html","label":"Final Project"},
        {"url": "quiz/index.html","label":"Quiz Ninja "},
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