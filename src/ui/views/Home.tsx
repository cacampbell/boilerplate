import { defineComponent, SetupContext } from "@vue/composition-api";
import styled from "vue-styled-components";

export default defineComponent({
    name: "Home",
    setup(_, context: SetupContext) {
        const StyledH5 = styled.h5`
            background-color: var(--colorClimateControl);
            color: var(--colorWhite);    
        `;
        return (): JSX.Element => (
            <div class="Home">
                <StyledH5>{ context.root.$t("home.welcome").toString() }</StyledH5>
            </div>
        );
    }
});