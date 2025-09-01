import { getCollection } from "@/lib/mongodb";
export async function GET() {
  const col = await getCollection("pings");
  const res = await col.insertOne({ at: new Date(), note: "hello" });
  const count = await col.countDocuments();
  return Response.json({ ok: true, insertedId: res.insertedId, total: count });
}
