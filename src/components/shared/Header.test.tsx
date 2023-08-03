import { render, screen } from "../../utils/test-utils";
import Header from "./Header";

const renderPage = (title: string, description: string) => {
  return render(<Header title={title} description={description} />);
};

describe("Header", () => {
  it("Should render the component", () => {
    renderPage("", "");
  });

  it("Should have title", () => {
    const expectedTitle = "A beautiful title";
    renderPage(expectedTitle, "");
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(expectedTitle);
  });

  it("Should have description about how to use the page", () => {
    const expectedDescription = "A beautiful description";

    renderPage("", expectedDescription);
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(expectedDescription);
  });
});
