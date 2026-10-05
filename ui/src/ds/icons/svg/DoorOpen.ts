import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('DoorOpen', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8.666 2.667h2A1.333 1.333 0 0 1 12 4v9.333m-10.667 0h2m0 0 4.505 1.126a.667.667 0 0 0 .828-.646V3.04A1.336 1.336 0 0 0 7.61 1.737a1.333 1.333 0 0 0-.6.011l-2.666.667a1.333 1.333 0 0 0-1.01 1.293v9.625Zm5.333 0h6M6.666 8v.007",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
