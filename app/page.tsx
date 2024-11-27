import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-gray-500 mt-2">
            A glimpse into my work, skills, and accomplishments.
          </p>
          <Button className="mt-4">Explore My Work</Button>
        </div>
        <Image
          src="/me.jpg"
          alt="Hero Image"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>

      <Separator />

      {/* Skills Section */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">My Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-4 flex-wrap">
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Node.js</Badge>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Projects Section */}
      <div>
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">A brief description of the project.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">A brief description of the project.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">A brief description of the project.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
