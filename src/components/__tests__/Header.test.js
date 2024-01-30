import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";

it("Should have login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button",{name:"Login"});
   expect(loginButton).toBeInTheDocument();
   fireEvent.click(loginButton);
   const logoutButton = screen.getByRole("button",{name:"Logout"});
   expect(logoutButton).toBeInTheDocument();

});

it("Should have Items button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //const items = screen.getByText("Cart(Items 0)");
    const items = screen.getByText(/Cart/);  //Regex
     expect(items).toBeInTheDocument();
    
  
  });