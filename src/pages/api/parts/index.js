// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import main, { Client } from "@/api/db"

export default async function handler(req, res) {
  
await main()
const partsCollection = Client.db("pc-compilers").collection('parts')

const query = {
  ...(req.query.category? {category:req.query.category}:{})
} 
  const result = await partsCollection.find(query).toArray()
  res.status(200).json({ result })
}
