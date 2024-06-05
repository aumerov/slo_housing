import React from 'react';

// PascalCasing
function Message() {
    // JSX: JavaScript XML
    const name = 'Art'  // removing text makes it "Hello World"
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;