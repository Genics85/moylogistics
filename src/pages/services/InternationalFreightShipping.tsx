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
import banner_d from "../../assets/images/internation-freight/international_freight_d.png";
import banner_t from "../../assets/images/internation-freight/internation_freight_t.png";
import international_board from "../../assets/images/internation-freight/international_board.png";
import international_board_pic from "../../assets/images/internation-freight/international_board_pic.png";
import intern_1 from "../../assets/images/internation-freight/international_1.png";
import intern_2 from "../../assets/images/internation-freight/international_2.png";
import intern_3 from "../../assets/images/internation-freight/international_3.png";
import intern_4 from "../../assets/images/internation-freight/international_4.png";
import intern_5 from "../../assets/images/internation-freight/international_5.png";
import intern_6 from "../../assets/images/internation-freight/international_6.png";
import intern_7 from "../../assets/images/internation-freight/international_7.png";
import intern_8 from "../../assets/images/internation-freight/international_8.png";

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
            <p className="section-header text-white">
              International Freight Shipping
            </p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              MOY Logistics streamlines international freight shipping by
              utilizing a network of top-rated international shipping carriers.
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
              <span className="font-semibold ">
                International Freight Shipping
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              What Is International Freight Shipping?
            </p>
            <p className="point-p">
              International shipping involves the movement of freight across
              international borders. In other words, unlike shipping
              domestically, shipping internationally means transporting goods to
              different countries. Shipping internationally is most frequently
              done in containers via land and sea.
              <br />
              <br /> Transporting goods to another country is a complex process
              of crossing borders and understanding the many rules and
              regulations.
              <br />
              <br /> MOY Logistics streamlines international freight shipping
              using a network of top-rated shipping carriers. MOY Logistics can
              plan, coordinate, and execute your worldwide and cross-border
              global shipping needs, including international Air Freight
              Shipping and ocean freight shipping.
            </p>

            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Why Choose MOY Logistics For International Shipping?
            </p>
            <p className="point-p">
              We are an award-winning logistics company and an American
              veteran-owned business. At MOY Logistics, we looked have
              simplified shipping internationally. We bring a lot to the table
              when it comes to shipping internationally. Our history,
              competitive pricing, and level of service are unmatched in the
              industry.
              <br />
              <br /> Over the years and many miles, we have formed a dedicated
              and respected network of partners in the industry to help
              customers meet deadlines. Our mission is to meet and exceed
              customer expectations in all that we do. We take care of
              international freight shipping from pickup to delivery.
              <br />
              <br /> When customers select MOY Logistics to handle their
              shipping anywhere in the world, they trust us to do the job. You
              save time and money; you don’t have to worry about shipping
              because that is our job.
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
            <img src={international_board} alt="" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
            <p className="section-header">
              How To Ship An International Shipment
            </p>
            <p className="point-p">
              Inquire about international freight shipping by calling
              800.716.7608 and asking for help with an international shipment.
              Our international shipping efforts will connect your global
              shipping need to one of the many carriers in our network.
              <br />
              <br /> Our quick quote online form includes the option to ship to
              or from the United States and Canada; however, we work directly
              with customs brokers and carriers to arrange international freight
              shipping.
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
            <p className="section-header">Work With a Customs Broker</p>
            <p className="point-p">
              Many freight forwarders work with and utilize the service of
              customs brokers to streamline the customs-clearing process.
              Customs brokers are experts in international trade and the
              ever-changing regulations and specifics that come with it. Connect
              with a customs broker to see if your documents are compliant and
              if your goods meet state requirements and many other services. As
              documentation needs can range vastly, they also offer advice on
              personalized needs.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Tracking International Shipments</p>
            <p className="point-p">
              You’ve built your shipping community. You’ve connected with a
              customs broker and are well on your way to building success. One
              last thing to cross off your list is to figure out how to track
              your shipments.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              What You Need To Know For Shipping Internationally
            </p>
            <p className="point-p">
              International shipping is a natural next step for many growing
              businesses. Even for established companies that already ship
              internationally, regulations change. Changes in laws, available
              shipping lanes, and many other factors make shipping worldwide’s
              complexities dynamic and unpredictable. However, there are still a
              handful of constants when it comes to shipping freight
              internationally, and that’s what we’ll review here.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Basic International Shipping Information
            </p>
            <p className="point-p">
              Like domestic shipments, international shipments require an origin
              and destination address. Unlike domestic shipments, depending on
              the country you’re shipping to, that destination address may have
              a different format. For example, shipping to locations in Isreal
              may have another address format, especially if it’s to a district
              not in a major city. Even shipping to Puerto Rico, a US territory,
              becomes difficult – some addresses are just intersections or maybe
              streets with no numbers. Looking up some locations on Google Maps
              shows only the road the area is on, no number. Having and knowing
              the best carriers to provide shipping for various countries is
              just one primary reason to utilize the services of MOY Logistics.
              Let us be the experts in international shipments, and let your
              shipping team focus on your specific needs.
            </p>
          </div>

          <div className="w-full pt-0 lg:pt-0 p-4 lg:p-10">
            <hr />
          </div>
          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              Freight Shipping Across International Borders
            </p>
            <p className="point-p text-center">
              What is International Freight Shipping? It is the transport of
              freight over international border lines. MOY Logistics streamlines
              shipping freight internationally using a network of the best
              international shipping carriers. MOY Logistics can plan and
              coordinate your worldwide and cross-border shipping needs,
              including international air and ocean freight.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 pt-0 lg:pt-0 p-4 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-3 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_1})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_2})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_3})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_4})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3 ">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_5})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_6})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_7})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_8})`,
                  }}
                ></div>
              </div>
            </div>
            <button className="clear-btn mt-10">Instant Partial Rate</button>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Each Country Has Its Unique Regulations
            </p>
            <p className="point-p">
              Experienced international shippers already know that each country
              has its restrictions, licensing, and special provisions for
              imported goods. You can look up these country-specific
              requirements on most major carrier websites; UPS has one, as does
              FedEx.
              <br />
              <br /> On top of that, there’s a list of items that may (or may
              not) be unable to be shipped out of the US to another country.
              These items include, but aren’t limited to:
            </p>
          </div>
          <div className="flex flex-col gap-5 pt-0 lg:pt-0 p-4 lg:p-10">
            <div className="flex gap-3">
              <div className="check-mark-w">
                <img src={check_mark} alt="" />
              </div>
              <p className="point-p">Human remains or Ashes</p>
            </div>
            <div className="flex gap-3">
              <div className="check-mark-w">
                <img src={check_mark} alt="" />
              </div>
              <p className="point-p">Fireworks or other types</p>
            </div>
            <div className="flex gap-3">
              <div className="check-mark-w">
                <img src={check_mark} alt="" />
              </div>
              <p className="point-p">Guns or Ammunition</p>
            </div>
            <div className="flex gap-3">
              <div className="check-mark-w">
                <img src={check_mark} alt="" />
              </div>
              <p className="point-p">Certain Vehicles</p>
            </div>
            <div className="flex gap-3">
              <div className="check-mark-w">
                <img src={check_mark} alt="" />
              </div>
              <p className="point-p">Precious metals or stones</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="point-p">
              Some countries have stricter requirements than others, and while
              what I listed above may seem obvious, not all restrictions are as
              apparent. Russia restricts the importation of Alcohol, most
              tobacco, precious metals, and specific radio reception equipment.
              Egypt prohibits contact lenses, Viagra, electronic cigarettes, or
              Cash on Delivery shipments.
              <br />
              <br /> The point is that there’s much more to shipping your
              freight internationally. Again, that type of experience and
              knowledge is why partnering with an international logistics
              provider like MOY Logistics can be valuable.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Expedited International Shipping Options
            </p>
            <p className="point-p">
              Not all international freight is created equal. If your shipment
              is dense, meaning it has a small footprint that takes up minimum
              space but weighs more than 150 pounds, then air freight may be the
              best mode of transportation. These cargo planes are much larger
              than commercial passenger planes, but that’s not the only
              difference.
              <br />
              <br /> While both require the same special FAA license, a cargo
              freighter has multiple decks and an oversized cargo door at the
              plane’s underbelly. Some newer Boeing freighters have nose cargo
              doors. That means the entire face of the aircraft lifts so other
              vehicles can roll in.
              <br />
              <br /> The distance from the nose to the back of a cargo freighter
              flight deck is about 130 feet. Imagine how many goods fly over our
              heads every day!
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              Freight Shipping Across International Borders
            </p>
            <p className="point-p">
              What is International Freight Shipping? It is the transport of
              freight over international border lines. MOY Logistics streamlines
              shipping freight internationally using a network of the best
              international shipping carriers. MOY Logistics can plan and
              coordinate your worldwide and cross-border shipping needs,
              including international air and ocean freight.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Is Air freight or Ocean Better?</p>
            <p className="point-p">
              There are two shipping methods for long-distance international
              freight: Ocean or Air Freight.
              <br />
              <br /> Ocean freight cost significantly less than air freight.
              Ocean however takes longer and can be affected by heat and cold
              during transit. If your shipment is sensitive to temperature or
              humidity fluctuations, you should talk with your international
              logistics provider about the best product solution.
              <br />
              <br /> Air freight is significantly faster, but with that comes a
              price increase. Understanding the cost vs. benefit analysis of
              speed vs. low price is essential to deciding if air freight is the
              appropriate shipping method for your products.
              <br />
              <br /> When shipping smaller quantities with higher profit
              margins, it can make more sense to have expedited air freight
              handle those shipments. But when it comes to large amounts of
              low-profit margin items, especially those that aren’t perishable,
              ocean freight can be an exceptionally cost-effective way to ship
              large quantities of freight.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              International Freight Through Ocean Ports
            </p>
            <p className="point-p">
              The most cost-efficient way to ship internationally is in a cargo
              container on an ocean freighter. Ocean freighters are huge boats
              designed to accommodate massive cargo containers and regularly
              take them across international waters. Ocean container shipping
              may be the most efficient form of international transport, but it
              is also the slowest.
              <br />
              <br /> Transporting containers from China to the United States can
              take two to five weeks. Transit times will vary depending on the
              US coast. Variables for travel time include weather patterns, port
              locations, boat conditions, gas bunker capacity, and time to fill
              the vessel with cargo.
              <br />
              <br /> Another option that is going to be faster is expedited air
              cargo. MOY Logistics agent can discuss the best course for your
              shipment.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Port to Final Destination</p>
            <p className="point-p">
              Need help getting freight from the port to its final destination?
              We will help plan the exact travel route for your load and help
              ensure your cargo arrives on time and intact. We will coordinate
              the domestic freight shipments within the United States, Puerto
              Rico, Mexico, and Canada.
              <br />
              <br /> Our trusted carrier network can handle LTL freight, TL
              freight, intermodal freight, rail, heavy haul, volume, expedited,
              and any other means to get your freight shipment to its final
              destination. Additional insurance is even available to give you
              peace of mind.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Canada Cross Border Shipping</p>
            <p className="point-p">
              Customs paperwork and duty restrictions from the Canada Border
              Service Agency (CBSA) are fundamental to shipping goods from the
              United States to Canada and the other way around. Your freight
              agent can help with paperwork and explain the intricacies of
              crossing Canada’s border.
              <br />
              <br /> The United States has nearly 100 border crossings, and
              these crossings, known as land ports of entry, are where border
              inspection services occur. These land ports of entry are where
              border inspections occur.
              <br />
              <br /> Ensuring the proper customs paperwork and declarations are
              complete and accompanying your other shipping paperwork can help
              reduce the time your shipment stays at the land port of entry. By
              working with MOY Logistics, we use carriers who transport goods
              between the United States and other countries daily and can do the
              same for you.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Shipping to United States Islands and Territories
            </p>
            <p className="point-p">
              Although Hawaii is a state, because it is outside the continental
              US, like Puerto Rico, cargo is transported the same way as
              international freight shipments. For shipments to Puerto Rico, we
              suggest trucking down to the port of Fort Lauderdale; then, an
              ocean freighter can make the delivery. We recommend trucking to a
              California port before forwarding the freight via ocean container
              for shipments going to Hawaii.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Expedited Air Cargo</p>
            <p className="point-p">
              Air freight may be the best option if you are shipping dense and
              heavy (over 150 lbs). From the nose to the tail, the length can be
              anywhere from 150-230 ft. That’s a lot of cargo space. Since cargo
              planes are larger than the average passenger plane with multiple
              storage decks and an oversized cargo door, they are a viable
              option for getting freight overseas fast.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">International Shipping Surcharges</p>
            <p className="point-p">
              Demurrage and detention. You will hear these common surcharge
              terms, and for a good reason. Demurrage and detention add up fast
              and can be extremely expensive.
              <br />
              <br /> “Demurrage” refers to the overtime a container spends at a
              port or port terminal, while “detention” refers to the extended
              use of the container detained elsewhere.
              <br />
              <br /> If a document is missing, the port is congested; or a truck
              breaks down, anything that exceeds the agreed timeframe or “free
              time” will cost you money. You will have to pay the shipping
              carrier a daily surcharge fee.
              <br />
              <br /> If you are not careful, you’ll quickly pay a hefty $225+
              per container daily. You risk paying these surcharges when using
              carrier-owned containers (COCs).
              <br />
              <br /> Our solution to avoiding these fees? Using shipper-owned
              containers (SOCs) instead. When a freight forwarder, BCO, or NVOCC
              leases a container from the shipper, they don’t have to pay any of
              these charges. This is one of the many reasons SOCs are becoming
              increasingly popular.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">International Customs Forms</p>
            <p className="point-p">
              Customs requirements vary from country to country. A standardized
              guide called the Harmonized System identifies imported goods.
              <br />
              <br /> The Harmonized System identifies the correct tariff code to
              include on your customs forms. With this code, your freight
              shipment can be accepted or completed.
              <br />
              <br /> There are usually multiple pages to international customs
              forms, and you’ll want to be sure you’ve correctly filled out
              every one. If you don’t have these crucial documents at the time
              of shipping, expect delays and frustration. Your container may be
              detained without them, resulting in additional admin, expenses,
              and negative customer reviews.
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
                <img className="w-full" src={international_board_pic} alt="" />
              </div>
              <div className=" flex flex-col gap-7 ">
                <p className="section-header">
                  4 Required International Shipping Documents
                </p>
                <p className="point-p">
                  4 vital documents regardless of origin and destination, you
                  might require more. They are:
                  <br />
                  <br /> <span className="font-bold">
                    Commercial Invoice:
                  </span>{" "}
                  People don’t ship products for free. 99% of the time, there’s
                  a transaction that’s taken place. The commercial invoice
                  specifies the proof of sale and binding contract between
                  seller and buyer.
                  <br />
                  <br /> <span className="font-bold">Bill of Lading:</span> This
                  document proves the contract of carriage between the shipper
                  and carrier. It lists all the vital details needed to process
                  the shipment, such as the ID number of the container seal.
                  <br />
                  <br />{" "}
                  <span className="font-bold"> Export Packing List:</span>
                  The Export Packing List details each item in the shipment,
                  like the total number of packages and the size and volume of
                  each. Transportation companies use this document to check
                  against the forms on their side and to confirm that what
                  they’re shipping isn’t illegal or hazardous.
                  <br />
                  <br />{" "}
                  <span className="font-bold">Certificate of Origin:</span> A
                  Certificate of Origin proves your imports have come from a
                  specific country or an ethical and permitted source.
                  <br />
                  <br /> Take cotton from Xinjiang, China – for example.
                  Although it’s some of the finest cottons in the world, it’s
                  produced by forced labor.
                  <br />
                  <br /> Many Xinjiang cotton products have been banned in the
                  US to protest these human rights violations, which now
                  actively block their import. For our complete list of customs
                  clearance documents, click here.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                Setting Up An International Shipment
              </p>
              <p className="point-p">
                Ask about MOY Logistics international freight shipping services
                by calling 800.716.7608 and speaking to a representative. Our
                international shipping efforts will connect your global shipping
                needs with a trusted carrier from our network.
                <br /> Our online quote form only has shipping options for the
                United States and Canada; however, we work directly with customs
                brokers and carriers to arrange international shipments.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                Need Help with International Freight?
              </p>
              <p className="point-p">
                With a record of over 1 million successful shipments over the
                last 25+ years, we have the experience and customer service to
                help your business manage international logistics. Shipping
                internationally is more than just looking up rates for you. We
                are here for your team. MOY Logistics is more than just the
                company you call to get a freight quote. We are your logistics
                partner.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">International Shipping FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What documents are required for international shipping?
                </p>
                <p className="point-p">
                  A. The specific documents required for international shipping
                  can vary depending on the shipment’s origin, destination, and
                  nature. Standard documents include a commercial invoice,
                  packing list, bill of lading or airway bill, export/import
                  licenses or permits, certificate of origin, and any necessary
                  customs documentation. It’s essential to research and comply
                  with the customs requirements of the destination country and
                  work with your shipping provider or freight forwarder to
                  ensure all required documents are prepared accurately.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I calculate international shipping costs?
                </p>
                <p className="point-p">
                  A. International shipping costs are determined by various
                  factors, including the weight and dimensions of the shipment,
                  the destination country, the shipping method (e.g., air, sea,
                  or land), the shipping terms (e.g., Ex Works, FOB, CIF), any
                  additional services required (e.g., customs clearance,
                  insurance, packaging), and any applicable taxes or duties.
                  It’s best to consult with shipping providers or freight
                  forwarders to obtain accurate quotes based on your specific
                  shipment details and requirements.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any restrictions on what can be shipped
                  internationally?
                </p>
                <p className="point-p">
                  A. Yes, restrictions on what can be shipped internationally
                  vary depending on the country and the type of goods. Certain
                  items may be prohibited or restricted for legal, safety, or
                  security reasons. These include hazardous materials, firearms,
                  live animals, perishable items, counterfeit goods, etc. It’s
                  crucial to research and comply with the destination country’s
                  import/export regulations and restrictions and consult with
                  shipping providers or freight forwarders for guidance.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How long does international shipping take?
                </p>
                <p className="point-p">
                  A. The transit time for international shipping depends on
                  various factors, including the distance between the origin and
                  destination, the shipping method, customs clearance
                  procedures, and any potential delays or disruptions.
                  International shipments can range from a few days to several
                  weeks or months, depending on these factors. It’s important to
                  note that transit times are estimates and not guaranteed
                  delivery dates, as unforeseen circumstances can influence
                  them.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Do I need to purchase international shipping insurance?
                </p>
                <p className="point-p">
                  A. While international shipping insurance is not mandatory,
                  protecting your goods during transit is highly recommended.
                  International shipments are exposed to various risks,
                  including loss, damage, theft, and delays. Purchasing shipping
                  insurance provides financial protection and peace of mind,
                  ensuring you are adequately compensated for unfortunate
                  incidents. Consult with your shipping provider or insurance
                  company to understand the coverage options for your
                  international shipments.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I track an international shipment?
                </p>
                <p className="point-p">
                  A. Tracking international shipments can be done through the
                  tracking services provided by shipping carriers or freight
                  forwarders. You will typically receive a tracking number that
                  can be used to monitor the shipment’s progress online or
                  through the carrier’s tracking portal. Remember that tracking
                  capabilities may vary depending on the carrier, the shipping
                  method, and the destination country. It’s advisable to work
                  with shipping providers that offer reliable tracking services
                  and update you on the shipment’s status.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any customs duties or taxes for international
                  shipments?
                </p>
                <p className="point-p">
                  A. Yes, customs duties and taxes may apply to international
                  shipments. The customs authorities of the destination country
                  impose these charges. They are based on factors such as the
                  nature of the goods, their declared value, and the applicable
                  customs regulations and tariff schedules. Import duties and
                  taxes are the responsibility of the importer, and it’s
                  essential to research and understand the customs requirements
                  and costs associated with your shipment. Consulting with
                  customs brokers or freight forwarders can help navigate these
                  complexities.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I ship to a residential address internationally?
                </p>
                <p className="point-p">
                  A. Yes, it is possible to ship to a residential address
                  internationally. However, additional considerations may apply,
                  such as customs clearance procedures, local delivery
                  capabilities, and any specific requirements of the destination
                  country. Working with shipping providers or freight forwarders
                  experienced in international residential deliveries is
                  essential to ensure smooth and efficient shipment handling.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I handle customs clearance for international
                  shipments?
                </p>
                <p className="point-p">
                  A. Customs clearance involves complying with the customs
                  regulations and procedures of the destination country to allow
                  the entry of your shipment. It typically includes document
                  preparation, submission of required forms, payment of customs
                  duties and taxes, and any necessary inspections or approvals.
                  Working with customs brokers or freight forwarders can help
                  navigate the customs clearance process and ensure compliance
                  with all relevant regulations.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I ship hazardous goods internationally?
                </p>
                <p className="point-p">
                  A. Shipping hazardous goods internationally is subject to
                  strict regulations and requirements. These goods are
                  classified based on potential risks and may require special
                  packaging, labeling, documentation, and handling procedures.
                  It’s crucial to research and comply with international
                  regulations, such as the International Maritime Dangerous
                  Goods (IMDG) Code or International Air Transport Association
                  (IATA) Dangerous Goods Regulations, and work with specialized
                  shipping providers or freight forwarders experienced in
                  handling hazardous materials to ensure compliance and safety.
                </p>
              </div>
            </div>
          </section>
        </section>
        
      </div>
    </main>
  );
}

export default InternationFreightShipping;
