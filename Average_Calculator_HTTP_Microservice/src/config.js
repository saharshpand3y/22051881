// import axios from "axios";

// const authData = {
//   email: "mail@saharshpandey.com",
//   name: "saharsh pandey",
//   rollNo: "22051881",
//   accessCode: "nwpwrZ",
//   clientID: "9b1baf74-b80f-4b6d-92d4-731acaf3ff81",
//   clientSecret: "JpbtTKAtjrNvBjtp",
// };

// const getAuthToken = async () => {
//   try {
//     const response = await axios({
//       method: "post",
//       url: "http://20.244.56.144/evaluation-service/auth",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: authData,
//     });

//     console.log("Auth successful:", response.data);
//     console.log(response.data.access_token);
//     return response.data.access_token;
//   } catch (error) {
//     console.error("Authentication failed:", error.message);
//     if (error.response) {
//       console.error("Error details:", error.response.data);
//     }
//     throw error;
//   }
// };

// const authToken = getAuthToken();

const config = {
  PORT: 9876,
  WINDOW_SIZE: 10,
  BASE_API_URL: "http://20.244.56.144/evaluation-service",
  REQUEST_TIMEOUT: 500,
  AUTH_TOKEN:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAyNDc3LCJpYXQiOjE3NDM2MDIxNzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjliMWJhZjc0LWI4MGYtNGI2ZC05MmQ0LTczMWFjYWYzZmY4MSIsInN1YiI6Im1haWxAc2FoYXJzaHBhbmRleS5jb20ifSwiZW1haWwiOiJtYWlsQHNhaGFyc2hwYW5kZXkuY29tIiwibmFtZSI6InNhaGFyc2ggcGFuZGV5Iiwicm9sbE5vIjoiMjIwNTE4ODEiLCJhY2Nlc3NDb2RlIjoibndwd3JaIiwiY2xpZW50SUQiOiI5YjFiYWY3NC1iODBmLTRiNmQtOTJkNC03MzFhY2FmM2ZmODEiLCJjbGllbnRTZWNyZXQiOiJKcGJ0VEtBdGpyTnZCanRwIn0.OdzaWvHtbkYoO38wJsp1DW-3dCRonuhR7p4MUqgx2PY",
};

export { config };
