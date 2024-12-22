
import { useEffect } from "react";

import { supabase } from "./supabase";

import { useAtom } from "jotai";
import { userAtom } from "./store/auth";
import AppRoutes from "./routes";




function App() {
/*   const [, setSession] = useState<any>(null) */
  const [, setUser] = useAtom(userAtom)
 
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("sessionddd" , session)
      setUser(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session)
    })

    return () => subscription.unsubscribe()
  }, [setUser])




  return (
     <>
     <AppRoutes />
     </>
  );
}

export default App;
