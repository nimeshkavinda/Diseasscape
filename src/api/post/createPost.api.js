import endpoints from "../config";

export default async function createPost(data) {
  return await (
    await fetch(endpoints.POSTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
