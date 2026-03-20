import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface EstimateSubmission {
  name: string;
  phone: string;
  email: string;
  service?: string;
  comments?: string;
  source_page?: string;
}

export async function submitEstimate(data: EstimateSubmission) {
  const { error } = await supabase
    .from("estimate_submissions")
    .insert([data]);
  if (error) throw error;
}
