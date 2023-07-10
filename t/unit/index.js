// @vitest-environment jsdom

import { cleanup, render } from "@testing-library/vue";
import { expect, it } from "vitest";

import App from "@/app.vue";

it("can test", () => {
	const { container } = render(App, {
		"props": {}
	});

	const paragraph = container.querySelector("p");

	expect(paragraph.innerHTML).toContain("Hello World!");

	cleanup();
});
