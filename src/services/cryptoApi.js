import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "bb6c07dc8fmsh7465d44dffc145dp173271jsn6bec94d5e9dd",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`/coin/${coinId}/history/${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/stats',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': 'bb6c07dc8fmsh7465d44dffc145dp173271jsn6bec94d5e9dd'
//   }
// };
// const options = {
//   method: 'GET',
//   url: 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd',
//   headers: {
//     'x-access-token': 'your-api-key'
//   }
// };
