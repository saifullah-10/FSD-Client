import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "http://localhost:3000";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (newUser) => ({
        url: "/user-registration",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (userInfo) => ({
        url: `/user-login`,
        method: "POST",
        body: userInfo,
      }),
    }),
    logoutUser: builder.mutation({
      query: (email) => ({
        url: "/user-logout",
        method: "POST",
        body: email,
      }),
    }),
    getUserInfo: builder.query({
      query: (info) => `/user-info?id=${info}`,
    }),
  }),
});

export const {
  usePostUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserInfoQuery,
} = userApi;
// export default userApi;
