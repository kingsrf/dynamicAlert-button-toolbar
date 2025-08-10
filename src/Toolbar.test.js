import { render, screen, fireEvent } from "@testing-library/react";
import Toolbar from "./Toolbar";
import AlertButton from "./AlertButton";

beforeAll(() => {
  jest.spyOn(window, "alert").mockImplementation(() => {});
});

afterAll(() => {
  window.alert.mockRestore();
});

describe("Dynamic Toolbar & AlertButton Tests", () => {
  //  Normal cases

  test("clicking 'Download File' shows 'Downloading!' alert", () => {
    render(<Toolbar />);
    fireEvent.click(screen.getByText("Download File"));
    expect(window.alert).toHaveBeenCalledWith("Downloading!");
  });

  test("clicking 'Share Document' shows 'Sharing!' alert", () => {
    render(<Toolbar />);
    fireEvent.click(screen.getByText("Share Document"));
    expect(window.alert).toHaveBeenCalledWith("Sharing!");
  });

  test("clicking 'Upload File' shows 'Uploading!' alert", () => {
    render(<Toolbar />);
    fireEvent.click(screen.getByText("Upload File"));
    expect(window.alert).toHaveBeenCalledWith("Uploading!");
  });


  // Edge cases
  
  test("button with empty message shows empty alert", () => {
    render(<AlertButton message="">Empty Msg</AlertButton>);
    fireEvent.click(screen.getByText("Empty Msg"));
    expect(window.alert).toHaveBeenCalledWith("");
  });

  test("button with spaces in message shows spaces", () => {
    render(<AlertButton message="   ">Space Msg</AlertButton>);
    fireEvent.click(screen.getByText("Space Msg"));
    expect(window.alert).toHaveBeenCalledWith("   ");
  });

  test("button with no children still works", () => {
    render(<AlertButton message="No Label" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("No Label");
  });
});
