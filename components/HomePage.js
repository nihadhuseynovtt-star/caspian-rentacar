"use client";
import Image from "next/image";
import { useState } from "react";

export default function Homepage() {
  const [localImage, setLocalImage] = useState<string | null>(null);
  const [urlImage, setUrlImage] = useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLocalImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main>
      <h1>Avtomobil Parkı</h1>

      {/* URL ilə şəkil */}
      <input
        type="text"
        placeholder="Şəkil URL"
        value={urlImage}
        onChange={(e) => setUrlImage(e.target.value)}
      />

      {/* Local upload */}
      <input type="file" accept="image/*" onChange={handleFileUpload} />

      {/* Şəkil göstərmə */}
      {urlImage && (
        <Image src={urlImage} alt="URL şəkil" width={400} height={250} />
      )}
      {localImage && (
        <img src={localImage} alt="Local şəkil" width={400} height={250} />
      )}
    </main>
  );
}
