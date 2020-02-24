import { JSX, h } from "preact";
import React from "react";
import { useRoute, Link } from "wouter-preact";

function ActiveLink(props): JSX.Element {
    const [isActive] = useRoute(props.href);
    return (
        <Link {...props}>
            <a href={props.href} class={isActive ? "active" : ""}>
                {props.children}
            </a>
        </Link>
    );
}

export default ActiveLink;
