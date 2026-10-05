import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Sandwich', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M2 7.333v2a.667.667 0 0 0 .667.667M2 7.333l5.18-4.026a1.333 1.333 0 0 1 1.64 0L14 7.333m-12 0h12M2.667 10h10.666M2.667 10a.666.666 0 0 0-.667.667V12a.667.667 0 0 0 .667.667H8M13.333 10A.667.667 0 0 0 14 9.333v-2M13.333 10a.666.666 0 0 1 .667.667V12a.666.666 0 0 1-.667.667H10.78m-2.133.513L4.667 10H13l-2.5 3a1.333 1.333 0 0 1-1.853.18Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
