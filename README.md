# Case Study - Article Page App with Focus on Performance and SEO

Welcome to my Article Page App developed as part of the second interview process. This application is built using React with a focus on performance optimization and SEO best practices.

## Introduction

The Article Page App is a frontend application designed to display a list of articles fetched from a mock API. The app is built using React, ensuring a modern and responsive user experience. This project showcases the implementation of various web development principles, including performance optimization and SEO best practices.

## Features

- Display a list of articles with their images, titles, publication dates, and   summaries.
- Lazy load images for improved initial page load time.
- Implement pagination to limit the number of articles per page.
- CSS variables and grid layout for responsive styling.
- Click on an article to view its full content, including images and subheadings.
- Handling of paid content, by blurring the article and displaying a message for  locked articles.
- Article navigation for easy movement between articles.
- Buttons to go back to start page when needed. 
- Show "related" articles for easy navigation between articles.

## Technologies Used

- **React**: The app is built using React, a popular JavaScript library for building user interfaces. I used the following hooks for this project: useState, useEffect, useNavigate

- **JSON-server**: A RESTFUL mock server with zero coding and a simple setup, making it the perfect tool for a front-end developer to test quickly out the functionalities of their client-facing application. It is typically used for testing front-end code in applications using frameworks such as Angular, React, or Vue that interact with a REST API.

- **Axios**: Axios is a JavaScript library used to make HTTP requests. It is employed in this project to fetch data from the Mock API.

- **Postman**: To make sure the HTTP requests worked, I tested different ones in Postman before adding them to the code base.

- **LightHouse**: Used Lighthouse to make sure the performance, Accessibility, SEO and Best Pratices were up to standard.

  
## Usage

To run the React News App on your local machine, follow these steps:

1. Clone the repository to your local machine using the following command:

```
git clone https://github.com/Cheroptera/article-page.git
```

2. Navigate to the project directory:

```
cd article-page
```

3. Install the required dependencies:

```
npm install
```

4. Install JSON-server

```
npm install -g json-server
```

5. Start the development server:

```
npm start
```

6. Start JSON-server: 

```
json-server --watch db.json ---port 8080
```

7. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the app.

## Contributing

Contributions to this News App are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request in this repository.

## License

This News App is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgements

