import app from "./app";

const PORT = process.env.PORT || 4000;

const handleListeing = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
