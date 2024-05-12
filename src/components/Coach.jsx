import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const socialLinks = [
	{ icon: "fa-brands fa-twitter", href: "#" },
	{ icon: "fa-brands fa-linkedin", href: "#" },
	// { icon: faDribbble, href: "#" },
	// { icon: faBehance, href: "#" },
];

const infoList = [
	{ label: "Born in", value: "England" },
	{ label: "Experience", value: "3+ Years" },
	{ label: "Date of Birth", value: "11 August 1990" },
];

const ProfileKeyInfo = () => (
	<div>
		{infoList.map((info, i) => (
			<p className="text-2xl mb-1" key={i}>
				<span className="opacity-50 mr-2 font-light">{info.label}</span>
				<strong>{info.value}</strong>
			</p>
		))}
	</div>
);

const SocialLinks = ({ links }) => (
	<ul className="inline-flex mt-6">
		{links.map((link, i) => (
			<li className="mr-5" key={i}>
				<a
					href={link.href}
					className="text-2xl opacity-70 hover:opacity-100 transition duration-300"
				>
					<FontAwesomeIcon icon={link.icon} />
				</a>
			</li>
		))}
	</ul>
);

export const Coach = () => {
	return (
		<header className="ezy__header9_MNobVdnI py-14 md:py-24 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white">
			<div className="container px-4 ">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-5 xl:col-span-4 mb-6 lg:mb-0">
						<img
							src="https://cdn.easyfrontend.com/pictures/team/team_13_2.jpg"
							alt=""
							className="max-w-full h-auto border-[20px] border-white shadow-xl dark:border-gray-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
						/>
					</div>
					<div className="col-span-12 lg:col-span-7 lg:pl-6 xl:pl-12">
						<p className="text-xl leading-normal mb-2 opacity-50">
							UI UX Designer
						</p>
						<h2 className="text-3xl leading-none md:text-7xl font-bold mb-6">
							Steve Smith
						</h2>
						<p className="text-xl leading-normal opacity-75 mb-2">
							I'm a UI/UX Designer based in Bangladesh and enjoy playing with
							colors. I love travelling, photography & music.
						</p>

						<div className="mt-12 lg:ml-12 p-4 md:px-12 lg:py-6 border-l">
							<ProfileKeyInfo />
							<SocialLinks links={socialLinks} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};