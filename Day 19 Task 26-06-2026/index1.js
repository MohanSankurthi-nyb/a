//An API (Application Programming Interface) allows js application to communicate with a server and exchange data
//An API call is a request sent from application to a server
//fetch("https://jsonplaceholder.typicode.com/albums")
//this request user data from the server

//http methods
//GET   = retrieve data /fetching the data
//POST  = create new data/send the data
//PUT   = update entire data/changes the entire record
//PATCH = update partial data 
//DELETE = remove data


//GIT
//git is a version control system(vcs)
//it helps to->
//track code changes
//restore old versions
//example : Version 1 -> Version 2 -> Version 3
//if version 3 breaks application,GIT allows to return version 2

//github
//github is a cloud platform that stores GIT repositories online
// git                                  github
// tool installed on computer      Webiste for hoisting repositories
// tracks changes locally          stores projects online
// works online                    reqrires internet

//terms
//Repository(repo)-> it is a project folder tracked by git
//Commit -> it is a snapshot of your project at a particular time
//Branch -> it is an independent copy of code
//Merge -> combines chnages from one branch into another
//Clone -> Copies an online repository to computer
//Push -> uploads local changes to Github
//Pull -> downloads latest changes from Github

//Git Workflow
// Working Directory
//      |
// Staging area
//      |
//Repository
//      |
//Github

//git commands
//clone a repo
//for ex:  https://github.com/username/weather-app.js.git
//using clone
//git clone https://github.com/username/weather-app.js.git

//check the current status -> git status
//add a files to staging area -> git add .
//commit changes -> git commit -m "your commit message"
//push changes -> git push
//pull changes -> git pull

//daily workflow
//git pull
//git status
//git add .
//git commit -m "commit message"
//git push

//Repository (repo)->
// it a folder that contains
//project files
//git history
//commits
//branches

//ex:
//weather-app/
//   index.html
//   style.css
//   script.js
//   .git/
// The .git folder stores all version information

//Types of Repositories
//Local repo -> stored on computer
//Ex: My laptop
//      |-> weather-app
//Remote repo -> stored online on platforms like Github
//Ex: Github
//      |-> weather-app

//branch
//it an independent line of development
//it allows developers to work on new feature without affecting the main project
//without branches- Everyone changes the same code,increasing conflicts

