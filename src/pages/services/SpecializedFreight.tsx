import home_icon from "../../assets/icons/services/home_icon.svg";
import details_icon from "../../assets/icons/services/more_details.svg";
import check_mark from "../../assets/icons/services/check_mark.svg";
import avatar from "../../assets/images/services/avatar.png";
import star from "../../assets/icons/services/star.svg";
import services_laptop from "../../assets/images/services/laptop_start_here.png";
import quotation from "../../assets/icons/services/quotation.svg";
import back from "../../assets/icons/services/back.svg";
import forward from "../../assets/icons/services/forward.svg";
import certification from "../../assets/icons/services/certification.svg";
import award_tag from "../../assets/icons/services/award_tag.svg";
import freight_truck from "../../assets/images/services/freight_truck.png";
import banner_d from "../../assets/images/gloves-freight/white_gloves_d.png";
import banner_t from "../../assets/images/gloves-freight/white_gloves_t.png";
import expedited_board from "../../assets/images/gloves-freight/white_gloves_board.png";
import exped_1 from "../../assets/images/gloves-freight/gloves_1.png";
import exped_2 from "../../assets/images/gloves-freight/gloves_2.png";
import exped_3 from "../../assets/images/gloves-freight/gloves_3.png";
import exped_4 from "../../assets/images/gloves-freight/gloves_4.png";
import StudioGreenBanner from "../../components/StudioGreenBanner";

