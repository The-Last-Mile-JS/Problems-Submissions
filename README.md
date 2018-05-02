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

... # actions of adding/modifying/deleting questions

$ git add <file>
$ git commit -m “[add/modify/delete] Chapter_Name/Question_Name”
$ git push origin master
```

### [Student] Creating Branch and Submitting Solution for the First Time
```console
$ git clone username@servername:Desktop/git_server/Problems-submissions.git
$ cd Problems-submissions
$ git checkout -b NAME # creating and switching to personal branch

... # actions of solving a problem

$ git add <file>
$ git commit -m “NAME solves Chapter_Name/Question_Name”
$ git push origin NAME
```
### [Student] Submitting Solutions for Subsequent Times
```console
$ git clone username@servername:Desktop/git_server/Problems-submissions.git
$ cd Problems-submissions
$ git fetch origin NAME # fetching personal branch that contains previously submitted solution
$ git checkout NAME # switching to personal branch
$ git merge master # include new problems pushed by instructor

... # actions of solving a problem

$ git add <file>
$ git commit -m “NAME solves Chapter_Name/Question_Name”
$ git push origin NAME
```
