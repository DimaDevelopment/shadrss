import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
  title: <div className="bg-secondary h-6 max-w-20 w-full rounded-md" />,
  content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_24 = () => {
  return (
    <div className="border rounded-xl border-border/70 p-1">
      <Card className="rounded-lg bg-muted/20">
        <CardHeader>
          <CardTitle>{Placeholder.title}</CardTitle>
        </CardHeader>
        <CardContent>{Placeholder.content}</CardContent>
      </Card>
    </div>
  );
};
