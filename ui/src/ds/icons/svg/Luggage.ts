import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Luggage', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 13.333A1.333 1.333 0 0 1 2.667 12V5.333A1.333 1.333 0 0 1 4 4h8a1.333 1.333 0 0 1 1.334 1.333V12A1.333 1.333 0 0 1 12 13.333m-8 0a1.333 1.333 0 1 0 2.667 0m-2.667 0C4 12.597 4.597 12 5.334 12M12 13.333a1.333 1.333 0 1 1-2.666 0m2.666 0c0-.736-.597-1.333-1.333-1.333m-5.333 0V2.667a1.333 1.333 0 0 1 1.333-1.334h2.667a1.333 1.333 0 0 1 1.333 1.334V12m-5.333 0c.736 0 1.333.597 1.333 1.333m4-1.333c-.736 0-1.333.597-1.333 1.333m-2.667 0h2.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
