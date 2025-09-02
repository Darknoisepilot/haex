import { getCollection } from '@/lib/mongodb';
export async function GET() {
  const col = await getCollection('pings');
  const docs = await col.find().sort({ at: -1 }).limit(10).toArray();
  return Response.json({ ok: true, docs });
}
