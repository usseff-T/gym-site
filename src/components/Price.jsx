import {useState} from "react";

const pricingList = {
	monthlyPricings: [
		{
			planTitle: "Basic",
			price: "$9",
			timeline: "/month",
			description:
				"More off this less hello salamander lied porpoise much circa horse taped.",
			isActive: false,
		},
		{
			planTitle: "Standard",
			price: "$19",
			timeline: "/month",
			description:
				"Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque.",
			isActive: false,
		},
		{
			planTitle: "Premium",
			price: "$29",
			timeline: "/month",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			isActive: true,
		},
		{
			planTitle: "Lifetime",
			price: "$39",
			timeline: "/month",
			description:
				"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
			isActive: false,
		},
	],
	yearlyPricings: [
		{
			planTitle: "Basic",
			price: "$99",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			isActive: false,
		},
		{
			planTitle: "Standard",
			price: "$199",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			isActive: false,
		},
		{
			planTitle: "Premium",
			price: "$299",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			isActive: true,
		},
		{
			planTitle: "Lifetime",
			price: "$399",
			timeline: "/year",
			description:
				"It’s easier to reach your savings goals when you have the right savings account.",
			isActive: false,
		},
	],
};

const PricingItem = ({ pricing }) => {
	const { planTitle, price, timeline, description, isActive } = pricing;
	return (
		<div
			className={`rounded-2xl shadow p-4 lg:p-12 h-full ${
				isActive
					? "bg-blue-600 text-white"
					: "bg-blue-50 text-zinc-900 dark:bg-[#101D2C] dark:text-white"
			}`}
		>
			<h3 className="text-3xl font-bold mb-2">{planTitle}</h3>
			<p className="opacity-50 mb-6">{description}</p>
			<div className="mb-4">
				<span className="text-3xl font-bold">{price}</span>
				<span className="ml-2 opacity-50">{timeline}</span>
			</div>
			<button
				className={`${
					isActive && "bg-white text-black border-white"
				} border border-blue-600 text-blue-600 rounded-md px-7 py-3 w-full mt-6 hover:bg-blue-600 hover:text-white duration-300`}
			>
				Choose plan
			</button>
		</div>
		// <div
		// 	className={
		// 		pricing.isActive
		// 			? "bg-[#262A40] text-white rounded-2xl shadow p-4 lg:p-12 h-full"
		// 			: "bg-blue-50 text-zinc-900 dark:bg-[#101D2C] dark:text-white rounded-2xl shadow p-4 lg:p-12 h-full"
		// 	}
		// >
		// 	<h3 className="text-3xl font-bold mb-2">{pricing.planTitle}</h3>
		// 	<div className="mb-4">
		// 		<span className="text-3xl font-bold">{pricing.price}</span>
		// 		<span className="ml-2 opacity-50">{pricing.timeline}</span>
		// 	</div>
		// 	<p className="opacity-50 mb-6">{pricing.description}</p>
		// 	<ul className="flex flex-col">
		// 		{pricing.features.map((item, i) => (
		// 			<li className="mb-4" key={i}>
		// 				<FontAwesomeIcon
		// 					icon={faCheck}
		// 					className={`${item.isActive && "text-blue-600"} mr-2`}
		// 				/>
		// 				<span className="opacity-50">{item.label}</span>
		// 			</li>
		// 		))}
		// 	</ul>

		// 	<button className="border border-blue-600 text-blue-600 rounded-md px-7 py-3 w-full mt-6 hover:bg-blue-600 hover:text-white duration-300">
		// 		Choose plan
		// 	</button>
		// </div>
	);
};



const Price = () => {
	const [activeTimeline, setActiveTimeline] = useState("monthly");

	let content = null;
	if (activeTimeline === "monthly") {
		content = pricingList.monthlyPricings.map((pricing, i) => {
			return (
				<div className="col-span-12 md:col-span-6 xl:col-span-3 mt-6" key={i}>
					<PricingItem pricing={pricing} />
				</div>
			);
		});
	}
	if (activeTimeline === "yearly") {
		content = pricingList.yearlyPricings.map((pricing, i) => (
			<div className="col-span-12 md:col-span-6 xl:col-span-3 mt-6" key={i}>
				<PricingItem pricing={pricing} />
			</div>
		));
	}

	return (
		<section className="ezy__pricing4_P9THzxMH py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 mb-12">
					<div className="col-span-12 lg:col-span-6 lg:col-start-4 xl:px-32 text-center">
						<h2 className="text-3xl font-bold leading-none md:text-[45px] mb-4">
							Flexible Plan for you
						</h2>
						<p className="">Choice suitable plan for you.</p>
					</div>
				</div>
				<div className="text-center mb-6">
					<button
						className={`px-6 py-3 hover:bg-opacity-90 rounded duration-300  ${
							activeTimeline === "monthly" && "bg-blue-600 text-white"
						}`}
						onClick={() => setActiveTimeline("monthly")}
					>
						MONTHLY
					</button>
					<button
						className={`px-6 py-3 hover:bg-opacity-90 rounded duration-300  ${
							activeTimeline === "yearly" && "bg-blue-600 text-white"
						}`}
						onClick={() => setActiveTimeline("yearly")}
					>
						YEARLY
					</button>
				</div>
				<div className="grid grid-cols-12 gap-4 md:gap-6">{content}</div>
			</div>
		</section>
	);
};
export default Price;