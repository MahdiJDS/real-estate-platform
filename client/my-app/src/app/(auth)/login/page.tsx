import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/features/auth/components/loginForm";
import { Separator } from "@/components/ui/separator";

export default function RegisterPage() {

    return (

        <div className="flex items-center justify-center px-4 py-6 ">

            <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl rounded-2xl">

                <CardHeader className="py-4 space-y-1">
                    <CardTitle className="m-auto text-2xl font-bold">
                        Create Property
                    </CardTitle>

                    <p className="m-auto text-xs text-muted-foreground">
                        Add your property details quickly
                    </p>
                </CardHeader>

                <Separator />

                <CardContent className="py-4">
                    <LoginForm />
                </CardContent>

            </Card>
        </div>

    );

}