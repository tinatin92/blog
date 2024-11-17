import { httpClient } from "@/api"


export const getBlogItem = () =>{
    return httpClient.get("/blog").then((res) => res.data)
}