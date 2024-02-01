import home_icon from "../../assets/icons/services/home_icon.svg";
import check_mark from "../../assets/icons/services/check_mark.svg";
import details_icon from "../../assets/icons/services/more_details.svg";
import read_more from "../../assets/icons/services/service_read_more.svg";
import norto from "../../assets/images/services/norto.png";
import points_one from "../../assets/images/services/points_one.png";
import studio_green from "../../assets/images/services/studio_green.png";
import outofthe_sandbox from "../../assets/images/services/outofthe_sandbox.png";
import avatar from "../../assets/images/services/avatar.png";
import star from "../../assets/icons/services/star.svg";
import quotation from "../../assets/icons/services/quotation.svg";
import back from "../../assets/icons/services/back.svg";
import forward from "../../assets/icons/services/forward.svg";
import certification from "../../assets/icons/services/certification.svg";
import award_tag from "../../assets/icons/services/award_tag.svg";
import freight_truck from "../../assets/images/services/freight_truck.png";
import truck_freight from "../../assets/images/services/truck_freight.png";
import banner_d from "../../assets/images/air-freight/air_freight_shipping_d.png";
import banner_t from "../../assets/images/air-freight/air_freight_shipping_t.png";
import ltl_video from "../../assets/images/ltl-freight/ltl_video.png";
import customers_say from "../../assets/images/partial-truckload/customers_say.png";
import open_plane from "../../assets/images/air-freight/airplane_open.png";

import { NavLink } from "react-router-dom";

