const express = require("express");
const socket = require("socket.io");
const { faker } = require("@faker-js/faker");

const app = express();

app.use(express());

app.get("/", (req, res) => {
  res.json({ server_active: true });
});

const port = 3003;

const server = app.listen(port, () =>
  console.log(`Server Connected on port ${port}`)
);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const recursiveInterval = (skt = null, intervalTime = 5000) => {
  setInterval(() => {
    skt.emit("market-data", {
      account_name: faker.finance.accountName(),
      transaction_type: faker.finance.transactionType(),
      transaction_description: faker.finance.transactionDescription(),
      credit_card_number: faker.finance.creditCardNumber(),
      credit_card_issuer: faker.finance.creditCardIssuer(),
      credit_card_cvv: faker.finance.creditCardCVV(),
      amount: faker.finance.amount(),
      currency_name: faker.finance.currencyName(),
    });
  }, intervalTime);
};

io.on("connection", (skt) => {
  const client = {
    client_id: skt.id,
    first_name: faker.name.firstName(),
    job: faker.name.jobTitle(),
    job_descriptor: faker.name.jobDescriptor(),
  };

  console.info("Client connected: ", client);

  skt.emit("client-connected", client);

  recursiveInterval(skt);
});
