const blogs = [
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_2.png",
		title: "Decide what type of teacher you want to be",
		date: "August 10",
		author: "Alan Bell",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_3.png",
		title: "Decide what type of teacher you want to be",
		date: "August 10",
		author: "Alan Bell",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_4.png",
		title: "Decide what type of teacher you want to be",
		date: "August 10",
		author: "Alan Bell",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_5.png",
		title: "Decide what type of teacher you want to be",
		date: "August 10",
		author: "Alan Bell",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_2.png",
		title: "Decide what type of teacher you want to be",
		date: "August 10",
		author: "Alan Bell",
	},
];

const social = [
	{
		icon: faFacebook,
		href: "#!",
	},
	{
		icon: faInstagram,
		href: "#!",
	},
	{
		icon: faLinkedinIn,
		href: "#!",
	},

	{
		icon: faTwitter,
		href: "#!",
	},
	{
		icon: faWhatsapp,
		href: "#!",
	},
	{
		icon: faShareAlt,
		href: "#!",
	},
	{
		icon: faBookmark,
		href: "#!",
	},
];

const BlogItem = ({ item }) => {
	return (
		<div className="flex justify-between items-start gap-4">
			<img src={item.img} alt="" className="img-fluid rounded" />
			<div className="ml-3">
				<h6 className="mb-2 text-base font-medium leading-tight">
					{item.title}
				</h6>
				<div className="flex flex-wrap opacity-50">
					<span className="mr-3">{item.date}</span>
					<span>
						By <b>{item.author}</b>
					</span>
				</div>
			</div>
		</div>
	);
};

BlogItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Contents = () => (
	<div className="mt-12">
		<p className="text-[17px] mb-2 opacity-80">
			Teaching is a noble profession. Think about the most respected persons in
			our society. Yes, they are the teachers. If you ask someone about some of
			his favourite persons, it is most likely to find a teacher of him in his
			answer. So, being a teacher is an amazing thing. Besides, the career
			prospect in teaching is also lucrative. In England and Wales, as a Newly
			Qualified Teacher (NQT) you’ll earn £24,373 to £30,480 depending on
			location Since you have decided to become a teacher, you may be known to
			all of these.
		</p>
		<p className="text-[17px] mb-2 opacity-80">
			Getting into teaching requires many years of preparation. If you don’t
			know how to become a teacher, you may find the way challenging. So, in
			this article, I’ll walk you through the steps to becoming a teacher in the
			UK.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
			7 Steps to becoming a teacher
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
			Being a teacher is always exciting. It opens a new horizon for us to serve
			and build the nation in a noble way. In order to become a teacher, you
			have to undertake a number of steps. So let’s get started to explore:
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
			1. Decide what type of teacher you want to be
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
			Teachers can be of several types such as nursery teachers, school
			teachers, special teachers, professors and so on. So, before stepping into
			the route to become a teacher, decide first what type of teacher you want
			to be. In the UK, the education system is broadly divided into two
			systems.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
			2. Decide your preferred subject
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
			In primary schools, you may be responsible for teaching multiple subjects.
			But in the secondary schools, it’s most likely that you’ll be teaching the
			subject in which you did your major. So, it’s your choice which subject do
			you want to teach. It’s necessary to decide this because it will keep you
			on the track to become a teacher and step forward to make your
			preparation.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
			3. Earn your bachelor degree
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
			Unlike many other professions, teaching is very strict in its
			requirements. It’s because we don’t want to give the responsibility of
			educating our children to someone who doesn’t have the proper education
			and credentials. So, getting into teaching requires a minimum degree in
			the first place. After that, the other things come. You need a bachelor
			degree to become a teacher. There are also other specialized and advanced
			degrees, but you need your bachelor degree before everything.
		</p>
		<p className="text-[17px] mb-2 opacity-80">
			If you want to be a primary teacher, then you’ll need a degree of Bachelor
			of Education (BEd.) But, if you want to be a secondary teacher, you have
			to do your bachelor in your preferred subject. Your major in your degree
			will determine which subject you’ll be teaching. Earning a bachelor degree
			will require 3 to 4 years. However, if you want to be a nursery or
			pre-school teacher, you don’t need a bachelor degree rather a proper
			license and certification in teaching children.
		</p>
	</div>
);

const Social = ({ list, index }) => (
	<a href={list.href} className="text-lg sm:text-[22px]">
		<FontAwesomeIcon
			icon={list.icon}
			className={classNames({ "ml-3": index })}
		/>
	</a>
);

Social.propTypes = {
	list: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const SocialContent = () => (
	<div className="flex flex-col sm:flex-row items-center justify-between my-12 sm:mr-12">
		<div className="flex flex-col sm:flex-row items-center">
			<div className="mr-2">
				<img
					src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
					alt=""
					className="max-w-full h-auto rounded-full border border-btnBorder"
					width="47"
				/>
			</div>
			<div>
				<p className="mb-0">
					By<b> Alan Bell</b>
				</p>
			</div>
			<p className="ml-3 mt-3 sm:mt-0">August 10th, 2020</p>
		</div>
		<div>
			<ul className="mt-3 sm:mt-0">
				{social.map((list, j) => (
					<Social list={list} index={j} key={j} />
				))}
			</ul>
		</div>
	</div>
);

const SideBar = () => (
	<div className="bg-zinc-900 dark:bg-[#1E2735] bg-opacity-95 text-white rounded-t-lg py-4 px-3 mb-4">
		<h5 className="text-xl font-medium">Popular Blogs</h5>
		<div className="shadow-xl dark:shadow-2xl h-auto p-4">
			{blogs.map((item, i) => (
				<Fragment key={i}>
					{!!i && <hr className="my-4" />}
					<BlogItem item={item} />
				</Fragment>
			))}
		</div>
	</div>
);

const Blogdetails2_uzhfADDy = () => {
	return (
		<section className="ezy__blogdetails2_uzhfADDy py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-8">
						<h1 className="ezy__blogdetails2_uzhfADDy-heading">
							How to Pitch a Video Game: 7 Tips for Pitching Games
						</h1>

						{/* Social content */}
						<SocialContent />

						<img
							src="https://cdn.easyfrontend.com/pictures/blog/blog_12_1.png"
							alt=""
							className="img-fluid rounded"
						/>

						{/* Content */}
						<Contents />
					</div>
					<div className="col-span-12 md:col-span-4 md:px-6 mt-6 sm:mt-0">
						<SideBar />
					</div>
				</div>
			</div>
		</section>
	);
};