import { useReactiveVar } from "@apollo/client";

async function publishToHashnode({
  userAccessToken,
  publicationId,
  title,
  content,
  coverImage,
}) {
  let requestBody = {
    query: `mutation CreatePublicationStory {
            createPublicationStory(publicationId: "${publicationId}", input: { title: "${title}", contentMarkdown: """${content}""", coverImageURL: "${coverImage}" tags: [] }) {
                code,
                success,
                message
            }
        }`,
  };
  console.log(userAccessToken, publicationId, title, content);
  let response = await fetch("https://api.hashnode.com", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${userAccessToken}`,
    },
  });

  let responseBody = await response.json();

  if (responseBody.errors && responseBody.errors.length > 0)
    throw Error(responseBody.errors.map((e) => e.message).join(", "));

  return responseBody.data;
}

export default publishToHashnode;
