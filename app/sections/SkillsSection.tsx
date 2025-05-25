import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  return (
    <div>
      <Card className="border shadow-lg bg-background text-foreground">
        <CardHeader className="bg-background">
          <CardTitle className="text-2xl font-bold">기술 스택</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 bg-background text-foreground">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-blue-600">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Java</Badge>
              <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Spring Boot</Badge>
              <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Python</Badge>
              <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">FastAPI</Badge>
              <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Node.js</Badge>
              <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">REST API</Badge>
              <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Others</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-purple-600">AI</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">AI/ML</Badge>
              <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">TensorFlow</Badge>
              <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">PyTorch</Badge>
              <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">OpenAI</Badge>
              <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">Others</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-emerald-600">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">AWS</Badge>
              <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">Docker</Badge>
              <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">Kubernetes</Badge>
              <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">CI/CD</Badge>
              <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">Others</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-rose-600">Database</h3>
            <div className="space-y-3">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">MySQL</Badge>
                  <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">PostgreSQL</Badge>
                  <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Oracle</Badge>
                  <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">MongoDB</Badge>
                  <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Redis</Badge>
                  <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Others</Badge>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-600">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">JavaScript</Badge>
              <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">React</Badge>
              <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Vue</Badge>
              <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Next.js</Badge>
              <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Others</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsSection;
