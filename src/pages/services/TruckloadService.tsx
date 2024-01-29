import banner_d from "../../assets/images/services/truckload_service_banner-d.png";
import banner_t from "../../assets/images/services/truckload_service_banner-t.png";
import home_icon from "../../assets/icons/services/home_icon.svg";
import services_laptop from "../../assets/images/services/laptop_start_here.png";
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
import talking_gents from "../../assets/images/services/talking_gents.png";

function TruckloadService() {
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
            <p className="section-header text-white">Truckload Service</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Get a free, instant quote for your Truckload MOY Logistics
              Shipping needs, including customized services for dry van,
              flatbed, and refrigerated freight. You only pay for the portion of
              the trailer used. Get real-time freight rates, allowing you to
              compare and save money on Truckload MOY Logistics Services.
            </p>
            <button className="clear-btn bg-white">Request Quote</button>
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
              <span className="font-semibold ">Truckload Service</span>
            </p>
          </div>
          <div className="w-[300px] md:w-[500px] self-center">
            <img src={services_laptop} alt="" />
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px]">
              Truckload MOY Logistics Shipping
            </p>
            <p className="point-p w-[340px] md:w-[620px]">
              Getting the best Truckload MOY Logistics Services is just a few
              steps away. Fill in a few short details about your shipment and
              receive instant Truckload rates from leading truckload freight
              shipping companies in one easy place. Trust the experts at MOY
              Logistics to give you the best prices and options for your
              shipping needs.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Truckload MOY Logistics shipping from 100+ carriers
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Instant MOY Logistics rates anytime</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Services to anywhere in the U.S. & Canada
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Unbeatable discounts on your fMOY Logistics shipping
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Automated MOY Logistics tracking, paperwork & invoices
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Manage all quotes & shipments in one place
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  30+ years of transportation experience working for you!
                </p>
              </div>
            </div>
          </div>
          <p></p>
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
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <p className="text-primary_green font-semibold">
                  5 TRICKS TO GET THE BEST SHIPPING RATER
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-primary_green font-semibold">
                  FREIGHT INSURANCE
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-20 pt-20 ">
        <section className="flex w-full items-center justify-center">
          <div className="flex  flex-col  lg:flex-row">
            <div className="w-[160px] md:w-[230px]">
              <img src={studio_green} alt="" />
            </div>
            <div className=" w-[160px] border-[2px] border-solid border-primary_green lg:border-none md:w-[230px]">
              <img src={norto} alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="w-[160px] md:w-[230px] border-[2px] border-solid border-primary_green lg:border-none">
              <img src={points_one} alt="" />
            </div>
            <div className="w-[160px] md:w-[230px] border-[2px] border-solid border-l-0 border-t-0 border-primary_green lg:border-none">
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
            <img src={talking_gents} alt="" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
            <p className="section-header">
              Why Choose MOY Logistics For Truckload Services (FTL)?
            </p>
            <p className="point-p">
              MOY Logistics is an excellent choice for FTL services due to its
              extensive carrier network, competitive rates, comprehensive
              services, technology-driven solutions, and exceptional customer
              service.
            </p>
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex gap-3 items-start">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">Extensive Carrier Network:</span>{" "}
                  MOY Logistics has a vast network of pre-screened and certified
                  carriers, ensuring access to various transportation options.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">Competitive Rates:</span> MOY
                  Logistics negotiates rates with carriers, meaning you can
                  enjoy cost savings and avoid the hassle of dealing with rates
                  on your own.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">Comprehensive Services:</span> MOY
                  Logistics offers end-to-end logistics services, including
                  pickup and delivery, tracking, insurance, and customer
                  support.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">
                    {" "}
                    Technology-Driven Solutions:
                  </span>{" "}
                  MOY Logistics utilizes cutting-edge technology to provide
                  their customers with real-time tracking and visibility of
                  their shipments.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">
                    Exceptional Customer Service:
                  </span>{" "}
                  MOY Logistics has a team of experienced and knowledgeable
                  logistics experts available to assist you with any questions
                  or concerns.
                </p>
              </div>
              <button className="clear-btn self-center mt-3">
                Get your Truck load Quote
              </button>
            </div>
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
            <p className="section-header">Truckload Transportation Service</p>
            <p className="point-p">
              Truckload MOY Logistics shipping involves the transportation of a
              single freight shipment from one location to another using one
              truck. This freight service is often the most cost-effective since
              only one shipment is moved at a time, unlike multiple loads on
              different trucks. It also allows for faster transit times, as
              fewer stops are required, and a single route can be planned.
              <br />
              <br /> One of the most significant differences between LTL and FTL
              shipments is dependable pickup and delivery times. Full truckload
              services offer strict pickup and delivery dates for freight
              shipments, ensuring your load makes it from its pickup point to
              its final destination on time. Additionally, FTL MOY Logistics
              shipping offers more safety and security than other freight
              options, as each piece of cargo gets its dedicated truck.
              <br />
              <br /> The reliability and security offered by TL MOY Logistics
              make it an ideal choice for companies shipping large volumes of
              goods during springtime. This helps to reduce the risk of damage
              or theft, which can occur when multiple shipments are loaded onto
              one truck. Furthermore, truckload freight makes it easier for
              companies to track their shipments while in transit, providing
              visibility into the location of their goods throughout the
              journey.
              <br />
              <br /> For instance, manufacturers may transport parts or raw
              materials long distances to meet production deadlines or restock
              their inventory after a lull caused by winter weather conditions.
              <br />
              <br />
              Similarly, retailers may require additional supplies for peak
              shopping seasons such as Easter or Mother's Day, necessitating
              quick delivery times and careful handling of fragile merchandise.
              <br />
              <br />
              For all these reasons, freight shipping remains an essential part
              of logistics operations throughout the United States during
              springtime, providing customers with cost-efficient transportation
              solutions and ensuring goods arrive safely at their scheduled
              destination. Companies seeking dependable freight solutions this
              season should consider partnering with MOY Logistics when shipping
              FTL.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              What is Considered Truckload MOY Logistics?
            </p>
            <p className="point-p">
              Truckload MOY Logistics, or FTL MOY Logistics, is a mode of
              transportation that involves using a truck to transport a
              substantial amount of goods from one location to another. In
              truckload shipping, the entire truck is dedicated to carrying a
              single shipment, typically belonging to a single customer or
              consignor.
              <br />
              <br /> Truckload MOY Logistics is utilized when the size or weight
              of the shipment exceeds the capacity or requirements of other
              transportation modes, such as LTL carriers or parcel carriers. It
              is often more cost-effective for large or bulk shipments, as the
              cost is typically based on the distance traveled and the space
              occupied by the cargo within the truck.
              <br />
              <br /> This mode of transportation offers several advantages. It
              provides faster transit times than LTL shipping since the truck
              travels directly from the origin to the destination without
              multiple stops. Additionally, truckload freight offers greater
              flexibility in pickup and delivery times, as the truck can be
              scheduled according to the customer's specific requirements.
              <br />
              <br />
              Truckload MOY Logistics suits various goods, including raw
              materials, finished products, and industrial equipment. It can be
              used for domestic and international shipping, offering businesses
              and individuals a reliable and efficient option for transporting
              large goods.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10 ">
            <p className="section-header">Types of Trucload Services Offered</p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Double-Drop Deck (Lowboy)</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Double-Drop Deck with Detachable Deck (Lowboy, RGN)
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Flatbed Trailers</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Step Deck Trailers</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Dry Van Trailers</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Refrigerated Trailers</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Conestoga Trailers</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Full Truckload vs. Less Than Truckload Shipping: A Comparative
              Analysis
            </p>
            <p className="point-p">
              Freight transportation plays a vital role in today's globalized
              economy, ensuring the efficient movement of goods from
              manufacturers to consumers. Two commonly used methods for shipping
              goods are FTL and LTL shipping. FTL and LTL have distinct
              advantages and disadvantages, and understanding their differences
              is crucial for businesses to make informed decisions about their
              shipping needs. Let's compare FTL and LTL shipping, highlighting
              their key features, benefits, and considerations.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Definition and Scope:</p>
            <p className="point-p">
              <span className="font-bold">FTL:</span> Full Truckload shipping
              refers to transporting goods that occupy an entire trailer,
              typically involving larger shipments or items that require
              dedicated space.
              <br />
              <br /> <span className="font-bold"> LTL:</span> Less Than
              Truckload shipping involves shipments that do not require a full
              trailer. Multiple shipments from different shippers are
              consolidated into a single truck, sharing space and costs.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Cost Consideration:</p>
            <p className="point-p">
              <span className="font-bold">FTL:</span> FTL shipments are
              typically priced based on the space the goods occupy. While FTL
              may be more expensive for smaller loads, it offers cost advantages
              for more extensive and bulkier shipments due to economies of
              scale.
              <br />
              <br /> <span className="font-bold">LTL:</span> LTL shipments are
              priced based on weight, dimensions, and distance traveled. LTL
              shipping can be cost-effective for smaller loads, as the cost is
              shared among multiple shippers.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Transit time and Speed:</p>
            <p className="point-p">
              <span className="font-bold">FTL:</span> With FTL shipping, there
              is usually a direct route from the pickup location to the
              destination, resulting in shorter transit times and faster
              delivery.
              <br />
              <br /> <span className="font-bold">LTL:</span> LTL shipments
              involve multiple stops for pickups and drop-offs, which can
              increase transit times. However, advancements in LTL logistics
              have improved speed and efficiency in recent years.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Flexibility and Capacity:</p>
            <p className="point-p">
              <span className="font-bold">FTL:</span> FTL shipping offers
              greater flexibility in scheduling and pickup/delivery times. It is
              ideal for businesses with time-sensitive or high-volume shipments
              that require dedicated space and immediate delivery.
              <br />
              <br /> <span className="font-bold">LTL:</span> LTL shipping
              provides flexibility for businesses with smaller shipments,
              allowing them to share truck space with other shippers. However,
              it may have limitations in terms of specific delivery schedules.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Risk of Damage and Loss:</p>
            <p className="point-p">
              <span className="font-bold">FTL:</span> FTL shipping minimizes the
              risk of damage or loss as the goods are not handled or transferred
              during transit. The shipment remains secure and intact throughout
              the journey.
              <br />
              <br /> <span className="font-bold">LTL:</span> LTL shipments are
              more susceptible to handling and transfers during consolidation
              and deconsolidation processes, which may increase the risk of
              damage or loss.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Documentation and Tracking:</p>
            <p className="point-p">
              <span className="font-bold">FTL:</span> FTL shipping involves more
              detailed documentation and tracking processes since the truckload
              belongs to a single shipper. The shipper has greater control and
              visibility over their shipment.
              <br />
              <br /> <span className="font-bold">LTL:</span> LTL shipments
              require more complex documentation and tracking, as multiple
              shippers are involved. However, modern technology has improved LTL
              tracking capabilities, providing increased visibility.
              <br />
              <br /> In summary, the choice between FTL and LTL shipping depends
              on various factors, including shipment size, volume, urgency,
              budget, and specific requirements. FTL shipping offers advantages
              such as faster transit times, dedicated space, and reduced risk of
              damage, making it suitable for large shipments or time-sensitive
              deliveries. On the other hand, LTL shipping provides cost savings
              for smaller loads, flexibility in sharing truck space, and
              advancements in speed and efficiency. Businesses should carefully
              evaluate their shipping needs and consider these factors to
              determine the most appropriate method for their requirements.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default TruckloadService;
