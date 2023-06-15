export interface ISidebarNavItems {
	routing: [name: string, route: string],
	author?: [authorname: string, socialMediaUrl?: string],
	navChild?: ISidebarNavItems[]
}