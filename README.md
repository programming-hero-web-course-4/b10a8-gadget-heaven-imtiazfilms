# E-Commerce Website Project

## Live Website Link
[**View Live Website**](https://your-gadget-haven.netlify.app/)

## Requirement Document Link
[**View Requirement Document**](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf)  

## React Fundamental Concepts Used in the Project

The project uses the following React concepts:

- **JSX (JavaScript XML)**: To define the structure of the web pages in a declarative manner.
- **Components**: Reusable UI elements such as `Cart`, `ProductCard`, `SaleCountdown`, etc.
- **State Management with `useState`**: To manage the local state of the application, such as cart items, total cost, etc.
- **Effect Hook (`useEffect`)**: To perform side effects like fetching data from an API, handling timers, and updating the page title dynamically.
- **Event Handling**: React components handle events like button clicks, form submissions, etc.
- **Conditional Rendering**: Displaying different UI elements based on the state (e.g., showing the "cart is empty" message when no items are in the cart).
- **Routing with React Router**: To manage different views in the app (e.g., cart page, product page, home page).
- **Dynamic Data Rendering**: Using `map()` and other JavaScript methods to render dynamic content such as product listings, random sale items, etc.
- **Modal Dialogs**: Used for actions like purchase confirmation.

## Data Management

In this project, we handle and manage data using:

- **Local Storage**: We use local storage to persist the user's cart items between page reloads. This allows users to continue shopping without losing their cart contents.
- **Fetching Data from JSON**: We fetch product data from local JSON files (`products.json`) to display products dynamically.

## Features of the Website/Project

Here are five key features of the project:

1. **Product Listing**: A dynamic product listing page where users can view and filter products.
2. **Shopping Cart**: Users can add items to the cart, view the total cost, remove items, and proceed to checkout.
3. **Wish List**: Users can add items to the Wish list.
4. **Sale Countdown**: A countdown timer to show how much time is left in a sale event.
5. **Sort Products by Price**: A feature that allows users to sort products by price in ascending or descending order for easier browsing.
