import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('UsersRound', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 14a5.333 5.333 0 0 0-5.334-5.333m0 0A5.333 5.333 0 0 0 1.333 14m5.333-5.333a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Zm8 4.666C14.666 11.087 13.333 9 12 8a3.334 3.334 0 0 0-.3-5.533",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
