import axios from "axios";
import https from "https";
const apiUrl = import.meta.env.KIRBY_URL;
const apiUser = import.meta.env.KIRBY_USERNAME;
const apiPassword = import.meta.env.KIRBY_PASSWORD;
const isLocal = import.meta.env.NODE_ENV === "development";
const apiEndpoint = `${apiUrl}/api/query`;
const agent = new https.Agent({
  rejectUnauthorized: false,
});
const useCustomAgent = isLocal ? { httpsAgent: agent } : {};
export const loadFromCMS = async (query: object) => {
  // console.log("running query:");
  // console.log(query);
  // console.log("endpoint is " + apiEndpoint);

  try {
    const response = await axios.post(apiEndpoint, query, {
      auth: {
        username: apiUser,
        password: apiPassword,
      },
      ...useCustomAgent,
    });
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    } else {
      return response.data.result;
    }
  } catch (error: any) {
    throw new Error("Failed to load data from CMS: " + error.message);
  }
};
