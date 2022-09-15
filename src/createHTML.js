// Function to build the new team using the answers to the prompts

const newTeam= function(team){

    let html ='';

    // builds manager card by retrieving manager object from manager array and retrieving name, id, email (anchor tag inserted to allow user to directly write email to manager) and office number

    team.managerArr.forEach(function(manager){
        html += `
        <article class="col-md-4 pb-3">
            <div class="card">
                <div class = "card-header" id="cardhead">
                    <h2>${manager.getName()}</h2>
                    <h3>Manager <i class="fa-solid fa-mug-hot"></i></h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </article>            
        `;          
    });


    // builds engineer card by retrieving engineer object from engineer array and retrieving name, id, email and gitHub user name. Anchor tags for email and gitHub username to direct the user to write engineer an email or visit engineer github page.

    team.engineerArr.forEach(function(engineer){
        html += `
        <article class="col-md-4 pb-3">
            <div class="card">
                <div class = "card-header" id="cardhead" >
                    <h2>${engineer.getName()}</h2>
                    <h3>Engineer <i class="fa-solid fa-glasses"></i></h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </article>            
        `;          
    });

    // builds intern card by retrieving intern object from intern array and retrieving name, id, email (anchor tag inserted to allow user to directly write email to intern) and school attended

    team.internArr.forEach(function(intern){
        html += `
        <article class="col-md-4 pb-3">
            <div class="card">
                <div class = "card-header" id="cardhead">
                    <h2>${intern.getName()}</h2>
                    <h3>Intern <i class="fa-solid fa-graduation-cap"></i></h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </article>            
        `;          
    });
  
    return html;
}

// function to create HTML from team built from above newTeam() function under the webpage header/title (TEAM PROFILE)

const createHTML = function(team){
    return `
    <!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Team Profile</title>
</head>

<body>
    <header class="tophead container-fluid text-center p-5">
        <h1>TEAM PROFILE</h1>
    </header>
    <main class="container text-center p-5">
        <section class="row">   
           ${newTeam(team)}
        </section>
    </main>

</body>
</html>
    
    `;
}

// exports createHTML to index.js to create HTML webpage once team is built (once there are no more team members to add)

module.exports = createHTML;