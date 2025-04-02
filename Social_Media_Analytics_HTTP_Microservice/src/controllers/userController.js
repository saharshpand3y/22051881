import { userService } from "../services/userService.js";

class UserController {
  async getTopUsers(req, res) {
    try {
      const topUsers = await userService.getTopUsers();
      res.json(topUsers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch top users" });
    }
  }
}

export const userController = new UserController();
