import { Layout, NavigationAction } from "./Layout";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("<Layout />", () => {
  it("Should load without error", async () => {
    render(
      <Layout
        isAuthorized={false}
      />
    );
    expect(screen.getByLabelText("Base application")).toBeInTheDocument();
  });

  it("Select a navigation item", async () => {
    const mockNavigationClick = jest.fn();
    render(
      <Layout
        navigationActions={mockNavActions}
        navigationClick={mockNavigationClick}
        isAuthorized={false}
      />
    );

    await waitFor(() => {
      expect(screen.getByLabelText("Navigation drawer")).toHaveTextContent(
        "Home2"
      );
    });
    fireEvent.click(screen.getByText("Home2"));
    await waitFor(() => {
      expect(mockNavigationClick).toBeCalledWith(mockNavActions[2]);
    });
  });

  it("should override with component", () => {
    render(
      <Layout
        navigationActions={mockNavActions}
        isAuthorized={false}
      />);
    expect(screen.getByText("Mock Logo")).toBeInTheDocument();
  });

  it("Should expand and contract left navigation", () => {
    render(
      <Layout
        navigationActions={mockNavActions}
        isAuthorized={false}
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
    authFilter: "always",
    position: "left",
  },
  {
    divider: true,
    authFilter: "always",
    position: "left",
  },
  {
    key: "HOME2",
    label: "Home2",
    icon: null,
    ariaLabel: "Home2",
    authFilter: "always",
    position: "left",
  },
  {
    key: "component",
    Component: <MockLogo />,
    authFilter: "always",
    position: "left",
  },
  {
    key: "Avatar",
    label: "Avatar",
    ariaLabel: "Avatar",
    position: "top",
    authFilter: "always",
  },
];
