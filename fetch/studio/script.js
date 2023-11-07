//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(Response){
    Response.json().then(function(json){
    container = document.getElementById("container");
    for(i=0; i<json.length; i++) {
        container.innerHTML += `
        <div class="astronaut">
        <div class="bio">
            <h3>${json[i].firstName} ${json[i].lastName}</h3>
            <ul>
            <li>${json[i].hoursInSpace}</li>
            <li>${json[i].active}</li>
            <li>${json[i].skills}</li>
            </ul>
        </div>
        <img class="avatar" src="${json[i].picture}"/>
    </div>
        `
    };
    });
    });
    
    });
    