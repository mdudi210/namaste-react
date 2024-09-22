# npm

- to install parcel or bandler which bandles all the files in one
  npm install -D parcel
- to run our project on port
  npx parcel file_name
- npm install will install all the dependenies in package\*.json file
- package-lock.json have the exist version of dependenies

# what is the difference b/w ^ and ~

^ = small update
~ = larger update

# Parcel (what does parcel do)

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C+
- Caching - Faster Builds
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

- npx parcel build index.html
  this will build production build ready files
- npx parcel index.index.html
  this will build development filrs ready

* React.createElement => Object => HTMLELement(render)
* JSX - HTML-like or XML-like syntax
* JSX (transpiled before it reaches the JS) - PARCEL - Babel
* JSX → React-createElement → ReactElement-JS Object → HTMLELement(render)

- This is the createation of Element in react , Here @nd parameter is used for giving attributr to our tages.
  const heading = React.createElement("h1",{id:"head"},"Hello World using React!");
- This is the connection b/w react and root id
  const root = ReactDOM.createRoot(document.getElementById("root"));
- This is the place where we are adding react code to that particular id
  root.render(heading);
