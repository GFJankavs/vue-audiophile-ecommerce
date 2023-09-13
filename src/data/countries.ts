import type { Country } from "@/types"
import countryList from "country-codes-list"

export const countries: Country[] = countryList.all().map((country) => {
    return {
        name: country.countryNameEn,
        code: country.countryCode
    }
})