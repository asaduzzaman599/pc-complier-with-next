// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import main, { Client } from "@/api/db"

export default async function handler(req, res) {
  
await main()
const partsCollection = Client.db("pc-compilers").collection('parts')
  const result = await partsCollection.find().toArray()
  res.status(200).json({ result })
}
