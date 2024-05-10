import axios, {AxiosPromise} from 'axios';
import {ProductsFetchResponse} from "@/types/products-list-response";
import {useQuery} from "@tanstack/react-query";
import {useFilter} from "@/hooks/useFilter";
import {createQuery, getCategoryByType, getFieldByPriority} from "@/utils/get-category-by-type";
import {useDeferredValue} from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (value: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, {query: value})
}

export function useProducts() {
    const { type, priority, search } = useFilter();

    const searchDeferred = useDeferredValue(search)
    const query = createQuery(type, priority)

    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority]
    })

    const products = data?.data?.data?.allProducts;
    const filteredProducts = products?.filter(product => product.name.toUpperCase().includes(searchDeferred.toUpperCase()))

    return {
        data: filteredProducts
    }
}