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
import { registerSchema } from "@/validators/getdeal";
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
      customer:"",
      farmer:"",
      terms:"",
      amount:0,
      holdingPercent:0,
      yieldId:0,
      dealID:0,
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
      studentId: "",
      year: "",
      farmer2:"",
      farmerID:"",
      crop:"",
      quantity:0,
      expDate:"",
    farmerName:"",
    expectedPrice:0,
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
    <>
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex gap-10">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Enter the Deal Details</CardTitle>
          <CardDescription> Add Deal </CardDescription>
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
                  name="customer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Customer..." {...field} />
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="farmer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Farmer</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter farmer..." {...field} />
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Terms</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter terms..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Humidity</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the amount..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="holdingPercent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Holding Percent</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter holdingPercent..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yieldId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YieldID</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter YieldId..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dealID"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>DealID</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter dealId..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* year */}
              </motion.div>
              {/* <motion.div
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
              > */}
                {/* password */}
                {/* <FormField
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
                /> */}
                {/* confirm password */}
                {/* <FormField
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
              </motion.div> */}
              <div className="flex gap-2">
                {/* <Button
                  type="submit"
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Submit
                </Button> */}
                {/* <Button
                  type="button"
                  variant={"ghost"}
                  className={cn({
                    hidden: formStep == 1,
                  })}
                  onClick={() => {
                    // validation
                    form.trigger(["email", "name", "year", "studentId",]);
                    const emailState = form.getFieldState("email");
                    const nameState = form.getFieldState("name");
                    const yearState = form.getFieldState("year");
                    const idState = form.getFieldState("studentId");
                    

                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!nameState.isDirty || nameState.invalid) return;
                    if (!yearState.isDirty || yearState.invalid) return;
                    if (!idState.isDirty || idState.invalid) return;

                    setFormStep(1);
                  }}
                > */}
                  {/* Submit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button> */}
                {/* <Button
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
                </Button> */}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Enter Farmer Details</CardTitle>
          <CardDescription> Add Farmer </CardDescription>
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
                  name="farmer2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Farmer</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Farmer..." {...field} />
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="farmerID"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>FarmerID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter farmerID..." {...field} />
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="farmerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Farmer Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter farmerName..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* year */}
              </motion.div>
              {/* <motion.div
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
              > */}
                {/* password */}
                {/* <FormField
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
                /> */}
                {/* confirm password */}
                {/* <FormField
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
              </motion.div> */}
              <div className="flex gap-2">
                {/* <Button
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
                    const emailState = form.getFieldState("email");
                    const nameState = form.getFieldState("name");
                    const yearState = form.getFieldState("year");
                    const idState = form.getFieldState("studentId");

                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!nameState.isDirty || nameState.invalid) return;
                    if (!yearState.isDirty || yearState.invalid) return;
                    if (!idState.isDirty || idState.invalid) return;

                    setFormStep(1);
                  }}
                >
                  Submit
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
                </Button> */}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Enter Produce</CardTitle>
          <CardDescription> Add Produce </CardDescription>
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
                  name="farmerID"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Farmer ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter farmerID..." {...field} />
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yieldId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YieldID</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter YieldID..." {...field} />
                      </FormControl>
                      <FormDescription>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="landlocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Land Location</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter LandLocation..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="crop"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Crop</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the crop..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter quantity..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiration Date</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Date..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expectedPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Price</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Price..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* year */}
              </motion.div>
              {/* <motion.div
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
              > */}
                {/* password */}
                {/* <FormField
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
                /> */}
                {/* confirm password */}
                {/* <FormField
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
              </motion.div> */}
              <div className="flex gap-2">
                {/* <Button
                  type="submit"
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Submit
                </Button> */}
                {/* <Button
                  type="button"
                  variant={"ghost"}
                  className={cn({
                    hidden: formStep == 1,
                  })}
                  onClick={() => {
                    // validation
                    form.trigger(["email", "name", "year", "studentId"]);
                    const emailState = form.getFieldState("email");
                    const nameState = form.getFieldState("name");
                    const yearState = form.getFieldState("year");
                    const idState = form.getFieldState("studentId");

                    if (!emailState.isDirty || emailState.invalid) return;
                    if (!nameState.isDirty || nameState.invalid) return;
                    if (!yearState.isDirty || yearState.invalid) return;
                    if (!idState.isDirty || idState.invalid) return;

                    setFormStep(1);
                  }}
                >
                  Submit
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
                </Button> */}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className=" absolute bottom-0">
      <Button
                  type="submit"
                  className={cn({
                    hidden: formStep == 0,
                  })}
                >
                  Submit
                </Button> 
    </div>
                <Button
                  type="button"
                  variant={"destructive"}
                  className={cn({
                    hidden: formStep == 1,
                  })}
                  onClick={() => {
                    // validation
                    form.trigger(["email", "name", "year", "studentId","customer","dealID","crop","amount","expDate","expectedPrice","farmer","farmer2","farmerID","farmerName","holdingPercent","landlocation","quantity","terms","yieldId"]);
                    const customerState = form.getFieldState("customer");
                    const dealIDState = form.getFieldState("dealID");
                    const cropState = form.getFieldState("crop");
                    const amountState = form.getFieldState("amount");
                    const expDateState = form.getFieldState("expDate");
                    const expectedPriceState = form.getFieldState("expectedPrice");
                    const farmerState = form.getFieldState("farmer");
                    const farmer2State = form.getFieldState("farmer2");
                    const farmerIDState = form.getFieldState("farmerID");
                    const farmerNameState = form.getFieldState("farmerName");
                    const holdingPercentState = form.getFieldState("holdingPercent");
                    const landlocationState = form.getFieldState("landlocation");
                    const quantityState = form.getFieldState("quantity");
                    const termsState = form.getFieldState("terms");
                    const yieldIdState = form.getFieldState("yieldId");



                    if (!customerState.isDirty || customerState.invalid) return;
                    if (!dealIDState.isDirty || dealIDState.invalid) return;
                    if (!cropState.isDirty || cropState.invalid) return;
                    if (!amountState.isDirty || amountState.invalid) return;
                    if (!expDateState.isDirty || expDateState.invalid) return;
                    if (!expectedPriceState.isDirty || expectedPriceState.invalid) return;
                    if (!farmerState.isDirty || farmerState.invalid) return;
                    if (!farmer2State.isDirty || farmer2State.invalid) return;
                    if (!farmerIDState.isDirty || farmerIDState.invalid) return;
                    if (!farmerNameState.isDirty || farmerNameState.invalid) return;
                    if (!holdingPercentState.isDirty || holdingPercentState.invalid) return;
                    if (!landlocationState.isDirty || landlocationState.invalid) return;
                    if (!quantityState.isDirty || quantityState.invalid) return;
                    if (!termsState.isDirty || termsState.invalid) return;
                   

                    setFormStep(1);
                  }}
                >
                  Submit
                  {/* <ArrowRight className="w-4 h-4 ml-2" /> */}
                </Button>
                <Button
                  type="button"
                  variant={"destructive"}
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
    
    </>
  );
}
