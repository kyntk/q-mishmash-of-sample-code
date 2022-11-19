import * as Types from "./types";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type GetViewerQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetViewerQuery = {
  __typename?: "Query";
  viewer: { __typename?: "User"; login: string };
};

export const GetViewerDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetViewer" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "login" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetViewerQuery, GetViewerQueryVariables>;
