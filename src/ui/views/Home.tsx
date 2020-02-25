import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "Home",
    setup() {
        return (): JSX.Element => (
            <div>Hello, World! (This is the Home Page)</div>
        )
    }
})