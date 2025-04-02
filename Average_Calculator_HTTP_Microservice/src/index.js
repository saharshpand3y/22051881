import express from "express";
import { config } from "./config.js";
import { numberService } from "./services/numberService.js";
const app = express();

app.get("/numbers/:type", async (req, res) => {
  const { type } = req.params;
  if (!["p", "f", "e", "r"].includes(type)) {
    return res.status(400).json({
      error:
        "Invalid number type. Use p (prime), f (fibonacci), e (even), or r (random)",
    });
  }
  try {
    const numbers = await numberService.fetchNumbers(type);
    const result = numberService.updateWindow(numbers);
    res.json(result);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});


app.listen(config.PORT, () =>
  console.log(`Server running on PORT ${config.PORT}`)
);
