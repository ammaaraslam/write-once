import { useReactiveVar } from "@apollo/client";

async function publishToHashnode({
  userAccessToken,
  publicationId,
  title,
  content,
}) {
  let requestBody = {
    query: `mutation CreatePublicationStory {
            createPublicationStory(publicationId: "62747a028af49c436c4402e9", input: { title: "${title}", contentMarkdown: "${content}", tags: [] }) {
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
