import React from 'react';
import PropTypes from 'prop-types';


const Navbar = (props) => {
	return (

		// <!-- component -->
		<nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto" style={{backgroundColor: props.mode==='dark'?'rgb(3 4 10)':'white', color: props.mode==='dark'?'white':'black'}} >
			<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
				{/* <!-- Logo --> */}
				<div className="text-indigo-500 md:order-1">
					{/* <!-- Heroicon - Chip Outline --> */}
					<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
					</svg>
				</div>
				<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
					<ul className="flex font-semibold" style={{color: props.mode==='dark'?'white':'black'}} >
						
						<li className="md:px-4 md:py-2 text-indigo-500"><a href="/">{props.title}</a></li>
						<li className="md:px-4 md:py-2 " style={{color: props.mode==='dark'?'white':'grey'}}><a href="/">Home</a></li>

					</ul>
				</div>
				<div className="order-2 md:order-3">

					<label className="inline-flex items-center cursor-pointer">
						<input type="checkbox" onClick={props.toggleMode} value="" className="sr-only peer" />
						<div className="relative w-11 h-6 bg-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" style={{backgroundColor: props.mode==='dark'?'rgb(29 33 30)':'#dbd3d3',color: props.mode==='dark'?'white':'grey'}}></div>
						<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable {props.ToggleMode}</span>
					</label>

				</div>
			</div>
		</nav>


	);

};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	
}

Navbar.defaultProps = {
	title: "Set title here",
}

export default Navbar;