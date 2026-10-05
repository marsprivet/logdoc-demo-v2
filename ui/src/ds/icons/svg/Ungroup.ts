import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Ungroup', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 2.667H4a.667.667 0 0 0-.667.666V6c0 .368.298.667.667.667h4A.667.667 0 0 0 8.666 6V3.333A.667.667 0 0 0 8 2.667ZM12 9.333H8a.667.667 0 0 0-.667.667v2.667c0 .368.298.666.667.666h4a.667.667 0 0 0 .666-.666V10A.667.667 0 0 0 12 9.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
