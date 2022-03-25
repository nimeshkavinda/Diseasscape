import endpoints from "../config";

export default async function getPosts() {
  return await (
    await fetch(`${endpoints.POSTS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
