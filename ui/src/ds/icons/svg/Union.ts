import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Union', (c) =>
	jsx("svg", {
	width: 2,
	height: 7,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M.707 5.6a.7.7 0 0 1 0 1.4H.7a.7.7 0 0 1 0-1.4h.007ZM.7 0a.7.7 0 0 1 .7.7v2.8a.7.7 0 0 1-1.4 0V.7A.7.7 0 0 1 .7 0Z",
		fill: "#121317"
	})
}),
);
