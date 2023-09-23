# Infinite-Scrolling-in-React
Infinite scrolling React app displays a product catalog fetched from a mock API. Users can browse products seamlessly with automatic loading, view details in modals, and error handling.

# Infinite Scrolling Product Catalog

This React application demonstrates infinite scrolling to display a product catalog fetched from a mock API. It allows users to browse through a list of products with ease and view detailed product information.

## Features

- **Infinite Scrolling:** Additional products load automatically as you scroll down the page.
- **Product Cards:** Each product is presented in a card format with key details.
- **Modal Details:** Click on a product card to view more information in a modal.
- **Error Handling:** The application gracefully handles errors during network requests.
- **Loading Indicator:** A loading indicator informs users when data is being fetched.

## Usage

1. Clone the repository:

   ```bash
   [git clone https://github.com/Shyamansh/Infinite-Scrolling-in-React]
2. Install dependencies
  ```bash
  cd infinite-scrolling-catalog
    npm install
  ```

3. Open your web browser and access the application at http://localhost:3000.

  Technologies Used
  React
  React Bootstrap (for modal and UI components)
  Intersection Observer API (for infinite scrolling)
  
  Project Structure
  src/components/ProductList.js: Main component for displaying the product list and handling interactions.
  src/components/ProductDetails.js: Component for displaying detailed product information in a modal.
  
  Acknowledgments
  This project was created as part of an assignment and serves as an example of infinite scrolling in React.
