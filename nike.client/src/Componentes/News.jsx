import Carousel from "./Body";

const PodcastCard = ({ color, imageUrl, title, date, description }) => (
    <article className={`postcard light ${color}`}>
        <a className="postcard__img_link" href="#">
            <img className="postcard__img" src={imageUrl} alt="Image Title" />
        </a>
        <div className="postcard__text t-dark">
            <h1 className={`postcard__title ${color}`}><a href="#">{title}</a></h1>
            <div className="postcard__subtitle small">
                <time dateTime={date}>
                    <i className="fas fa-calendar-alt mr-2"></i>{date}
                </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
                {description}
            </div>
            <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Today</li>
                <li className="tag__item"><i className="fas fa-clock mr-2"></i>5 mins read.</li>
                
            </ul>
        </div>
    </article>
);

const News = () => (
    <section className="light">
        <div className="container py-2">
            <div className="container" id="containerMen">
                <h1 id="h1Men" contentEditable>Newsletter</h1>
                
            </div>
            
            <PodcastCard
                color="blue"
                imageUrl="./src/assets/news1.jpg"
                title="The New NWSL 2024 Kits Mark a New Era for the League, Its Clubs and Their Communities"
                date="Mon, May 21th 2024"
                description="For the first time ever, all 14 teams in the National Women's Soccer League (NWSL) will receive new, reimagined primary and secondary kits, featuring designs that convey each club's rich identity.
                            Each team's primary kits express their unique stories through color and graphics while the secondary kits are inspired by the strength of the collective. The pre-match tops feature a shared design created by stacking traditional team crests on top of each other,
                            adding textures and colors to symbolically unite the clubs.."
            />
            <PodcastCard
                color="red"
                imageUrl="./src/assets/news2.jpg"
                title="Nike's National Federation Kits Bring Dri-FIT ADV to the Pitch"
                date="Thu, May 20th 2024"
                description="Infusing new energy into the color direction for the 2024 kits, Nike's design teams took a prismatic approach to refreshing the color scheme for each federation. Called metaprism, this year's approach takes traditional federation colors and augments them through the lens of light and movement.
                 Each design pushed each federation color palette in a unique direction while maintaining the country's aesthetic identity."
            />
            <PodcastCard
                color="green"
                imageUrl="./src/assets/news3.jpg"
                title="Nike Air Max Dn: The Next Era of Air"
                date="Fri, May 15th 2024"
                description="Appearing for the first time in the Nike Air Max Dn, Dynamic Air is realized in a new dual-chamber, four-tubed Nike Air unit designed for unreal comfort, a smooth stride and max bounce. The dual-pressure air unit is comprised of two pressurized chambers, each with two tubes. The two chambers are specifically tuned with higher pressure in the back two tubes (15 psi) and lower pressure in the front two tubes (5 psi). "
            />
            <PodcastCard
                color="yellow"
                imageUrl="./src/assets/news4.jpg"
                title="Nike Commits $3.2 Million to Fund Football Programs for Indigenous Youth, Partners With NFL Clubs"
                date="Mon, May 5th 2024"
                description="Through Nike's five-year, $3.2 million investment, each NFL club can receive $20,000 per year to collaborate with local Indigenous nonprofits and other organizations and fund football-based programs for youth in Native American communities."
            />
        </div>
    </section>
);

export default News;