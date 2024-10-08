// Import client images dynamically
import teamImgFirst from "../../assets/images/team/team-01.png";
import teamImgSecond from "../../assets/images/team/team-02.png";
import teamImgThird from "../../assets/images/team/team-03.png";
import teamImgFourth from "../../assets/images/team/team-04.png";

const clientsData = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Software Engineer",
    image: teamImgFirst,
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Product Manager",
    image: teamImgSecond,
  },
  {
    id: 3,
    name: "Charlie Davis",
    role: "UI/UX Designer",
    image: teamImgThird,
  },
  {
    id: 4,
    name: "Diana Adams",
    role: "Data Scientist",
    image: teamImgFourth,
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Clients
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4"
            >
              <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                  <img
                    src={client.image}
                    alt={`${client.name} image`}
                    className="h-[120px] w-[120px] rounded-full"
                  />
                  <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                  <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                    <svg
                      width="55"
                      height="53"
                      viewBox="0 0 55 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5118 3.1009C13.3681 3.1009 14.0622 2.40674 14.0622 1.55045C14.0622 0.69416 13.3681 0 12.5118 0C11.6555 0 10.9613 0.69416 10.9613 1.55045C10.9613 2.40674 11.6555 3.1009 12.5118 3.1009Z"
                        fill="#3758F9"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="mb-1 text-xl font-semibold text-dark dark:text-white">
                    {client.name}
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    {client.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
