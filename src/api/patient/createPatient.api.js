import endpoints from "../config";

export default async function createPatient(uid, data) {
  return await (
    await fetch(`${endpoints.PATIENTS}/${uid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
