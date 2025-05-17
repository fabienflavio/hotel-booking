export interface Reservation {
    id: number;
    dateEntrer: string;
    dateSortie: string;
    idChambre: number;
    idUser: number;
    telephone: string;
    prixTotal: number;
    status : string
}