import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eipcrfrjvmopqbxutboz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpcGNyZnJqdm1vcHFieHV0Ym96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMzQ0MDIsImV4cCI6MjAyNjYxMDQwMn0.fjxsWiq-VPygUB93cA28bH2p8n7Md9irGmqWBs-NUD0";

export const supabase = createClient(supabaseUrl, supabaseKey);
