import { gql } from "@apollo/client";

export const GET_TOKENS_WITH_USERID = gql`
  query MyQuery($userId: uuid!) {
    user_tokens(where: { userId: { _eq: $userId } }) {
      id
      userId
      hashnodeToken
      devToken
      hashnodePublicationId
    }
  }
`;

export const CREATE_USER_TOKENS = gql`
  mutation CreateUserHashnodeToken(
    $hashnode: String
    $dev: String
    $hashnodePublication: String
  ) {
    insert_user_tokens(
      objects: {
        hashnodeToken: $hashnode
        devToken: $dev
        hashnodePublicationId: $hashnodePublication
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_USER_TOKENS = gql`
  mutation MyMutation(
    $id: uuid!
    $hashnode: String
    $dev: String
    $hashnodePublication: String
  ) {
    update_user_tokens(
      where: { id: { _eq: $id } }
      _set: {
        hashnodeToken: $hashnode
        devToken: $dev
        hashnodePublicationId: $hashnodePublication
      }
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
