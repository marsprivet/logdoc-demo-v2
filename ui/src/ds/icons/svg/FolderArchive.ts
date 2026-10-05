import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FolderArchive', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10 11.333A1.333 1.333 0 1 0 10 14a1.333 1.333 0 0 0 0-2.667Zm0 0V10m3.933 3.2a1.332 1.332 0 0 0 .733-1.2V5.333A1.333 1.333 0 0 0 13.333 4H8.066a1.333 1.333 0 0 1-1.126-.6l-.54-.8A1.333 1.333 0 0 0 5.286 2h-2.62a1.333 1.333 0 0 0-1.333 1.333V12a1.333 1.333 0 0 0 1.333 1.333h3.4m3.934-6v-.666",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
