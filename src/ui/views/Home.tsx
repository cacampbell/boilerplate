import { createComponent } from "@vue/composition-api";

export default createComponent({
    name: "Home",
    setup() {
        return (): JSX.Element => (
            <div>Hello, World! (This is the Home Page)</div>
        )
    }
})