import * as Types from "./types";

export type GetViewerQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetViewerQuery = {
  __typename?: "Query";
  viewer: { __typename?: "User"; login: string };
};
