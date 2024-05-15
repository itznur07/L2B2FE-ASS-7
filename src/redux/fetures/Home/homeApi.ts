import { apiSlice } from "../api/apiSlice";

const HomeApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    /** relif good data integration endpoint */
    getReliefGoods: builder.query({
      query: () => ({
        url: "/reliefGoods",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetReliefGoodsQuery } = HomeApi;
