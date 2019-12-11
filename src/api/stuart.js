import httpClient from "./http-client";

export const geocode = (address) => {
  return httpClient.post('/geocode', { address });
}
