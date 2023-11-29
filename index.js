import { createRestAPIClient } from "masto";
import got from "got";

function getJoke(apiUrl){
  got.get(apiUrl, { responseType: 'json' })
    .then(response => {
      // If the request is successful, parse the response body as a JSON object
      const data = response.body;
      // console.log("Data Response,",data);
      post(data.joke);
    })
    .catch(error => {
      // If the request fails, print out the error message
      console.error(error.message);
  });
}

async function post(myJoke){
  const newStatus = myJoke + " #dadjoke"
  console.log("Post Joke,",myJoke);
  const masto = createRestAPIClient({
    url: process.env.URL,
    accessToken: process.env.TOKEN,
  });
  const status = await masto.v1.statuses.create({
    status: newStatus,
    visibility: "public",
  });
  console.log(status.url);
}

getJoke("https://icanhazdadjoke.com/");
