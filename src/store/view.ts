import { writable } from "svelte/store";
import type { View } from "../types";

const view = writable<View>("about");

export default view;