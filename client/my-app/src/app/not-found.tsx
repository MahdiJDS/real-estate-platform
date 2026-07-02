import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
    return (
        <div className="container flex min-h-[80vh] items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader className="items-center text-center">
                    <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted text-3xl">
                        🏠
                    </div>

                    <CardTitle>Property Not Found</CardTitle>

                    <CardDescription>
                        The property you're looking for doesn't exist or may have been
                        removed.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                    <Button asChild className="w-full">
                        <Link href="/properties">
                            Browse Properties
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="w-full"
                    >
                        <Link href="/">
                            Back to Home
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}