import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('NotepadText', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.334 1.333V4M8 1.333V4m2.667-2.667V4M5.334 6.667h4m-4 2.666h5.333M5.334 12h3.333M4 2.667h8c.737 0 1.334.597 1.334 1.333v9.333c0 .737-.597 1.334-1.334 1.334H4a1.333 1.333 0 0 1-1.333-1.334V4c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
