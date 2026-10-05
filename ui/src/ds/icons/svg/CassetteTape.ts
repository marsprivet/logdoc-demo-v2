import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('CassetteTape', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M5.333 8a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Zm0 0h5.333m0 0a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM4 13.333l.466-1.933a.933.933 0 0 1 .934-.733h5.2a.933.933 0 0 1 .933.666l.467 2M2.666 2.667h10.667c.736 0 1.333.597 1.333 1.333v8c0 .736-.597 1.333-1.333 1.333H2.666A1.333 1.333 0 0 1 1.333 12V4c0-.736.597-1.333 1.333-1.333Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
