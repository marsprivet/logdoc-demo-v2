import { jsx } from 'react/jsx-runtime';
import { createIcon } from '../create-icon';

export default createIcon('Gamepad2', (c) =>
	jsx("svg", {
	width: 16,
	height: 16,
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	...c,
	children: jsx("path", {
		d: "M4 7.333h2.666M5.333 6v2.667M10 8h.006M12 6.667h.006m-.46-3.334H4.453a2.667 2.667 0 0 0-2.652 2.394l-.011.101c-.054.45-.457 3.81-.457 4.839a2 2 0 0 0 2 2c.667 0 1-.334 1.333-.667l.943-.943c.25-.25.59-.39.943-.39h2.896c.353 0 .692.14.942.39l.943.943c.333.333.667.667 1.333.667a2 2 0 0 0 2-2c0-1.03-.402-4.39-.456-4.839-.005-.033-.008-.067-.012-.1a2.666 2.666 0 0 0-2.652-2.395Z",
		stroke: "inherit",
		strokeWidth: 1.33,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}),
);
