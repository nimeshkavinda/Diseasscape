import endpoints from "../config";

export default async function updateEvent(id, data) {
  return await (
    await fetch(`${endpoints.EVENTS}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
