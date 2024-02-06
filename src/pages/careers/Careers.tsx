import home_icon from "../../assets/icons/services/home_icon.svg";
import read_more from "../../assets/icons/services/service_read_more.svg";
import container_top from "../../assets/images/container-shipping/container_top.png";
import avatar from "../../assets/images/services/avatar.png";
import star from "../../assets/icons/services/star.svg";
import quotation from "../../assets/icons/services/quotation.svg";
import back from "../../assets/icons/services/back.svg";
import forward from "../../assets/icons/services/forward.svg";
import banner_d from "../../assets/images/careers/careers_background_d.png";
import banner_t from "../../assets/images/careers/careers_background_t.png";
import ltl_video from "../../assets/images/ltl-freight/ltl_video.png";
import why_career from "../../assets/images/careers/why_a_career.png";
import our_culture from "../../assets/images/careers/our_culture.png";
import in_community from "../../assets/images/careers/in_the_community.png";
import brands_d from "../../assets/images/careers/brands_d.png";
import brands_t from "../../assets/images/careers/brands_t.png";
import brands_m from "../../assets/images/careers/brands_m.png";
import { NavLink } from "react-router-dom";

function Careers() {
  return (
    <main className="flex flex-col gap-2 text-[#1A2914]">
      <section
        className="flex flex-col bg-cover bg-center gap-5 text-white h-[670px] md:h-[700px]  lg:h-[403px]"
        style={{
          backgroundImage: `url(${
            window.innerWidth >= 768 ? banner_d : banner_t
          })`,
        }}
      >
        <div className="bg-[#1B410B] bg-opacity-70 h-full">
          <div className="bg-primary_green w-full flex items-center justify-center h-[50px]">
            <p className="font-semibold">Call Us Today: (800) 29940123</p>
          </div>
          <div className="flex flex-col items-start gap-6 pt-12 h-full pl-3 lg:pl-20 ">
            <p className="section-header text-white">
              Career at MOY Logistics{" "}
            </p>
            <p className="font-bold text-[18px]">About MOY Logistics</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Let’s Build Something Extraordinary Together! We are one united
              team working to solve shipping challenges for our customers.
            </p>
            <button className="clear-btn bg-white">View Open positions</button>
          </div>
        </div>
      </section>
      <section className="pl-4 pt-0 lg:p-20 lg:pt-0 gap-14 flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col gap-10 itemx-center md:items-start lg:items-center">
          <div className="flex items-center self-start gap-2 text-[13px]">
            <div className="w-[18px]">
              <img src={home_icon} alt="" />
            </div>
            <p>/ Career at MOY Logistics</p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Why Career Here?{" "}
            </p>
            <div>
              <img src={why_career} alt="" />
            </div>
            <p className="point-p">
              Start your career with a company focused on tech, innovation &
              FUN.
              <br />
              <br /> MOY Logistics was founded to help businesses and
              individuals ship easier & smarter with technology and time-saving
              online tools. Our advanced proprietary Transportation
              <br />
              <br /> Management System (TMS) platform streamlines the shipping
              process and matches each unique shipment to the best value of
              price, equipment, and transit time.
              <br />
              <br /> Our eyes are always on the end game – helping our customers
              ship easier. We have a passion for helping others and focus on
              services and solutions that deliver guidance, convenience, and
              savings for shippers everywhere.
              <br />
              <br /> With the best, most innovative shipping technology
              platform, we are on a mission to simplify shipping for everyone,
              and we proudly wear the hat of “shipping nerd.”
            </p>
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              MOY Logistics | In the Community
            </p>
            <div>
              <img src={in_community} alt="" />
            </div>
            <p className="point-p">
              At MOY Logistics, giving back is part of our core values. We focus
              on initiatives that will positively impact the lives and
              businesses in our community, both now and in the future. Over the
              years, we have partnered with several local and national
              non-profit organizations and continue to focus on doing good in
              our communities.
            </p>
            <p className="point-p">
              MOY Logistics Recent Community Involvement Includes:
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">
                  Adopt-A-Mile: Our team helped clean up trash and debris from
                  the roadway to keep the earth healthy and motorists safe.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">
                  Be a Santa to a Senior: We came together and collected and
                  donated gifts from the wish lists of senior citizens in
                  assisted living facilities bringing added holiday joy.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">
                  F.E.A.S.T.: Over the holidays, we did our part to put tasty
                  holiday food on the tables of people in our community by
                  donating non-perishable items.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">
                  Habitat for Humanity: We rolled up our sleeves to help build
                  and paint houses.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">
                  Toys for Tots: We made sure these great kids got special toys
                  for the holidays.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">
                  Disabled Veterans of America: As a veteran-owned business, we
                  take pride in helping veterans nationwide.
                </p>
              </div>
            </div>
            <div className=" self-center lg:w-[770px]">
              <img src={ltl_video} alt="" />
            </div>
            <p className="point-p">
              We’re always ready to meet talented people and expand our team.
              <br />
              <br />
              Shaping the future begins at a place where you feel welcome; part
              of the team, and where you can contribute. If you are ready to
              grow your career at a company where you can make an impact and if
              you want to be a part of a winning team, then let’s make it
              happen! Check out some of the additional benefits of working at
              MOY Logistics!
            </p>
            <div className="flex self-start flex-col gap-1">
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Medical, Vision, and Dental</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Paid Time Off</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Life Insurance</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Competitive 401(K)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Our Culture – #FCLIFE
            </p>
            <p className="section-header text-[16px]">
              See what a career is like at MOY Logistics. It’s pretty awesome!
            </p>
            <p className="point-p">
              Our backbone is our dedicated shipping experts, who provide our
              customers with the guidance they need. We are a group of
              hard-working individuals who believe in the motto, “why can’t you
              have fun and be the best at what you do?” Our relaxed company
              culture focuses on creativity, ambition, and the individual
              successes of our team members.
              <br />
              <br /> What’s your passion? We encourage everyone to bring
              options, join the conversation, and tell us your thoughts and
              ideas to improve and deliver a better experience to our customers.
              <br />
              <br /> Balance. The cliché “Work Hard, Play Hard.” YEP, we agree!
              <br />
              <br /> Team. You’re a vital piece of the puzzle where amazing
              things happen.
              <br />
              <br /> Healthy Lifestyle. Break room with healthy choices and
              great snacks (PB&Js all day long). Fun. Relax, take a break and
              clear your mind in the game room!
              <br />
              <br /> Events. From happy hours, fan days, and local parades to
              donation drives, we always have something going on! We can
              honestly say you won’t be bored.
            </p>
            <div>
              <img src={our_culture} alt="" />
            </div>
          </div>
          <div className="flex self-center md:self-start flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              What We Care About
            </p>
            <p className="point-p">
              People, knowledge, and technology all work together to deliver a
              better shipping experience for every customer.
            </p>
            <p className="section-header text-[16px]">Our Core Values:</p>
            <p className="point-p">
              Go ALL in, and obsess over customer success.
              <br />
              <br /> Trust and support. Work hard for each other; everyone has a
              voice, and we’re all in this together.
              <br />
              <br /> Bring on the fun for customers & each other. Make each
              other smile; it’s contagious.
              <br />
              <br /> Meaningful community contribution. Giving back generously.
              <br />
              <br /> Persistence. Continual, relentless pursuit of solutions.
              <br />
              <br /> Listen, and commit to doing your best.
            </p>
          </div>
          <div className="">
            <img className="md:hidden" src={brands_m} alt="" />
            <img className="hidden md:block lg:hidden" src={brands_t} alt="" />
            <img className="hidden lg:block" src={brands_d} alt="" />
          </div>
          <div className="flex self-center md:self-start flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Recognition
            </p>
            <p className="point-p">
              MOY Logistics employees have been recognized as some of the Tampa
              Bay area’s top employees. MOY Logistics continuously garners
              awards for growth and development as a company.
              <br />
              <br /> “As a veteran-owned business, we firmly believe in the
              Marines’ Toys for Tots mission to help children in our area
              experience joy this holiday season. Each year I see our community
              grow stronger through acts of charitable giving and service.”
              <br />
              <br /> Matthew J. Brosious (CEO, Co-Founder, and Veteran U.S Army
              Ranger)
            </p>
          </div>
          <div className="flex self-center md:self-start flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Joining Our Team
            </p>
            <p className="point-p">
              We’re looking for people to join the team who are as excited as we
              are about freight shipping.
            </p>
            <button className="clear-btn">View Open Positions</button>
          </div>
        </div>
      </section>
      <section className="p-4 pt-10 gap-10  lg:p-20  flex flex-col">
        <p className="section-header">Related links</p>
        <div className="flex gap-10 flex-col lg:flex-row justify-between">
          <div className=" lg:w-1/2 ">
            <img src={container_top} alt="" />
          </div>
          <div className="flex lg:w-1/2 flex-col w-full ">
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Freight Services
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">Freight Rates</p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <NavLink
              to={"service/ltl-freight"}
              className="flex p-4 border-t border-solid border-gray-300 items-center justify-between"
            >
              <p className="text-primary_green font-semibold">LTL Freight</p>
              <img src={read_more} className="w-[28px]" alt="" />
            </NavLink>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Flatbed Solutioins
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Small Business Shipping Services
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Residential Shipping
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Furniture Shipping Shipping
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <NavLink
              to={"service/truckload"}
              className="flex p-4 border-t border-solid border-gray-300 items-center justify-between"
            >
              <p className="text-primary_green font-semibold">
                Truckload Equiptment
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </NavLink>
            <NavLink
              to={"/service/rail-freight"}
              className="flex p-4 border-t border-solid border-gray-300 items-center justify-between"
            >
              <p className="text-primary_green font-semibold">
                Rail/ Intermodal Shipping
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </NavLink>
            <button className="clear-btn mt-5 self-center">
              Get a Freight Quote
            </button>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-20 pt-20 ">
        <section className="flex flex-col w-full items-center justify-center gap-10">
          <p className=" section-header ">What our customers are saying</p>
          <div className="flex w-[90%] gap-5">
            <button>
              <img src={back} alt="" />
            </button>
            <div className="flex w-full gap-x-20 no-scrollbar overflow-x-auto">
              <div className="flex flex-col gap-5 w-[100%] lg:w-1/3 shrink-0">
                <div className="w-[21px]">
                  <img src={quotation} alt="" />
                </div>
                <p className="font-semibold text-[23px]">
                  Great Service At Low Price
                </p>
                <p className="text-[13px] leading-[17px]">
                  Great Service At Low Price and amazing customer service
                </p>
                <div className="flex gap-2 items-center">
                  <div className="w-[47px]">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[13px] font-semibold">Steve Rogers</p>
                    <div className="flex">
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-[100%] lg:w-1/3 shrink-0">
                <div className="w-[21px]">
                  <img src={quotation} alt="" />
                </div>
                <p className="font-semibold text-[23px]">
                  Great Service At Low Price
                </p>
                <p className="text-[13px] leading-[17px]">
                  Great Service At Low Price and amazing customer service
                </p>
                <div className="flex gap-2 items-center">
                  <div className="w-[47px]">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[13px] font-semibold">Steve Rogers</p>
                    <div className="flex">
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-[100%] lg:w-1/3 shrink-0">
                <div className="w-[21px]">
                  <img src={quotation} alt="" />
                </div>
                <p className="font-semibold text-[23px]">
                  Great Service At Low Price
                </p>
                <p className="text-[13px] leading-[17px]">
                  Great Service At Low Price and amazing customer service
                </p>
                <div className="flex gap-2 items-center">
                  <div className="w-[47px]">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[13px] font-semibold">Steve Rogers</p>
                    <div className="flex">
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                      <img width={"18px"} src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button>
              <img src={forward} alt="" />
            </button>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="bg-primary_green px-4 py-10 flex flex-col gap-5 items-center justify-center">
            <p className="section-header text-center text-white">
              Let's Get Started! Compare shipping rates in an instant!
            </p>
            <button className="clear-btn bg-white">
              <p className="px-5">Get a Quote</p>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Careers;
