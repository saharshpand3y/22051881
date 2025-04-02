import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://20.244.56.144/evaluation-service",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjA2NDE5LCJpYXQiOjE3NDM2MDYxMTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjliMWJhZjc0LWI4MGYtNGI2ZC05MmQ0LTczMWFjYWYzZmY4MSIsInN1YiI6Im1haWxAc2FoYXJzaHBhbmRleS5jb20ifSwiZW1haWwiOiJtYWlsQHNhaGFyc2hwYW5kZXkuY29tIiwibmFtZSI6InNhaGFyc2ggcGFuZGV5Iiwicm9sbE5vIjoiMjIwNTE4ODEiLCJhY2Nlc3NDb2RlIjoibndwd3JaIiwiY2xpZW50SUQiOiI5YjFiYWY3NC1iODBmLTRiNmQtOTJkNC03MzFhY2FmM2ZmODEiLCJjbGllbnRTZWNyZXQiOiJKcGJ0VEtBdGpyTnZCanRwIn0.aosrGCOLZl0sVir-XR0ras373Dt6EyDyPHfpOH5mwB8`,
  },
});
