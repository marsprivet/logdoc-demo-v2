import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('ClipboardCheck', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.667 2.667H12A1.333 1.333 0 0 1 13.334 4v9.333A1.333 1.333 0 0 1 12 14.667H4a1.333 1.333 0 0 1-1.333-1.334V4A1.333 1.333 0 0 1 4 2.667h1.334M6 9.333l1.334 1.334L10 8M6 1.333h4c.368 0 .667.299.667.667v1.333A.667.667 0 0 1 10 4H6a.667.667 0 0 1-.666-.667V2c0-.368.298-.667.666-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
