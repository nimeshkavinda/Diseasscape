import endpoints from "../config";

export default async function getEvents() {
  return await (
    await fetch(`${endpoints.EVENTS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
