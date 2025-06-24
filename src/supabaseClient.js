import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xravhtlmfnybadniddmy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYXZodGxtZm55YmFkbmlkZG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3OTc0ODgsImV4cCI6MjA2NTM3MzQ4OH0.jMAdM8DPhPh6DPKc3iz47bjRBE-KXfDihLEcdmbkvUM';
export const supabase = createClient(supabaseUrl, supabaseKey);
