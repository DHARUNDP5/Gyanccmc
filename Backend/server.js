import express from "express";

import bodyParser from "body-parser";
import cors from "cors";

const PORT=3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
