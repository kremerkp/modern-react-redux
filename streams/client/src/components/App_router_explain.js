import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            Page One
            !!BAD!! Complete HTML-Site will be rerender
            <a href="/pagetwo">Navigate to Page 2</a>
            <Link to="/pagetwo">Navigate to Page 2</Link>
        </div>
    )
    ;
};

const PageTwo = () => {
    return (
    <div>Page Two
            !!BAD!!
            <a href="/">Navigate back to  Page </a>
            <Link to="/">Navigate to Page </Link>
    </div>

    );
};


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" exact component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>

    );
};

export default App;