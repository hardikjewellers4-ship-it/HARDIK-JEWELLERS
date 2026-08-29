import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oxvoolcroplivsoocuum.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dm9vbGNyb3BsaXZzb29jdXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTQ0MzMsImV4cCI6MjEwMzE5MDQzM30.HT37vbhsjLYLsf1cCGWY5rlaTP5P9laj19jJ4qwoq5U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
