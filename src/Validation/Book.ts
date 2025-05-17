import { z } from "zod";

export const bookSchema = z.object({
    id : z.number().optional(),
    room_id : z.number().optional(),
    start_date: z.string().min(1,"required field") ,
    end_date: z.string().min(1,"required field") ,
    number_of_people:  z.number(),
});

export type BookType = z.infer<typeof bookSchema>;