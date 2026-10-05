import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('FolderLock', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 13.333h-4A1.333 1.333 0 0 1 1.333 12V3.333A1.333 1.333 0 0 1 2.666 2h2.6a1.333 1.333 0 0 1 1.127.6l.54.8a1.333 1.333 0 0 0 1.113.6h5.287a1.333 1.333 0 0 1 1.333 1.333V7m-1.333 4.333V10a1.334 1.334 0 0 0-2.667 0v1.333m-.666 0h4c.368 0 .666.299.666.667v2a.667.667 0 0 1-.666.667h-4A.667.667 0 0 1 9.333 14v-2c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
