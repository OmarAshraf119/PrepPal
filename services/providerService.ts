import { supabase } from '../lib/supabase';

export const getProviders = async () => {
  const { data, error } = await supabase
    .from('providers')
    .select('*')
    .order('rating', { ascending: false });

  if (error) {
    console.error("Error fetching providers:", error);
    return [];
  }

  return data;
};
