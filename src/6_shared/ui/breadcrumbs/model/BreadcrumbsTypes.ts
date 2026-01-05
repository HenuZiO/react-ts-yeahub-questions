export type BreadcrumbItem = {
    label: string
    to?: string
}

export type BreadcrumbsProps = {
    items: BreadcrumbItem[]
}