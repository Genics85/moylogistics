import Carousel from "../../components/Carousel";
import carousel_1 from "../../assets/images/homepage/carousel_1.png";
import carousel_2 from "../../assets/images/homepage/carousel_2.png";
import plane_bg from "../../assets/images/homepage/our_solutions_plane.png";
import shipment_needs from "../../assets/images/homepage/shipment_needs_bg.png";
import sea_transport from "../../assets/icons/homepage/sea_transport.svg";
import warehousing from "../../assets/icons/homepage/warehousing.svg";
import air_fright from "../../assets/icons/homepage/air_fright.svg";
import local_shipping from "../../assets/icons/homepage/local_shipping.svg";
import liquid_transportation from "../../assets/images/homepage/liquid_transport.png";
import packaging_solutions from "../../assets/images/homepage/packaging_solution.png";
import contract_logistics from "../../assets/images/homepage/contract_logistics.png";
import warehouse_distribution from "../../assets/images/homepage/warehouse_distribution.png";
import specialized_transport from "../../assets/images/homepage/specialized_transport.png";
import containers from "../../assets/images/homepage/containers.png";
import discover_1 from "../../assets/images/homepage/discover-1.png";
import discover_2 from "../../assets/images/homepage/discover-2.png";
import discover_3 from "../../assets/images/homepage/discover-3.png";
import discover_4 from "../../assets/images/homepage/discover-4.png";
import read_more from "../../assets/icons/homepage/read_more.svg";
import chevron_left from "../../assets/icons/homepage/chevron-left-round.svg";
import chevron_right from "../../assets/icons/homepage/chevron-right-round.svg";
import opportunity from "../../assets/images/homepage/opportunity.png";
import ship_everyware from "../../assets/icons/homepage/ship_everywhere.svg";
import support from "../../assets/icons/homepage/support.svg";
import transparent_pricing from "../../assets/icons/homepage/transport_pricing.svg";
import flight_logo from "../../assets/icons/homepage/flight_logo.svg";
import footer_banner from "../../assets/images/homepage/footer_banner.png";

