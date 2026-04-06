import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const getStrength = (pw: string) => {
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
};

const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
const strengthColors = ["", "bg-destructive", "bg-warning", "bg-amber", "bg-success"];

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", phone: "", terms: false });
  const update = (k: string, v: any) => setForm({ ...form, [k]: v });
  const strength = getStrength(form.password);

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center py-16 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-2xl font-display font-bold">Tail<span className="text-primary">Waggers</span></span>
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>Join 1M+ happy pet parents</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div><Label>Full Name</Label><Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="John Smith" /></div>
              <div><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" /></div>
              <div>
                <Label>Password</Label>
                <Input type="password" value={form.password} onChange={(e) => update("password", e.target.value)} placeholder="••••••••" />
                {form.password && (
                  <div className="mt-2">
                    <Progress value={strength * 25} className={`h-1.5 [&>div]:${strengthColors[strength]}`} />
                    <p className="text-xs text-muted-foreground mt-1">{strengthLabels[strength]}</p>
                  </div>
                )}
              </div>
              <div><Label>Confirm Password</Label><Input type="password" value={form.confirm} onChange={(e) => update("confirm", e.target.value)} placeholder="••••••••" /></div>
              <div><Label>Phone (optional)</Label><Input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 555-5555" /></div>

              <div className="flex items-start gap-2">
                <Checkbox id="signup-terms" checked={form.terms} onCheckedChange={(v) => update("terms", !!v)} />
                <label htmlFor="signup-terms" className="text-sm text-muted-foreground">I agree to the <a href="#" className="text-primary underline">Terms of Service</a> and <a href="#" className="text-primary underline">Privacy Policy</a></label>
              </div>

              <Button type="submit" className="w-full rounded-full" disabled={!form.terms}>Create Account</Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Sign In</Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Signup;
