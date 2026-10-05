import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('MapPinX', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M13.168 7.934c.107-.414.163-.84.166-1.267a5.333 5.333 0 1 0-10.667 0c0 3.328 3.693 6.795 4.933 7.866a.667.667 0 0 0 .861-.052m5.873-4.148L11 13.667m3.334 0L11 10.333m-1-3.666a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
