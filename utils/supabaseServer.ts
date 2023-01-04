import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rflvrvttnadtrivgwafs.supabase.co';
const supabaseAdminKey = process.env.SUPABASE_ADMIN_KEY;
export const supabase = createClient(supabaseUrl, supabaseAdminKey as any);
