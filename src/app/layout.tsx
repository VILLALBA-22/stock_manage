import './_styles/globals.css'
import 'react-tabulator/lib/styles.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Test',
	description: 'Example test',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}
