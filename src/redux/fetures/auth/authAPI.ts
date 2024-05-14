import { apiSlice } from "../api/apiSlice";

const authAPI = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    /** Login api integration endpoint */
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    /** Signup api integration endpoint */
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authAPI;
