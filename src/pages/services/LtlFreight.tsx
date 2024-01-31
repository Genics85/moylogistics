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
import banner_d from "../../assets/images/ltl-freight/ltl_freight_d.png";
import banner_t from "../../assets/images/ltl-freight/ltl_freight_t.png";
import ltl_freight_board from "../../assets/images/ltl-freight/ltl_freight_board.png";
import ltl_1 from "../../assets/images/ltl-freight/ltl_1.png";
import ltl_2 from "../../assets/images/ltl-freight/ltl_2.png";
import ltl_3 from "../../assets/images/ltl-freight/ltl_3.png";
import ltl_4 from "../../assets/images/ltl-freight/ltl_4.png";
import ltl_5 from "../../assets/images/ltl-freight/ltl_5.png";
import ltl_6 from "../../assets/images/ltl-freight/ltl_6.png";
import ltl_7 from "../../assets/images/ltl-freight/ltl_7.png";
import ltl_8 from "../../assets/images/ltl-freight/ltl_8.png";
import ltl_9 from "../../assets/images/ltl-freight/ltl_9.png";
import ltl_10 from "../../assets/images/ltl-freight/ltl_10.png";
import ltl_11 from "../../assets/images/ltl-freight/ltl_11.png";
import ltl_12 from "../../assets/images/ltl-freight/ltl_12.png";
import ltl_video from "../../assets/images/ltl-freight/ltl_video.png";

