# Product Catalog Application

A React-based product catalog application that allows users to browse products, view details, add items to a cart, and manage their shopping experience. The application features a responsive design and utilizes Bootstrap for styling.

## Features

- Browse a catalog of products with images, descriptions, and prices.
- View detailed product information, including brand, rating, and shipping information.
- Add products to a shopping cart.
- Modify quantities or remove items from the cart.
- View the cart contents and calculate the total cost.
- Implement a search function to find specific products.
- checkout page to place an orders.
- View user reviews for each product.
- Responsive design for mobile and desktop devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for managing application state.
- **React Bootstrap**: A library that provides Bootstrap components for React.
- **CSS**: For custom styling and layout adjustments.

## Installation

1.  GitHub repository:
    `https://github.com/Amisha73/Internshala-project-shoppy-globe-`

2.  Create a New React App:
    `npm create vite@latest shoppy-globe --template react`

3.  change directory:
    `cd shoppy-globe`

4.  Install Required Packages:
    `npm install bootstrap redux react-redux react-router-dom react-icons`

5.  Create the Project Structure:

- `mkdir src/components src/redux src/hooks`
- `touch src/components/{Header.jsx, Home.jsx, AboutPage.jsx, Footer.jsx,ProductList.jsx,ProductItem.jsx,ProductDetail.jsx,Cart.jsx,CartItem.jsx,NotFound.jsx} src/redux/{actions.jsx,reducers.jsx,store.jsx} src/hooks/useFetchProducts.jsx`

6. Add Bootstrap CSS in your `src/main.jsx` file:
   `import 'bootstrap/dist/css/bootstrap.min.css';`

7. Install the dependencies:
   `npm install`

8. Start the development server:
   `npm run dev`

```
## Folder Structure

shoppyGlobe/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Cart.jsx
│ │ ├── CartItem.jsx
│ │ ├── ProductDetails.jsx
│ │ ├── ProductItem.jsx
│ | ├── ProductList.jsx
| | ├── Home.jsx
│ │ ├── NotFound.jsx
│ │ ├── AboutPage.jsx
│ │ ├── LoginSignup.jsx
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── CheckOutPage.jsx
│ │ ├── SearchResult.jsx
│ ├── hooks/
│ │ ├── useFetchProducts.jsx
│ ├── redux/
│ │ ├── actions.jsx
│ │ ├── reducer.jsx
│ │ └── store.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── App.css
│ ├── index.css
│ └── ...
├── package.json
└── README.md

```
