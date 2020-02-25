import { defineComponent } from "@vue/composition-api";
import { css } from "linaria";

const Home = css`
    background-color: var(--colorCoarseWool);
`;

export default defineComponent({
    name: "Home",
    setup() {
        return (): JSX.Element => (
            <div class={Home}>Hello, World! (This is the Home Page)</div>
        )
    }
})