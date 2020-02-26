<script lang="tsx">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "Home",
    setup() {
        return (): JSX.Element => (
            <div class="Home">Hello, World! (This is the Home Page)</div>
        );
    }
});
</script>
<style scoped lang="postcss">
.Home {
    background-color: var(--colorLightBreezy);
}
</style>