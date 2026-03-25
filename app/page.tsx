import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
