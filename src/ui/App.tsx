import { Fragment, JSX, h } from "preact";
import React, { Suspense, lazy } from "react";
import { Switch, Route } from "wouter-preact";

import Navigation from "./Molecules/Navigation";

const FallbackCard = () => "Loading...";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

const App = (): JSX.Element => {
    return (
        <Fragment>
            <header>
                <h1 className="layout-note">Header</h1>
            </header>
            <nav>
                <h2 className="layout-note">Navigation</h2>
                <Navigation />
            </nav>
            <main>
                <h2 className="layout-note">Main Content</h2>
                <Suspense fallback={FallbackCard}>
                    <Switch>
                        <Route path="/" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/:rest*" component={NotFoundPage} />
                    </Switch>
                </Suspense>
            </main>
            <footer>
                <h2 className="layout-note">Footer</h2>
            </footer>
        </Fragment>
    );
};

export default App;
