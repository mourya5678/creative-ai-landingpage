import { headers } from "next/headers";
import { API_URL } from "@/config";

export const getPlans = async (billingInterval) => {
  let currency = "USD";
  try {
    const headersList = await headers();
    const host = headersList.get("host") || "";
    let country = headersList.get("x-country") || 
                  headersList.get("x-vercel-ip-country") || 
                  headersList.get("cf-ipcountry") || 
                  headersList.get("x-appengine-country") || 
                  "";
    if (!country && (host.includes("localhost") || host.includes("127.0.0.1"))) {
      country = "IN";
    }
    if (country && country.toUpperCase() === "IN") {
      currency = "INR";
    }
  } catch (e) {
    console.error("Error getting country from headers:", e);
  }

  try {
    const fetchUrl = `${API_URL}/api/user/getAllPlans?billing_interval=${billingInterval}&currency=${currency}`;
    console.log("Fetching plans from URL:", fetchUrl);
    const res = await fetch(
      fetchUrl,
      { 
        cache: "no-store"
      }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error("Error fetching plans:", error);
    return null;
  }
};
