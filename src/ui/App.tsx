import { defineComponent } from "@vue/composition-api";
import styled from "vue-styled-components";

export default defineComponent({
    setup() {
        const StyledH1 = styled.h1`
            background-color: var(--colorMoonWhite);
        `;
        const StyledH2 = styled.h2`
            background-color: var(--colorBlueBlouse);
        `;
        const App = (
        <div>
            <header><StyledH1>Header</StyledH1></header>
            <nav><StyledH2>Navigation</StyledH2></nav>
            <main>
                <StyledH2>Main Content</StyledH2>
                <router-view />
            </main>
            <footer><StyledH2>Footer</StyledH2></footer>
        </div>);
        return (): JSX.Element => App;
    }
});