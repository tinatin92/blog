import { supabase } from ".."

import { FilledProfileInfoPayload } from "./index.types"

export const fillProfileInfo  = (payload:FilledProfileInfoPayload) =>{
    return supabase.from('profiles').upsert(payload as any).throwOnError()
}