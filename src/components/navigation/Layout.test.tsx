import { Layout } from "./Layout";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("<Layout />", () => {
  it("Should load without error", async () => {
    render(<Layout />);
    expect(screen.getByLabelText("Base application")).toHaveTextContent(
      "Login"
    );
  });
  it("Select a navigation item", async () => {
    render(<Layout leftNavigationActions={mockNavActions} />);
    fireEvent.click(screen.getByLabelText("Navigation menu"));
    await waitFor(() => {
      expect(screen.getByLabelText("Navigation drawer")).toHaveTextContent(
        "Home2"
      );
    });
  });
});

const mockNavActions = [
  {
    key: "HOME",
    label: "Home",
    icon: null,
    ariaLabel: "Home",
  },
  { divider: true },
  {
    key: "HOME2",
    label: "Home2",
    icon: null,
    ariaLabel: "Home2",
  },
];