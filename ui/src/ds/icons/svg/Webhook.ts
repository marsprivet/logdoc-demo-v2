import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Webhook', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M12 11.32H8.006c-.733 0-1.3.627-1.653 1.267a2.667 2.667 0 0 1-5.02-1.254c.007-.466.133-.933.38-1.333M4 11.333 6.086 7.48c.354-.647.067-1.453-.333-2.067a2.667 2.667 0 1 1 4.593-2.706M8 4l2.086 3.82c.354.647 1.18.847 1.914.847A2.667 2.667 0 0 1 12 14",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
