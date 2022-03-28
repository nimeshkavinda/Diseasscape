import endpoints from "../config";

export default async function updateUser(uid, data) {
  return await (
    await fetch(`${endpoints.USERS}/${uid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
