import type { ReactElement } from 'react'

export default function Test(): ReactElement {
	return (
		<div className='grid grid-cols-1 gap-5 p-2 md:grid-cols-4'>
			<header className='flex h-40 items-center justify-center rounded-lg  bg-green-400 md:col-span-4'>
				Header
			</header>
			<main className=' flex h-40 items-center justify-center rounded-lg bg-indigo-900 md:col-span-3'>
				main
			</main>
			<aside className='flex h-40 items-center justify-center rounded-lg bg-yellow-500 md:col-span-1'>
				aside
			</aside>
			<footer className='flex h-40 items-center justify-center rounded-lg border border-sky-500 md:col-span-4'>
				footer
			</footer>
		</div>
	)
}
