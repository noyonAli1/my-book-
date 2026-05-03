import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db("mybook");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    
    client
  }),
  emailAndPassword:{
    enabled:true
  },
  socialProviders:{
    google:{
      clientId: process.env.GOOGLE_CLIEND_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET
    }
  }
});
