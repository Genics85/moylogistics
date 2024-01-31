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
import banner_d from "../../assets/images/partial-truckload/partial_truckload_banner_homepage.png";
import banner_t from "../../assets/images/partial-truckload/homepage_banner_t.png";
import customers_say from "../../assets/images/partial-truckload/customers_say.png";
import weight_size from "../../assets/images/partial-truckload/weight_size.png";
import type_freight from "../../assets/images/partial-truckload/type_freight.png";
import type_delivery from "../../assets/images/partial-truckload/type_delivery.png";
import accessorial from "../../assets/images/partial-truckload/accessorial.png";

function InternationFreightShipping() {
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
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${type_freight})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${type_delivery})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${accessorial})`,
                  }}
                ></div>
              </div>
            </div>
            <button className="clear-btn mt-10">Instant Partial Rate</button>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">PTL Typical Demographics</p>
            <p className="point-p">
              Partial truckload (PTL) shipping is a transportation solution that
              caters to specific demographics and shipment characteristics. It
              is particularly well-suited for small to medium-sized businesses
              with moderate shipping needs within the weight and volume ranges
              of 5,000 to 25,000 pounds and 5 to 22 pallets.
              <br />
              <br /> One of the main advantages of PTL for small to medium-sized
              businesses is its cost-effectiveness. These businesses may not
              have enough goods to fill an entire truck, making full truckload
              (FTL) shipping financially impractical. By utilizing PTL, they can
              share the transportation cost with other shippers with compatible
              shipment sizes and destinations. This shared cost model allows
              businesses to access the benefits of truckload shipping without
              incurring the expenses associated with dedicated truck services.
              <br />
              <br /> Small to medium-sized businesses across various industries
              can benefit from PTL shipping. Manufacturers, wholesalers,
              distributors, and retailers often have moderate quantities of
              goods to ship regularly, making them ideal candidates for PTL. The
              weight and volume ranges associated with PTL align with their
              shipping needs and allow them to optimize their transportation
              operations. By utilizing PTL, these businesses can ensure their
              goods are transported efficiently, cost-effectively, and in line
              with their shipment requirements.
              <br />
              <br /> Flexibility is another critical advantage of PTL for
              businesses with varying or fluctuating shipping needs. Seasonal
              companies, startups, or businesses experiencing periods of growth
              or change may find it challenging to commit to a fixed schedule or
              the rigid nature of FTL shipping. PTL offers the flexibility to
              accommodate changing shipment volumes and frequencies. As business
              needs evolve, PTL allows for adjustments in shipment sizes without
              the constraints associated with FTL. This adaptability enables
              businesses to maintain efficiency in their shipping operations and
              meet changing customer demands.
              <br />
              <br />
              Furthermore, businesses that prioritize minimizing handling and
              reducing the risk of damage find PTL appealing. With PTL,
              shipments are typically loaded directly onto the truck at the
              origin and delivered directly to the destination. This reduces the
              number of handling points and transfers, minimizing the risk of
              damage or loss during transit. For businesses that ship fragile or
              delicate goods, PTL provides the peace of mind that their
              shipments will be handled carefully and delivered safely to their
              destinations.
              <br />
              <br /> In conclusion, the typical demographics of PTL users
              include small to medium-sized businesses that require
              transportation for shipments ranging from 5,000 to 25,000 pounds
              and occupying the space of 5 to 22 pallets. These businesses
              benefit from the cost savings, flexibility, and reduced handling
              that PTL offers. By leveraging PTL services, small to medium-sized
              businesses can optimize their shipping operations, adapt to
              changing shipment needs, and ensure their goods’ efficient and
              cost-effective transportation.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Types of Shippers Using Partial Truckloads: Catering to Small and
              Medium-Sized Businesses
            </p>
            <p className="point-p">
              Partial truckload (PTL) shipping is a transportation solution that
              caters to a specific demographic of shippers, primarily small and
              medium-sized businesses (SMBs). These shippers often have unique
              shipping needs that fall between the capacity of less than
              truckload (LTL) and full truckload (FTL) shipments. Understanding
              the types of shippers who utilize PTL services can shed light on
              the benefits and advantages this shipping method offers.
              <br />
              <br />
              Small-medium-sized businesses, commonly called SMBs, are the
              primary users of PTL services. These businesses typically have
              moderate shipping needs that exceed the capabilities of LTL
              shipping but don’t require the space and cost associated with FTL
              shipping. SMBs encompass various industries, including
              manufacturing, retail, wholesale, and distribution. They may
              produce or distribute goods in quantities that range from 5 to 20
              pallets, making PTL an ideal solution to meet their shipping
              requirements.
              <br />
              <br /> For SMBs, PTL offers a cost-effective alternative to FTL
              shipping. FTL shipping can be costly for smaller businesses, as
              they may not have enough goods to fill an entire truck. By sharing
              the truck space with other shippers in a PTL arrangement, SMBs can
              split the cost of transportation, making it more affordable for
              their budget. This cost-sharing model allows SMBs to access the
              benefits of truckload shipping without paying for unused space,
              ultimately maximizing their shipping efficiency and
              cost-effectiveness.
              <br />
              <br /> PTL is also attractive to SMBs due to its flexibility and
              agility. Unlike FTL, which requires a full truck’s worth of goods
              to be shipped simultaneously, PTL allows businesses to send their
              goods in smaller quantities. This flexibility is particularly
              beneficial for SMBs with varying shipment volumes or irregular
              shipping patterns. For example, seasonal businesses may experience
              fluctuations in their shipping needs throughout the year, and PTL
              enables them to adjust their shipment sizes accordingly without
              committing to a full truckload.
              <br />
              <br /> Another advantage of PTL for SMBs is the reduced risk of
              damage and the potential for faster transit times compared to LTL.
              With LTL shipments, goods are typically handled and transferred
              multiple times during transit, increasing the risk of damage and
              extending the delivery timeline. In contrast, PTL shipments remain
              on the same truck, reducing the number of handling points and
              minimizing the risk of damage. Additionally, since PTL shipments
              are consolidated with other shippers’ loads, the delivery route
              can be more direct, resulting in shorter transit times than
              traditional LTL shipments.
              <br />
              <br /> MOY Logistics, as a leading logistics provider, understands
              the unique needs of SMBs and offers tailored PTL solutions to
              cater to their shipping requirements. By leveraging our extensive
              carrier network, industry expertise, and advanced technology
              platform, we connect SMBs with reliable and cost-effective PTL
              services. We aim to simplify the shipping process, provide
              transparent pricing, and offer exceptional customer support to
              ensure a smooth and efficient shipping experience.
              <br />
              <br /> Whether you’re a small manufacturer, a retail business, or
              a distributor, MOY Logistics is committed to helping you navigate
              the complexities of transportation and find the right PTL solution
              for your needs. Request a rate estimate today and experience the
              convenience and cost savings of PTL shipping with MOY Logistics
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Advantages of Arranging a Partial Truckload:
            </p>
            <p className="point-p">
              Faster Delivery for a Lower Price. Weight limits on partials are
              between 5K lbs and 25k lbs. This type of shipping will compete
              with LTL rates while giving the delivery times of FTL services—the
              benefits of Partial shipping offer fewer stops, less handling, and
              cargo insurance options.
            </p>
            <div className="flex flex-col gap-5 ">
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Partial truckload services do not need freight class
                  classifications and have some limitations.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Freight shipping moves most shipments through trade routes. If
                  you are within these routes, your service times will be fast
                  for pickup and delivery.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Heavy products on a few pallets only sometimes qualify for PTL
                  services.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Complete logistic management of your shipment
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Door-to-door delivery and cross-border logistics for shipping
                  throughout North America (US, Mexico, and Canada)
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Expedited transport of emergency supplies & mission-critical
                  equipment
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Guaranteed service quality at competitive rates
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  GPS tracking & real-time location updates
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Comprehensive insurance for high-value loads
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">When to Use PTL Shipping</p>
            <p className="point-p">
              As stated earlier, PTL may be a better option than LTL. This
              applies to shipments with more than 4 pallets or if the total
              weight exceeds 5,000 lbs. There are some cases when the cost of
              PTL and LTL are the same. If you choose LTL, you’ll pay for a
              longer transit time and have your shipment switch trailers several
              times.
              <br />
              <br /> PTL shipping doesn’t charge you for dimensional weight.
              Last but not least, as we stated before, there’s less chance that
              your shipment will be damaged because it will go through fewer
              unloads. We want to note here: sometimes, a company offering PTL
              won’t ship something deemed sensitive, as they don’t want to deal
              with unique classifications or the possibility of damage.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">When is LTL Better than PTL?</p>
            <p className="point-p">
              PTL is an excellent option for shipments that weigh more than
              5,000 lbs and require 5 or more pallets. On the other hand, LTL
              shipping is perfect for lightweight loads. LTL is almost always
              the best solution when shipping less than 5 pallets. LTL also has
              the advantage of getting a same-day pickup. This is due to the
              number of freight carriers that provide LTL shipping over PTL
              shipping. Due to capacity, while the transit time of an LTL may
              take slightly longer than a PTL, an LTL will likely be delivered
              faster. Finding a truck with enough space to handle your shipment
              can take time.
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
                <p className="section-header">
                  Compare Partial Truckload Prices Instantly
                </p>
                <p className="point-p">
                  Trust the experts at MOY Logistics to give you the best prices
                  and options for your shipping. The cheapest shipping cost from
                  all the top carriers is just a few steps away. Fill in brief
                  details about your shipment and receive instant Specialized
                  Freight Services from leading freight carriers in one easy
                  place. Businesses that ship products quickly become aware of
                  the many options available.
                  <br />
                  <br /> You often have items you must send but can only fill
                  part of the truck. PTL and LTL services give shippers the
                  option of sending items to a location on an ongoing basis,
                  whether shipping a few pallets or a complete load. Third-party
                  logistics providers specialize in pairing shippers with the
                  transportation services they need. Experts in logistics know
                  how to find the right truck to fulfill the shippers’ needs.
                  <br />
                  <br /> If the shipper only needs 20 feet of space in a truck.
                  In that case, logistics professionals have the knowledge and
                  resources to match that carrier needing a 20-foot load with
                  the shipper that needs 20 feet of truck space. But PTL and LTL
                  can be confusing since they seem, on the surface, to refer to
                  the same thing. However, there are differences between the
                  two.
                </p>
                <p className="section-header">Conclusion</p>
                <p className="point-p">
                  With the many parts of the shipping industry, LTL and FTL are
                  the most dominant types of shipping. One is aimed at
                  established businesses with massive shipping budgets, while
                  the other is at smaller-medium-sized businesses. The rarer PTL
                  isn’t in the same running as LTL and FTL, but it can be a
                  hidden gem for a company that can utilize it. If that’s you,
                  contact a freighter or broker and see what PTL can do for you!
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Partial Truckload FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is partial truckload shipping?
                </p>
                <p className="point-p">
                  A. Partial truckload shipping is a transportation method that
                  combines multiple smaller shipments from different shippers
                  into a single trailer. It falls between less-than-truckload
                  (LTL) and full-truckload (FTL) shipping. With a partial
                  truckload, you pay for the space and weight your shipment
                  occupies within the trailer, allowing you to share the costs
                  with other shippers and achieve cost savings.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. When should I choose partial truckload shipping?
                </p>
                <p className="point-p">
                  A. Partial truckload shipping is a great option when your
                  shipment is too large for LTL but doesn’t require an entire
                  truck. It is suitable for loads that weigh between 5,000 and
                  20,000 pounds or occupy more than six pallets. If you have
                  time-sensitive or fragile freight, partial truckload can also
                  provide more control and reduced handling compared to LTL.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How does partial truckload differ from LTL and full
                  truckload?
                </p>
                <p className="point-p">
                  A. Partial truckload differs from LTL because it involves
                  sharing trailer space with other shippers, whereas LTL
                  shipments are combined with multiple loads in a hub-and-spoke
                  system. Partial truckload offers greater security and reduced
                  handling compared to LTL. In contrast, a full truckload
                  involves booking an entire truck for your shipment, providing
                  maximum capacity and faster transit times but at a higher
                  cost.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the advantages of partial truckload shipping?
                </p>
                <p className="point-p">
                  A. Partial truckload shipping offers several advantages,
                  including cost savings, reduced handling, increased security,
                  and faster transit times compared to LTL. It allows more
                  flexibility and control over your shipment than a full
                  truckload. Additionally, partial truckload is more
                  environmentally friendly as it reduces empty miles and
                  optimizes trailer utilization.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How does MOY Logistics handle partial truckload shipments?
                </p>
                <p className="point-p">
                  A. MOY Logistics specializes in providing efficient and
                  cost-effective solutions for partial truckload shipments. We
                  leverage our extensive network of carriers to find the most
                  competitive rates and reliable transportation options for your
                  specific needs. Our online platform lets you quickly obtain
                  quotes, compare rates, book shipments, and track your cargo in
                  real-time. Our dedicated customer support team can assist you
                  throughout the shipping process, ensuring a smooth and
                  hassle-free experience.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Is partial truckload shipping suitable for all types of
                  freight?
                </p>
                <p className="point-p">
                  A. Partial truckload shipping suits many freight types,
                  including palletized goods, large or bulky items, fragile
                  goods, and time-sensitive shipments. However, certain
                  restrictions or limitations may depend on the carrier and
                  specific shipment requirements. It’s best to consult with our
                  team at MOY Logistics to determine if partial truckload is the
                  right choice for your particular freight.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I determine the cost of a partial truckload
                  shipment?
                </p>
                <p className="point-p">
                  A. The cost of a partial truckload shipment is calculated
                  based on factors such as the weight, dimensions, distance, and
                  specific requirements of your freight. MOY Logistics advanced
                  technology and expertise allow us to provide accurate and
                  competitive pricing for your partial truckload shipments. We
                  can generate customized quotes tailored to your needs by
                  providing detailed information about your freight.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How can I track my partial truckload shipment?
                </p>
                <p className="point-p">
                  A. MOY Logistics provides a user-friendly online platform that
                  allows you to track your partial truckload shipment in real
                  time. You will receive tracking information once your shipment
                  is booked, including the carrier details and a tracking
                  number. Simply enter the tracking number on our website to
                  access up-to-date tracking information and monitor the
                  progress of your shipment from pickup to delivery.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I insure my partial truckload shipment?
                </p>
                <p className="point-p">
                  A. Yes, you can ensure your partial truckload shipment for
                  added protection. MOY Logistics offers cargo insurance options
                  to safeguard your freight against loss or damage during
                  transit. It’s important to discuss your insurance needs with
                  our team and understand your coverage options.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I get started with partial truckload shipping
                  through MOY Logistics?
                </p>
                <p className="point-p">
                  A. Getting started with partial truckload shipping through MOY
                  Logistics is easy. Contact our team by phone or through our
                  website to discuss your shipment requirements. Our experienced
                  logistics experts will guide you through the process, provide
                  you with competitive rates, and assist you in booking your
                  partial truckload shipment.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="flex flex-col w-full items-start justify-center gap-10 p-4">
          <p className=" section-header ">
            3 Advantages of Using MOY Logistics for a Partial Truckload
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <p className="font-semibold text-[23px]">Cost Savings:</p>
              <p className="point-p leading-[20px] ">
                One of the major advantages of utilizing MOY Logistics for
                partial truckload shipping is the cost savings it provides. With
                partial truckload shipping, you only pay for the space and
                weight your shipment occupies within the trailer rather than
                booking an entire truck. This cost-effective solution saves you
                on transportation expenses, especially when shipping smaller or
                less-than-truckload shipments. MOY Logistics leverages its
                extensive network of carriers to find the most competitive rates
                for your partial truckload shipments, ensuring you get the best
                value for your money.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <p className="font-semibold text-[23px]">
                Increased Flexibility:
              </p>
              <p className=" point-p leading-[20px] ">
                Partial truckload shipping offers greater flexibility than full
                truckload shipping. With MOY Logistics, you can combine your
                shipment with other compatible loads to maximize trailer
                utilization. This flexibility allows for more efficient use of
                transportation resources, reduces wasted space, and minimizes
                empty miles. By leveraging our load consolidation and
                optimization expertise, we can help you find the most suitable
                partial truckload solution that meets your specific requirements
                while optimizing cost and efficiency.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <p className="font-semibold text-[23px]">
                Streamlined Logistics Management:
              </p>
              <p className=" point-p leading-[20px] ">
                MOY Logistics provides a comprehensive logistics management
                platform simplifies partial truckload shipping. Our
                user-friendly online portal allows you to obtain quotes, compare
                rates, book shipments, and track your cargo all in one place.
                Our advanced technology and automated systems enable real-time
                tracking and proactive communication, informing you of your
                shipment's status from pickup to delivery. Additionally, our
                dedicated customer support team is available to assist you
                throughout the process, offering guidance and resolving any
                queries or issues that may arise. With MOY Logistics, you can
                enjoy streamlined logistics management, saving you time and
                effort.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default InternationFreightShipping;
