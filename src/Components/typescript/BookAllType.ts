import { User } from "../../Validation/Auth";
import { BookType } from "../../Validation/Book";
import { RoomsType } from "../../Validation/Rooms";

export interface BootAllType {
    bookings: (BookType & {
        user: User;
        room: RoomsType;
      })[];
  }
  