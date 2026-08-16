# Timeless Watches ⌚

## Project Overview

Timeless Watches is a React-based e-commerce administrator portal designed for managing a collection of watches.

The application allows users to browse watches, search for specific products, view detailed product information, and allows administrators to add and edit watches through an administrator portal.

This project was developed as a collaborative project by a team of five developers. The team followed a Scrum-based workflow, with **Barack Mogere serving as the Scrum Master** and coordinating the development process.

---

## Team Members

This project was a combined effort of the following five team members:

- **Barack Mogere** — Scrum Master
- **Mwangi** — Developer
- **Majid** — Developer
- **Daniel** — Developer
- **Peris** — Developer

The team collaborated on planning, development, testing, debugging, and documentation throughout the project.

---

## Features

###  Landing Page

The application includes a landing page introducing the Timeless Watches store and providing navigation to the rest of the application.

###  Watch Catalogue

Users can browse the available watches and view important information including:

- Watch name
- Brand
- Description
- Origin
- Price
- Product image

###  Search Functionality

Users can dynamically search for watches by entering a search term. The displayed products are filtered based on the search input.

###  Watch Details

Each watch has its own details page where users can view more information about the selected product.

### Administrator Portal

The administrator portal allows administrators to:

- Add new watches
- View existing watches
- Edit existing watches
- Update watch prices
- Update watch information

###  Data Persistence

The project uses **JSON Server** as a simulated backend.

The application communicates with the backend using:

- `GET` requests to retrieve watches
- `POST` requests to create new watches
- `PATCH` requests to update existing watches

###  Client-Side Routing

React Router is used to navigate between different sections of the application without requiring full-page reloads.

###  Testing

The project uses:

- Vitest
- React Testing Library
- Jest DOM

Tests cover important components and user interactions including:

- Navigation
- Product cards
- Search functionality
- Adding watches
- Editing watches
- Cancelling edits

---

## Technologies Used

- React
- Vite
- JavaScript
- HTML
- CSS
- React Router
- JSON Server
- Vitest
- React Testing Library
- Git
- GitHub

---

## Project Structure

```text
group3-e-commerce/
│
├── db.json
├── package.json
├── vite.config.js
├── README.md
│
└── src/
    │
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductForm.jsx
    │   ├── EditProductForm.jsx
    │   └── SearchBar.jsx
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── Products.jsx
    │   ├── ProductDetails.jsx
    │   └── AddProduct.jsx
    │
    ├── hooks/
    │   └── useWatches.js
    │
    ├── services/
    │   └── api.js
    │
    ├── tests/
    │   ├── Navbar.test.jsx
    │   ├── ProductCard.test.jsx
    │   ├── ProductForm.test.jsx
    │   ├── EditProductForm.test.jsx
    │   └── SearchBar.test.jsx
    │
    ├── App.jsx
    ├── App.css
    └── main.jsx
```
## Getting started 
1. Clone the Repository
git clone https://github.com/Barack-mogere/Group3-project.git

Move into the project directory:
cd group3-e-commerce-
2. Install Dependencies

Run:

npm install
3. Start the JSON Server

The project uses JSON Server as a simulated backend.

Run:

npx json-server --watch db.json --port 3000

The backend will run at:

http://localhost:3000
4. Start the React Application

Open another terminal in the project directory and run:

npm run dev

Vite will provide a local development URL, usually:

http://localhost:5173

Open the URL in your browser.

Running Tests

To run the test suite:

npm test

The project uses Vitest to run the tests.

The tests verify important application functionality and user interactions.

## API Endpoints

The simulated backend provides the following endpoints:

Get all watches
GET /watches
Get a single watch
GET /watches/:id
Add a watch
POST /watches
Update a watch
PATCH /watches/:id
## React Concepts Demonstrated

This project demonstrates several React concepts and modern frontend development practices.

### State Management

The application uses React hooks such as:

useState
useEffect
useContext
useRef
### Custom Hooks

A custom hook is used to help manage watch data and simplify data fetching logic.

### Event Handling

The application handles user interactions such as:

Searching
Form submissions
Editing products
Cancelling edits
Navigation
### Client-Side Routing

React Router is used to create routes for:

Home
Watch catalogue
Watch details
Administrator portal
### Data Fetching

The application communicates with the simulated backend using asynchronous JavaScript and the Fetch API.

## Testing

The application includes unit and interaction tests using Vitest and React Testing Library.

The tests cover:

Navbar rendering
Product card rendering
Search functionality
Adding watches
Editing watches
Cancelling watch edits

The goal of testing was to ensure that important components behave correctly from the user's perspective.

### Responsive Design

The interface was designed to work across different screen sizes, including:

Desktop
Tablet
Mobile

The layout and components adapt to different screen widths to provide a consistent user experience.

## Known Limitations

This project uses JSON Server as a simulated backend rather than a production database.

Because of this:

The application must have JSON Server running locally for data fetching to work.
The backend is not deployed to a production server.
Authentication and authorization are not implemented.
The administrator portal does not currently have real user authentication.
## Future Improvements

Possible improvements for future versions include:

User authentication
Real database integration
Product categories
Shopping cart functionality
Checkout system
Payment integration
Product reviews and ratings
Improved administrator dashboard
Image upload functionality
Deployment of the frontend and backend
# Team Collaboration

The project was developed collaboratively using Git and GitHub.

Each team member contributed to different aspects of the application, including development, testing, debugging, styling, and project planning.

The team followed a Scrum-inspired workflow where tasks were divided among team members and progress was coordinated throughout the development process.

Barack Mogere served as the Scrum Master, helping coordinate the team's workflow, track progress, and support collaboration between team members.

## Conclusion

Timeless Watches demonstrates the development of a modern React-based e-commerce administrator portal.

The project combines React components, state management, client-side routing, API requests, simulated backend persistence, responsive design, and automated testing to create an interactive and maintainable application.

The project was completed through the combined efforts of:

Barack Mogere, Mwangi, Majid, Daniel, and Peris.

## License

This project was created for educational purposes as part of a React development summative assessment.