# React Overengineering Challenge

Originally this project was a test for an interview I did some time ago. Now I use this repo to pratice, play around and test new libs. Scroll down to `Code Challenge` to read the original description of this test.

## List of overengineered stuff:

- Added a Home (there's two routes in this test, but I wanted to have an initial page)
- Added a navigation drawer (now there's three pages, might as well add a way to navigate properly)
- Changed almost everything to Typescript (since the test gave some JSON schema beforehand, I thought I should use it to create interfaces)
- Added Redux (just to manage the drawer state)
- Added RTK Query (it's pretty cool)

## To do list:

- Some cool CSS effects to the table?
- Finish all unit tests
- Add Cypress
- Add Storybook

# Code Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenge Description

The challenge is to create two different routes inside the application “/table” and “/user” where:

"/table":

- You should be able to create a table and present the data coming from the backend in realtime. Each new data that arrives must be inserted into the table.
- The candidate must create a search input on the same page that will filter this information within the table.

An example that you can use for guidance:

<p>
    <img src="public/wireframe_01.png"  alt="Main"/> 
</p>

"/user":

- The candidate must create a card presenting the information of the connected user into the server.

An example that you can use for guidance:

<p>
    <img src="public/wireframe_02.png"  alt="Profile"/>
</p>

### Must have:

- use this repo as a boilerplate of your project

- Use [Material-ui v5](https://mui.com/) for construct your components.

- [React/hooks](https://reactjs.org/docs/hooks-intro.html)

- On the day of the interview you should have the project running on your local machine for a presentation.

## Additional information

- The backend is already built.
- You can use it as a data source, the client will be connected to the socket in real time.
- You will receive in an interval of 0 and 10 seconds a new response with the financial data and you should use this information to build the table.

JSON schema for market data:

```json
{
  "account_name": "Personal Loan Account",
  "amount": "890.86",
  "credit_card_cvv": "248",
  "credit_card_issuer": "maestro",
  "credit_card_number": "6370-9605-9936-9733",
  "currency_name": "Pataca",
  "transaction_description": "payment transaction at Greenfelder",
  "transaction_type": "withdrawal"
}
```

JSON schema for client connected:

```json
{
  "client_id": "irZP2T8dsRl1kpCnAAAB",
  "first_name": "Otilia",
  "job": "Forward Accounts Strategist",
  "job_descriptor": "Regional"
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run server`

Launches the realtime server for provide data.\
Open [http://localhost:3003](http://localhost:3003) to get json response.

### `npm test`

Launches the test runner in the interactive watch mode.
