import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FolderGit2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6 13.333H2.666A1.333 1.333 0 0 1 1.333 12V3.333A1.333 1.333 0 0 1 2.666 2h2.6a1.333 1.333 0 0 1 1.127.6l.54.8a1.333 1.333 0 0 0 1.113.6h5.287a1.333 1.333 0 0 1 1.333 1.333v3.334m-6 .666a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Zm0 0A3.301 3.301 0 0 0 12 12.667M8.666 9.333v5.334m3.334-2a1.333 1.333 0 1 0 2.666 0 1.333 1.333 0 0 0-2.666 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
