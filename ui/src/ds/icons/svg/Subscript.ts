import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Subscript', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2.667 3.333 8 8.667m0-5.334L2.667 8.667m10.667 4h-2.667c0-1 .293-1.334 1-1.667.707-.333 1.667-.78 1.667-1.667 0-.313-.114-.62-.32-.86a1.407 1.407 0 0 0-1.747-.293c-.28.16-.493.413-.6.713",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
