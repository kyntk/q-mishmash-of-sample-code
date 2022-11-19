import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;

export const GetViewerDocument = gql`
  query GetViewer {
    viewer {
      login
    }
  }
`;

/**
 * __useGetViewerQuery__
 *
 * To run a query within a React component, call `useGetViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetViewerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetViewerQuery,
    Types.GetViewerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetViewerQuery, Types.GetViewerQueryVariables>(
    GetViewerDocument,
    options
  );
}
export function useGetViewerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetViewerQuery,
    Types.GetViewerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.GetViewerQuery,
    Types.GetViewerQueryVariables
  >(GetViewerDocument, options);
}
export type GetViewerQueryHookResult = ReturnType<typeof useGetViewerQuery>;
export type GetViewerLazyQueryHookResult = ReturnType<
  typeof useGetViewerLazyQuery
>;
export type GetViewerQueryResult = Apollo.QueryResult<
  Types.GetViewerQuery,
  Types.GetViewerQueryVariables
>;
