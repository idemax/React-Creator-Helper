# React Creator Helper

Creates a component in a folder with a JSX and SCSS file named as you wish.

## NPM install

`npm i -g react-creator-helper`

## How to use?

`react-creator-helper my-component ../../path`

Example:

`react-creator-helper my-button ../../my-app/src/components/`

## Created files examples

**React Component**

`my-thing/my-thing.component.jsx`

```
import React from "react";

import "./my-thing.styles.scss";

class MyThing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>Hello, I'm MyThing!</div>
        );
    }

}

// function component
// const MyThing = (props) => ();

export default MyThing;
```

**SCSS style**

`my-thing/my-thing.styles.scss`

```
// add the classes for MyThing below...

```

Enjoy!