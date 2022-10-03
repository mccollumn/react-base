import { Layout, NavigationAction } from "./Layout";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("<Layout />", () => {
  it("Should load without error", async () => {
    render(<Layout />);
    expect(screen.getByLabelText("Base application")).toBeInTheDocument();
  });

  it("Select a navigation item", async () => {
    const mockLeftNavigationClick = jest.fn();
    render(
      <Layout
        navigationActions={mockNavActions}
        leftNavigationClick={mockLeftNavigationClick}
      />
    );

    await waitFor(() => {
      expect(screen.getByLabelText("Navigation drawer")).toHaveTextContent(
        "Home2"
      );
    });
    fireEvent.click(screen.getByText("Home2"));
    await waitFor(() => {
      expect(mockLeftNavigationClick).toBeCalledWith(mockNavActions[2]);
    });
  });

  it("should override with component", () => {
    render(<Layout navigationActions={mockNavActions} />);
    expect(screen.getByText("Mock Logo")).toBeInTheDocument();
  });

  it("Should expand and contract left navigation", () => {
    render(
      <Layout
        navigationActions={mockNavActions}
      />);

    // Expand
    fireEvent.click(screen.getByLabelText("Expand Left Navigation"));

    expect(
      screen.getByLabelText("Base application")
    ).toHaveClass('expanded')


    // Contract
    fireEvent.click(screen.getByLabelText("Collapse Left Navigation"));

    expect(
      screen.getByLabelText("Base application")
    ).toHaveClass('contracted')

  });
});

const MockLogo = () => {
  return <div>Mock Logo</div>;
};

const mockNavActions: Array<NavigationAction> = [
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
  {
    key: "component",
    Component: <MockLogo />,
  },
  {
    key: "Avatar",
    label: "Avatar",
    ariaLabel: "Avatar",
    position: "top",
  },
];
