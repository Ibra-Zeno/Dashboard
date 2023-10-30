import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // For development, you might need to set rejectUnauthorized to false. For production, you should have a valid SSL certificate and set this to true.
});

export async function getData() {
  const client = await pool.connect();
  try {
    const response = await client.query("SELECT version()");
    console.log(response.rows[0]);
    return response.rows[0];
  } finally {
    client.release();
  }
}
