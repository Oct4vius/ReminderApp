import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export type DropdownItem = {
    label: string
    icon: IconDefinition
    click: () => void
}