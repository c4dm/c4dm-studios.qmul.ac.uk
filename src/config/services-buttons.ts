// biome-ignore-all lint/security/noSecrets : qm sharepoint links only are set to private

export type MembersLink = {
	link: URL
	text: string
}

export const links: readonly MembersLink[] = [
	{
		link: new URL(
			'https://qmulprod.sharepoint.com/sites/Studio/Lists/Studio%20Calendar/AllItems.aspx?e=EaViRw&CID=d589f6ad-eee5-4f53-ad57-8fc7ce094b08&env=WebViewList',
		),
		text: 'Book a Session',
	},
	{
		link: new URL(
			'https://qmulprod.sharepoint.com/sites/Studio/Lists/MGMT%20%20Inventory/AllItems.aspx?viewid=0526cffc%2D1617%2D48f2%2D87f2%2De546828b2116&env=WebViewList',
		),
		text: 'View Inventory',
	},
	{
		link: new URL('https://google.com'),
		text: 'Equipment Loans Portal',
	},
	{
		link: new URL('https://google.com'),
		text: 'Totalmix Templates',
	},
	{
		link: new URL('https://google.com'),
		text: 'Spatial Audio Files',
	},
	{
		link: new URL('https://google.com'),
		text: 'Motion Capture Files',
	},
	{
		link: new URL('https://google.com'),
		text: 'Request a Supervised Session',
	},
	{
		link: new URL('https://google.com'),
		text: 'Event Hire',
	},
	{
		link: new URL('https://qmulprod.sharepoint.com/sites/Studio/SitePages/Management.aspx'),
		text: 'Management Portal',
	},
] as const
