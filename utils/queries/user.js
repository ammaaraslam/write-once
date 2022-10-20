import { gql } from "@apollo/client";

export const GET_TOKENS_WITH_USERID = gql`
  query MyQuery($userId: uuid!) {
    user_tokens(where: { userId: { _eq: $userId } }) {
      id
      userId
      hashnodeToken
      devToken
    }
  }
`;

export const CREATE_USER_HASHNODE_TOKEN = gql`
  mutation CreateUserHashnodeToken($token: String!) {
    insert_user_tokens(objects: { hashnodeToken: $token, devToken: "" }) {
      affected_rows
    }
  }
`;

// export const CREATE_USER_DEV_TOKEN = gql`
//   mutation CreateUserDevToken($token: String!) {
//     insert_user_tokens(objects: { devToken: $token, hashnodeNode) {
//       affected_rows
//     }
//   }
// `;

export const UPDATE_USER_HASHNODE_TOKEN = gql`
  mutation MyMutation {
    update_user_tokens(
      where: { id: { _eq: "43a3d512-124b-4a1f-a11e-e41f9f822065" } }
      _set: { hashnodeToken: "abcd" }
    ) {
      affected_rows
    }
  }
`;

// export const UPDATE_USER_DEV_TOKEN = gql`
//   mutation UpdateUserDevToken($token: String!, $userId: uuid!) {
//     insert_user_tokens(objects: { devToken: $token) {
//       affected_rows
//     }
//   }
// `;
