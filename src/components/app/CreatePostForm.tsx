"use client";

import { createBrowserClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import MapPreview from "./MapPreview";

export default function handleCreation() {
  const supabase = createBrowserClient();

  const w = window.innerWidth;
  const h = window.innerHeight;
  const size = Math.floor(Math.min(w, h) / 20);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dataCode, setDataCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleCreation(e: { preventDefault: () => void }) {
    e.preventDefault();
    try {
      let result = await supabase.from("post").insert([
        {
          title,
          description,
          data: dataCode,
          author: (await supabase.auth.getUser()).data.user?.id,
          likes: 0,
        },
      ]);
      if (result) {
        // router.push(`/map/${result}`);
        router.push("/browse");
        router.refresh();
      } else if (error) {
        console.error(error);
        setError("An error occurred while creating the post");
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred during post creation");
    }
  }

  return (
    <div className="flex justify-evenly items-center gap-2 mx-2">
      <form onSubmit={handleCreation}>
        <Card className="mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Upload a Map</CardTitle>
            <CardDescription>
              Enter the map code and a title to upload your map. You can also
              add a description if you want.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label>Description</Label>
                <Input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label>Map Code</Label>
                <Input
                  id="dataCode"
                  type="text"
                  value={dataCode}
                  onChange={(e) => {
                    setDataCode(e.target.value);
                  }}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Create
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>

      <div className="flex justify-center items-center border-2 p-1 rounded-md">
        <p className="absolute z-[-1] text-card-foreground">
          Add a map code to show a preview of the map
        </p>
        <MapPreview mapCode={dataCode} tileSize={size} />
      </div>
    </div>
  );
}
