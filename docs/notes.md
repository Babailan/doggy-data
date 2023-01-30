---
sidebar_label: "Notes"
sidebar_position: 4
---

# Notes

## Parser

Sometimes, data received from API calls may contain pure HTML. To render this HTML within a React component, you can use the `html-react-parser` library.

Here's an example of how to use `html-react-parser`:

```js
import React from "react";
import parse from "html-react-parser";

const data = {
  description: "<p>This dog is amazing like a human</p>",
};

function App() {
  return <div>{parse(data.description)}</div>;
}

export default App;
```

## Accessing Object Properties

When accessing properties of an object, you can use either bracket notation or dot notation. However, if the property name is a string that is not a valid JavaScript identifier, you must use bracket notation.

Here's an example:

```js
const y = {
  name: "Joe Biden",
};

// Bracket notation
const name = y["name"];

// Dot notation
const name = y.name;
```
