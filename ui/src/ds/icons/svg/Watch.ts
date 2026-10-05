import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Watch', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M8 6.667V8l.667.667m2.086-3.56-.54-2.7A1.333 1.333 0 0 0 8.88 1.333H7.093A1.333 1.333 0 0 0 5.76 2.407l-.52 2.7m.013 5.8.534 2.666a1.333 1.333 0 0 0 1.333 1.074h1.813a1.333 1.333 0 0 0 1.334-1.074l.54-2.7M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
