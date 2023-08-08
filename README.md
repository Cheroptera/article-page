# Case Study - Article Page 
## - with focus on Performance and SEO

![](https://github.com/Cheroptera/article-page/blob/master/src/images/Screenshot%202023-08-08%20at%2008.11.03.png)

## Features

- Display a list of articles with their titles, publication dates, and summaries.
- Pagination support for easy navigation through articles.
- Click on an article to view its full content, including images and subheadings.
- Lock content for paid articles, displaying a message to encourage subscription.
- Show related articles for easy navigation between articles.


## Technologies Used

- **React**: The app is built using React, a popular JavaScript library for building user interfaces. React provides a robust foundation for creating interactive and dynamic components.

- **JSON-server**: A RESTFUL mock server with zero coding and a simple setup, making it the perfect tool for a front-end developer to test quickly out the functionalities of their client-facing application. It is typically used for testing front-end code in applications using frameworks such as Angular, React, or Vue that interact with a REST API.

- **Axios**: Axios is a JavaScript library used to make HTTP requests. It is employed in this project to fetch data from the Mock API.

- **React Testing Library**: React Testing Library is used for testing the project. It provides utilities for testing React components and ensures that the app functions as expected.
  
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

