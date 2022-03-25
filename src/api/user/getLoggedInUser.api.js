import endpoints from "../config";

export default async function getLoggedInUser(data) {
  return await (
    await fetch(`${endpoints.USERS}/${data}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
