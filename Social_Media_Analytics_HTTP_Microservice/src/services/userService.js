import { apiClient } from "../utils/apiClient.js";

class UserService {
  #userCache = new Map();
  #cacheTimeout = 60000;

  async getTopUsers() {
    try {
      if (this.#userCache.has("topUsers")) {
        const cached = this.#userCache.get("topUsers");
        if (Date.now() - cached.timestamp < this.#cacheTimeout) {
          return cached.data;
        }
      }

      const response = await apiClient.get("/users");
      const users = response.data.users;
      const userStats = await Promise.all(
        Object.entries(users).map(async ([id, name]) => {
          try {
            const posts = await apiClient.get(`/users/${id}/posts`);
            return {
              id,
              name,
              postCount: posts.data.posts?.length || 0,
            };
          } catch (error) {
            console.error(`Error fetching posts for user ${id}:`, error);
            return {
              id,
              name,
              postCount: 0,
            };
          }
        })
      );
      const topUsers = userStats
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 5);
      this.#userCache.set("topUsers", {
        timestamp: Date.now(),
        data: topUsers,
      });

      return topUsers;
    } catch (error) {
      console.error("Error fetching top users:", error);
      throw new Error("Failed to fetch top users");
    }
  }
}

export const userService = new UserService();
