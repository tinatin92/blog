import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "@/supabase";
import { useAtom } from "jotai";
import { userAtom } from "@/store/auth";

type BlogFormData = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_file: null | File;
};
const FormDataDEfaultValues = {
    title_ka: '',
    title_en: '',
    description_ka: '',
    description_en: '',
    image_file:  null
  };

const Blog: React.FC = () => {
    const [user] = useAtom(userAtom)
  const { control, handleSubmit } = useForm<BlogFormData>({
    defaultValues: FormDataDEfaultValues
  });

  const onSubmit = (formValues: BlogFormData) => {
    if(formValues.image_file){
        supabase.storage.from('blog_images').upload(formValues?.image_file?.name, formValues?.image_file).then(res => {
          
         return  supabase.from('blogs').insert({
            title_ka: formValues.title_ka,
            title_en:formValues.title_en,
            description_ka:formValues.description_ka,
            description_en:formValues.description_en,
            image_url: res.data?.fullPath,
            user_id:user?.user?.id
           })

           
        }).then(res =>{
            console.log('successfully created blog', res)
        })
    }

    console.log("make blog", formValues);
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <h1>Write a new Blog!</h1>
        <div>
          <div>
            <Label htmlFor="title_ka">Title (KA)</Label>
            <Controller
              control={control}
              name="title_ka"
              render={({ field: { onChange, value } }) => {
                return <Input onChange={onChange} value={value} />;
              }}
            />
          </div>

          <div>
            <Label htmlFor="title_en">Title (EN)</Label>
            <Controller
              control={control}
              name="title_en"
              render={({ field: { onChange, value } }) => {
                return <Input onChange={onChange} value={value} />;
              }}
            />
          </div>

          <div>
            <Label htmlFor="description_ka">Description (KA)</Label>
            <Controller
              control={control}
              name="description_ka"
              render={({ field: { onChange, value } }) => {
                return <Input onChange={onChange} value={value} />;
              }}
            />
          </div>

          <div>
            <Label htmlFor="description_en">Description (EN)</Label>
            <Controller
              control={control}
              name="description_en"
              render={({ field: { onChange, value } }) => {
                return <Input onChange={onChange} value={value} />;
              }}
            />
          </div>

          <div>
            <Label htmlFor="image">Image</Label>
            <Controller
              control={control}
              name="image_file"
              render={({ field: { onChange } }) => {
                return (
                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      onChange(file);
                    }}
                    placeholder="File"
                  />
                );
              }}
            />
          </div>

          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
