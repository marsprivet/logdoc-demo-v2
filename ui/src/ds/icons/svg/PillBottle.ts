import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('PillBottle', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 7.333H9.334A.667.667 0 0 0 8.667 8v3.333a.667.667 0 0 0 .667.667H12M4 4.667v8.666a1.333 1.333 0 0 0 1.334 1.334h5.333A1.333 1.333 0 0 0 12 13.333V4.667M3.334 1.333h9.333c.368 0 .667.299.667.667v2a.667.667 0 0 1-.667.667H3.334A.667.667 0 0 1 2.667 4V2c0-.368.298-.667.667-.667Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
