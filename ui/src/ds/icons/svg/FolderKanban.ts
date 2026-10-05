import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FolderKanban', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 6.667v2.666M8 6.667V8m2.666-1.333v4m-8 2.666h10.667A1.333 1.333 0 0 0 14.666 12V5.333A1.333 1.333 0 0 0 13.333 4H8.046a1.333 1.333 0 0 1-1.106-.6l-.547-.8A1.333 1.333 0 0 0 5.286 2h-2.62a1.333 1.333 0 0 0-1.333 1.333V12c0 .733.6 1.333 1.333 1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