function AirFreightShipping() {
  return (
    <main className="flex flex-col gap-2 text-[#1A2914]">
      <section
        className="flex flex-col bg-cover gap-5 text-white h-[670px] md:h-[700px]  lg:h-[403px]"
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
          <div className="flex flex-col items-start gap-10 pt-12 h-full pl-3 lg:pl-20 ">
            <p className="section-header text-white">Air Freight Shipping</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              The fastest way to move freight is by air. The best way to get the
              lowest air freight rates is to book your shipment with MOY
              Logistics. See Rates Instantly, use the calculator, get instant
              rates, and compare quotes in seconds.
            </p>
            <button className="clear-btn bg-white">Get A Freight Quote</button>
          </div>
        </div>
      </section>
      <section className="pl-4 lg:pl-20 gap-14 flex flex-col lg:flex-row justify-between ">
        <div className="flex lg:w-1/2 flex-col gap-5 itemx-center md:items-start lg:items-center">
          <div className="flex items-center self-start gap-2 text-[13px]">
            <div className="w-[18px]">
              <img src={home_icon} alt="" />
            </div>
            <p>
              / Services /{" "}
              <span className="font-semibold ">Air Freight Shipping</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Air Freight Rates Instantly
            </p>
            <p className="point-p">
              See the best air Freight rates from all the top carriers. Just
              fill in a few short details about your shipment and receive
              instant freight shipping quotes from leading freight carriers in
              one easy place. Trust the experts at MOY Logistics to give you the
              best prices and options for your air cargo shipping needs.
            </p>
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Why choose Us For Shipping?
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Shipping Quotes from 50+ carriers</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Instant rates anytime</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Air solutions to anywhere in the world
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Automated tracking, paperwork & invoices
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  24+ years of transportation experience working for you!
                </p>
              </div>
            </div>
          </div>
          <p></p>
        </div>
        <div className="relative bg lg:w-1/2">
          <div className=" lg:absolute w-full -top-40 flex items-center flex-col gap-[24px]">
            <div className=" bg-white p-3 md:p-7 w-full items-start md:items-center md:w-[480px] rounded-[15px] shadow-md flex flex-col lg:items-start gap-[38px] ">
              <p className="font-semibold self-center">
                Logistics rate calculator
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-primary_green font-bold text-[15px]">
                  Shipping option
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex gap-2">
                    <input className=" accent-primary_green" type="radio" />
                    <label className="point-p">LTL(Less-Than-Truckload)</label>
                    <div className="w-[20px]">
                      <img src={details_icon} alt="" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input className=" accent-primary_green" type="radio" />
                    <label className="point-p">Full Truckload</label>
                    <div className="w-[20px]">
                      <img src={details_icon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-primary_green font-bold text-[15px]">
                  Pickup and delivery locations
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px]">
                      Pickup city or postal code
                    </label>
                    <input
                      className=" border border-solid border-[#4d8137] border-opacity-20 rounded-[15px] pl-5 placeholder:text-point-p w-[300px]  md:w-[200px] h-[45px]"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <label className="text-[12px]">
                      Destination city or postal code
                    </label>
                    <input
                      className=" border border-solid border-[#4d8137] border-opacity-20 rounded-[15px] pl-5 placeholder:text-point-p w-full md:w-[200px] h-[45px]"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-primary_green font-bold text-[15px]">
                  Shipment information
                </p>
                <div className="flex flex-col md:flex-row gap-4 ">
                  <div className="flex gap-2 items-end ">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px]">Lenght</label>
                      <input
                        className=" border shrink-0 border-solid border-[#4d8137] border-opacity-20 rounded-s-[20px] px-2 placeholder:text-point-p w-full h-[45px]"
                        type="text"
                        value={"48"}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px]">Width</label>
                      <input
                        className=" border border-solid border-[#4d8137] border-opacity-20 px-2 placeholder:text-point-p w-full h-[45px]"
                        type="text"
                        value={"48"}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px]">Height</label>
                      <input
                        className=" border border-solid border-[#4d8137] border-opacity-20 px-2 placeholder:text-point-p w-full h-[45px]"
                        type="text"
                        value={"48"}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <select className=" bg-white border border-solid border-[#4d8137] border-opacity-20 rounded-e-[20px] pl-5 placeholder:text-point-p h-[45px]">
                        <option value="">ln</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px]">Weight</label>
                    <div className="flex gap-1 w-full md:w-[150px]">
                      <input
                        className=" border border-solid border-[#4d8137] border-opacity-20 rounded-s-[20px] pl-5 placeholder:text-point-p w-1/2 h-[45px]"
                        type="text"
                        value={"1000"}
                      />
                      <select className=" bg-white border border-solid border-[#4d8137] border-opacity-20 rounded-e-[20px] pl-5 placeholder:text-point-p w-1/2 h-[45px]">
                        <option value="">lbs</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button className="clear-btn self-center">View my Rate </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <p className="point-p font-semibold">
                  Want To Learn More About Truckload Shipping?
                </p>
              </div>
              <NavLink
                to={"/service/ltl-freight"}
                className="flex gap-4 items-center"
              >
                <p className="text-primary_green font-semibold">LTL FREIGHT</p>
                <img src={read_more} className="w-[28px]" alt="" />
              </NavLink>
              <NavLink
                to={"/service/partial-truckload"}
                className="flex gap-4 items-center"
              >
                <p className="text-primary_green font-semibold">
                  PARTIAL TRUCKLOAD
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </NavLink>
              <NavLink
                to={"/service/truckload"}
                className="flex gap-4 items-center"
              >
                <p className="text-primary_green font-semibold">
                  TRUCKLOAD FREIGHT
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-20 pt-20 ">
        <section className="flex w-full items-center lg:mt-5 justify-center">
          <div className="flex  flex-col  lg:flex-row">
            <div className="w-[160px] md:w-[230px]">
              <img src={studio_green} alt="" />
            </div>
            <div className=" w-[160px] border-[2px] border-solid border-primary_green  md:w-[230px]">
              <img src={norto} alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-[160px] md:w-[230px] border-[2px] border-solid border-primary_green ">
              <img src={points_one} alt="" />
            </div>
            <div className="w-[160px] md:w-[230px] border-[2px] border-solid  border-primary_green ">
              <img src={outofthe_sandbox} alt="" />
            </div>
          </div>
        </section>
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
          <div className="p-4 md:p-10 flex gap-2 flex-col mt-10 items-center bg-[#EDF1EB]">
            <p className="text-[13px] font-semibold">Our Certification</p>
            <p className="section-header">Awards and Endorsements</p>
            <div className="flex relative flex-col lg:flex-row mt-10 gap-5 lg:gap-24 ">
              <img
                className="absolute w-[150px] hidden lg:flex -top-16 -left-16"
                src={award_tag}
                alt=""
              />
              <img
                className="absolute w-[150px] hidden lg:flex -top-16 -right-5"
                src={award_tag}
                alt=""
              />
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2021, 2017 & 2016 Food Logistics' Top Green Providers
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2020 & 2019 Top Food Logistics' 3PL & Cold Storage
                      Provider Award
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2020 & 2019 Business Observer's Top 500 Companies on the
                      Gulf Coast
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2020 & 2017 SmartWay® Transport Partner
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2020 & 2017 Food Logistics' Champions: Rock Stars of the
                      Supply Chain
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2020 Best of Palm Harbor Awards for Local Businesses
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2017 Green Supply Chain Award from Supply & Demand Chain
                      Executive
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2016, 2015, & 2012 Food Logistics Top 100 Software and
                      Technology Providers
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2013 Tampa Bay Business 100 by Tampa Bay Business Journal
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2012 TIA Samaritan Award Honorable Mention
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2012, 2011 & 2010 TBBJ Fast 50 Recipient
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="check-mark-w">
                    <img src={certification} alt="" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      2013, 2011, & 2010 Diversity Business Top Businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex p-4 flex-col lg:flex-row w-full justify-center items-center gap-12">
          <div className="w-full md:w-[600px] lg:w-[510px] ">
            <img src={customers_say} alt="" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
            <p className="section-header">
              What Our Customers Say about our Air Service
            </p>
            <p className="section-header text-[18px]">
              Why Use Air Freight Shipping?
            </p>
            <p className="point-p">
              Air freight shipping is often the better choice for smaller
              businesses when shipping goods overseas. Here are some reasons to
              use air shipping:
            </p>
            <p className="point-p">
              <span className="font-bold">Quicker:</span> Air cargo moves much
              more quickly than sea cargo, so your goods will get to their
              destination much faster. Airplanes are approximately 30x times
              faster than ocean liners. Ocean liners move at roughly 16-18 mph.
              For example, air cargo cruises at 575 mph.
              <br />
              <br /> <span className="font-bold">Reliability:</span>  Air
              Freight provides better tracking and greater visibility.
              <br />
              <br />
              <span className="font-bold">Faster customs clearance:</span>
              Customs officials are usually much quicker to clear air cargo than
              sea cargo.
              <br />
              <br /> <span className="font-bold">
                Less chance of damage:
              </span>{" "}
              Unlike sea freight shipments, which can be subject to rough seas
              and other weather conditions, air cargo is less likely to suffer
              damage in transit. As a result, air freight is a good option for
              fragile items.
              <br />
              <br />
              <span className="font-bold">Smaller loads accepted:</span>  Air
              carriers generally accept smaller shipments
            </p>
            <button className="clear-btn self-center">
              See Air Freight Rates Now
            </button>
          </div>
        </section>
        {/* Moy logistic by number */}
        <section className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-16 justify-center py-10 bg-[#EDF1EB] items-center">
            <div className="flex flex-col gap-2">
              <p className="section-header">MOY Logistics</p>
              <p className="section-header font-normal">by the numbers</p>
            </div>
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="flex gap-5 ">
                <div className="flex flex-col w-1/2 gap-2">
                  <p className="section-header">25</p>
                  <p className="">Years in Business</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="section-header">1.5m+</p>
                  <p className="">Shipment Delivered</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <p className="section-header">93%+</p>
                  <p className="">On-time Performance</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="section-header">99.1%+</p>
                  <p className="">Damage Free Shipments</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10">
            <p className="section-header">Air Cargo</p>
            <p className="point-p">
              Air freight transfers and transports goods via a charter or
              commercial air carrier. Such loads travel from passenger and
              commercial aviation gateways to anywhere airport in the world. So,
              whether on Fedex, Ups, DHL aircraft, a commercial flight, or a
              charter, we’ll find the best and most efficient way to fly it.
              Because it’s not the logo on the plane that matters most, it is
              the logo on the cargo. Air is roughly 15x more expensive than
              ocean freight, which makes a huge difference. However, air cargo
              cannot ship large items as you can on an ocean vessel.
              <br />
              <br /> So, whether on UPS aircraft, a commercial flight, or a
              charter, we’ll search for an efficient way to fly it. Because it’s
              not the logo on the plane that matters most—it’s the logo on the
              cargo. Explore options for International or within North America.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10 lg:pt-0">
            <p className="section-header">How To Calculate Air Freight Rates</p>
            <p className="point-p">
              Are you looking to calculate air rates? Shipping rates are based
              on the weight and size of the shipment. In Air freight, weight is
              determined either by the gross physical weight or the dimensional
              weight. Whichever is greater. Depending on the size, specific
              oversize fees can be added to the shipping cost. These additional
              fees are flat, and some are based on size or length.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10 lg:pt-0">
            <p className="section-header">Air shipping prices and costs</p>
            <p className="point-p">
              Global importers and exporters use air cargo to transport their
              products worldwide. Ocean freight providers transport roughly 90%
              of all imports and exports. As one can imagine, standard air
              freight is significantly faster than ocean freight reducing
              China-US ocean freight shipping time from 20-30 days to only three
              days by air. Regarding air freight shipping, weight, and volume
              are vital factors. Air carriers will charge by the dimensional or
              actual weight, which is greater. To calculate the dimensional
              weight for air shipping, multiply the LxWxH, then divide by the
              standard Dim weight factor of 194. For Example, L:48, W: 48in, H:
              60 in. 48x48x60 / 194 = 713 dimensional weight.
              <br />
              <br /> In cases when the dimensional weight exceeds the actual
              weight of the product, the dimensional becomes the chargeable
              weight for the shipment. If you book freight on MOY Logistics, it
              is done automatically.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10 lg:pt-0">
            <p className="section-header">
              Additional Air Freight shipping fees
            </p>
            <p className="point-p">
              In addition to the cost of freight costs as discussed above,
              additional fees may apply when shipping door to door.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Security surcharges</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Airport Transfers</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Fuel surcharges</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Station/terminal handling charges</p>
              </div>
            </div>
            <p className="point-p">
              Depending on where your shipment is coming from or going to, the
              below fees may also apply:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Custom Brokerage</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Pickup and delivery</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Cargo insurance</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Accessorial charge</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10 lg:pt-0">
            <p className="section-header">Express Air Freight Providers</p>
            <p className="point-p">
              Typically speaking, express air shipments are usually smaller than
              standard air. Are usually done by big companies such as UPS,
              FedEx, or DHL. These providers manage the entire shipment
              lifecycle and ship door-to-door, usually in under 5 days. The
              largest cargo airplane that can hold an entire train is the Anatov
              225.
            </p>
          </div>
          <div className="p-4 lg:pt-0 lg:p-10">
            <img src={open_plane} alt="" />
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10 lg:pt-0">
            <p className="section-header">How Much Does Air Freight Cost?</p>
            <p className="point-p">
              With our freight rate calculator, you will always have a market
              overview, ensuring you find the most favorable rates. Air cargo
              rates change depending on the time of the year and the starting
              and destination countries, but for a popular route like China to
              the USA, expect to pay approximately $3-4 a pound. This means air
              cargo rates are around $6,000-8,000 a ton before discounts.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10 lg:pt-0">
            <p className="section-header">Comparing air freight forwarders</p>
            <p className="point-p">
              Checking various shipping rates from freight providers is not
              required. All our partners have long-term experience in their
              field. You can compare and book the best and best shipping rates
              on MOY Logistics.com in a matter of minutes. Are international
              freight quotes and freight prices changing? International air
              freight usage grew slowly, showing less than 1% growth in 2015.
              The International Air Transport Association (IATA) said air
              freight growth only hit 1.6% in 2019. This is down from roughly 5%
              back in 2015. Due to lengthy delays plaguing ocean freight, more
              importers and exporters moved to air cargo.
              <br />
              <br />
              Since the pandemic in March 2020, air cargo rates have doubled.
              This is due to many reasons, including:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Constrained Capacity</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">
                  Limited passenger travel due to restrictions
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">Increased consumer demand</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                <p className="point-p">
                  Other factors resulcting from the pandemic
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10 lg:pt-0">
            <p className="section-header">Covid-19 Effects On Air Freight</p>
            <p className="point-p">
              Pre-COVID-19, international air cargo shipping rates ranged from
              approximately $5.50-$12.00 per pound. This depends on the type of
              cargo and available space. Shipping costs significantly increased
              in February 2020 when COVID-19 began a period of severe
              disruptions. The disruptions affected ocean freight, and the
              consumer demand for shipping air increased; as a result, air cargo
              rates reached a range of $11.00-$21.00 per pound. As of early to
              mid 2023, rates have dropped to around $6.50-$14.00 per pound,
              which is still higher than pre-pandemic shipping rates. This is
              likely due to increased fuel and labor costs.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              Finely-tailored air freight solutions
            </p>
            <p className="point-p text-center">
              To create value for our customers by delivering customized
              shipping solutions that meet their unique needs and to fulfill
              shipping demands from simple to complex with expertise, guidance
              and ingenuity.
            </p>
            <button className="clear-btn">Instant Freight Rate</button>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <section className="flex flex-col gap-5">
            <div
              className="w-full h-[300px] bg-cover"
              style={{
                backgroundImage: `url(${freight_truck})`,
              }}
            >
              <div className="w-full h-full bg-[#1a2914] bg-opacity-60 gap-2 flex flex-col items-center justify-center p-2">
                <div className="flex gap-1 font-semibold text-[10px] w-full md:w-auto">
                  <div className="flex  flex-col p-2 gap-1 bg-white rounded-ss-[15px] rounded-es-[15px]">
                    <p className="">Requested pickup date</p>
                    <p className="font-bold text-[13px]">2024-1-1</p>
                  </div>
                  <div className="bg-white p-5 ">
                    <p>Origin Zip Code</p>
                  </div>
                  <div className="bg-white p-5 rounded-ee-[15px] md:rounded-ee-none md:rounded-se-none rounded-se-[15px] ">
                    <p>Destination Zip Code</p>
                  </div>
                  <div className="hidden md:flex border border-white border-solid rounded-ee-[15px] bg-primary_green rounded-se-[15px] p-2 items-center justify-center ">
                    <p className="text-[16px] text-white">Get Quote</p>
                  </div>
                </div>
                <div className="md:hidden rounded-[15px] border border-white border-solid flex items-center justify-center bg-primary_green w-full py-4">
                  <p className="text-white font-semibold ">Get Quote</p>
                </div>
                <p className="text-[13px] font-semibold text-white text-center">
                  Guaranteed competitive pricing every{" "}
                  <br className="md:hidden" /> time you ship.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 pt-10  p-4 lg:p-10 items-center">
              <div className="w-full lg:w-[510px] self-center  shrink-0">
                <img className="w-full" src={truck_freight} alt="" />
              </div>
              <div className=" flex flex-col gap-7 ">
                <p className="section-header">
                  When Is Ground Better Than Air Freight?
                </p>
                <p className="point-p">
                  Here are some examples of when ground freight is better than
                  air freight.
                  <br />
                  <br />
                  <span className="font-bold">Shipping Cost</span> Air freight
                  is costly compared to shipping by ocean freight. For example,
                  a 2000 lb item from China, California, can cost $1,500 by the
                  ocean and $7,500 by air. However, this difference may be lower
                  with price changes due to supply chain disruptions.
                  <br />
                  <br /> <span className="font-bold">CO2 emissions:</span>{" "}
                  Studies show air cargo gives off more emissions. As of March
                  of 2023, Air Freight gives off roughly 40x the CO2 emissions
                  compared to the ocean. Not the greenest way to ship.
                  <br />
                  <br /> <span className="font-bold">Heavy shipment:</span> Air
                  freight is priced based on size and weight, which can quickly
                  scale prices. Ocean shipping containers are better for
                  shipping large, heavy items.
                </p>
                <button className="clear-btn self-center">
                  Expedited Air Shipping Quote
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                Get the Lowest Air Shipping Rates Available
              </p>
              <p className="point-p">
                We can help you through the complicated air freight process of
                pricing air freight rates and picking a carrier while arranging
                paperwork and the entire international air freight transaction.
                We will help coordinate your plan from pick up to delivery and
                stay committed to your air cargo. Faster transit times,
                competitive air freight rates pricing, and a vast network of
                carrier and service choices are some benefits you can expect
                when selecting us to handle your air shipping needs. We have
                well-established relationships with air cargo carriers and
                airlines for all major routes in most countries worldwide.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                The Fastest International Shipping Option
              </p>
              <p className="point-p">
                Whether your global air freight needs to be serviced as
                expedited, consolidated, deferred, or another customized
                solution, our trained international freight experts will create
                the perfect plan for you. We have the fastest transit times
                available with our global express air service and can even
                arrange overnight delivery to certain countries. We excel at
                finding cost-effective solutions for our customers and getting
                your international air freight where and when needed.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Additional Air Freight Services:</p>
              <p className="point-p">
                Customs Clearance & Insurance, As customs clearance often turns
                out to be complicated, a specialist’s help is usually required.
                So that you can book this service quickly and cheaply, you will
                find the service of customs clearance, which you can easily add
                when booking your air freight transport on our platform. Despite
                all the precautions, as with every transport, damages can occur.
                But not only your goods have to be affected, to make you liable
                for it. We recommend covering air freight insurance to avoid an
                unpleasant surprise and additional charges.
                <br />
                <br /> You can cover it quickly and favorably on our website.
                The Best Service Choosing MOY Logistics for your global air
                freight will ensure you receive the best rates and quality
                customer service. If you want to get started, contact a MOY
                Logistics shipping expert at 800.716.7608.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                What Goods Are Transported By Air?
              </p>
              <p className="point-p">
                Air cargo is costly. Air is often 5x the cost of 4–5
                over-the-road transport and 12–16 times that of ocean or sea
                transport. As a consequence, air freight is typically high-value
                or time-sensitive items such as:
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">
                    Samples and Documents: The Air remains the most
                    cost-effective method of shipping documents.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">
                    Seasonal shipments: When there is a high demand for a
                    product, and it is made overseas, it will generally be
                    shipped by air.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">
                    Electronics. Steve Jobs is famously known for shipping the
                    first iMac before the holiday season by purchasing the air
                    freight capacity along key Asia-US routes.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">
                    Clothing & Apparel: typically applies to higher expensive or
                    luxury items. Due to the short season, luxury clothing
                    brands with season products often transport.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">
                    Medical supplies and Pharmaceuticals: Due to their value and
                    small size, medical goods are frequently shipped by air.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="point-p font-bold text-[#1a2914]">
                Air Freight Competitive Advantages
              </p>
              <p className="point-p">
                Using air freight can create competitive advantages for any
                shipper. Retailers will often use the ocean for the initial
                large order of garments, electronics, and other goods
                manufacturers then use air freight to replenish inventories when
                demand requires.
              </p>
              <p className="point-p font-bold text-[#1a2914]">Diversifying</p>
              <p className="point-p">
                Air freight can also introduce goods and products with shorter
                shelf life or deliver smaller volumes into new markets. Once the
                volumes increase and the market has been established, the
                manufacturer can reconstruct supply chains using a less costly
                mode of transport. Air freight is the only means of guaranteeing
                continuity for landlocked countries where exports require cold
                chains.
              </p>
              <p className="point-p font-bold text-[#1a2914]">
                Shipping Product Samples
              </p>
              <p className="point-p">
                Air freight is vital in the shipment of product patterns,
                designs, and technical drawings. While this is not a significant
                source of air cargo, it is essential for manufacturers who
                export manufactured products. This includes product prototypes
                sent for the buyer’s approval before placing a large order.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Airports Holding Up The Shipment</p>
              <p className="point-p">
                An advantage of air freight is significantly reduced transit
                times over land. But getting the cargo to move quickly through
                an airport is critical. The four factors that affect how fast a
                shipment moves through an airport are:
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">Container clearing</p>
                </div>
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">Inspection equipment</p>
                </div>
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">Warehousing</p>
                </div>
                <div className="flex gap-3">
                  <div className="check-mark-w">
                    <img src={check_mark} alt="" />
                  </div>
                  <p className="point-p">Cargo handling</p>
                </div>
              </div>
              <p className="point-p">
                Most cargo will move through the airport within a few hours.
                Customs procedures, inspection equipment, cargo handling
                services, and warehousing are essential.
              </p>
              <p className="point-p font-bold text-[#1a2914]">
                Customes clearing
              </p>
              <p className="point-p">
                For imports, customs clearing and procedures are essential. The
                custom clearance requires the customs declaration and airway
                master bill, sent when the flight departs. In some countries,
                inbound freight can take up to a day or two to be cleared. In
                others, the procedures are adapted to air cargo requirements and
                conducted electronically. Electronically cleared shipments can
                happen within one or two hours.
              </p>
              <p className="point-p font-bold text-[#1a2914]">
                Inspection equipment
              </p>
              <p className="point-p">
                The documents are filed for export when the cargo arrives at the
                destination airport. The inspection is done simultaneously so
                that the shipment can be loaded quickly. A 24-hour cooling
                period was added to the transit time, but this has been
                eliminated due to X-ray scanners. Full pallet scanners allow
                shippers to build their pallets off-airport and load them on the
                aircraft within a few hours.
              </p>
              <p className="point-p font-bold text-[#1a2914]">Warehousing</p>
              <p className="point-p">
                Many warehousing and storage facilities at smaller and older
                airports are pretty simple. Most cargo only stays at airports
                for a short time. Generally, exports are time-sensitive, and
                imports are fast-moving and high-value products. Modern
                warehouses use loading docks to speed truck turnarounds and
                minimize vertical cargo movements. Export facilities have large
                areas for scanning, inspection, building palettes, and gathering
                cargo for specific flights. Separate import facilities have
                offices and inspection areas to facilitate customs clearance
                procedures and allow cargo segregation into truckloads. For
                perishable products, these warehouses have
                temperature-controlled rooms. This maintains the cold chain
                between the truck and the aircraft transporting the products.
              </p>
              <p className="point-p font-bold text-[#1a2914]">Cargo handling</p>
              <p className="point-p">
                Cargo handlers at the airport should ensure the secure and
                efficient handling of the cargo. Contractors must provide the
                appropriate equipment for loading and unloading aircraft types.
                <br />
                <br />
                In 3rd world countries, often there is only a single air freight
                provider, and they have a monopoly. Places such as this present
                a problem if the carrier is an inefficient state-owned. Private
                contractors maintain a monopoly in other airports, but
                performance is often regulated.
              </p>
            </div>
            <div className="flex p-4 items-center justify-center mb-10">
              <div className=" lg:w-[770px]">
                <img src={ltl_video} alt="" />
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Air Freight FAQs:</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is air freight?
                </p>
                <p className="point-p">
                  A. Air freight is a method of shipping goods using airplanes
                  as the primary mode of transportation. It involves cargo
                  transportation by air carriers, either in passenger aircraft
                  with dedicated cargo holds or specialized freighter aircraft.
                  Air freight is known for its speed and efficiency, making it
                  ideal for time-sensitive or high-value shipments.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the advantages of air freight?{" "}
                </p>
                <p className="point-p">
                  A. Air freight offers several advantages, including:
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                    <p className="point-p">
                      Speed: Air freight is the fastest mode of transportation,
                      allowing for quick delivery of goods, especially over long
                      distances or internationally.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                    <p className="point-p">
                      Reliability: Airlines have well-established schedules and
                      routes, providing reliable and predictable transit times.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                    <p className="point-p">
                      Global Reach: Air freight, with extensive networks and
                      connections, allows easy access to virtually any
                      destination worldwide.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                    <p className="point-p">
                      Enhanced Security: Airports have stringent security
                      measures, reducing the risk of theft or damage to cargo.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[6px] h-[6px] bg-[#1a2913] rounded-full"></div>
                    <p className="point-p">
                      Reduced Packaging: Air freight often requires less
                      extensive packaging than other transportation modes due to
                      shorter transit times and reduced handling.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How is air freight pricing determined?
                </p>
                <p className="point-p">
                  A. Air freight pricing is typically based on several factors,
                  including the weight, dimensions, and volume of the shipment,
                  the distance traveled, the origin and destination, and any
                  additional services required. Airfreight rates can be
                  calculated based on chargeable weight (actual or volumetric
                  weight, whichever is greater) and are influenced by market
                  demand and fuel prices. It’s best to consult with air freight
                  carriers or freight forwarders to obtain accurate pricing
                  based on your specific shipment details.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the size and weight limits for air freight
                  shipments?
                </p>
                <p className="point-p">
                  A. The size and weight limits for air freight shipments can
                  vary depending on the aircraft type, airline regulations, and
                  the capacity of the destination airport. However, most
                  airlines can accommodate loads weighing up to several thousand
                  kilograms (typically around 100 kg to 10,000 kg) and have
                  restrictions on the maximum dimensions of individual packages.
                  To ensure compliance, checking with the airline or freight
                  forwarder for their specific size and weight limits is
                  essential.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any restrictions on what can be shipped by air
                  freight?{" "}
                </p>
                <p className="point-p">
                  A. Yes, there are restrictions on what can be shipped by air
                  freight due to safety and security regulations. Items such as
                  hazardous materials, flammable substances, explosives, live
                  animals, and perishable goods may have specific restrictions
                  or require special handling procedures. It’s essential to
                  familiarize yourself with the regulations and conditions
                  imposed by airlines and any applicable international rules to
                  ensure compliance and safety when shipping goods by air.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How can I track my air freight shipment?
                </p>
                <p className="point-p">
                  A. Most air freight carriers provide tracking services that
                  allow you to monitor the progress of your shipment. Upon
                  booking, you will receive a tracking number or air waybill
                  number that you can use to track the status of your shipment
                  online or through the carrier’s tracking portal. This lets you
                  stay updated on your air freight shipment’s location and
                  estimated delivery time.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Is insurance necessary for air freight shipments?
                </p>
                <p className="point-p">
                  A. While insurance is not mandatory, protecting your goods
                  during air freight transportation is highly recommended. Air
                  freight shipments may encounter various risks, such as loss,
                  damage, or theft, and having insurance coverage provides
                  financial protection and peace of mind. It’s advisable to
                  consult with your shipping provider or insurance company to
                  explore insurance options and ensure that your air freight
                  shipments are adequately protected.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How far in advance should I book air freight shipments?
                </p>
                <p className="point-p">
                  A. It’s recommended to book air freight shipments as far in
                  advance as possible, especially for time-sensitive or
                  peak-season shipments. This allows for ample planning,
                  securing flight space, and ensuring all necessary
                  documentation and requirements are in order. However,
                  balancing advanced booking with flexibility is essential, as
                  last-minute or urgent shipments may require expedited or
                  on-demand air freight services.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the customs procedures for air freight shipments?
                </p>
                <p className="point-p">
                  A. Customs procedures for air freight shipments involve
                  compliance with import and export regulations, documentation
                  preparation, customs declarations, payment of duties and taxes
                  (if applicable), and any necessary inspections or clearances.
                  Working with customs brokers or freight forwarders experienced
                  in air freight customs procedures is vital to ensure
                  compliance and streamline the customs clearance process.
                  Additionally, it’s advisable to research and understand the
                  destination country’s customs regulations to ensure timely and
                  smooth shipping.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I ship oversized or heavy cargo by air freight?
                </p>
                <p className="point-p">
                  A. Yes, shipping oversized or heavy cargo by air freight is
                  possible. However, due to limitations on aircraft capacity and
                  loading restrictions, specialized equipment and procedures may
                  be required for handling such shipments. Working with air
                  freight carriers or freight forwarders experienced in handling
                  oversized or heavy cargo is essential to ensure proper
                  planning, packaging, and transportation.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any specific packaging requirements for air
                  freight shipments?
                </p>
                <p className="point-p">
                  A. Yes, there are specific packaging requirements for air
                  freight shipments to ensure the safety of the cargo during
                  transportation. It’s essential to use sturdy and durable
                  packaging materials that can withstand the rigors of air
                  travel. Proper cushioning, such as bubble wrap or foam
                  padding, should protect fragile items. Additionally, packages
                  should be sealed securely and labeled clearly with the
                  necessary shipping labels and handling instructions. Following
                  these packaging guidelines helps minimize the risk of damage
                  to the goods during air freight transportation.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I ship perishable goods or temperature-sensitive items
                  by air freight?{" "}
                </p>
                <p className="point-p">
                  A. Perishable goods or temperature-sensitive items can be
                  shipped by air freight. Air freight offers faster transit
                  times compared to other modes of transportation, making it
                  suitable for perishable goods that require timely delivery. To
                  ensure the integrity of temperature-sensitive items, such as
                  pharmaceuticals or food products, it’s essential to use
                  appropriate insulated packaging and consider
                  temperature-controlled shipping options. Additionally, it’s
                  crucial to comply with any regulatory requirements and obtain
                  the necessary permits or certifications for shipping
                  perishable or temperature-sensitive items. Working with
                  experienced air freight providers or freight forwarders
                  specializing in handling such goods can help ensure proper
                  handling and compliance with regulations.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default AirFreightShipping;
