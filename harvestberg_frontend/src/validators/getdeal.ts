import { z } from "zod";

export const registerSchema = z.object({
    //add deal

  customer: z.string(),
  farmer: z.string(),
  terms: z.string(),
  amount:z.number().int().positive(),
  holdingPercent: z.number().int().positive(),
  yieldId: z.number().int().positive(),
  dealID: z.number().int().positive(),

  //addffarmer
  farmer2:z.string(),
  farmerID:z.string(),
  farmerName:z.string(),

  //addProduce
  landlocation:z.string(),
  crop:z.string(),
  quantity:z.number().int().positive(),
  expDate:z.string(),
  expectedPrice:z.number().int().positive(),










  email: z.string().email(),
  name: z
    .string()
    .min(3, { message: "Your name should not be that short!" })
    .max(255),
  studentId: z
    .string()
    .min(7)
    .max(7)
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Student ID should be a number",
    }),
  year: z.string().min(2).max(10),
  password: z.string().min(6).max(100),
  confirmPassword: z.string().min(6).max(100),
});