function Home() {
  return (
    <main className="flex flex-col gap-20">
      {/* Carousel */}
      <section className="relative">
        <Carousel images={[carousel_1, carousel_2]} />
        <p className="absolute top-1/3 left-1/2 -translate-x-1/2 leading-[23px] md:leading-[40px] text-white font-bold text-[20px] md:text-[40px]">
          {" "}
          Logistics Supply Chain Partner
          <br /> to any Destination in the World
        </p>
      </section>
      {/* Our Solutions */}
      <section className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <p className="section-header">Our Solutions</p>
          <div className="h-1 w-[90px] bg-[#4d8147]"></div>
        </div>
        <p className="w-full p-2 md:w-[650px] text-[0.9rem] font-medium leading-[18px] text-center ">
          As well as being a global leader in container shipping , our worldwide
          teams of industry specific experts mean we can offer our customers
          round-the-clock personalised service. This ensures we deliver fast and
          reliable transit times, and that we provide the best solutions for
          your needs.
        </p>
        <div
          className="h-[270px] overflow-x-auto bg-cover flex gap-2 w-[90%]"
          style={{ backgroundImage: `url(${plane_bg})` }}
        >
          <div className="flex w-1/2 shrink-0 md:w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-60">
            <div className="flex items-center gap-5 flex-col ">
              <img src={sea_transport} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                Sea Transport
                <br />
                Services
              </p>
            </div>
          </div>
          <div className="flex w-1/2 shrink-0 md:w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-40">
            <div className="flex items-center gap-5 flex-col ">
              <img src={warehousing} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                Warehousing
                <br />
                Services
              </p>
            </div>
          </div>
          <div className="flex w-1/2 shrink-0 md:w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-40">
            <div className="flex items-center gap-5 flex-col ">
              <img src={air_fright} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                Air Fright
                <br />
                Services
              </p>
            </div>
          </div>
          <div className="flex w-1/2 shrink-0 md:w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-40">
            <div className="flex items-center gap-5 flex-col ">
              <img src={local_shipping} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                Local Shipping
                <br />
                Services
              </p>
            </div>
          </div>
          <div className="flex w-1/2 shrink-0 md:w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-60">
            <div className="flex items-center gap-5 flex-col ">
              <img src={local_shipping} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                In Land
                <br />
                Services
              </p>
            </div>
          </div>
        </div>
        <button className="clear-btn">See all solutions</button>
      </section>
      {/* Your shipment needs met */}
      <section className="relative flex flex-col items-center justify-center gap-10 pb-[180px]">
        <div
          className="h-[270px] bg-cover flex items-center justify-end pr-10 gap-2 w-full"
          style={{ backgroundImage: `url(${shipment_needs})` }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col gap-10 items-center">
              <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-center font-bold text-[24px] text-white">
                  MOY logistics Storage <br /> Solutions
                </p>
                <div className="h-1 w-[90px] bg-[#4d8147]"></div>
              </div>
              <button className="clear-btn w-fit text-[14px] px-2 bg-white">
                More about storage solutions
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="section-header">Your Shipping Needs Met</p>
          <div className="h-1 w-[90px] bg-[#4d8147]"></div>
        </div>
        <p className=" w-full p-2 md:w-[750px] text-[0.9rem] font-medium leading-[18px] text-start ">
          At MOY Logistics we pride ourselves on being a global container
          shipping company that delivers tailored solutions designed to meet the
          specific needs of each of our customers. Regardless of your cargo
          type, or final destination, we offer versatile solutions that cover
          air, land, and sea.
          <br />
          <br /> Thanks to the extensive capacity of our container fleet, MOY
          Logistics is the trusted transportation partner and shipping company
          for numerous companies the world over. Combining this with our global
          port coverage and extensive equipment availability means, we are able
          to deliver a professional, efficient shipping service, tailored to the
          specific needs of your business.
        </p>
        <div className=" z-10 h-[250px] overflow-x-auto bg-cover flex items-center gap-2 w-[90%]">
          <div
            className="flex w-1/2 shrink-0 md:w-1/5 h-full items-end justify-start "
            style={{ backgroundImage: `url(${liquid_transportation})` }}
          >
            <div className="w-full">
              <div className="flex gap-1 flex-col text-white p-4 bg-gradient-to-t to-transparent from-[#0f2506] ">
                <p className="text-[18px] font-semibold">
                  Liquid Transportation
                </p>
                <p>Premium Tankers</p>
              </div>
            </div>
          </div>
          <div
            className="flex w-1/2 shrink-0 md:w-1/5 h-full items-end justify-start "
            style={{ backgroundImage: `url(${packaging_solutions})` }}
          >
            <div className="w-full">
              <div className="flex gap-1 flex-col text-white p-4 bg-gradient-to-t to-transparent from-[#0f2506] ">
                <p className="text-[18px] font-semibold">Packaging Solutions</p>
                <p>Warehouse Solutions</p>
              </div>
            </div>
          </div>
          <div
            className="flex w-1/2 shrink-0 md:w-1/5 h-full items-end justify-start "
            style={{ backgroundImage: `url(${contract_logistics})` }}
          >
            <div className="w-full">
              <div className="flex gap-1 flex-col text-white p-4 bg-gradient-to-t to-transparent from-[#0f2506] ">
                <p className="text-[18px] font-semibold">Contract Logistics</p>
                <p>Road Transportation</p>
              </div>
            </div>
          </div>
          <div
            className="flex w-1/2 shrink-0 md:w-1/5 h-full items-end justify-start "
            style={{ backgroundImage: `url(${warehouse_distribution})` }}
          >
            <div className="w-full">
              <div className="flex gap-1 flex-col text-white p-4 bg-gradient-to-t to-transparent from-[#0f2506] ">
                <p className="text-[18px] font-semibold">
                  Warehouse & Distribution
                </p>
                <p>Large Warehouse</p>
              </div>
            </div>
          </div>
          <div
            className="flex w-1/2 shrink-0 md:w-1/5 h-full items-end justify-start "
            style={{ backgroundImage: `url(${specialized_transport})` }}
          >
            <div className="w-full">
              <div className="flex gap-1 flex-col text-white p-4 bg-gradient-to-t to-transparent from-[#0f2506] ">
                <p className="text-[18px] font-semibold">
                  Specialized Transport
                </p>
                <p>Ocean Transports</p>
              </div>
            </div>
          </div>
        </div>
        <button className="clear-btn">More Work</button>
        <div className="absolute bottom-0 border-4 border-solid border-primary_green w-full bg-transparent h-[300px]"></div>
      </section>
      {/* moving the world together */}
      <section
        className=" relative w-full h-[550px] "
        style={{ backgroundImage: `url(${containers})` }}
      >
        <div className="absolute w-full flex flex-col justify-between pt-14 pb-4 h-full bg-black bg-opacity-70">
          <div className="flex flex-col items-center justify-center gap-5 ">
            <div className="flex flex-col items-center gap-2">
              <p className="section-header text-white">
                Moving the World, Together
              </p>
              <div className="h-1 w-[90px] bg-white"></div>
            </div>
            <p className="text-white text-center text-[13px] w-full p-2 md:w-[600px] leading-[20px] ">
              Our global shipping network is developed for our customers. By
              focusing on delivering best-in-class service to our customers, we
              are always available to help you with your particular needs and
              offer you a one-stop-shop solution for your next shipping request.
            </p>
            <button className="clear-btn bg-white">More Read</button>
          </div>
          <div className="w-full hidden md:flex justify-center  gap-5 border-t-[0.2px] border-solid border-[#969696]">
            <div className="flex gap-2 border-solid border-[#969696] border-r-[1px] pt-5 pr-10 pb-10">
              <p className="text-[40px] text-white font-bold">24</p>
              <div className="flex items-center gap-2">
                <div className="w-[12px] h-[12px] bg-white"></div>
                <p className="text-white">Our Location</p>
              </div>
            </div>
            <div className="flex gap-2 border-solid border-[#969696] border-r-[1px] pt-5 pr-0 md:pr-10 pb-10">
              <p className="text-[20px] md:text-[40px] text-white font-bold">
                1294
              </p>
              <div className="flex items-center gap-2">
                <div className="w-[12px] h-[12px] bg-white"></div>
                <p className="text-white">Delivered Packages</p>
              </div>
            </div>
            <div className="flex gap-2 border-solid border-[#969696] border-r-[1px] pt-5 pr-10 pb-10">
              <p className="text-[40px] text-white font-bold">3594</p>
              <div className="flex items-center gap-2">
                <div className="w-[12px] h-[12px] bg-white"></div>
                <p className="text-white">Satisfied Clients</p>
              </div>
            </div>
            <div className="flex gap-2 pt-5 pr-10 pb-10">
              <p className="text-[40px] text-white font-bold">247+</p>
              <div className="flex items-center gap-2">
                <div className="w-[12px] h-[12px] bg-white"></div>
                <p className="text-white">Owned Vehicles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 ">
        <div className="flex flex-col items-center gap-2">
          <p className="section-header text-center">
            Discover the Latest News About MOY Logistics
          </p>
          <div className="h-1 w-[90px] bg-[#4d8147]"></div>
        </div>
        <div className="flex gap-2 items-center w-full ">
          <button className="w-[66px]">
            <img src={chevron_right} alt="" />
          </button>

          <div className="flex gap-2 w-full overflow-x-auto">
            <div
              className="flex font-bold flex-col text-white w-3/5 shrink-0 md:w-1/4 h-[350px] justify-between items-start"
              style={{ backgroundImage: `url(${discover_1})` }}
            >
              <div className="bg-primary_green ml-3 flex py-1 px-3 items-center justify-center ">
                <p>United States</p>
              </div>
              <div className="flex flex-col gap-2  bg-gradient-to-t from-black via-[#000000a8] to-transparent w-full  pb-2 pt-4 px-3">
                <p className="">29/12/2023</p>
                <p className="text-[28px] ">Moving the World, Together.</p>
                <div className="flex pt-1 gap-2 items-center">
                  <p>Read More</p>
                  <div className="w-[24px]">
                    <img src={read_more} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex font-bold flex-col text-white w-3/5 shrink-0 md:w-1/4 h-[350px] justify-between items-start"
              style={{ backgroundImage: `url(${discover_2})` }}
            >
              <div className="bg-primary_green ml-3 flex py-1 px-3 items-center justify-center ">
                <p>United States</p>
              </div>
              <div className="flex flex-col gap-2  bg-gradient-to-t from-black via-[#000000a8] to-transparent w-full  pb-2 pt-4 px-3">
                <p className="">29/12/2023</p>
                <p className="text-[28px] ">Moving the World, Together.</p>
                <div className="flex pt-1 gap-2 items-center">
                  <p>Read More</p>
                  <div className="w-[24px]">
                    <img src={read_more} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex font-bold flex-col text-white w-3/5 shrink-0 md:w-1/4 h-[350px] justify-between items-start"
              style={{ backgroundImage: `url(${discover_3})` }}
            >
              <div className="bg-primary_green ml-3 flex py-1 px-3 items-center justify-center ">
                <p>United States</p>
              </div>
              <div className="flex flex-col gap-2  bg-gradient-to-t from-black via-[#000000a8] to-transparent w-full  pb-2 pt-4 px-3">
                <p className="">29/12/2023</p>
                <p className="text-[28px] ">Moving the World, Together.</p>
                <div className="flex pt-1 gap-2 items-center">
                  <p>Read More</p>
                  <div className="w-[24px]">
                    <img src={read_more} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex font-bold flex-col text-white w-3/5 shrink-0 md:w-1/4 h-[350px] justify-between items-start"
              style={{ backgroundImage: `url(${discover_4})` }}
            >
              <div className="bg-primary_green ml-3 flex py-1 px-3 items-center justify-center ">
                <p>United States</p>
              </div>
              <div className="flex flex-col gap-2  bg-gradient-to-t from-black via-[#000000a8] to-transparent w-full  pb-2 pt-4 px-3">
                <p className="">29/12/2023</p>
                <p className="text-[28px] ">Moving the World, Together.</p>
                <div className="flex pt-1 gap-2 items-center">
                  <p>Read More</p>
                  <div className="w-[24px]">
                    <img src={read_more} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="w-[66px]">
            <img src={chevron_left} alt="" />
          </button>
        </div>
        <button className="clear-btn">See all news</button>
      </section>
      {/* customer advisories */}
      <section className="flex flex-col items-center justify-center gap-10 bg-[#EDF1EB] pt-10 pb-20">
        <div className="flex justify-between w-[90%] ">
          <p className="section-header text-primary_green">
            CUSTOMER ADVISORIES
          </p>
          <div className="flex pt-1 gap-2 items-center">
            <p className="text-primary_green">Read More</p>
            <div className="w-[24px]">
              <img src={read_more} alt="" />
            </div>
          </div>
        </div>
        <div className=" gap-2 hidden md:flex">
          <button className="w-[66px]">
            <img src={chevron_right} alt="" />
          </button>
          <div className="flex gap-2 w-full">
            <div className="px-1 text-[#1a2914] py-5 flex flex-col gap-4 w-1/4 font-bold bg-white rounded-md">
              <p>29/12/2023</p>
              <p className="text-[28px] leading-[28px]">
                EU Price Announcement- Trade from Sri lanka &Bangladesh To
                Europe
              </p>
              <p className="text-[#676f64]">
                EU Price Announcement- Trade from Sri lanka &Bangladesh To
                Europe
              </p>
            </div>
            <div className="px-1 text-[#1a2914] py-5 flex flex-col gap-4 w-1/4 font-bold bg-white rounded-md">
              <p>29/12/2023</p>
              <p className="text-[28px] leading-[28px]">
                EU Price Announcement- Trade from Sri lanka &Bangladesh To
                Europe
              </p>
              <p className="text-[#676f64]">
                EU Price Announcement- Trade from Sri lanka &Bangladesh To
                Europe
              </p>
            </div>
            <div className="px-1 text-[#1a2914] py-5 flex flex-col gap-4 w-1/4 font-bold bg-white rounded-md">
              <p>29/12/2023</p>
              <p className="text-[28px] leading-[28px]">
                EU Price Announcement- Trade from Sri lanka &Bangladesh To
                Europe
              </p>
              <p className="text-[#676f64]">
                EU Price Announcement- Trade from Sri lanka &Bangladesh To
                Europe
              </p>
            </div>
            <div className="px-1 text-[#1a2914] py-5 flex flex-col gap-4 w-1/4 font-bold bg-white rounded-md">
              <p>29/12/2023</p>
              <p className="text-[28px] leading-[28px]">
                EU Price Announcement- Trade from Sri lanka &Bangladesh To
                Europe
              </p>
              <p className="text-[#676f64]">
                EU Price Announcement- Trade from Sri lanka &Bangladesh To
                Europe
              </p>
            </div>
          </div>
          <button className="w-[66px]">
            <img src={chevron_left} alt="" />
          </button>
        </div>
      </section>
      {/* Opportunity */}
      <section className="flex flex-col md:flex-row items-center justify-start pt-20 gap-10 text-[#1a2914]">
        <div className=" relative h-auto  pl-[5%] py-[5%] ">
          <div className="absolute -z-10 left-0 top-0 border-2 border-solid border-primary_green h-[100%] w-[90%] "></div>
          <div className=" w-full md:w-[600px] relative">
            <img src={opportunity} alt="" />
            <div className="absolute left-1/2 -translate-x-[50%] bottom-0 bg-white items-center p-3 flex gap-2">
              <div className="w-[50px]">
                <img src={flight_logo} alt="" />
              </div>
              <p>
                Moving your products <br />
                across borders
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col gap-4 items-start">
            <div className="border-l-[3px] text-[12px] border-solid px-1 border-primary_green bg-[#E8E8E880]">
              Why Choose
            </div>
            <div className="section-header">
              We create opportunity to
              <br /> reach potential
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <img className="w-[47px]" src={ship_everyware} alt="" />
              <p>Ship Everyware</p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-[47px]" src={support} alt="" />
              <p>24/7 Support</p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-[47px]" src={transparent_pricing} alt="" />
              <p>Transparent Pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="flex flex-col text-primary_green items-center justify-center ">
        <div
          className="h-[270px] bg-cover flex items-center justify-end pr-10 gap-2 w-full"
          style={{ backgroundImage: `url(${footer_banner})` }}
        ></div>
      </section>
    </main>
  );
}

export default Home;
