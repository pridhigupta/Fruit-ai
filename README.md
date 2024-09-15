
# Fruit AI

Fruit AI is a web application designed to provide information about fruits and support various interactive features including FAQs, a chatbot, and translation services. The project is built using Flask for the backend and React for the frontend.

## Features

- **FAQs**: Retrieve, create, update, and delete fruit-related FAQs.
- **Chatbot**: Interactive chatbot that responds to fruit-related queries.
- **Translation**: Translate text between different languages.
- **Frontend**: User-friendly interface with React for interacting with the backend services.

## Technologies Used

- **Backend**: Flask, Flask-CORS, Google Translate API
- **Frontend**: React
- **Styling**: CSS
- **Deployment**: Heroku (planned)

## Installation

To set up the project locally, follow these steps:

### Backend (Flask)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/pridhigupta/Fruit-ai.git
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd Fruit-ai/backend
   ```

3. **Create a Virtual Environment**

   ```bash
   python -m venv venv
   ```

4. **Activate the Virtual Environment**

   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

   - On macOS/Linux:

     ```bash
     source venv/bin/activate
     ```

5. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

6. **Run the Flask Application**

   ```bash
   python app.py
   ```

   The backend will be available at `http://localhost:5000`.

### Frontend (React)

1. **Navigate to the Frontend Directory**

   ```bash
   cd Fruit-ai/frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the React Application**

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

## API Endpoints

- **GET `/faqs`**: Retrieve all FAQs.
- **GET `/faqs/<id>`**: Retrieve a specific FAQ by ID.
- **POST `/faqs`**: Create a new FAQ.
- **PUT `/faqs/<id>`**: Update an existing FAQ by ID.
- **DELETE `/faqs/<id>`**: Delete an FAQ by ID.
- **POST `/chat`**: Send a message to the chatbot and receive a response.
- **POST `/translate`**: Translate text between languages.

## Usage

1. **FAQs**: Use the `/faqs` endpoints to manage FAQ entries.
2. **Chatbot**: Interact with the chatbot at `/chat` by sending POST requests with a message.
3. **Translation**: Translate text using the `/translate` endpoint by sending POST requests with the text and language parameters.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [Pridhi Gupta](mailto:pridhi@example.com).

---

Happy fruit exploring!
```

You can customize it further based on any additional details or changes to the project.Based on the code you provided, here's an updated README file for your Fruit AI project. This README file covers both the backend Flask application and the React frontend:

```markdown
# Fruit AI

Fruit AI is a web application designed to provide information about fruits and support various interactive features including FAQs, a chatbot, and translation services. The project is built using Flask for the backend and React for the frontend.

## Features

- **FAQs**: Retrieve, create, update, and delete fruit-related FAQs.
- **Chatbot**: Interactive chatbot that responds to fruit-related queries.
- **Translation**: Translate text between different languages.
- **Frontend**: User-friendly interface with React for interacting with the backend services.

## Technologies Used

- **Backend**: Flask, Flask-CORS, Google Translate API
- **Frontend**: React
- **Styling**: CSS
- **Deployment**: Heroku (planned)

## Installation

To set up the project locally, follow these steps:

### Backend (Flask)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/pridhigupta/Fruit-ai.git
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd Fruit-ai/backend
   ```

3. **Create a Virtual Environment**

   ```bash
   python -m venv venv
   ```

4. **Activate the Virtual Environment**

   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

   - On macOS/Linux:

     ```bash
     source venv/bin/activate
     ```

5. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

6. **Run the Flask Application**

   ```bash
   python app.py
   ```

   The backend will be available at `http://localhost:5000`.

### Frontend (React)

1. **Navigate to the Frontend Directory**

   ```bash
   cd Fruit-ai/frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the React Application**

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

## API Endpoints

- **GET `/faqs`**: Retrieve all FAQs.
- **GET `/faqs/<id>`**: Retrieve a specific FAQ by ID.
- **POST `/faqs`**: Create a new FAQ.
- **PUT `/faqs/<id>`**: Update an existing FAQ by ID.
- **DELETE `/faqs/<id>`**: Delete an FAQ by ID.
- **POST `/chat`**: Send a message to the chatbot and receive a response.
- **POST `/translate`**: Translate text between languages.

## Usage

1. **FAQs**: Use the `/faqs` endpoints to manage FAQ entries.
2. **Chatbot**: Interact with the chatbot at `/chat` by sending POST requests with a message.
3. **Translation**: Translate text using the `/translate` endpoint by sending POST requests with the text and language parameters.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [Pridhi Gupta](mailto:pridhi@example.com).


Happy fruit exploring!