function LtlFreight() {
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
            <p className="section-header text-white">LTL Freight</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Streamline your LTL freight shipping process with MOY Logistics,
              and experience significant cost savings of up to 95%. Take
              advantage of our complimentary LTL freight quote service today.
              LTL shipping is an ideal solution for transporting partial
              truckloads and other goods that do not require full trailer
              capacity.
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
              / Services / <span className="font-semibold ">LTL Freight</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              What Does LTL Mean In Freight?
            </p>
            <p className="point-p">
              LTL stands for “Less-Than-Truckload” in the freight industry. LTL
              shipping is a transportation method for smaller freight loads that
              do not require a full truckload. LTL carriers typically transport
              multiple smaller shipments from different customers on the same
              truck, which allows customers to share the cost of transportation
              and reduces overall shipping costs. LTL freight shipments
              typically weigh between 150 and 15,000 pounds and may be too large
              for parcel carriers like UPS or FedEx but too small to justify the
              price of a full truckload.
              <br />
              <br /> LTL carriers use specialized equipment, such as pallet
              jacks, liftgates, and forklifts, to handle and transport these
              shipments. LTL carriers offer various services, including pickup
              and delivery, tracking, and insurance. LTL shipping rates are
              typically based on the shipment’s weight, dimensions, density,
              distance traveled, and additional services required.
            </p>
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Why choose LTL Freight Shipping?
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">LTL Shipping Quotes from 50+ carriers</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Instant LTL rates anytime</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  LTL solutions to anywhere in the U.S. & Canada
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Unbeatable discounts on your less-than-load, truckload, rail,
                  air, and more
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Automated LTL tracking, paperwork & invoices
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
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <p className="point-p font-semibold">
                  Want To Learn More About Truckload Shipping?
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-primary_green font-semibold">
                  TRUCKLOAD FREIGHT
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-primary_green font-semibold">
                  FLATBED TRUCKING
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
            <img src={ltl_freight_board} alt="" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
            <p className="section-header">What Is LTL Freight Shipping?</p>
            <p className="point-p">
              Less-than-truckload (LTL) shipping is a cost-effective option for
              small to mid-sized businesses to transport partial truckload
              shipments without paying for a full 53-foot trailer. Shipping a
              full truckload trailer can be expensive, especially if you do not
              need to use the trailer’s entire space frequently. On the other
              hand, opting for LTL shipping can help you save on transportation
              costs. However, there are several factors to consider when
              shipping LTL.
              <br />
              <br /> One crucial aspect to consider is the origin and
              destination of your shipment, as it can impact how your package is
              shipped. Additionally, the type of packaging used, such as
              pallets, crates, or boxes, can affect the shipping process. It’s
              also important to measure the weight of the shipment, which
              includes the packaging and the item(s) being shipped, as well as
              the dimensions of the freight using length, width, and height
              measurements. If you have any questions about packaging options,
              refer to our website for more information.
            </p>
            <button className="clear-btn self-center">
              Get Your Truck load Quote
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
              When should you use less-than-load (LTL) freight shipping?
            </p>
            <p className="point-p">
              It’s the go-to choice when your shipment’s weight falls in the
              range of 150 to 15,000 pounds – a sweet spot that’s too hefty for
              parcel carriers like UPS or FedEx but not substantial enough to
              justify the expense of a full truckload. Let’s delve into some
              scenarios where LTL freight services genuinely shine.
              <br />
              <br /> Small to Medium-Sized Businesses: Picture a small business
              with a limited inventory to move. LTL shipping becomes a beacon of
              cost-saving hope as it enables firms like these to divide the
              expenses of a full truckload with other shippers. It’s a lifeline
              for the budget-conscious.
              <br />
              <br /> Cost-Effective Shipping: The name says it all – LTL
              shipping is your ticket to cost-effective transportation. Instead
              of footing the bill for a truck you might not need, you pay only
              for the space your cargo occupies. That’s budget optimization in
              action. Multiple Destinations: If your shipments are destined for
              many locations, LTL shipping becomes your logistical maestro. It
              efficiently consolidates your freight, slashing transportation
              costs while ensuring your goods reach each destination promptly
              and safely.
              <br />
              <br /> Limited Storage Space: Imagine operating from a facility
              with limited real estate storage space. LTL shipping is your ideal
              solution. It empowers you to ship smaller quantities of products
              without the headache of securing additional storage space.
              <br />
              <br /> Specialized Freight: LTL carriers bring more than just
              trucks; they have specialized equipment like liftgates, pallet
              jacks, and forklifts. This arsenal makes them your go-to choice
              when your freight demands extra care and handling.
              <br />
              <br /> But when is LTL freight service at its best? It’s your
              go-to option when dealing with freight that exceeds 150 pounds,
              handling large, dense, or bulky items, shipping palletized or
              crated shipments, managing loads that don’t demand an entire
              trailer, routing freight through local terminals and distribution
              centers, and seeking budget-friendly rates for business shippers
              and individuals alike. In these situations, LTL service emerges as
              the most efficient and economical choice for getting your goods
              where they need to go.”
            </p>
          </div>

          <div className="w-full pt-0 lg:pt-0 p-4 lg:p-10">
            <hr />
          </div>
          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              List of Additional LTL Freight Services
            </p>
            <p className="point-p text-center">
              Unlock enhanced shipping possibilities with a range of Additional
              LTL Freight Services. Discover tailored solutions to meet specific
              shipping needs, from liftgate and appointment delivery to white
              glove and more.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 pt-0 lg:pt-0 p-4 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-3 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_1})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_2})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_3})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_4})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_5})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_6})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_7})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_8})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_9})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_10})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_11})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${ltl_12})`,
                  }}
                ></div>
              </div>
            </div>
            <button className="clear-btn mt-10">Instant Freight Rate</button>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Online LTL Freight Shipping Rates</p>
            <p className="point-p">
              Are you looking for the best LTL freight rates from top carriers?
              Look no further than FreightCenter! With our easy-to-use platform,
              simply provide us with a few details about your shipment, and
              we’ll provide you with instant shipping quotes from the best
              freight carriers in one convenient place.
              <br />
              <br /> At FreightCenter, we pride ourselves on our expertise and
              commitment to finding the best prices and options for your
              less-than-load shipping needs. Whether you’re shipping
              domestically or internationally, our team of experts is here to
              help you navigate the complex world of freight shipping and ensure
              your shipment arrives on time and in perfect condition.
              <br />
              <br /> Say goodbye to the hassle of searching multiple carriers
              for the best rates and let FreightCenter do the work for you.
            </p>
          </div>
          <div className="flex p-4 items-center justify-center mb-10">
            <div className=" lg:w-[770px]">
              <img src={ltl_video} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Why should you entrust FreightCenter with your LTL
              (Less-Than-Truckload) Freight Shipping needs?
            </p>
            <p className="point-p">
              The answer is clear, and it’s a combination of several compelling
              reasons that make us your ultimate choice.
              <br />
              <br /> Access to Multiple Carriers: At FreightCenter, we’ve forged
              partnerships with numerous reputable carriers. This extensive
              network gives you access to various LTL shipping options. When
              searching for ‘ltl freight near me,’ you won’t need to look any
              further. Our multiple carriers allow you to compare prices,
              transit times, and other crucial factors, empowering you to select
              the carrier that perfectly aligns with your requirements.
              <br />
              <br /> Competitive Rates: We go the extra mile in negotiating
              rates with our partner carriers on your behalf. This often
              translates into significant cost savings for your shipping needs
              when you choose FreightCenter.
              <br />
              <br />
              User-Friendly Platform: Our online platform is designed with your
              convenience in mind. Getting a quote, comparing prices, and
              booking your shipment has never been easier. Moreover, our
              platform lets you track your shipment in real-time, providing
              invaluable visibility throughout the shipping process.
              <br />
              <br /> Dedicated Support: At FreightCenter, we’re committed to
              your satisfaction. Our customer service team is readily available
              to address any questions or concerns. Whether you prefer phone,
              email, or live chat assistance, we’ve got you covered.
              <br />
              <br /> Shipping Expertise: With over two decades of experience in
              the shipping industry, our team of experts is well-equipped to
              provide guidance and advice on the best way to ship your LTL
              cargo. We’re here to ensure your shipments reach their
              destinations efficiently and securely.
              <br />
              <br /> But that’s not all. FreightCenter boasts an innovative
              transportation management system (TMS) and LTL technology that
              centralizes and streamlines the less-than-truckload shipping
              process. By effortlessly comparing freight rates from top carriers
              or reaching out to us at 800.716.7608, you can tap into the full
              potential of shipping less-than-load freight. Furthermore, we
              offer dedicated freight account managers who work closely with you
              every step of the way, catering to even the most unique shipping
              needs.
              <br />
              <br /> Our team comprises expert LTL shipping agents with deep
              industry knowledge. They excel at finding affordable LTL freight
              shipping rates and identifying the best carriers for your cargo.
              Additionally, we can guide you in selecting the most suitable
              accessorials or specialized LTL services for your shipments.
              <br />
              <br /> Partnering with a third-party logistics provider (3PL) like
              FreightCenter eliminates the guesswork and stress associated with
              shipping less-than-load freight. We’re committed to making LTL
              shipping easy for you, regardless of your level of logistics
              experience.
              <br />
              <br /> Shipping with LTL can seem daunting, especially if you’re
              not well-versed in logistics. Factors like lanes, weight,
              dimensions, packaging, and freight classification can
              significantly impact service levels and costs. That’s where
              FreightCenter steps in. We’ve provided exceptional logistics
              services driven by innovation and technology since 1998. As
              leaders in shipping, 90% of our business revolves around
              less-than-load shipments, and we’ve successfully managed nearly
              1,100,000 LTL shipments as of 2023. At FreightCenter, an account
              manager carefully reviews your business and transportation needs
              to ensure you receive fast, personalized, and dedicated service.
              Our National Account Managers collaborate closely with our
              Customer Care team to ensure you always get top-notch support.
              <br />
              <br />
              As a non-asset-based third-party logistics provider, we don’t own
              any trucks or warehouses. Instead, we’ve partnered with the finest
              trucking companies nationwide to negotiate highly competitive
              rates and offer comprehensive LTL shipping services to our
              customers. Our user-friendly platform, coupled with access to
              exclusive discounts, guarantees that you can confidently and
              swiftly ship your LTL freight.
              <br />
              <br /> We offer various valuable tools to assist all customers,
              including 24/7 access to shipment rates and an assigned agent to
              connect with our partner carriers. Our agents excel at identifying
              the best carrier for your unique shipping requirements. To
              kickstart the process, simply utilize FreightCenter’s freight
              shipping quote tool. Our shipping experts are just a phone call
              away at 800-716-7608 for international shipments.
              <br />
              <br /> At FreightCenter, we’re dedicated to saving you money
              without compromising on the quality of service. We present a
              ‘one-stop-shop’ solution for all your shipping needs. All you need
              to do is request an LTL shipping quote using our proprietary
              technology and choose the carrier that offers the best price and
              transit time for your needs. With one click, you’ll receive an
              extensive list of LTL carriers. Join us today and experience the
              difference FreightCenter can make in simplifying your shipping
              process.
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
                  Factors That Determine Less-Than-Load Freight Costs
                </p>
                <p className="point-p">
                  <span className="italic">
                    Several factors influence the cost of LTL shipping:
                  </span>
                  <br />
                  <br />
                  <span className="font-bold">Location/Distance:</span> The
                  distance your shipment needs to travel is a crucial
                  determinant of the shipping cost. Typically, longer distances
                  require higher prices.
                  <br />
                  <br /> <span className="font-bold">Dimensions:</span> The size
                  and weight of your shipment determine the freight class and
                  density, which directly impact the shipping rates.
                  <br />
                  <br /> <span className="font-bold">Mode:</span> LTL shipping
                  offers various service options, including standard,
                  guaranteed, and expedited shipping. These options come at
                  different costs.
                  <br />
                  <br /> <span className="font-bold">Type:</span> Certain
                  commodities require special handling or equipment, such as
                  perishable, fragile, or hazardous items. Such additional
                  services come at extra costs.
                </p>
                <a className="section-header hover:cursor-pointer underline-offset-4 underline text-primary_green">
                  Download Our LTL Shipping Guide
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Less-Than-Truckload (LTL) FAQs:</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is Less-Than-Truckload (LTL) shipping?
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
                  Q. Can LTL shipments be delivered to residential addresses?
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
                  Q. How does FreightCenter handle partial truckload shipments?
                </p>
                <p className="point-p">
                  A. FreightCenter specializes in providing efficient and
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
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default LtlFreight;
