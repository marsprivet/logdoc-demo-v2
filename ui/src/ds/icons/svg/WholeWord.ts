import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('WholeWord', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M6.666 6v4m2.667-5.333V10m5.333 1.333V12c0 .333-.333.667-.666.667H2c-.334 0-.667-.334-.667-.667v-.667M6.666 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6.667 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
