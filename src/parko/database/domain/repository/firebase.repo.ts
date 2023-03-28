import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";
import { injectable } from "inversify";

@injectable()
export class FirebaseRepo {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    initializeApp({
      credential: admin.credential.cert(
        JSON.parse(
          Buffer.from(`${process.env.GOOGLE_CREDS}`, "base64").toString("ascii")
        )
      ),
      databaseURL: process.env.DATABASE_URL,
    });
    this.db = getFirestore();
  }

  getDb(): FirebaseFirestore.Firestore {
    return this.db;
  }
}
