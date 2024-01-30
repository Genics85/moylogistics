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
import liquid_transport from "../../assets/images/homepage/liquid_transport.png";
import freight_truck from "../../assets/images/services/freight_truck.png";
import truck_freight from "../../assets/images/services/truck_freight.png";
import advantage from "../../assets/images/services/advantages_moy.png";
import banner_d from "../../assets/images/partial-truckload/partial_truckload_banner_homepage.png";
import banner_t from "../../assets/images/partial-truckload/homepage_banner_t.png";
import customers_say from "../../assets/images/partial-truckload/customers_say.png";
import weight_size from "../../assets/images/partial-truckload/weight_size.png";
import type_freight from "../../assets/images/partial-truckload/type_freight.png";

function PartialTruckloadService() {
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
            <p className="section-header text-white">Partial Truckload</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              See how partial truckload saves money and offers a Low-Cost
              alternative for LTL shipping. Use our Instant Freight Rate
              calculator to get instant quotes
            </p>
            <button className="clear-btn bg-white">
              Get Shipping Rate Now
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
              <span className="font-semibold ">Partial Truckload</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Why choose MOY Logistics For Your Partial Truckload?
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Compare rates from 50+ carriers</p>
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
                  Shipping solutions to anywhere in the US & Canada
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Unbeatable discounts on your PTL, LTL, FTL, rail, air, and
                  more
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
                  Manage all freight quotes & shipments in one place
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
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Experienced PTL Shipping
            </p>
            <p className="point-p">
              Our experienced staff will manage all the variables needed to
              ensure a smooth shipping and safe arrival of your
              less-than-truckload cargo, including coordinating pickup and
              delivery, customs management, and permits. Planning is the key to
              successful cargo transport. We have earned a reputation for
              meeting and exceeding our customers’ expectations. 800.716.7608
            </p>
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
                <p className="point-p font-semibold">
                  Want to learn more about LTI Shipping?
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-primary_green font-semibold">
                  LTI LOGISTICS
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
              What Our Customers Say about our PTL Service
            </p>
            <p className="point-p">
              MOY offers reliable, on-time, cost-effective partial truckload
              shipping services. Shipping Partial Load volumes can be expensive
              if you pay for a full container or trailer to ship your smaller
              freight. MOY logistics services coordinate LTL freight scheduling
              to combine shipments from different companies to create a full
              truckload. This lowers shipping costs for all companies utilizing
              the LTL service.
              <br />
              <br /> As an experienced shipping broker, we have a broad network
              of carriers that provides us with flexibility and the resources to
              coordinate shipments throughout North America so that we can
              arrange shipment to your destination, saving you freight costs and
              allowing you greater visibility of your transportation spend.
              <br />
              <br /> Our network of over 11,000 carriers can provide access to
              the type of LTL trucking setup you need to transport your freight,
              including vans, flatbeds, step decks & double drops. The carriers
              in our network are qualified professionals and maintain the
              highest DOT safety ratings, substantial liability and cargo
              insurance, industry certifications, and international
              documentation.
            </p>
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
            <p className="section-header">What Is A Partial Load?</p>
            <p className="point-p">
              A partial truckload, also known as PTL shipping, refers to a
              shipment that doesn’t require the entire capacity of a truck
              trailer. It is a cost-effective and flexible transportation
              solution that allows multiple smaller shipments from different
              shippers to be combined and transported. In contrast to full
              truckload (FTL) shipping, where the entire truck is dedicated to a
              single shipment, partial loads optimize trailer space and
              resources by consolidating multiple shipments.
              <br />
              <br /> The concept of a partial load arises from not all shipments
              requiring a full truck’s space. Many businesses have smaller
              quantities of goods or parcels that need to be transported, making
              it inefficient and costly to book an entire truck. Partial loads
              solve this problem by providing a shared transportation option
              that allows shippers to split the cost of the truck and utilize
              only the space they need.
              <br />
              <br /> Regarding partial load shipping, the critical advantage
              lies in its cost-saving potential. By sharing trailer space with
              other shippers, each party pays only for the space their shipment
              occupies, effectively reducing transportation expenses. This cost
              efficiency makes partial loads attractive to small and
              medium-sized businesses with lower shipping volumes or irregular
              shipment sizes. Another benefit of partial load shipping is the
              flexibility it offers. Unlike FTL shipping, which requires precise
              coordination and timing to fill an entire truck, partial loads can
              accommodate shipments of varying sizes and be scheduled more
              flexibly. This flexibility allows shippers to optimize their
              logistics processes, as they can ship smaller quantities whenever
              needed without waiting for a full truckload.
              <br />
              <br /> In addition to cost savings and flexibility, partial load
              shipping offers improved transit times and reduced risk of damage.
              Since partial loads involve multiple shipments in a single truck,
              there is minimal handling and fewer chances for cargo to be
              damaged or lost in transit. This is especially advantageous for
              delicate or fragile goods requiring extra transportation care. To
              facilitate the efficient handling and transportation of partial
              loads, specialized carriers and logistics providers play a vital
              role. These companies have expertise in consolidating and managing
              multiple shipments, optimizing routes, and coordinating delivery
              schedules. They have extensive networks and resources to handle
              partial load shipments efficiently, minimizing transit times and
              ensuring timely delivery.
              <br />
              <br /> In conclusion, a partial load is a shipment that doesn’t
              require the full capacity of a truck trailer, allowing multiple
              smaller shipments to be combined and transported together. It
              offers cost savings, flexibility, improved transit times, and
              reduced risk of damage. Businesses can efficiently transport
              smaller goods and optimize their supply chain operations by
              leveraging carriers’ and logistics providers’ shared resources and
              expertise. Whether you have small or irregular shipments, partial
              load shipping provides a practical and economical solution for
              your transportation needs
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">PTL vs. LTL Transit Times</p>
            <p className="point-p">
              Partial truckload shipments generally have reduced shipping times
              compared to less-than-truckload (LTL) shipments due to several key
              factors:
              <br />
              <br /> <span className="font-bold">Direct Routing:</span> PTL
              shipments typically follow more direct routing from the origin to
              the destination. Unlike LTL shipments that often make multiple
              stops at various terminals and cross-docking facilities, PTL
              shipments involve fewer intermediate transfers. This means fewer
              delays are caused by additional handling, sorting, and rerouting
              processes. The streamlined routing of PTL shipments allows faster
              transit times and more efficient delivery.
              <br />
              <br />{" "}
              <span className="font-bold">
                Limited Handling and Transfers:
              </span>{" "}
              PTL shipments undergo less handling and fewer transfers compared
              to LTL shipments. With LTL, freight from different shippers is
              consolidated and deconsolidated at various terminals along the
              route. Each transfer introduces potential delays, as shipments
              must be sorted and organized before loading onto the appropriate
              truck. In contrast, PTL shipments are typically loaded directly
              onto the truck at the origin and delivered directly to the
              destination, minimizing the number of stops and handling
              processes. This reduction in handling and transfers leads to
              faster shipping times for shipments.
              <br />
              <br /> <span>
                Expedited Service and Priority Treatment:{" "}
              </span>{" "}
              Carriers specializing in PTL services often provide expedited
              service and prioritize shipments due to their larger volumes or
              more actual freight. Carriers understand that Partial load
              shipments require dedicated truck space and allocate resources
              accordingly to ensure efficient transport. This priority treatment
              means shipments are given higher handling, loading, and
              transportation precedence. Carriers strive to meet the specified
              delivery timeframes for shipments, resulting in reduced shipping
              times compared to LTL shipments.
              <br />
              <br />{" "}
              <span className="font-bold">Optimized Trailer Utilization:</span>
              PTL shipments allow for optimized trailer utilization compared to
              LTL shipments. In LTL shipping, trucks are filled with smaller
              shipments from different shippers, resulting in less efficient use
              of trailer space. This can lead to longer transit times as the
              truck makes multiple stops for loading and unloading. With PTL
              shipments, however, the trailer is typically filled with fewer,
              larger shipments or consolidated loads from a limited number of
              shippers. This optimized trailer utilization allows for faster
              transportation, as fewer stops are required for loading and
              unloading along the route.
              <br />
              <br />{" "}
              <span className="font-bold">
                Efficient Carrier Networks and Resources:
              </span>{" "}
              Carriers specializing in PTL services often have well-established
              networks and resources, contributing to reduced shipping times.
              These carriers have developed efficient routes, strong
              partnerships with reliable terminals, and a fleet of trucks
              dedicated to shipments. Their expertise and network enable them to
              plan and execute shipments more effectively, minimizing delays and
              ensuring timely delivery. Additionally, carriers may leverage
              technology and real-time tracking systems to closely monitor
              shipments and proactively address any potential issues impacting
              shipping times.
              <br />
              <br /> While PTL shipments generally offer reduced shipping times
              compared to LTL, it’s essential to consider that actual transit
              times can vary depending on factors such as the distance between
              the origin and destination, traffic conditions, weather events,
              and any specific shipping requirements. Working with a reputable
              carrier and providing accurate and detailed shipment information
              can help optimize shipping times and ensure smooth transportation.
            </p>
          </div>

          <div className="w-full pt-0 lg:pt-0 p-4 lg:p-10">
            <hr />
          </div>
          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              Four factors of PTL Pricing:
            </p>
            <p className="point-p text-center">
              When it comes to pricing for partial truckload (PTL) shipments,
              several factors come into play. These factors can influence the
              overall cost of the shipment and help determine the pricing
              structure. Here are four key factors that impact PTL pricing:
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 pt-0 lg:pt-0 p-4 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-3 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${weight_size})`,
                  }}
                >
                </div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${liquid_transport})`,
                  }}
                >
                  <div className=" text-[13px] flex flex-col justify-end p-3 w-full text-white bg-gradient-to-t from-[#102906] to-transparent">
                    <p className="leading-[18px] font-medium">
                      Double-Drop Deck with Detachable Deck (Lowboy, RGN)
                    </p>
                    <p className="leading-[20px]">
                      A Double-Drop Deck with a detachable deck also referred to
                      as a Lowboy with a Removable Goose Neck (RGN), is a
                      trailer with a detachable neck to allow equipment to be
                      driven on the trailer from the front. These trailers can
                      haul up to 45,000 pounds of freight at a maximum length of
                      29 feet and 12 feet in height.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${liquid_transport})`,
                  }}
                >
                  <div className=" text-[13px] flex flex-col justify-end p-3 w-full text-white bg-gradient-to-t from-[#102906] to-transparent">
                    <p className="leading-[18px] font-medium">
                      Flatbed Trailers
                    </p>
                    <p className="leading-[20px]">
                      A standard flatbed trailer is an open-air trailer used to
                      transport bulky or abnormal freight such as vehicles,
                      tractors, and bulky machinery items. These trailers can
                      haul up to 48,000 pounds of freight at a maximum height of
                      8.5 feet and a max of 48 feet in length.
                    </p>
                    <p className="font-medium">Learn More</p>
                  </div>
                </div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${liquid_transport})`,
                  }}
                >
                  <div className=" text-[13px] flex flex-col justify-end p-3 w-full text-white bg-gradient-to-t from-[#102906] to-transparent">
                    <p className="leading-[18px] font-medium">
                      Stretch Flatbed Trailers
                    </p>
                    <p className="leading-[20px]">
                      An extended flatbed trailer is an open-air trailer used to
                      transport bulky or abnormal freight such as vehicles,
                      tractors, and bulky machinery items. These trailers can
                      haul up to 48,000 pounds of freight at a maximum height of
                      8.5 feet and a max of 80 feet in length.
                    </p>
                    <p className="font-medium">Learn More</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="clear-btn mt-10">Instant Partial Rate</button>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10 ">
            <p className="section-header">
              Types of Truckload Services Offered
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Standard Trailer 48ft or 53ft</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Trade Show Shipping</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Oversize or Heavy Haul Shipping</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Refrigerated Shipping</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Rail Service</p>
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
                <p className="point-p">Heavy Haul Shipping</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Expedited Freight Shipping</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Air-Ride Services</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Drayage Port Services</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Truckload Shipping Seasons: Understanding Industry Fluctuations
            </p>
            <p className="point-p">
              The transportation and logistics industry experiences regular
              fluctuations throughout the year, driven by truckload shipping
              seasons. These seasonal variations directly impact capacity and
              rates, influencing the available options for shippers. By
              understanding these shipping seasons, businesses can optimize
              their supply chains and effectively plan for increased demand and
              tighter capacity periods.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Slow Season – January to March:</p>
            <p className="point-p">
              Following the holiday rush, the transportation and logistics
              industry enters a slower shipping season from January to March.
              While shipping volumes decrease during this period, it is
              important to note that the sector remains active. Essential items
              such as medication, food, face masks, and hand sanitizers are in
              high demand. Additionally, the transportation of COVID-19 vaccines
              requires refrigerated trucks for nationwide distribution.
              Moreover, consumers often return items they receive over the
              holidays, resulting in shipping them back to the original seller.
              During this slower season, truckload rates favor shippers due to
              lower shipping volumes. Carriers are more willing to take on work,
              making rates more favorable for shippers. By March, shipping
              volumes begin to increase as spring and summer approach.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Increased Volume Season – April to July:
            </p>
            <p className="point-p">
              The arrival of spring increases shipping volumes, making it easier
              for drivers to find work compared to the slower months. This
              period marks a truckload shipping season where carrier
              availability decreases, leading to tighter rates. The produce
              harvest season also contributes to the rise in shipment volumes,
              particularly for truckload shippers transporting food products or
              produce. For instance, produce shipments often require
              temperature-controlled equipment to minimize spoilage or damage,
              especially during the hot summer.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Peak Shipping Season – August to October:
            </p>
            <p className="point-p">
              From August to October, the industry experiences the peak shipping
              season, which coincides with the continued produce season.
              Retailers and e-commerce stores witness a surge in product
              shipments due to increased online consumer purchases. This
              heightened demand for shipping results in further tightening of
              capacity, necessitating more trucks than usual to meet the needs
              of shippers.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Holiday Shipping Season – November and December:
            </p>
            <p className="point-p">
              November and December represent the busiest months for the
              transportation and logistics industry. Consumers take advantage of
              major sales events such as Black Friday, Cyber Monday, and Small
              Business Saturday in November, with some retailers extending Black
              Friday sales throughout the month. Consumers make last-minute
              purchases in December before shipping gifts to friends and family.
              Retailers ship more significant quantities of goods during this
              period, further increasing shipping volumes. However, as
              mid-December approaches and most consumers finish holiday
              shopping, the industry slows down again.
              <br />
              <br /> Knowing the shipping seasons is crucial for businesses
              aiming to optimize their shipping strategies. By understanding the
              fluctuations in demand and capacity, companies can effectively
              plan for each season and ensure a smooth and efficient
              transportation process.
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
            <div className="flex flex-col lg:flex-row gap-6 pt-10  p-4 lg:p-10 items-center">
              <div className="w-full lg:w-[510px] self-center  shrink-0">
                <img className="w-full" src={truck_freight} alt="" />
              </div>
              <div className=" flex flex-col gap-7 ">
                <p className="section-header">What is Truck Freight?</p>
                <p className="point-p">
                  Truckload freight, or truck freight, is a robust
                  transportation method for transporting significant quantities
                  of goods from one location to another. This mode of
                  transportation is particularly suitable when shipment sizes
                  exceed the capabilities of other transportation options, such
                  as parcel carriers or LTL carriers. Truck freight can be
                  classified into two categories: FTL and partial truckload
                  (PTL). FTL shipping involves dedicating an entire truck to a
                  single shipment, while PTL shipping involves sharing the truck
                  with other loads.
                  <br />
                  <br /> Truck freight can accommodate various commodities,
                  including raw materials, finished products, and industrial
                  equipment. This versatile mode of transportation can be
                  employed for domestic and international shipping requirements.
                  <br />
                  <br />
                  The utilization of truck freight offers several advantages
                  compared to alternative transportation modes. Firstly, it
                  provides faster transit times, ensuring expedited delivery of
                  goods. Additionally, truck freight allows for more flexible
                  pickup and delivery times, catering to specific scheduling
                  needs. This mode of transportation also excels in handling
                  fragile or hazardous shipments, offering enhanced security and
                  specialized handling protocols. Furthermore, truck freight can
                  result in cost savings for larger loads, as rates are
                  typically more favorable for substantial shipments.
                  <br />
                  <br /> Truckload freight is a highly flexible and efficient
                  transportation option for large goods. Its benefits encompass
                  accelerated transit times, flexible pickup and delivery
                  options, secure handling of fragile or hazardous shipments,
                  and potential cost savings for substantial loads.
                </p>
                <button className="clear-btn self-center">
                  Instant Truck load Quote
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                Simplifying Freight Shipping: Comparing Truck Freight Rates
              </p>
              <p className="point-p">
                Finding the best rates and reliable carriers is crucial for
                businesses and individuals in shipping. MOY Logistics offers a
                user-friendly online platform that simplifies this process by
                allowing users to compare truck freight rates from various
                carriers. This essay will explore how MOY Logistics`s platform
                works, empowering users to make informed decisions and secure
                the best prices for their shipping needs.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Comparison Made Easy:</p>
              <p className="point-p">
                MOY Logistics’s platform starts by collecting essential details
                about the shipment. Users enter information such as the goods’
                origin and destination, the shipment’s size and weight, and any
                special requirements. This comprehensive input ensures accurate
                rate comparisons tailored to specific shipping needs.
                <br />
                <br /> Next, the platform swiftly generates a list of available
                carriers and their rates. This feature enables users to evaluate
                multiple options side by side, considering both the cost and the
                quality of services provided. The ability to compare rates from
                different carriers at a glance empowers users to make
                well-informed decisions that align with their priorities.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Streamlined Booking Process:</p>
              <p className="point-p">
                Once the user has identified the carrier and rate best suits
                their requirements, MOY Logistics’s platform streamlines the
                booking process. Users can conveniently secure their shipment by
                booking directly through the platform. By eliminating the need
                for time-consuming paperwork, MOY Logistics simplifies the
                process, saving users valuable time and effort. Furthermore, the
                platform automatically generates all the necessary shipping
                documents, including bills of lading and customs paperwork. This
                automated feature reduces administrative burdens, ensuring a
                hassle-free experience for users. By handling the paperwork, MOY
                Logistics enables users to focus on other essential aspects of
                their business or personal endeavors.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                4 Advantages of Full Truckload Freight Shipping
              </p>
              <p className="point-p">
                Great news, we have the solution for you, and let’s face it, you
                are short on time and looking for ways to decrease your freight
                spending. If you are a small to medium-sized business owner or
                manager, you may be interested in our four advantages of full
                truckload freight shipping. Below are some of the most common
                advantages:
                <br />
                <br /> <span className="font-bold">Negotiable Rates:</span> The
                rates quoted by carriers for LTL shipments are not negotiable.
                You have your choice of carriers, but your 3PL (freight broker)
                doesn’t have the opportunity to negotiate the already-discounted
                rate. With a full truckload, the rates are set in real-time by
                what the market will bear. That means your 3PL has more
                opportunities to negotiate a better rate.
                <br />
                <br /> <span className="font-bold">Time Savings:</span> TL
                shipping can shave two days off your transit time by eliminating
                the extra handling involved with LTL shipments involving at
                least three trucks and two freight terminals. Full truckload
                shipments are picked up and delivered by the same truck with no
                extra stops between the pickup and delivery locations. Fewer
                Hassles: LTL shipping revolves around accuracy. Every shipping
                unit (pallet, crate, etc.) Carriers audit the shipment and
                re-weight and re-measure. Knowing the freight class and density
                of your shipment, along with the requirement of certain
                accessorial and options like liftgates and oversized freight,
                can make LTL shipping more cumbersome.
                <br />
                <br /> <span className="font-bold">Reduced Risks:</span> When
                your shipment has the entire truck to itself, you don’t have to
                worry about another shipper’s cargo damaging yours. Or vice
                versa, where another shipper may blame you for damage to their
                shipment. While additional 3rd party cargo insurance is still
                advisable in case of an unavoidable circumstance caused by
                weather, accident, or unforeseen delay, FTL shipping reduces
                some risks by eliminating shared trailer space.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                MOY Logistics Simplifies Truckload Freight Services
              </p>
              <p className="point-p">
                MOY Logistics offers a team of experienced and dedicated Truck
                Freight Experts who provide exceptional service and support for
                your shipping needs. With their extensive knowledge of the truck
                freight industry and understanding of shipping regulations, they
                assist you in selecting the right carriers and shipping options.
                They work closely with you to create customized shipping plans
                considering your budget, timeline, and goods. Regular updates,
                addressing concerns, and ensuring on-time and perfect shipments
                are part of their service. Contact MOY Logistics today to
                experience their commitment to customer satisfaction.
                <br />
                <br /> Benefits of choosing MOY Logistics include access to an
                extensive network of carriers, guaranteeing competitive rates
                and reliable services. Their platform simplifies freight
                shipping by allowing users to compare truck freight rates from
                various carriers, empowering informed decisions and securing the
                best prices. Streamlined booking and automated document
                generation ensure a hassle-free experience.
                <br />
                <br /> MOY Logistics’s extensive carrier network provides
                competitive rates and reliable services. Simplify your freight
                shipping process by utilizing their platform and easily
                comparing truck freight rates.
                <br />
                <br /> Regardless of the commodity being shipped, truckload
                freight services offer fast, secure, and cost-effective delivery
                solutions for large quantities or items unsuitable for LTL
                shipment. TL freight shipping is invaluable for meeting
                production deadlines and restocking inventory quickly. Truckload
                freight is an ideal solution for reliable freight services. With
                over 20 years of experience, MOY Logistics has the expertise to
                ship various commodities across different locations. Their
                carriers are equipped to handle shipments ranging from shingles
                to farm equipment or used excavators, ensuring safe and timely
                delivery. MOY Logistics prides itself on excellent customer
                service and on-time delivery.
                <br />
                <br /> Their team listens and understands your needs, asking
                relevant questions to provide the best-fit options.
                Transportation specialists assist in navigating details to get
                your freight moving locally, regionally, or nationally. MOY
                Logistics is considered the best solution for freight shipping.
                For further discussions and exploring options, contact their
                truckload experts today at 8007167608.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Truckload Freight FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is truckload freight shipping?
                </p>
                <p className="point-p">
                  A. Truckload freight shipping refers to transporting goods
                  that fill an entire truck trailer. It is typically used when a
                  shipper has enough cargo to occupy the whole trailer when the
                  shipment is time-sensitive or requires special handling.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the advantages of truckload shipping?
                </p>
                <p className="point-p">
                  A. Some benefits of truckload shipping include faster transit
                  times, reduced handling and fewer risks of damage, dedicated
                  capacity for your shipment, and more flexibility in
                  scheduling.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How is truckload shipping different from
                  less-than-truckload (LTL) shipping?
                </p>
                <p className="point-p">
                  A. Truckload shipping involves using a whole truck trailer for
                  a single shipment, while LTL shipping combines smaller
                  shipments from other customers into a single truck. Truckload
                  shipping is generally faster and more cost-effective for
                  larger shipments, whereas LTL shipping suits smaller loads.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What types of goods are typically shipped via truckload?
                </p>
                <p className="point-p">
                  A. Truckload shipping is suitable for a wide range of goods,
                  including manufactured products, raw materials, machinery,
                  perishable items, and other large or heavy items that require
                  exclusive trailer use.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How are truckload rates determined?
                </p>
                <p className="point-p">
                  A. Truckload rates depend on various factors such as the
                  distance to be traveled, the weight and dimensions of the
                  shipment, the type of goods being transported, fuel costs,
                  current market conditions, and any additional services
                  required (such as liftgate or inside delivery).
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I find a truckload carrier or freight broker?
                </p>
                <p className="point-p">
                  A. You can find truckload carriers or freight brokers online,
                  contact logistics companies, or utilize freight matching
                  platforms. These platforms connect shippers with available
                  carriers based on their specific shipping requirements.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What information should I provide when requesting a
                  truckload freight quote?
                </p>
                <p className="point-p">
                  A. When getting a quote, you should provide details such as
                  the shipment’s origin and destination, the cargo’s weight and
                  dimensions, the desired pickup and delivery dates, any special
                  requirements, and your contact information.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="flex flex-col w-full items-center justify-center gap-10 p-4">
          <p className=" section-header ">
            3 Advantages of Using MOY Logistics for Heavy Haul Shipping:
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <div>
                <img className="w-full" src={advantage} />
              </div>
              <p className="font-semibold text-[23px]">Speed Up Transit:</p>
              <p className="leading-[20px] ">
                FTL shipments move directly from the pickup point to the
                destination without stops or transfers, leading to faster
                transit times. This direct route minimizes delays, ensuring
                quicker deliveries, which is especially important for
                time-sensitive goods.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <div>
                <img className="w-full" src={advantage} />
              </div>
              <p className="font-semibold text-[23px]">
                Reduces Risk of Damage:
              </p>
              <p className="leading-[20px] ">
                Handling FTL shipments less frequently during transit
                significantly lowers the risk of damage. The lack of multiple
                loading and unloading processes makes FTL ideal for transporting
                fragile, high-value, or sensitive items, as the goods remain in
                the same truck throughout the journey, ensuring better
                protection.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <div>
                <img className="w-full" src={advantage} />
              </div>
              <p className="font-semibold text-[23px]">
                Cost-Effective for Large Shipments:
              </p>
              <p className="leading-[20px] ">
                FTL often proves more economical than Less Than Truckload (LTL)
                options for shipments large enough to fill a truck. It optimizes
                costs by spreading them over a large volume of goods, lowering
                the transportation cost per unit. Also, for near-full loads, FTL
                avoids the extra expense of paying for unused space, a common
                issue with LTL.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PartialTruckloadService;
