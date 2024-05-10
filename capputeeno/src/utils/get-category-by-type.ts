import {FilterType} from "@/types/filter-type";
import {PriorityType} from "@/types/priority-type";

export function getCategoryByType(type: FilterType) {
    if(type === FilterType.MUGS){
        return "mugs"
    }
    if(type === FilterType.SHIRT){
        return "t-shirts"
    }
    return "";
}

export function getFieldByPriority(priority: PriorityType) {
    if (priority === PriorityType.NEWS) {
        return {field: "created_at", order: "ASC"}
    }
    if (priority === PriorityType.BIGGEST_PRICE) {
        return {field: "price_in_cents", order: "DSC"}
    }
    if (priority === PriorityType.LOWEST_PRICE) {
        return {field: "price_in_cents", order: "ASC"}
    }
    return {field: "sales", order: "DSC"}
}

export const createQuery = (type: FilterType, priority: PriorityType) => {
    if (type === FilterType.ALL && priority == PriorityType.POPULARITY){

        return `query {
                    allProducts(sortField:"price_in_cents", sortOrder:"DSC") {
                    id
                    name
                    price_in_cents
                    image_url
                  }
                }`
    } else {
        const sortSettings = getFieldByPriority(priority);
        const categoryFilter = getCategoryByType(type)
        return `query {
                  allProducts(sortField:"${sortSettings.field}", sortOrder:"${sortSettings.order}" ${categoryFilter ? `, filter: {category: "${getCategoryByType(type)}"}` : ""} ) {
                  id
                  name
                  price_in_cents
                  image_url
                  category
                }}`
    }
}