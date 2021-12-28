import { render, screen } from "@testing-library/react";
// Component
import Joke from "./index";

describe("Joke Component", () => {
  it("Should display setup", () => {
    render(<Joke data={{ setup: "test" }} />);
    // expect(document.querySelector("span").textContent).toBe("test");
    expect(document.getElementById("setup").textContent).toBe("test");
  });
  it("Should display setup and delivery", () => {
    render(<Joke data={{ setup: "test", delivery: "test two" }} />);
    expect(document.getElementById("setup").textContent).toBe("test");
    expect(document.getElementById("delivery").textContent).toBe("test two");
  });
  it("Should display joke", () => {
    render(<Joke data={{ joke: "test three" }} />);
    expect(screen.getByTestId("joke").textContent).toBe("test three");
  });
});
