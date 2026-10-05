import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('LayoutList', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M9.333 2.667H14M9.333 6H14m-4.667 4H14m-4.667 3.333H14M2.667 2H6c.368 0 .667.298.667.667V6A.667.667 0 0 1 6 6.667H2.667A.667.667 0 0 1 2 6V2.667C2 2.298 2.298 2 2.667 2Zm0 7.333H6c.368 0 .667.299.667.667v3.333A.667.667 0 0 1 6 14H2.667A.667.667 0 0 1 2 13.333V10c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
