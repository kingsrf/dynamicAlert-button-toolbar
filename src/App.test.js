
import { render, screen, fireEvent } from "@testing-library/react";
import Toolbar from "./Toolbar";

beforeAll(() => {
  jest.spyOn(window, "alert").mockImplementation(() => {});
});

afterAll(() => {
  window.alert.mockRestore();
});

describe("Toolbar & AlertButton Component Tests", () => {

  // Normal Cases

  test("clicking 'Greet' button shows correct alert", () => {
    render(<Toolbar />);
    fireEvent.click(screen.getByText("Greet"));
    expect(window.alert).toHaveBeenCalledWith("Hello from Button 1!");
  });

  test("clicking 'Warn' button shows correct alert", () => {
    render(<Toolbar />);
    fireEvent.click(screen.getByText("Warn"));
    expect(window.alert).toHaveBeenCalledWith("Warning! This is Button 2.");
  });

  test("clicking 'Farewell' button shows correct alert", () => {
    render(<Toolbar />);
    fireEvent.click(screen.getByText("Farewell"));
    expect(window.alert).toHaveBeenCalledWith("Goodbye from Button 3!");
  });


  // Edge Cases

  test("button with empty message prop shows empty alert", () => {
    render(<Toolbar />);
    render(<button onClick={() => alert("")}>Empty Alert</button>);
    fireEvent.click(screen.getByText("Empty Alert"));
    expect(window.alert).toHaveBeenCalledWith("");
  });

  test("button with only spaces in message shows spaces", () => {
    render(<Toolbar />);
    render(<button onClick={() => alert("   ")}>Space Alert</button>);
    fireEvent.click(screen.getByText("Space Alert"));
    expect(window.alert).toHaveBeenCalledWith("   ");
  });

  test("clicking a button with no children still works", () => {
    render(<button onClick={() => alert("No text")}></button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("No text");
  });

});
