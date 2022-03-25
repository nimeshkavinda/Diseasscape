import endpoints from "../config";

export default async function getPatients() {
  return await (
    await fetch(`${endpoints.PATIENTS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
