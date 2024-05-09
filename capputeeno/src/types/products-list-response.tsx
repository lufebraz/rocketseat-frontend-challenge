import {Product} from "@/types/product";

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[]
    }
}