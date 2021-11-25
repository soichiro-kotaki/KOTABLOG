import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "kayatsu-seminar",
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});
