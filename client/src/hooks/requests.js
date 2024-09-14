const API_URL = "http://localhost:8000";

async function httpsGetFood() {
  try {
    const response = await fetch(`${API_URL}/getfood`);
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }

  //to:do-add fetch get food api
}
