/*
-----------------------------------
STEP 1: Create React Elements
-----------------------------------

React.createElement() syntax:

React.createElement(
    "tagName",
    { attributes/props },
    "content / children"
)
*/

// Create headings
const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");

/*
-----------------------------------
STEP 2: Create a Parent Container
-----------------------------------
*/

// Create parent container (We wrap both headings inside a div)
const container = React.createElement(
  "div",
  { id: "container" },
  [heading1, heading2]
);


/*
-----------------------------------
STEP 3: Select Root DOM Node
-----------------------------------

React needs a place to render UI
*/

const rootElement = document.getElementById("root");


/*
-----------------------------------
STEP 4: Create React Root
-----------------------------------
*/

const root = ReactDOM.createRoot(rootElement);


/*
-----------------------------------
STEP 5: Render React Element
-----------------------------------
*/

root.render(container);