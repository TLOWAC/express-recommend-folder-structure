// eslint-disable-next-line import/no-unresolved
import { main } from "../index";

test("Test Init", () => {
  expect("test").toBe("test");
  expect(main()).toBe("");
});
