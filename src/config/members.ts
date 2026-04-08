export type MembersLink = {
	link: string
	text: string
}

export const links: readonly MembersLink[] = [
	{
		link: 'https://google.com',
		text: 'Performance Lab Calendar',
	},
	{
		link: 'https://google.com',
		text: 'Control Room Calendar',
	},
	{
		link: 'https://google.com',
		text: 'Live Room Calendar',
	},
	{
		link: 'https://google.com',
		text: 'Inventory',
	},
	{
		link: 'https://google.com',
		text: 'Equipment Loans',
	},
	{
		link: 'https://google.com',
		text: 'Equipment Returns',
	},
	{
		link: 'https://google.com',
		text: 'Request a Supervised Session',
	},
	{
		link: 'https://google.com',
		text: 'Event Hire',
	},
	{
		link: 'https://google.com',
		text: 'Studio Policy?? Am I really real.',
	},
] as const
