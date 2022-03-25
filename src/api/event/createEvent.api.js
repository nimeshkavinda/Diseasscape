import endpoints from "../config";

export default async function createEvent(data) {
  return await (
    await fetch(endpoints.EVENTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
