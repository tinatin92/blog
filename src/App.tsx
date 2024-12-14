import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import DefaultLayout from "./layouts/default";
import HomePage from "./pages/home/view/home";
import RegistrationPage from "./pages/registration/view/registration";
import LoginPage from "./pages/login/view";
import AboutPage from "./pages/about/view";
import AuthorPage from "./pages/author/view";
import ProfilePage from "./pages/profile/view";
import { supabase } from "./supabase";
import AuthGuard from "./components/route-guards/auth";
import { useAtom } from "jotai";
import { userAtom } from "./store/auth";
import BlogPage from "./pages/write/view";
import BlogView from "./pages/blog/view";



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
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={  <AuthGuard ><RegistrationPage /> </AuthGuard>} />
        <Route path="login" element={ <AuthGuard><LoginPage /> </AuthGuard>} />
        <Route path="about" element={<AboutPage />} />
        <Route path="write" element={<BlogPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="blogs" element={<BlogView />} />
        <Route path="author/:1d" element={<AuthorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
