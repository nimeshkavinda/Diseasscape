import endpoints from "../config";

export default async function createUserApi(data) {
  return await (
    await fetch(endpoints.USERS, {
      method: "POST",
      body: JSON.stringify(data),
    })
  ).json();
}
