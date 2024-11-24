import React from "react";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FilledProfileInfoPayload } from "@/supabase/account/index.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account/index";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";

import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";

const Profile: React.FC = () => {
  const [user] = useAtom(userAtom);

  const [profilePayload, setProfilePayload] =
    useState<FilledProfileInfoPayload>({
      full_name_en: "",
      full_name_ka: "",
      avatar_url: "",
      phone: "",
      username: "",
      id: "",
    });

  const {
    data: profileData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: () => getProfileInfo(user?.user.id),
  });

  const { mutate: handleFillProfile } = useMutation({
    mutationKey: ["profile"],
    mutationFn: fillProfileInfo,
  });

  const handleSubmit = () => {
    const avatar = createAvatar(avataaars, {
      seed: "Felix",
    });
    const svg = avatar.toString();

    const payload = { ...profilePayload, avatar_url: svg, id: user?.user.id };

    console.log("Payload to be sent:", payload);

    handleFillProfile(payload);
  };

  console.log(profileData);

  {
    isLoading && <div>Loading...</div>;
  }
  {
    error && <div>Sorry, Data cant be fetched!</div>;
  }
  return (
    <Container>
      <div className="flex flex-col w-full ">
        <div className="my-12">
          <div className="w-full bg-cyan-100 rounded p-8">
            {profileData ? (
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rou">
                {/* <div dangerouslySetInnerHTML={{ __html: svg }} /> */}

                </div>
                <div className="flex gap-3">
                  <div className="font-semibold text-sm color text-gray-800">
                    Name in Georgian:
                  </div>
                  <div>{profileData.full_name_ka}</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-semibold text-sm text-gray-800">
                    Name in English:
                  </div>
                  <div>{profileData.full_name_en}</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-semibold text-sm text-gray-800">
                    UserName:
                  </div>
                  <div>{profileData.username}</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-semibold text-sm text-gray-800">
                    Phone Number:
                  </div>
                  <div>{profileData.phone}</div>
                </div>
              </div>
            ) : (
              <p>null</p>
            )}
          </div>
        </div>

        <div className="w-1/3 m-auto">
          <div>
            <Label htmlFor="nameka">Name ka</Label>
            <Input
              name="nameka"
              id="nameka"
              value={profilePayload.full_name_ka}
              onChange={(e) =>
                setProfilePayload((prev) => ({
                  ...prev,
                  full_name_ka: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <Label htmlFor="nameen">Name en</Label>
            <Input
              name="nameen"
              id="nameen"
              value={profilePayload.full_name_en}
              onChange={(e) =>
                setProfilePayload((prev) => ({
                  ...prev,
                  full_name_en: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              name="username"
              id="username"
              value={profilePayload.username}
              onChange={(e) =>
                setProfilePayload((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />
          </div>

          {/*     <div>
            <Label htmlFor="avatar">avatar</Label>
            <Input
              name="avatar"
              id="avatar"
              value={profilePayload.avatar_url}
              onChange={(e) =>
                setProfilePayload((prev) => ({ ...prev, avatar_url: e.target.value }))
              }
            />
          </div> */}
          <div>
            <Label htmlFor="phone">phone</Label>
            <Input
              name="phone"
              id="phone"
              value={profilePayload.phone}
              onChange={(e) =>
                setProfilePayload((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
          </div>
          <Button className="mt-4 w-full" onClick={handleSubmit}>Send</Button>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
