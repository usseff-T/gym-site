import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

const monthList = [
	{ label: "January", value: 1 },
	{ label: "February", value: 2 },
	{ label: "March", value: 3 },
	{ label: "April", value: 4 },
	{ label: "May", value: 5 },
	{ label: "June", value: 6 },
	{ label: "July", value: 7 },
	{ label: "August", value: 8 },
	{ label: "September", value: 9 },
	{ label: "October", value: 10 },
	{ label: "November", value: 11 },
	{ label: "December", value: 12 },
];
const dayList = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
	23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const SocialLoginButton = () => (
	<>
		<button className="w-full flex justify-center items-center bg-blue-600 rounded py-3 px-5 mb-3">
			<FontAwesomeIcon icon={"fa-brands fa-facebook"} className="text-white text-2xl" />
			<span className="w-full text-center text-white">
				Continue with Facebook
			</span>
		</button>
		<button className="w-full flex justify-center items-center bg-red-500 rounded py-3 px-5 mb-3">
			<FontAwesomeIcon icon={"fa-brands fa-google"}

							 className="text-white text-2xl" />
			<span className="w-full text-center text-white">
				Continue with Google
			</span>
		</button>
	</>
);

const SignUpForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col mb-6 mx-2">
						<label htmlFor="first-name" className="mb-2">
							First Name
						</label>
						<input
							type="text"
							className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
							id="first-name"
							placeholder="Your First Name"
						/>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col mb-6 mx-2">
						<label htmlFor="last-name" className="mb-2">
							Last Name
						</label>
						<input
							type="text"
							className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
							id="last-name"
							placeholder="Your Last Name"
						/>
					</div>
				</div>
				<div className="w-full">
					<div className="mb-6">
						<label htmlFor="birth-date" className="mb-2">
							Birth date
						</label>
						<div className="w-full flex rounded-xl overflow-hidden">
							<select
								type="day"
								className="min-h-[54px] leading-10 bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 border-r border-gray-300 dark:border-gray-700 w-1/3 px-4"
							>
								<option hidden defaultValue>
									Day
								</option>
								{dayList.map((day, i) => (
									<option value={day} key={i}>
										{day}
									</option>
								))}
							</select>
							<select
								type="month"
								className="min-h-[54px] leading-10 bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 border-r border-gray-300 dark:border-gray-700 w-1/3 px-4"
							>
								<option hidden defaultValue>
									Month
								</option>
								{monthList.map(({ label, value }, i) => (
									<option value={value} key={i}>
										{label}
									</option>
								))}
							</select>
							<select
								type="month"
								className="min-h-[54px] leading-10 bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100 w-1/3 px-4"
							>
								<option hidden defaultValue>
									Year
								</option>
							</select>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className="flex flex-col mb-6 mx-2">
						<label htmlFor="email" className="mb-2">
							Email
						</label>
						<input
							type="email"
							className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
							id="email"
							placeholder="Email"
						/>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col mb-6 mx-2">
						<label htmlFor="password" className="mb-2">
							Password
						</label>
						<input
							type="password"
							className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
							id="password"
							placeholder="Password"
						/>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col mb-6 mx-2">
						<label htmlFor="con-pass" className="mb-2">
							Confirm Password
						</label>
						<input
							type="text"
							className="bg-blue-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-xl min-h-[54px] leading-10 px-4 focus:outline-none focus:bg-blue-100 dark:focus:bg-opacity-100"
							id="con-pass"
							placeholder="Confirm Password"
						/>
					</div>
				</div>
			</div>
			<div className="mb-6">
				<div className="form-check">
					<input className="rounded-lg" type="checkbox" value="" id="agree" />
					<label className="rounded-lg" htmlFor="agree">
						{" "}
						I accept to the{" "}
						<a href="#!" className="underline">
							terms & condition
						</a>
						,
						<a href="#!" className="underline">
							privacy policy
						</a>
					</label>
				</div>
			</div>
			<button
				type="submit"
				className="bg-indigo-800 text-white px-7 py-3 rounded w-full"
			>
				Sign Up
			</button>

			<div className="relative">
				<hr className="my-6 md:my-12" />
				<span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800">
					Or
				</span>
			</div>

			<SocialLoginButton />
		</form>
	);
};

export const Froms = () => {
	return (
		<section className="ezy__signup11_bSuaYG1k py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 h-full">
					<div className="col-span-12 lg:col-span-6">
						<div
							className="bg-center bg-no-repeat bg-cover w-full min-h-[150px] rounded-[25px] hidden lg:block h-full"
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign5.jpg)",
							}}
						></div>
					</div>
					<div className="col-span-12 lg:col-span-5 lg:col-start-8 py-12">
						<div className="flex items-center justify-center h-full bg-white shadow-xl dark:bg-slate-800 rounded-xl p-6 lg:p-12">
							<div className="w-full max-w-2xl mx-auto">
								<h2 className="text-indigo-900 dark:text-white text-3xl font-bold mb-3">
									Welcome to Easy Frontend
								</h2>
								<div className="flex items-center mb-6 md:mb-12">
									<p className="mb-0 mr-2 opacity-50">
										Already have an account?
									</p>
									<a href="#!">Sign In</a>
								</div>

								<SignUpForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};