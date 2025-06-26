import { writable } from "svelte/store";

const clicked = writable(false);

export default clicked;