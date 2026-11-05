/**
 * Telegram integration boundary.
 * No bot token is stored in this browser application.
 * When a serverless endpoint is configured, set its URL here or inject it
 * through a deployment-time configuration strategy.
 */
const NOTIFICATION_ENDPOINT = "";

async function postNotification(event, payload) {
  if (!NOTIFICATION_ENDPOINT) {
    console.info(`[notification disabled] ${event}`, payload);
    return { delivered: false, reason: "endpoint_not_configured" };
  }
  const response = await fetch(NOTIFICATION_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, payload })
  });
  if (!response.ok) throw new Error("Notification request failed");
  return { delivered: true };
}

export function notifyProposalResponse(payload) {
  return postNotification("proposal_response", payload);
}
export function notifyDateConfirmed(payload) {
  return postNotification("date_confirmed", payload);
}