import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('MessageCircleHeart', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M10.533 6.133a1.667 1.667 0 0 0-2.333 0L8 6.4l-.234-.2a1.613 1.613 0 1 0-2.133 2.4l2.4 2.333 2.4-2.333c.8-.8.733-1.8.133-2.467m-5.3 7.2a6 6 0 1 0-2.6-2.6l-1.333 3.934 3.933-1.334Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
