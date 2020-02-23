### Setup

* Fork the repo
* Clone forked repo on your local machine `git clone https://github.com/<YOUR_USERNAME>/gdg-container`.
* `cd gdg-container` to go into the project root.
* `git remote add upstream https://github.com/amine-louni/gdg-container` to add original repo as an upstream.
* ``yarn`` or `npm i` to install the website's npm dependencies.

* `git pull upstream master` to ensure you have the latest main code then run `git push` to update your forked repo.
_note_: if a dependencies are added run again `npm i`.

### Push your code
* `git checkout -b branch-name` (replacing branch-name with a suitable name) to create a branch.
* make your changes.
* `git add -A && git commit -m "My message"` (replacing **My message** with a commit message, such as Fixed header).
* `git push origin branch-name`.
* In github website, select the **branch-name** then make a new pull request (if you pull a request and it's still under review, and you push new changes under same branch then your update will auto pass to review no need to repull a request).

### Guidlines

* Images must be under **public/assets**.
* Each Branch must work on only one components OR fixing an issue/bug.
* * A Branch can't have multiple components.
* * A Branch can't fix others components while developing one.
* File name MUST BE same as function/class namme.
* Each component must be under same folder folder name must have same name as main component:
```
// example
views
|_About
  |_About.jsx //this will be used by other dev's if needed.
  |_Main.jsx
  |_Headline.jsx
|_Home
  |_EventCarousel
    |_...
    |_...
  |_Home.jsx
  |_...
```
* Folder must have a main compontent and may have sub compontent, css/js files as long as it is related.
