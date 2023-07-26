/**
 * @jest-environment jsdom
 */

const {it, expect, describe} = require("@jest/globals");

describe("test game ", () => {
	let mockFridge = {};
	beforeEach(() => {
		global.Storage.prototype.setItem = jest.fn((key, value) => {
			mockFridge[key] = value;
		});
		global.Storage.prototype.getItem = jest.fn((key) => {
			return mockFridge[key];
		});
	});

	it("get array card", () => {
		global.Storage.prototype.setItem("gameComplexity", 1);
		const {getCardDeck} = require("./js_component/renderScreenGame");
		const cards1 = getCardDeck();
		const cards2 = getCardDeck();
		expect(cards1).not.toEqual(cards2);
	});
});
