import app from "./server";
import "./db";

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`✅ Ready to listen on port http://localhost:${PORT}`)
);