function SpecializedFreight() {
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
            <p className="section-header text-white">Specialiazed Freight</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Specialized freight shipping services provided by MOY Logistics
              covers service for any project or expedited transportation need.
            </p>
            <button className="clear-btn bg-white">
              See Specialized Freight rates
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
              <span className="font-semibold ">Specialized Freight</span>
            </p>
          </div>
          <div className="w-[300px] md:w-[500px] self-center">
            <img src={services_laptop} alt="" />
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Compare Specialized Freight Services Quotes Instantly!
            </p>
            <p className="point-p">
              The cheapest Specialized Freight Services rates from all the top
              carriers are just a few steps away. Fill in a few short details
              about your shipment and receive instant Specialized Freight
              Services from leading freight carriers in one easy place. Trust
              the experts at MOY Logistics to give you the best prices and
              options for your Specialized Freight Services needs.
            </p>
          </div>
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
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-20 lg:mt-32 ">
        <StudioGreenBanner />
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
              Why Choose MOY Logistics For Specialized Shipping Services?
            </p>
            <p className="point-p">
              We are an award-winning logistics company and an American
              veteran-owned business. We bring a lot to the table when it comes
              to specialized freight shipping services. Our history, competitive
              pricing, and level of service are unmatched in the industry. Over
              the years and many miles, we have formed a dedicated and respected
              network of partners in the industry to help customers meet
              deadlines.
              <br />
              <br /> Our mission is to meet and exceed customer expectations in
              all that we do. We take care of specialized freight shipping from
              pickup to delivery. Excellent customer service is our hallmark,
              and it goes a long way in building a relationship of trust. When
              customers select MOY Logistics to handle their freight shipment,
              they trust us to do the job.
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
            <p className="section-header">
              Why Choose MOY Logistics For Specialized Freight Services?
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Compare Specialized Freight Services rates from 50+ carriers
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Instant Specialized Freight Services rates anytime
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Specialized Freight Services solutions to anywhere in the U.S.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Unbeatable discounts on your Specialized Freight Services,
                  LTL, FTL, rail, air, and more
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Automated tracking, paperwork & invoices
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Manage all freight quotes & shipments in one place
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
            <p className="point-p">
              Specialized services require the expertise and care of experienced
              logisticians. Third-party logistics (3PL) providers help ensure
              your valuable freight gets where it’s expected, as it’s expected.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 pt-0 p-4 lg:p-10">
            <p className="section-header">
              What types of freight require specialized services?
            </p>
            <div className="flex gap-2">
              <p className="point-p">1.</p>
              <p className="point-p">
                Fragile, oversized, or complex items that need an additional
                layer of protection, such as:
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Sensitive electronics and devices: office equipment or medical
                  devices and instruments—anything sensitive to bumps, jolts, or
                  knocks
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Fragile robotics and industrial equipment: complex machinery
                  with moving parts that require extra protection from jostling
                  or pinging
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Commercial refrigeration and restaurant equipment: large,
                  bulky items that require extra padding and protection from
                  damage and dents
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Fixtures, furniture, and fragile goods: retail store fixtures,
                  hotel furniture, casino gaming equipment, exercise equipment,
                  residential and hotel furniture, household goods such as
                  mirrors, glass, or pottery, and even Great Grandma’s precious
                  antique chandelier
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <p className="point-p">2.</p>
                  <p className="point-p">
                    Military freight projects that require specific paperwork,
                    processes, and pricing, such as special SDDC authorizations
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="point-p">3.</p>
                  <p className="point-p">
                    Supply chain transactions, including both input materials
                    and finished products, moving items from origin to
                    destination throughout the supply chain
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="point-p">4.</p>
                  <p className="point-p">
                    Motorcycles, which may require a fully enclosed ride,
                    air-suspension trucking, tilt-free storage, and more
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="point-p">5.</p>
                  <p className="point-p">
                    Trade show exhibits, which need to be protected and pristine
                    upon arrival for the ultimate high-impact presentation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-0 lg:pt-0 p-4 lg:p-10">
            <hr />
          </div>
          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              Finely-tailored freight solutions
            </p>
            <p className="point-p text-center lg:w-[70%]">
              To create value for our customers by delivering customized
              shipping solutions that meet their unique needs and to fulfill
              shipping demands from simple to complex with expertise, guidance
              and ingenuity.
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
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              What Types of Specialized Services are Available?
            </p>
            <p className="point-p">
              <span className="font-bold underline">Whit Glove Service:</span>
              <br />
              <br />
              Everything is taken care of for you. Your item is picked up from
              its location and delivered as requested. All packaging and
              unpackaging is included.
            </p>
            <p className="point-p">
              <span className="font-bold underline">Furniture Shipping:</span>
              <br />
              <br />
              Whether shipping furniture purchased online or direct to
              customers, furniture shipping involves paperwork, tracking and
              status notifications, proper packing, and delivery.
            </p>
            <p className="point-p">
              <span className="font-bold underline">Tradeshow Shipping:</span>
              <br />
              <br />
              Tradeshows, expos, and conventions require special arrangements to
              ensure proper handling and timely delivery.
            </p>
            <p className="point-p">
              <span className="font-bold underline">Blanket Wrap Fregiht:</span>
              <br />
              <br />
              Your fragile, oversized, or complex items are wrapped in blankets
              and transported by a blanket wrap carrier.
            </p>
            <p className="point-p">
              <span className="font-bold underline">
                Time Critical or Expedited Freight:
              </span>
              <br />
              <br />
              Expedited freight service is for urgent or time-sensitive loads.
              Predominately used by supply chains, expedited freight moves as
              priority freight. Trucks shipping expedited freight rarely stop
              along the way.
            </p>
            <p className="point-p">
              <span className="font-bold underline">Oversize Freight:</span>
              <br />
              <br />
              Oversize freight sometimes requires special trucks or handling
              equipment, as well as permitting or packaging requirements.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">How Can MOY Logistics Help?</p>
            <p className="point-p">
              MOY Logistics offers all of these specialized services and more.
              No matter what the shipping trends are, When you partner with MOY
              Logistics, our experts will work with you to secure any
              specialized services needed for your shipment, using our trusted
              and established carrier network.Do you ever:
              <br />
              <br /> Need a fleet of trucks to move multiple truckloads?
              <br />
              <br /> Need freeze protection in the winter months? Require
              multiple destination points?
              <br />
              <br /> Have to adhere to special military or governmental
              circumstances?
              <br />
              <br /> MOY Logistics has you covered. We’ll handle the logistics
              and ensure cost-friendly, safe, and on-time deliveries. Get your
              instant freight quote today, or give us a call to speak directly
              to a MOY Logistics agent who can assist you every step of the way
              in booking your specialized freight shipment. We look forward to
              working with you!
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
              <p className="section-header">Specialized Freight FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is specialized freight?
                </p>
                <p className="point-p">
                  A. Specialized freight refers to transporting goods requiring
                  specialized handling, equipment, or expertise due to their
                  unique characteristics, size, shape, or sensitivity. It
                  involves customized solutions to meet the specific
                  requirements of the cargo being transported.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What types of cargo require specialized freight services?
                </p>
                <p className="point-p">
                  A. Various types of cargo may require specialized freight
                  services, including:
                  <br />
                  <br />
                  <span className="font-bold">Oversized or heavy loads:</span>
                   Cargo that exceeds the standard legal limits for size or
                  weight, such as large machinery, industrial equipment, or
                  sensitive items that require extra care during transportation,
                  oversized structures.
                  <br />
                  <br />{" "}
                  <span className="font-bold">Fragile or sensitive goods:</span>
                   Delicate or such as fine art, antiques, glassware, or
                  electronics.
                  <br />
                  <br />
                  <span className="font-bold">Hazardous materials:</span> Cargo
                  classified as hazardous goods due to their potential risks,
                  such as chemicals, flammable substances, or radioactive
                  materials.
                  <br />
                  <br /> <span className="font-bold">Perishable goods</span>
                   Temperature-sensitive goods that require refrigerated or
                  temperature-controlled transportation, such as fresh produce,
                  pharmaceuticals, or flowers.
                  <br />
                  <br />{" "}
                  <span className="font-bold">Livestock or live animals:</span>
                   Transportation of live animals, including livestock, horses,
                  or exotic animals, requiring specialized facilities and
                  handling procedures.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I arrange specialized freight services for my cargo?
                </p>
                <p className="point-p">
                  A. Arranging specialized freight services for your cargo
                  involves working with freight forwarders, logistics providers,
                  or specialized carriers with expertise in handling your
                  specific type of cargo. Please provide them with detailed
                  information about your cargo’s requirements, such as its size,
                  weight, fragility, temperature sensitivity, or any other
                  specific needs. They will assess your requirements and
                  recommend the appropriate equipment, handling procedures, and
                  transportation methods to ensure your cargo’s safe and secure
                  transportation.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the challenges of specialized freight
                  transportation?{" "}
                </p>
                <p className="point-p">
                  A. Specialized freight transportation presents unique
                  challenges, including:
                  <br />
                  <br />
                  <span className="font-bold">Equipment requirement</span>
                  Specialized cargo often requires specialized equipment, such
                  as flatbed trailers, temperature-controlled containers, or
                  heavy-duty cranes. Coordinating this equipment’s availability
                  and proper utilization can take time and effort.
                  <br />
                  <br />{" "}
                  <span className="font-bold">
                    Compliance with regulations:
                  </span>
                   Depending on the type of cargo, there may be specific
                  regulations, permits, or certifications required for
                  transportation. Ensuring compliance with these regulations is
                  crucial.
                  <br />
                  <br />{" "}
                  <span className="font-bold">Expertise and handling</span>
                   Certain cargoes demand specific expertise or handling
                  procedures. Working with experienced professionals trained in
                  the specialized requirements of the cargo being transported is
                  essential.
                  <br />
                  <br /> <span className="font-bold">Security and safety:</span>
                   Specialized cargo may require enhanced security measures to
                  protect against theft, damage, or tampering. Implementing
                  adequate security protocols and monitoring systems is
                  essential.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can specialized freight services be customized for unique
                  requirements?
                </p>
                <p className="point-p">
                  A. Yes, specialized freight services can be customized to meet
                  unique requirements. Freight forwarders and logistics
                  providers offering technical services often have the
                  flexibility to tailor their solutions based on the specific
                  needs of the cargo. This includes customized packaging,
                  handling procedures, equipment selection, and transportation
                  routes to ensure the safe and efficient transportation of the
                  shipment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I ensure my specialized cargo’s safe and secure
                  transportation?
                </p>
                <p className="point-p">
                  A. To ensure the safe and secure transportation of specialized
                  cargo, consider the following:
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Partner with experienced and reputable freight forwarders
                      or logistics providers who specialize in handling your
                      type of cargo.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Provide detailed information about your cargo’s
                      requirements and any specific handling or security
                      instructions.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Follow proper packaging guidelines to protect your cargo
                      during transit.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Utilize appropriate securing and cushioning methods to
                      prevent shifting or damage.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Implement additional security measures, such as seals,
                      tracking devices, or specialized handling protocols if
                      necessary.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Regularly communicate with your service provider to stay
                      informed about the progress of your shipment and address
                      any concerns or issues promptly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any insurance considerations for specialized
                  freight shipments?
                </p>
                <p className="point-p">
                  A. Insurance considerations for specialized freight shipments
                  are essential. Depending on the cargo type and value, you
                  should consider obtaining appropriate insurance coverage to
                  protect against potential loss, damage, or theft during
                  transportation. Consult with insurance providers or freight
                  forwarders specializing in cargo insurance to understand the
                  coverage options available for your specific type of
                  specialized freight.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can specialized freight services be used for international
                  shipments?
                </p>
                <p className="point-p">
                  A. Yes, specialized freight services can be used for
                  international shipments. Many freight forwarders and logistics
                  providers offer technical assistance for cross-border
                  transportation. They have the knowledge and experience to
                  navigate international customs procedures, regulations, and
                  transportation requirements. Working with these specialized
                  providers can help ensure a smooth and efficient
                  transportation process for your international shipments.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I determine the cost of specialized freight
                  services? 
                </p>
                <p className="point-p">
                  A. The cost of specialized freight services depends on various
                  factors, including the type of cargo, its size and weight, the
                  required equipment or handling procedures, the distance
                  traveled, and any additional services or permits needed. To
                  determine the cost, consult with specialized freight providers
                  who can assess your requirements and provide customized quotes
                  based on your needs.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I track my specialized freight shipment? 
                </p>
                <p className="point-p">
                  A. Many freight forwarders and logistics providers offer
                  tracking capabilities for specialized freight shipments. They
                  provide tracking numbers or online portals that allow you to
                  monitor the progress of your shipment, view its current
                  location, and receive real-time updates. This tracking
                  capability provides visibility and helps you stay informed
                  about the status of your specialized freight shipment.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default SpecializedFreight;
