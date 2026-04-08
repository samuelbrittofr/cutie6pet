import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/firebase";
import { isAllowedAdminEmail } from "@/lib/admin";
import { useToast } from "@/hooks/use-toast";

const OwnerLogin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoadingAuth(false);
    });

    return unsubscribe;
  }, []);

  const canAccessAdmin = isAllowedAdminEmail(user?.email);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuthLoading(true);

    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);

      if (!isAllowedAdminEmail(credential.user.email)) {
        await signOut(auth);
        throw new Error("This email is not approved for admin access.");
      }

      toast({
        title: "Signed in",
        description: "You can now open the owner dashboard.",
      });
      navigate("/admin", { replace: true });
    } catch (error) {
      toast({
        title: "Login failed",
        description:
          error instanceof Error ? error.message : "Please check your email and password.",
        variant: "destructive",
      });
    } finally {
      setAuthLoading(false);
    }
  };

  if (loadingAuth) {
    return <div className="min-h-screen bg-background" />;
  }

  if (canAccessAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-gradient-hero py-14 md:py-18">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl">Owner Sign In</h1>
          <p className="mx-auto mt-3 max-w-xl text-foreground/85">
            This private login is only for approved Cutie 6 Pet admin accounts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-md">
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Secure Owner Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="owner-email">Email</Label>
                  <Input
                    id="owner-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="owner@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="owner-password">Password</Label>
                  <Input
                    id="owner-password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Your password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={authLoading}>
                  {authLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default OwnerLogin;
