// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import main, { Client } from "@/api/db"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
  
await main()
const partsCollection = Client.db("pc-compilers").collection('parts')
  const result = await partsCollection.findOne({_id: new ObjectId(req.query.id)})
  res.status(200).json({ result })
}
