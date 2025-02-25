import { FilterCheckboxProps } from "../FilterCheckbox"

type Item = FilterCheckboxProps

export interface CheckboxFiltersGroupProps {
    title: string
    items: Item[]
    defaultItems: Item[]
    limit?: number
    searchInputPlaceholder?: string
    onChange?: (values: string) => void
    defaultValue?: string[]
    className?: string
}