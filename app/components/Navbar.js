import '@/app/globals.css'
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav id="header" className="w-full top-0">
		<div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
			<div className="pl-4">
				<a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
					Dims Blog
				</a>
			</div>
			<div className="block lg:hidden pr-4">
				<button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
				<ul className="list-reset lg:flex justify-end flex-1 items-center">
					<li className="mr-3">
						<Link className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="/">Home</Link>
					</li>
					<li className="mr-3">
						<Link className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="/app/pages/Details.js">Details</Link>
					</li>
					<li className="mr-3">
						<Link className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">Project</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    );
    }

export default Navbar;