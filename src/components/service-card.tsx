import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <Card className="h-full ring-0">
      <CardContent className="flex-1">
        {icon}
        <h3 className="mt-4 mb-1 text-base font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      {href && (
        <CardFooter className="bg-transparent! border-none rounded-none">
          <Link href={href} className="underline underline-offset-3">
            Learn more
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
