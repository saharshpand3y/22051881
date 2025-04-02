import axios from 'axios';
import {config} from '../config.js'

let windowState = [];

const numberService = {
  async fetchNumbers(type) {
    try {
      const response = await axios({
        method: "get",
        url: `${config.BASE_API_URL}/${getEndpoint(type)}`,
        timeout: config.REQUEST_TIMEOUT,
        headers: {
          Authorization: `Bearer ${config.AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      return response.data.numbers;
    } catch (error) {
      console.error(`Error fetching ${type} numbers:`, error.message);
      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
      }
      return [];
    }
  },

  updateWindow(numbers) {
    const prevState = [...windowState];
    for (const num of numbers) {
      if (!windowState.includes(num)) {
        if (windowState.length >= config.WINDOW_SIZE) {
          windowState.shift();
        }
        windowState.push(num);
      }
    }
    return {
      windowPrevState: prevState,
      windowCurrState: [...windowState],
      numbers: numbers,
      avg: calculateAverage(windowState),
    };
  },
};

function getEndpoint(type) {
  const endpoints = {
    p: "primes",
    f: "fibo",
    e: "even",
    r: "rand",
  };
  return endpoints[type] || "";
}

function calculateAverage(numbers) {
  if (!numbers.length) return 0;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return Number((sum / numbers.length).toFixed(2));
}

export { numberService };
