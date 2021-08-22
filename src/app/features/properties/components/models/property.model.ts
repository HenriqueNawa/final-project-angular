export interface Property {
    id: number;
    description: string;
    loanPrice ?: number;
    buyPrice?: number;
    title: string;
    status: string;
    mainImage: string;
    image?: Array<string>;
    cep: string;
    bairro: string;
    logradouro: string;
    municipio : string;
}