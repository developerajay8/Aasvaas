"use client";

import React, { JSX, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
  
export default function NewsAdmin(): JSX.Element {
  const [heading, setHeading] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const DEFAULT_USERNAME = "admin";
  const DEFAULT_PASSWORD = "password123";

  const handleLogin = (): void => {
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!heading || !date || !context || !image) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("date", date);
    formData.append("context", context);
    formData.append("image", image);

    const res = await fetch("/api/news", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("News added successfully!");
    } else {
      alert("Error adding news.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="p-6 max-w-sm mx-auto">
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-bold">Admin Login</h2>
            <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Add News</h2>
          <Input placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <Textarea placeholder="Context" value={context} onChange={(e) => setContext(e.target.value)} />
          <Input type="file" accept="image/*" onChange={(e) => e.target.files && setImage(e.target.files[0])} />
          <Button onClick={handleSubmit}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}
