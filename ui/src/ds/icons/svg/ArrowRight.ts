import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('ArrowRight', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M3.333 8h9.333m0 0L8 3.333M12.666 8 8 12.667",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
