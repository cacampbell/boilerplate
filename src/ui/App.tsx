import { defineComponent } from "@vue/composition-api";
import { css } from "linaria";

const App = css`
    color: var(--colorLightBreezy);
`;

export default defineComponent({
    setup() {
        return (): JSX.Element => (
            <div class={App}>
                <header><h1 class="layout-note">Header</h1></header>
                <nav><h2 class="layout-note">Navigation</h2></nav>
                <main>
                    <h2 class="layout-note">Main Content</h2>
                    <router-view />
                </main>
                <footer><h2 class="layout-note">Footer</h2></footer>
            </div>
        )
    }
});