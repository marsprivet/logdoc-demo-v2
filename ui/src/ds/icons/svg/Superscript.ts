import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Superscript', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 12.667 8 7.333m0 5.334L2.667 7.333M13.334 8h-2.667c0-1 .295-1.333 1-1.667.705-.333 1.667-.777 1.667-1.665 0-.315-.114-.62-.323-.86a1.403 1.403 0 0 0-1.745-.29c-.28.159-.492.409-.599.706",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
