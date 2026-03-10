import { init } from "@instantdb/react";

const APP_ID = process.env.NEXT_PUBLIC_INSTANTDB_APP_ID!;

const db = init({ appId: APP_ID });

export default db;
