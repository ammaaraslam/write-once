import { gql } from "@apollo/client";

export const CREATE_ARTICLE_QUERY = gql`
  mutation CreateArticleMutation($article: articles_insert_input!) {
    insert_articles_one(object: $article) {
      id
    }
  }
`;

export const GET_UNIQUE_ARTICLE = gql`
  query GetUniqueArticleQuery($id: uuid!) {
    articles_by_pk(id: $id) {
      id
      content
      coverImage
      createdAt
      isDraft
      isPublished
      publishToDev
      publishToHashnode
      publishToMedium
      title
      updatedAt
    }
  }
`;

export const GET_ALL_ARTICLES = gql`
  query GetAllArticleQuery {
    articles {
      id
      content
      coverImage
      createdAt
      isDraft
      isPublished
      publishToDev
      publishToHashnode
      publishToMedium
      title
      updatedAt
    }
  }
`;

export const DELETE_UNIQUE_ARTICLE = gql`
  mutation DeleteUniqueArticleMutation($id: uuid!) {
    delete_articles(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

// export const GET_UNIQUE_ARTICLE = gql`
// subscription GetUniqueArticleSubscription($articleId) {
//     articles(where: {id: {_eq: $articleId}}) {
//       title
//       publishToMedium
//       publishToHashnode
//       publishToDev
//       isPublished
//       isDraft
//       createdAt
//       coverImage
//       content
//       updatedAt
//       userId
//     }
//   }
//   `;
