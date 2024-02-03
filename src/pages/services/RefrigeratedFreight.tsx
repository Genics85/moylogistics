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
import banner_d from "../../assets/images/refrigerated-freight/refrigerated_bg_d.png";
import banner_t from "../../assets/images/refrigerated-freight/refrigerated_bg_t.png";
import expedited_board from "../../assets/images/refrigerated-freight/refrigerated_board.png";
import exped_1 from "../../assets/images/refrigerated-freight/ref_1.png";
import exped_2 from "../../assets/images/refrigerated-freight/ref_2.png";
import exped_3 from "../../assets/images/refrigerated-freight/ref_3.png";
import exped_4 from "../../assets/images/refrigerated-freight/ref_4.png";
import exped_5 from "../../assets/images/refrigerated-freight/ref_5.png";
import exped_6 from "../../assets/images/refrigerated-freight/ref_6.png";
import exped_7 from "../../assets/images/refrigerated-freight/ref_7.png";
import exped_8 from "../../assets/images/refrigerated-freight/ref_8.png";
import truck_open from "../../assets/images/refrigerated-freight/refrigerated_truck_open.png";
import { NavLink } from "react-router-dom";

function RefrigeratedFreight() {
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
            <p className="section-header text-white">Refrigerated Freight</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Save money shipping refrigerated goods. Compare multiple carriers
              servicing refrigerated services with current instant pricing
              results.
            </p>
            <button className="clear-btn bg-white">
              Refrigerated Freight Quote
            </button>
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
              <span className="font-semibold ">Refrigerated Freight</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              What Is Refrigerated Freight?
            </p>
            <p className="point-p">
              Refrigerated freight refers to freight that requires specific,
              temperature-controlled environments during shipment. This is where
              refrigerated trucks, or reefer trucks, come into play. As the name
              implies, refrigerated trucks include a built-in refrigeration
              system inside their trailers to keep their cargo cool. Your
              freight will arrive at its destination intact and unspoiled.
              <br />
              <br /> Benefits of our refrigerated and temperature controlled
              freight services.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Same day pickups</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  A large network of temperature controlled equipment
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Direct shipping without stops</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Faster delivery options</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Dedicated account management</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Temperature controlled freight shipping from 100+ carriers
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Realtime 24/7 tracking and tracing access
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Surge capacity for seasonal businesses
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Services to anywhere in the U.S. & Canada
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  30+ years of transportation experience working for you!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg lg:w-1/2">
          <div className=" lg:absolute w-full -top-40 flex items-center flex-col gap-[24px]">
            <div className=" bg-white p-3 md:p-7 w-full items-start md:items-center lg:w-[480px] rounded-[15px] shadow-md flex flex-col lg:items-start gap-[38px] ">
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
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px]">Weight</label>
                    <div className="flex gap-1 w-full md:w-[200px]">
                      <input
                        className=" border border-solid border-[#4d8137] border-opacity-20 rounded-s-[20px] pl-5 placeholder:text-point-p w-1/2 h-[45px]"
                        type="text"
                      />
                      <select className=" bg-white border border-solid border-[#4d8137] border-opacity-20 rounded-e-[20px] pl-5 placeholder:text-point-p w-1/2 h-[45px]">
                        <option value="">lbs</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px]">Choose Equipment</label>
                    <select className=" bg-white border border-solid border-[#4d8137] border-opacity-20 rounded-[15px] pl-5 placeholder:text-point-p w-full md:w-[200px] h-[45px]">
                      <option value="">Drayage</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-primary_green font-bold text-[15px]">
                  What are you shipping
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    className=" border border-solid border-[#4d8137] border-opacity-20 rounded-[15px] pl-5 placeholder:text-point-p w-[300px] md:w-[420px] h-[80px]"
                    type="text"
                  />
                  <label className="text-[12px]">limit of 70 characters</label>
                </div>
              </div>
              <button className="clear-btn self-center">View my Rate </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 items-center">
                <p className="point-p font-semibold">
                  Learn more about Our Truckload Solutions
                </p>
              </div>
              <NavLink
                to={"service/ltl-freight"}
                className="flex gap-4 items-center"
              >
                <p className="text-primary_green font-semibold">LTL FREIGHT</p>
                <img src={read_more} className="w-[28px]" alt="" />
              </NavLink>
              <NavLink
                to={"service/partial-truckload"}
                className="flex gap-4 items-center"
              >
                <p className="text-primary_green font-semibold">
                  PARTIAL TRUCKLOAD
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </NavLink>
              <NavLink
                to={"service/truckload"}
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
      <div className="flex flex-col gap-20 lg:mt-32 pt-20  ">
        <section className="flex w-full items-center justify-center">
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
            <img src={expedited_board} alt="" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
            <p className="section-header">
              What MOY Logistics Can Do for Reefer Freight
            </p>
            <p className="point-p">
              When you are ready to get that next refrigerated freight load on
              the road, contact us at 800.716.7608 and let us show you what we
              can do. We create the shipping paperwork and schedule the trucks
              according to your timetable. Our online quote allows you to
              compare rates from many carriers online and estimate how much your
              freight will cost. Give our freight agents a call for the most
              accurate rate and expertise. Our services not only save you money,
              but they also save you time.
            </p>

            <button className="clear-btn self-center">
              Refrigerated Shipping Quote
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
            <p className="section-header">
              What Carriers Offer Refrigerated Freight Services?
            </p>
            <p className="point-p">
              Freight carriers play a crucial role in the transportation
              industry, moving goods from one place to another across the
              country and worldwide. One type of freight service offered by
              carriers is refrigerated freight services. These specialized
              services involve refrigerated trucks or containers to transport
              perishable food, pharmaceuticals, and medical supplies. Let’s
              discuss some of the freight carriers that offer refrigerated
              freight services.
              <br />
              <br /> Prime is one of the largest freight carriers in the United
              States, offering refrigerated freight services. Their refrigerated
              trucks are equipped with state-of-the-art technology that allows
              for precise temperature control and monitoring, ensuring the
              safety and quality of the cargo. With its extensive network of
              trucks, planes, and warehouses, Prime can transport
              temperature-sensitive products efficiently and reliably.
              <br />
              <br /> Another major player in the refrigerated freight services
              market is Knight-Swift. They offer various refrigerated
              transportation options, including refrigerated trucks and
              containers, air cargo, and intermodal rail services. They also
              provide a range of temperature-controlled storage solutions for
              their customers’ products, making them a one-stop shop for
              businesses transporting perishable goods.
              <br />
              <br /> MOY Logistics, a third-party logistics provider, is also a
              significant player in the refrigerated freight services market.
              They offer a range of refrigerated transportation options,
              including refrigerated trucks, rail services, and intermodal
              solutions. MOY Logistics expertise in logistics and supply chain
              management allows them to provide customized solutions for their
              customer’s unique needs, ensuring that their perishable goods are
              transported safely and efficiently.
              <br />
              <br /> KLLM, one of the largest truckload carriers in North
              America, offers refrigerated transportation services through its
              Refrigerated division. With over 3,000 refrigerated trucks, KLLM
              provides reliable, temperature-controlled transportation services
              for various industries, including food, beverage, and
              pharmaceuticals.
              <br />
              <br /> Lastly, Maersk, one of the largest shipping companies in
              the world, offers refrigerated container services for its
              customers worldwide. These containers are equipped with
              state-of-the-art technology that allows for precise temperature
              control and monitoring, ensuring the safety and quality of the
              cargo. Maersk’s global network of ports and terminals makes them a
              reliable option for businesses transporting perishable goods
              across borders.
              <br />
              <br /> In conclusion, refrigerated freight services are a crucial
              component of the transportation industry, ensuring the safe and
              efficient transportation of perishable goods. Prime, KLLM, MOY
              Logistics, Swift Transportation, and Maersk are some freight
              carriers offering these specialized services. By utilizing the
              expertise and resources of these carriers, businesses can ensure
              that their perishable goods are transported safely and
              efficiently, reaching their destination in optimal condition.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              What Are the Benefits of a Refrigerated Truck?
            </p>
            <p className="point-p">
              Refrigerated freight trucks, also known as reefer trucks, are
              specially designed vehicles equipped with refrigeration unit that
              helps maintain the temperature of the cargo being transported.
              These trucks are essential for transporting perishable goods such
              as food, pharmaceuticals, and medical supplies. Here are some
              benefits of using refrigerated freight trucks.
              <br />
              <br /> Maintains product quality: One of the main benefits of
              refrigerated freight trucks is that they help maintain the quality
              of the transported cargo. By controlling the temperature, the
              truck ensures that the perishable goods stay fresh, reducing the
              risk of spoilage, contamination, or damage. This is particularly
              important for food items as they must be kept at specific
              temperatures to maintain their nutritional value and taste.
              <br />
              <br /> Extends product shelf life: Refrigerated freight trucks can
              also extend the shelf life of perishable goods by preserving their
              freshness and quality for longer. This means that products can be
              transported over longer distances, reaching a more comprehensive
              range of markets and increasing sales opportunities for
              manufacturers and distributors.
              <br />
              <br /> Ensures compliance with regulations: The transportation of
              perishable goods is subject to strict regulations and guidelines
              to ensure food safety and prevent the spread of disease. By using
              refrigerated freight trucks, businesses can ensure compliance with
              these regulations and avoid costly fines or legal action.
              <br />
              <br /> Cost-effective: Although refrigerated freight trucks are
              more expensive than regular trucks, they are cost-effective in the
              long run. By maintaining the quality and freshness of the cargo,
              businesses can reduce the risk of product spoilage, minimizing
              waste and loss of revenue.
              <br />
              <br />
              Versatile: Refrigerated freight trucks are not limited to
              transporting perishable food items. They can also transport other
              temperature-sensitive goods, such as pharmaceuticals, medical
              supplies, and electronics. This makes them versatile for
              businesses transporting various products in a
              temperature-controlled environment.
              <br />
              <br /> In conclusion, refrigerated freight trucks are an essential
              component of the supply chain for transporting perishable goods.
              Maintaining the cargo’s quality and freshness helps businesses
              reduce waste, comply with regulations, and increase sales
              opportunities. With their versatility and cost-effectiveness,
              refrigerated freight trucks are an investment that can benefit
              businesses in the long run.
            </p>
            <div className="flex flex-col gap-3">
              <img src={truck_open} alt="" />
            </div>
          </div>

          <div className="w-full pt-0 lg:pt-0 p-4 lg:p-10">
            <hr />
          </div>
          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              Types of Refrigerated Freight Services Available
            </p>
            <p className="point-p text-center lg:w-[70%]">
              There are several types of refrigerated freight services available
              to transport perishable goods at specific temperatures. Here are
              some of the most common types of refrigerated freight services:
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 pt-0 lg:pt-0 p-4 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-3 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${exped_1})`,
                  }}
                ></div>

                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${exped_2})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${exped_3})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${exped_4})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${exped_5})`,
                  }}
                ></div>

                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${exped_6})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${exped_7})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${exped_8})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">How Does a Reefer Trailer Work?</p>
            <p className="point-p">
              A reefer trailer, also known as a refrigerated trailer, is a type
              of truck trailer that is designed to transport perishable goods at
              specific temperatures. Reefer trailers work by utilizing a
              refrigeration system that is integrated into the trailer.
              Depending on the model, the refrigeration system is powered by an
              independent diesel engine or an electric power source.
              <br />
              <br /> The refrigeration system in a reefer trailer draws heat out
              of the interior, thus reducing the air temperature. This is
              achieved by circulating refrigerant through a series of evaporator
              coils located inside the trailer. The refrigerant absorbs heat
              from the air in the trailer and then transfers that heat to a
              condenser coil outside the trailer.
              <br />
              <br /> The condenser coil is cooled by a fan or water, which
              causes the refrigerant to condense into a liquid state. The
              refrigerant is then pumped back into the evaporator coils inside
              the trailer, where the cycle repeats. This process maintains the
              desired temperature inside the trailer, which is crucial for
              transporting perishable goods requiring specific temperature
              control.
              <br />
              <br /> Reefer trailers also have various additional features to
              maintain the temperature inside the trailer, including insulation,
              air ducts, and temperature sensors. The insulation in the walls,
              roof, and floor of the trailer helps to prevent heat from entering
              or escaping the trailer, while the air ducts circulate the cool
              air throughout the trailer. Temperature sensors are located
              throughout the trailer, which monitor the temperature and ensure
              that it remains within the desired range.
              <br />
              <br /> There are typically two options to power the refrigeration
              system in a reefer trailer: a diesel engine or an electric power
              source. Diesel-powered reefer trailers have a separate engine
              mounted on the front of the trailer, which powers the
              refrigeration system. The engine is connected to the refrigeration
              unit via a drive shaft or hydraulic pump. On the other hand,
              electric reefer trailers have an electric generator installed on
              the trailer that provides power to the refrigeration unit.
              <br />
              <br /> In conclusion, a reefer trailer works by using a
              refrigeration system that draws heat out of the trailer’s
              interior, reducing the temperature inside to the desired level.
              The refrigeration system is powered by either a diesel engine or
              an electric power source. There are additional features such as
              insulation, air ducts, and temperature sensors to maintain the
              temperature. Reefer trailers are an essential tool for
              transporting perishable goods, such as food and medicine, that
              require specific temperature control during transport.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Preparing Your Reefer Trailer Shipment
            </p>
            <p className="point-p">
              When preparing to move perishables in a refrigerated trailer
              shipment, it is essential to take specific steps to ensure that
              the items remain fresh and undamaged during transportation. Here
              are some guidelines to help you prepare your perishables for a
              refrigerated trailer shipment:
            </p>
            <div className="flex flex-col gap-2">
              <p className="point-p">
                1. Determine the proper temperature: Check the required
                temperature for the specific type of perishable item you are
                shipping. This information can be found on the packaging or from
                the supplier. Ensure the temperature is set to the correct level
                on the refrigerated trailer.
              </p>
              <p className="point-p">
                2. Package your items properly: Use appropriate packaging
                materials, such as insulated containers or boxes, and ensure
                they are sealed tightly to maintain the temperature. Use
                additional insulation materials to keep the items from shifting
                during transportation if necessary.
              </p>
              <p className="point-p">
                3. Label the packages clearly: Label each container with the
                contents and the required temperature. This will help the
                carrier and recipient handle the shipment properly and avoid
                confusion.
              </p>
              <p className="point-p">
                4. Cool the perishables before loading: Pre-cool them to the
                required temperature before loading them onto the refrigerated
                trailer. This will help to maintain the temperature inside the
                trailer during transportation.
              </p>
              <p className="point-p">
                5. Load the trailer properly: Arrange the packages in the
                refrigerated trailer to allow proper airflow and prevent any
                blocking of the refrigeration vents. Leave enough space around
                the containers to properly circulate cool air.
              </p>
              <p className="point-p">
                6. Monitor the temperature during transportation: Use a
                temperature monitoring system to track the temperature inside
                the trailer. This will help identify any temperature
                fluctuations that may affect the quality of the perishables.
              </p>
            </div>
            <p className="point-p">
              By following these guidelines, you can help to ensure that your
              perishables are correctly prepared for a refrigerated trailer
              shipment and arrive at their destination fresh and undamaged. It
              is essential to work closely with the carrier to ensure that all
              necessary precautions are taken to maintain the proper temperature
              and handling of your perishables during transportation.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Reefers Help in Avoiding Medical Mishaps
            </p>
            <p className="point-p">
              There isn’t a lot, but there are medicines that are deemed to be
              hazardous. A reefer trailer is excellent for medical supplies that
              need to keep cool. Supplies that need to remain cool can include:
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Blood products</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Vaccines</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Organs</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Medicine</p>
              </div>
            </div>
            <p className="point-p">
              Temp control is crucially vital to these kinds of shipments.
              Reefer trailers help to ensure that these supplies remain at the
              correct temperature during transport. In addition, reefers can
              provide an oxygen-rich environment for them.
              <br />
              <br /> Reefer trailers are a much-needed part of the supply chain
              for medical supplies. While there are many of these shipments made
              regularly, they tend to stay at a small size. LTL shipments are
              perfect for medical supplies. Without reefers and LTL, many
              lifesaving treatments would not be possible.
            </p>
          </div>

          <div className="flex flex-col gap-6  lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Reefer Basics for Shippers</p>
            <p className="point-p">
              It would be best if you kept some things in mind for reefer
              trailer shipping. For the safe transport of food items, shippers
              should refer to the Food Safety Modernization Act (FSMA).
              Communication is another thing to always keep in mind. You want to
              communicate the details and requirements of your freight. MOY
              Logistics is happy to assist you with these communications.
              Lastly, it would be best if you always worked with a reefer
              provider with plenty of experience and who fully understands the
              complexity of reefer trailers.
            </p>
          </div>
          <div className="flex flex-col gap-6  lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Top Refrigerated Freight Provider</p>
            <p className="point-p">
              When shipping perishable items, choosing the right logistics
              provider is crucial. MOY Logistics is a top-tier logistics
              provider that specializes in refrigerated shipping services. We
              have a wide range of refrigerated trucks and an extensive carrier
              network, making them the best solution for shipping perishable
              items on a refrigerated truck.
              <br />
              <br /> One of the most significant advantages of MOY Logistics is
              its extensive carrier network. We have relationships with multiple
              carriers, giving customers various shipping options. This means we
              can find the best carrier for your specific needs, whether you
              need a full truckload or a less-than-truckload shipment. We also
              have access to carriers with refrigerated trucks, such as vans and
              trailers, so that you can find the perfect solution for your
              perishable items.
              <br />
              <br /> Another critical advantage of MOY Logistics is its
              real-time tracking. This feature lets you track your shipment from
              pickup to delivery, providing peace of mind that your perishable
              items are transported safely and efficiently. You can also receive
              notifications when your shipment is on its way or has been
              delivered, ensuring you are always up-to-date with your shipment’s
              status.
              <br />
              <br /> MOY Logistics.com also offers competitive rates for
              refrigerated trucking. We work with carriers to negotiate the best
              rates for their customers, ensuring you get the most
              cost-effective solution for your perishable items. With MOY
              Logistics.com, you can save money on shipping costs without
              compromising the quality of your shipment.
              <br />
              <br /> Moreover, MOY Logistics.com has years of experience in
              refrigerated shipping. We understand the unique challenges of
              transporting perishable items, such as maintaining a consistent
              temperature and protecting items from damage. We have the
              expertise to provide the right solutions to ensure your shipment
              arrives at its destination in the best possible condition.
              <br />
              <br /> Another significant benefit of MOY Logistics.com is its
              exceptional customer service. We have a dedicated team of
              professionals available 24/7 to assist customers with questions or
              concerns. Whether you need help tracking your shipment or have
              questions about refrigerated shipping, their customer service team
              is always ready to help.
              <br />
              <br /> Finally, MOY Logistics.com is committed to sustainability.
              We use environmentally friendly refrigerants and practices,
              ensuring their trucks have a minimal environmental impact. This is
              particularly important when shipping perishable items, as we are
              often high-value products that must be transported quickly and
              efficiently.
              <br />
              <br /> In conclusion, MOY Logistics.com is the best solution for
              shipping perishable items on a refrigerated truck. We have an
              extensive carrier network, real-time tracking, competitive rates,
              years of experience, exceptional customer service, and a
              commitment to sustainability. Choosing MOY Logistics.com ensures
              that your perishable items are transported safely and efficiently,
              giving you peace of mind and saving you money.
            </p>
          </div>

          <div className="flex flex-col gap-6  lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Questions on Your Shipment?</p>
            <p className="point-p">
              Are you having trouble sending your package or have shipping
              questions? Let MOY Logistics help! We are experts when it comes to
              shipping products both nationally and internationally. Our freight
              agents can ease you into the process. To ensure it’s a smooth ride
              for both you and your shipment. Use MOY Logistics free online
              quote tool to begin. For other locations, call our international
              shipping experts at 800.716.7608.
            </p>
          </div>

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

            <div className="flex flex-col gap-6 pt-0  p-4 lg:p-10">
              <p className="section-header">Refrigerated Freight FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is refrigerated freight?
                </p>
                <p className="point-p">
                  A. Refrigerated freight, or reefer freight, refers to
                  transporting goods requiring temperature-controlled conditions
                  to preserve their freshness, quality, or integrity. It
                  involves using specialized refrigerated containers or trailers
                  with temperature control systems to maintain specific
                  temperature ranges during transit.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What types of goods require refrigerated freight?
                </p>
                <p className="point-p">
                  A. Various types of goods require refrigerated freight to
                  ensure quality and safety. This includes perishable food such
                  as fruits, vegetables, meat, seafood, dairy products, and
                  frozen foods. Other goods requiring temperature-controlled
                  transportation include pharmaceuticals, chemicals, flowers,
                  certain beverages, and sensitive electronic or medical
                  equipment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How are temperatures maintained in refrigerated freight?
                </p>
                <p className="point-p">
                  A. Refrigerated freight utilizes specialized containers or
                  trailers equipped with refrigeration units. These units use
                  temperature control systems, often powered by electric or
                  diesel systems, to regulate the temperature inside the
                  container or trailer. The temperature settings can be adjusted
                  based on the specific requirements of the goods being
                  transported, ensuring that the desired temperature range is
                  maintained throughout the journey.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the temperature ranges available for refrigerated
                  freight?
                </p>
                <p className="point-p">
                  A. Refrigerated freight offers a range of temperature options
                  to accommodate different types of goods. Standard temperature
                  ranges include:
                  <br />
                  <br />
                  Frozen: (-18°C to -25°C / 0°F to -13°F): Suitable for
                  transporting frozen foods and other goods that require deep
                  freezing.
                  <br />
                  <br /> Chilled: (0°C to 5°C / 32°F to 41°F): Ideal for
                  perishable foods that need to be kept at a slightly
                  above-freezing temperature.
                  <br />
                  <br /> Cool: (8°C to 15°C / 46°F to 59°F): Used for goods that
                  require a slightly cooler temperature range, such as certain
                  fruits, vegetables, or pharmaceuticals.
                  <br />
                  <br /> Ambient: (15°C to 25°C / 59°F to 77°F): For goods that
                  can be transported at room temperature without the need for
                  cooling or heating.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I determine the temperature requirements for my
                  refrigerated freight?
                </p>
                <p className="point-p">
                  A. The temperature requirements for refrigerated freight
                  depend on the goods transported. It’s essential to consult the
                  manufacturer’s guidelines or labeling instructions for the
                  goods, as they often provide recommended temperature ranges
                  for storage and transportation. If you need more
                  clarification, consult with experts in the industry, such as
                  logistics providers, freight forwarders, or the suppliers of
                  the goods, to determine the appropriate temperature
                  requirements for your specific freight.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I ship refrigerated freight internationally?
                </p>
                <p className="point-p">
                  A. Yes, refrigerated freight can be shipped internationally.
                  However, it requires careful planning and compliance with
                  international regulations and customs procedures. It’s crucial
                  to consider factors such as temperature conversions, customs
                  documentation, and compliance with the import/export
                  regulations of the destination country. Working with
                  experienced logistics providers or freight forwarders
                  experienced in international refrigerated freight can help
                  navigate these complexities and ensure the proper handling and
                  transportation of your goods.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I book refrigerated freight services?
                </p>
                <p className="point-p">
                  A. To book refrigerated freight services, contact logistics
                  providers, freight forwarders, or shipping companies
                  specializing in temperature-controlled transportation. Provide
                  them with the necessary details, such as the type of goods,
                  temperature requirements, origin and destination, and the
                  desired transit time. They will assess your needs, provide you
                  with available options, and guide you through the booking
                  process.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any specific packaging requirements for
                  refrigerated freight?
                </p>
                <p className="point-p">
                  A. Yes, there may be specific packaging requirements for
                  refrigerated freight to ensure the proper preservation and
                  protection of the goods. This can include using insulated
                  packaging materials, such as thermal blankets or foam
                  insulation, to maintain the desired temperature range. Proper
                  labeling and marking of packages may also be required to
                  indicate the temperature sensitivity of the contents. It’s
                  essential to consult with your shipping provider or freight
                  forwarder to understand any specific packaging guidelines or
                  requirements for your refrigerated freight.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I track my refrigerated freight shipment?
                </p>
                <p className="point-p">
                  A. most logistics providers or shipping companies offering
                  refrigerated freight services provide tracking capabilities.
                  They will provide you with a tracking number or waybill number
                  that allows you to monitor the progress of your shipment. You
                  can use this tracking number to access online tracking portals
                  or contact the shipping provider for updates on the location
                  and status of your refrigerated freight shipment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What should I do if there are temperature deviations or
                  issues with my refrigerated freight shipment?
                </p>
                <p className="point-p">
                  A. If you encounter temperature deviations or issues with your
                  refrigerated freight shipment, it’s essential to address them
                  promptly. Contact your shipping provider or logistics partner
                  to report the issue and provide them with all relevant
                  details. They will work to investigate the problem, determine
                  the cause of the temperature deviation, and take appropriate
                  actions to resolve the issue. It’s advisable to document any
                  temperature deviations or damage to the goods with photographs
                  or written records for potential insurance claims or
                  reimbursement purposes.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default RefrigeratedFreight;
