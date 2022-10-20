import { gql } from "@apollo/client";

export const CREATE_ARTICLE_QUERY = gql`
  mutation CreateArticleMutation($article: articles_insert_input!) {
    insert_articles_one(object: $article) {
      id
    }
  }
`;

export const GET_UNIQUE_ARTICLE = gql`
  query MyQuery($id: uuid!) {
    articles(where: { id: { _eq: $id } }) {
      title
      isPublished
      isDraft
      publishToDev
      publishToHashnode
      publishToMedium
      content
      coverImage
      createdAt
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

export const UPDATE_UNIQUE_ARTICLE_CONTENT = gql`
  mutation UpdateUniqueArticleMutation(
    $id: uuid!
    $content: String!
    $title: String!
  ) {
    update_articles_by_pk(
      pk_columns: { id: $id }
      _set: { content: $content, coverImage: "", title: $title }
    ) {
      id
    }
  }
`;

export const UPDATE_UNIQUE_ARTICLE_COVER_IMAGE = gql`
  mutation MyMutation($id: uuid!, $coverImageLink: String!) {
    update_articles_by_pk(
      pk_columns: { id: $id }
      _set: { coverImage: $coverImageLink }
    ) {
      id
    }
  }
`;
