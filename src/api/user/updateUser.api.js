import endpoints from "../config";

export default async function updateUser(data) {
  return await (
    await fetch(`${endpoints.USERS}/${data}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
