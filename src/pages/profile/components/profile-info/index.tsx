import React from "react";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FilledProfileInfoPayload } from "@/supabase/account/index.types";
import { useMutation } from "@tanstack/react-query";
import { fillProfileInfo } from "@/supabase/account/index";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";

const Profile: React.FC = () => {
  const [user] = useAtom(userAtom)

  const [profilePayload, setProfilePayload] =
    useState<FilledProfileInfoPayload>({
      full_name_en: "",
      full_name_ka: "",
      avatar_url: "",
      phone: "",
      username: "",
    
    });

  const { mutate: handleFillProfile } = useMutation({
    mutationKey: ["profile"],
    mutationFn: fillProfileInfo,
  });

  const handleSubmit = () =>{
    console.log(profilePayload)
    handleFillProfile({...profilePayload, id:user.user.id})
  };

  return (
    <Container>
      <div>
        <div>
          <Label htmlFor="nameka">Name ka</Label>
          <Input
            name="nameka"
            id="nameka"
            value={profilePayload.full_name_ka}
            onChange={(e) => {
              setProfilePayload({
                full_name_en: profilePayload.full_name_en,
                full_name_ka: e.target.value,
                avatar_url: profilePayload.avatar_url,
                phone:profilePayload.phone,
                username: profilePayload.username 
              });
            }}
          />
        </div>
        <div>
          <Label htmlFor="nameen">Name en</Label>
          <Input 
           name="nameen"
           id="nameen"
           value={profilePayload.full_name_en}
           onChange={(e) => {
             setProfilePayload({
               full_name_en: e.target.value,
               full_name_ka: profilePayload.full_name_ka,
               avatar_url: profilePayload.avatar_url,
               phone:profilePayload.phone,
               username: profilePayload.username 
             });
           }} />
        </div>
    
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            name="username"
            id="username"
            value={profilePayload.username}
            onChange={(e) => {
              setProfilePayload({
                full_name_en: profilePayload.full_name_en,
                full_name_ka: profilePayload.full_name_ka,
                avatar_url: profilePayload.avatar_url,
                phone:profilePayload.phone,
                username: e.target.value
              });
            }}
          />
        </div>


        <div>
          <Label htmlFor="avatar">avatar</Label>
          <Input name="avatar"
            id="avatar"
            value={profilePayload.avatar_url}
            onChange={(e) => {
              setProfilePayload({
                full_name_en: profilePayload.full_name_en,
                full_name_ka: profilePayload.full_name_ka,
                avatar_url: e.target.value,
                phone:profilePayload.phone,
                username: profilePayload.username
              });
            }} />
        </div>
        <div>
          <Label htmlFor="phone">phone</Label>
          <Input name="phone"
            id="phone"
            value={profilePayload.phone}
            onChange={(e) => {
              setProfilePayload({
                full_name_en: profilePayload.full_name_en,
                full_name_ka: profilePayload.full_name_ka,
                avatar_url: profilePayload.avatar_url,
                phone: e.target.value,
                username: profilePayload.username
              });
            }} />
        </div>
        <Button onClick={handleSubmit}>Send</Button>
      </div>
    </Container>
  );
};

export default Profile;
