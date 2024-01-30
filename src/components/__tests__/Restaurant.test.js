import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mock/restaurantMockData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import Restaurant from "../Restaurant";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should Search the Restaurant component with searchBtn", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Restaurant />
      </BrowserRouter>
    );
  });
 
  const beforeCardRender = screen.getAllByTestId("resCard");
  expect(beforeCardRender.length).toBe(9)

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  //expect(searchBtn).toBeInTheDocument();

  const afterCardRender = screen.getAllByTestId("resCard");
  expect(afterCardRender.length).toBe(1);
});

it("Should Filter the Top rated Restaurant component", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Restaurant />
        </BrowserRouter>
      );
    });
   
    const beforeCardRender = screen.getAllByTestId("resCard");
    expect(beforeCardRender.length).toBe(9)
  
    const topRatedBtn = screen.getByRole('button',{name:'Top Rated Restaurant'});
    fireEvent.click(topRatedBtn);
    const afterCardFilter = screen.getAllByTestId('resCard');
    expect(afterCardFilter.length).toBe(1)

  });
