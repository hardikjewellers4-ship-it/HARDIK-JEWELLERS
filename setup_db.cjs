const { Client } = require('pg');
const connectionString = 'postgresql://postgres:Papersoft%405577@db.mysceikgkhvuewohxtzf.supabase.co:5432/postgres';

const client = new Client({ connectionString });

async function run() {
  try {
    await client.connect();
    console.log('Connected to Supabase DB!');

    const sql = `
      CREATE TABLE IF NOT EXISTS hardik_products (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        sub_category TEXT,
        purity TEXT,
        price NUMERIC,
        image_url TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
      );

      INSERT INTO storage.buckets (id, name, public) 
      VALUES ('product-images', 'product-images', true)
      ON CONFLICT (id) DO NOTHING;

      DROP POLICY IF EXISTS "Public Access" ON storage.objects;
      DROP POLICY IF EXISTS "Allow Uploads" ON storage.objects;
      DROP POLICY IF EXISTS "Allow Updates" ON storage.objects;
      DROP POLICY IF EXISTS "Allow Deletes" ON storage.objects;

      CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'product-images');
      CREATE POLICY "Allow Uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'product-images');
      CREATE POLICY "Allow Updates" ON storage.objects FOR UPDATE USING (bucket_id = 'product-images');
      CREATE POLICY "Allow Deletes" ON storage.objects FOR DELETE USING (bucket_id = 'product-images');
    `;

    await client.query(sql);
    console.log('Setup completed successfully!');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

run();
