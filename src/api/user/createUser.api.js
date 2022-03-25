import endpoints from "../config";

export default async function createUserApi(data) {
  return await (
    await fetch(endpoints.USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
