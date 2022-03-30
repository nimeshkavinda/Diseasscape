import endpoints from "../config";

export default async function deletePatient(uid) {
  return await (
    await fetch(`${endpoints.USERS}/${uid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
