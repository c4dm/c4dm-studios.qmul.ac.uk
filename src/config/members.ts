// biome-ignore-all lint/security/noSecrets : qm sharepoint links only are set to private

export type MembersLink = {
	link: string
	text: string
}

export const links: readonly MembersLink[] = [
	{
		link: 'https://qmulprod.sharepoint.com/sites/Studio/Lists/Studio%20Calendar/AllItems.aspx?e=EaViRw&CID=d589f6ad-eee5-4f53-ad57-8fc7ce094b08&env=WebViewList',
		text: 'Studio Calendar',
	},
	{
		link: 'https://qmulprod.sharepoint.com/sites/Studio/Lists/MGMT%20%20Inventory/AllItems.aspx?viewid=0526cffc%2D1617%2D48f2%2D87f2%2De546828b2116&env=WebViewList',
		text: 'Studio Inventory',
	},
	{
		link: 'https://google.com',
		text: 'Studio Policy',
	},
	{
		link: 'https://google.com',
		text: 'Equipment Loans',
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
