import { jsx, jsxs } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default /* @__PURE__ */ createIcon('AudioWaveform', (l) =>
	jsxs("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...l,
	children: [jsx("g", {
		clipPath: "url(#audio-waveform_svg__a)",
		children: jsx("path", {
			d: "M1.333 8.667a1.333 1.333 0 0 0 1.333-1.334V4.667a1.333 1.333 0 0 1 2.667 0v8.666a1.333 1.333 0 0 0 2.667 0V2.667a1.333 1.333 0 0 1 2.666 0v8.666a1.333 1.333 0 0 0 2.667 0V8.667a1.334 1.334 0 0 1 1.333-1.334",
			stroke: "inherit",
			strokeWidth: 1.33,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}), jsx("defs", { children: jsx("clipPath", {
		id: "audio-waveform_svg__a",
		children: jsx("path", {
			fill: "#fff",
			d: "M0 0h16v16H0z"
		})
	}) })]
}),
);
