import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('Subtract', (c) =>
	jsx("svg", {
	width: 15,
	height: 15,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M7.5 0a7.5 7.5 0 1 1-.002 15.001A7.5 7.5 0 0 1 7.5 0Zm0 9.546a.682.682 0 0 0 0 1.364h.007a.682.682 0 0 0 0-1.364h-.006Zm0-5.455a.683.683 0 0 0-.682.682V7.5a.682.682 0 0 0 1.365 0V4.772A.683.683 0 0 0 7.5 4.09Z",
		fill: "#fff"
	})
}),
);
