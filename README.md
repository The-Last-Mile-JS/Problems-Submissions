# Problems Submissions Repo
![System](https://img.shields.io/badge/system-git-blue.svg?logo=github)</br></br>
A repository hosted on an offline Git server for:
1. an individual student pulls the coding problems and pushes his codes on his branch.
2. the admin to add or change the coding problems for the students.

## Installation (Admin Hosting the Repo on the server)
Assuming that you (admin) wants to host this repository on a server called `servername` that you have ssh access to, and you want to store the repo under the `Desktop/git_server` directory.
```console
$ git clone https://github.com/The-Last-Mile-JS/Problems-Submissions.git # clone the repository

$ git clone --bare Problems-Submissions Problems-Submissions.git  # create a bare repository

$ scp -r Problems-Submissions.git username@servername:Desktop/git_server # putting the bare repo to the server
```

## Usage
### [Admin] Adding/Modifying/Deleting Questions
```console
$ git clone username@servername:Desktop/git_server/Problems-submissions.git
$ cd Problems-submissions
... (actions of adding/modifying/deleting questions)
$ git add <file>
$ git commit -m “[add/modify/delete] Chapter_Name/Question_Name”
$ git push origin master
```

### Instructions for Students Pulling the Questions and Pushing the Solutions to Repo (Served on GitHub)

*First-time Submitting Solutions:*
1. `git clone https://github.com/The-Last-Mile-JS/Problems-Submissions`
2. `git checkout -b NAME`</br>
…
3.  `git add <file>`
4.  `git commit -m “NAME solves Chapter_Name/Question_Name”`
5.  `git push origin NAME`

*Subsequent submission (After having a NAME branch):*
1. `git clone https://github.com/The-Last-Mile-JS/Problems-Submissions`
2. `git fetch origin NAME`
3. `git checkout NAME`
4. `git merge master`</br>
…
5.  `git add <file>`
6.  `git commit -m “NAME solves Chapter_Name/Question_Name”`
7.  `git push origin NAME`
