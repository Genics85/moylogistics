import Carousel from "../../components/Carousel";
import carousel_1 from "../../assets/images/homepage/carousel_1.png";
import carousel_2 from "../../assets/images/homepage/carousel_2.png";
import plane_bg from "../../assets/images/homepage/our_solutions_plane.png";
import sea_transport from "../../assets/icons/homepage/sea_transport.svg";
import warehousing from "../../assets/icons/homepage/warehousing.svg";
import air_fright from "../../assets/icons/homepage/air_fright.svg";
import local_shipping from "../../assets/icons/homepage/local_shipping.svg";

function Home() {
  return (
    <main className="flex flex-col gap-20">
      {/* Carousel */}
      <section className="relative">
        <Carousel images={[carousel_1, carousel_2]} />
        <p className="absolute top-1/3 left-1/2 -translate-x-1/2 leading-[40px] text-white font-bold text-[40px]">
          {" "}
          Logistics Supply Chain Partner
          <br /> to any Destination in the World
        </p>
      </section>
      {/* Our Solutions */}
      <section className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-1">
          <p className="section-header">Our Solutions</p>
          <div className="h-1 w-[90px] bg-[#4d8147]"></div>
        </div>
        <p className=" w-[650px] text-[0.9rem] font-medium leading-[18px] text-center ">
          As well as being a global leader in container shipping , our worldwide
          teams of industry specific experts mean we can offer our customers
          round-the-clock personalised service. This ensures we deliver fast and
          reliable transit times, and that we provide the best solutions for
          your needs.
        </p>
        <div
          className="h-[270px] bg-cover flex gap-2 w-[90%]"
          style={{ backgroundImage: `url(${plane_bg})` }}
        >
          <div className="flex w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-60">
            <div className="flex items-center gap-5 flex-col ">
              <img src={sea_transport} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                Sea Transport
                <br />
                Services
              </p>
            </div>
          </div>
          <div className="flex w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-40">
            <div className="flex items-center gap-5 flex-col ">
              <img src={warehousing} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                Warehousing
                <br />
                Services
              </p>
            </div>
          </div>
          <div className="flex w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-40">
            <div className="flex items-center gap-5 flex-col ">
              <img src={air_fright} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                Air Fright
                <br />
                Services
              </p>
            </div>
          </div>
          <div className="flex w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-40">
            <div className="flex items-center gap-5 flex-col ">
              <img src={local_shipping} alt="" />
              <p className="text-white text-[24px] font-semibold text-center">
                Local Shipping
                <br />
                Services
              </p>
            </div>
          </div>
          <div className="flex w-1/5 h-full items-center justify-center bg-[#1a2914] opacity-60">
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
    </main>
  );
}

export default Home;
