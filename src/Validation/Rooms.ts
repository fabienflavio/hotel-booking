import { z } from "zod";

export const roomsSchema = z.object({
    id : z.number().optional(),
    name: z.string().min(1,"required field") ,
    class: z.string().min(1,"required field") ,
    price:  z.number(),
    image_url: z.any().optional(),
    image :  z.any().optional() ,
    _method : z.string().optional() ,
});

export type RoomsType = z.infer<typeof roomsSchema>;