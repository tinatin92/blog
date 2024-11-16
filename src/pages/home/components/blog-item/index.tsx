import {Button} from '@/components/ui/button'

const BlogItem: React.FC =() => {


     const handletheme = () =>{
       const html = document.querySelector("html")
       html?.classList.toggle("dark")
     }
   


    return <div className="m-20">
        <Button onClick={handletheme}>Toggle theme</Button>
        <div className="w-160  bg-green rounded-lg"></div>
    </div>
}

export default BlogItem