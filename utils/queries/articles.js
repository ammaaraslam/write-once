import { gql } from "@apollo/client";

export const CREATE_ARTICLE_QUERY = gql`
  mutation CreateArticleMutation($article: articles_insert_input!) {
    insert_articles_one(object: $article) {
      id
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
