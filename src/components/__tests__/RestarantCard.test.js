import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mock/mockData.json";

it("Should load RestarauntCard screen", () => {
  render(<RestaurantCard propsObj={MOCK_DATA} />);
  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  expect(name).toBeInTheDocument();
});
