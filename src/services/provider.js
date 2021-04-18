import * as config from "./config";
import * as axios from "axios";

class Provider {

  getArticles(query, limit = 4) {
    const url = config.API_PATH + 
                config.LIST_OF_ARTICLES + 
                query + 
                config.LIMIT +
                limit;

    return axios.get(url)
  } 
}

const provider = new Provider();
export { provider };