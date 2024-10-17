# Movie Search App

## Overview
This is a fully-featured Movie Search Application that allows users to search for movies and view detailed information fetched from the OMDB API. The application includes pagination, filtering, and error handling for a seamless user experience.

## Features
- Search for movies by title or keywords.
- Display movie results in a grid with posters, titles, and short descriptions.
- Pagination for large result sets.
- Detailed view of each movie, including ratings, plot, cast, and more.
- Dropdown filter to sort by movie type (e.g., movie, series, episode) directly using the API.
- Error handling for failed API requests and no results found.

## Technologies Used
- **ReactJS**: For building user interfaces.
- **React Router**: For navigation between search and movie detail pages.
- **OMDB API**: To fetch movie data.
- **Tailwind CSS**: For responsive and modern styling.
- **JavaScript**: For implementing functionality.

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
`
2. Install dependencies:
```bash
   cd movie-search-app
   npm install
```
3. Clone the repository:
- Create a .env file in the root directory.
- Add your OMDB API key:
 ```bash
  REACT_APP_OMDB_API_KEY=your_api_key
```
4. Start the development server:
 ```bash
 npm start
```
5. Open the app in your browser at http://localhost:3000.

## How It Works
- The search bar allows users to enter a movie title or keyword. On form submission, the app fetches movie data from the OMDB API and displays the results in a grid.
- Users can click on a movie to view more details, which are fetched using the movie ID from OMDB.
- A dropdown filter enables users to filter results by movie type (e.g., movie, series, or episode) by sending the appropriate query parameter to the API.
- Pagination or infinite scroll is implemented to handle large result sets.
-The app also includes error handling for unsuccessful API requests and no results found.

## Future Enhancements
- Add user authentication to manage a list of favorite movies.
- Implement local storage to persist user search queries and favorite lists.
- Improve UI/UX with additional animations and responsiveness.
