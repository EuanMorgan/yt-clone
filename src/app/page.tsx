import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Home() {
return (
  <div>
    <p className="font-bold text-rose-500">
      hello world
    </p>
    <Button variant={'destructive'}>
      Click me
    </Button>
  </div>
)
}
