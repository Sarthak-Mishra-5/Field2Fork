import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const inter = Inter({ subsets: ["latin"] });
type Input = z.infer<typeof registerSchema>;

export default function Home() {
  const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      Nitrogen: 0,
      Phosphorus: 0,
      Temperature: 0,
      Humidity: 0,
      pH: 0,
      Rainfall: 0,
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
      studentId: "",
      year: "",
    },
  });

  function onSubmit(data: Input) {
    if (data.confirmPassword !== data.password) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Crop Predictor</CardTitle>
          <CardDescription> Predict the Crop best for you </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <motion.div
                className={cn("space-y-3", {
                  // hidden: formStep == 1,
                })}
                // formStep == 0 -> translateX == 0
                // formStep == 1 -> translateX == '-100%'
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* name */}
                <FormField
                  control={form.control}
                  name="Nitrogen"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nitrogen</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Nitrogen value..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the value of Nitrogen in the soil.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Phosphorus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nitrogen</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Phosphorus value..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the value of Phosphorus in the soil.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="Temperature"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Temperature</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the Temperature Value..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Humidity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Humidity</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the Humidity Value..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pH"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>pH</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the pH Value..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Rainfall"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rainfall</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the  Rainfall in mm..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* year */}
              </motion.div>
              <motion.div
                className={cn("space-y-3 absolute top-0 left-0 right-0", {
                  // hidden: formStep == 0,
                })}
                // formStep == 0 -> translateX == 100%
                // formStep == 1 -> translateX == 0
                animate={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                style={{
                  translateX: `${100 - formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* confirm password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Please confirm your password..."
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  className={cn({
                    hidden: formStep == 1,
                  })}
                  onClick={() => {
                    // validation
                    form.trigger(["email", "name", "year", "studentId"]);

                    setFormStep(1);
                  }}
                >
                  Next Step
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={() => {
                    setFormStep(0);
                  }}
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Go Back
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
