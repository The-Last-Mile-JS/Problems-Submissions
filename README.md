# Problems-Submissions
A repository where an individual student pulls the coding problems and submits his/her codes.


### Instructions for Admins Adding/Modifying/Deleting Questions from Repo (Served on GitHub)

1. `git clone https://github.com/The-Last-Mile-JS/Problems-Submissions.git`</br>
...
2. `git add <file>`
3. `git commit -m “[add/modify/delete] Chapter_Name/Question_Name”`
4. `git push origin master`

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
