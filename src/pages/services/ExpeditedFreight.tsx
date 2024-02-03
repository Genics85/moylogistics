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
import banner_d from "../../assets/images/expedited-shipping/expedited_bg_d.png";
import banner_t from "../../assets/images/expedited-shipping/expedited_bg_t.png";
import expedited_board from "../../assets/images/expedited-shipping/expedited_board.png";
import expedited_board_2 from "../../assets/images/expedited-shipping/expedited_board_2.png";
import exped_1 from "../../assets/images/expedited-shipping/exped_1.png";
import exped_2 from "../../assets/images/expedited-shipping/exped_2.png";
import exped_3 from "../../assets/images/expedited-shipping/exped_3.png";
import exped_4 from "../../assets/images/expedited-shipping/exped_4.png";
import exped_5 from "../../assets/images/expedited-shipping/exped_5.png";
import exped_6 from "../../assets/images/expedited-shipping/exped_6.png";
import exped_7 from "../../assets/images/expedited-shipping/exped_7.png";
import exped_8 from "../../assets/images/expedited-shipping/exped_8.png";
import { NavLink } from "react-router-dom";

function ExpeditedFreight() {
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
            <p className="section-header text-white">Expedited Freight</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              We move your freight quickly by finding the best expedited freight
              solution. Whether it's a sprinter van or a team of drivers, we
              have various expedited options. Expedited shipping is the best
              solution for time-sensitive shipments.
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
              <span className="font-semibold ">Expedited Freight</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              What Is Expedited Freight
            </p>
            <p className="point-p">
              Expedited shipping is a service for freight shipments that need to
              travel at a faster rate than usual. Carriers prioritize expedited
              shipments over standard shipments, meaning there are fewer stops
              and delays during shipping. In other words, it’s ideal for
              shipments to arrive at their destinations by a specific date or
              time. There are many benefits to expedited shipping, including:
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
                  Expedited freight shipping from 100+ carriers
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Faster Delivery</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Direct Shipping without stops</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Less handling means reduced risk of damage
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Real-time delivery updates</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Additional security of your goods</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Instant expedited shipping rates anytime
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
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <p className="point-p font-semibold">
                  Want to learn more about Our Truckload Solutions
                </p>
              </div>
              <NavLink
                to={"service/truckload"}
                className="flex gap-4 items-center"
              >
                <p className="text-primary_green font-semibold">
                  TRUCKLOAD FREIGHT
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </NavLink>
              <NavLink
                to={"service/flatbed-trucking"}
                className="flex gap-4 items-center"
              >
                <p className="text-primary_green font-semibold">
                  FLATBED TRUCKING
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
            <p className="section-header">About Our Expedited Service</p>
            <p className="point-p">
              Urgent delivery? You can find the fastest freight carrier to move
              your shipment through MOY Logistics. We understand how a timely
              delivery or timely shipment can impact your supply chain.
              <br />
              <br /> We bring a lot to the table regarding expedited freight
              services. We are an award-winning logistics company and an
              American veteran-owned business. Our history, competitive
              less-than-load pricing, and level of service are unmatched in the
              industry. Over the years and many miles, we have formed a
              dedicated and respected network of partners in the industry to
              help customers meet deadlines.
              <br />
              <br /> We take care of your expedited shipping from pickup to
              delivery. Excellent customer service is our hallmark, and it goes
              a long way in building a relationship of trust. Customers who
              select MOY Logistics to handle their expedited shipment trust us
              to do the job. Our mission is to meet and exceed customer
              expectations in all that we do.
            </p>

            <button className="clear-btn self-center">
              Expedited Shipping Quote
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
              When To Use Expedited Freight Services?
            </p>
            <p className="point-p">
              Expedited freight shipping is for the fast delivery of
              time-sensitive freight. The expedited shipping process highlights
              efficiency and eliminates wasted time. Many e-commerce businesses
              have started offering delivery in as little as two days. Executing
              these quick deliveries involves adjusting routes and modes of
              transportation to cut down on transit time.<br/><br/> Often expedited
              freight delivers a shipment to its final destination without extra
              stops. For example, a shipper that typically uses
              less-than-truckload (LTL) freight may need to use a faster method,
              such as full truckload (FTL).
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Standard vs. Expedited Freight</p>
            <p className="point-p">
              One of the most significant differences between standard and
              expedited freight shipping is transit times. Freight trucks moving
              expedited shipments often have fewer stops and are often more of a
              direct service.
              <br />
              <br /> Truckers may make fewer to no stops with expedited
              shipments from pick up to delivery. Expedited shipping companies
              may also use a special freight cab that has two drivers to a
              truck. Having team drivers is called a sleeper team. The drivers
              take turns driving with a special freight cab while the others
              sleep. This rotating eliminates the need to stop and rest.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Expedited Freight Trailer Types</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Full Truckloads – Enclosed and Flatbed Type Trailers
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Partial Truckloads</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">LTL Providers</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Vans</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Specialty Trailers</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Hot Shot Trucking</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Is Shipping Expedited Better?</p>
            <p className="point-p">
              Getting your shipment to the buyers can be good if you are a
              business. However, expedited shipping comes at a reasonably high
              cost. It may only be sustainable for some e-commerce businesses
              and not practical for the average consumer or business. Before you
              decide whether to use expedited service or offer your customers
              expedited loads, we recommend weighing its pros and cons.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              5 Benefits of Expedited Freight Shipping
            </p>
            <p className="point-p">
              Do you need to ship your load quickly and efficiently to keep your
              customers happy? Then expedited freight shipping is one of the
              safest and fastest ways to to get your load from point A to point
              B. Expedited operates the fastest routes to transport your cargo
              with no stops. Discover the five benefits of expedited freight
              shipping below.
            </p>
            <p className="point-p">
              1. Expect Faster Deliveries: Unlike standard freight shipping,
              expedited shipping transports your products as fast as possible to
              their destinations. Since expedited shipping transports your cargo
              quickly, you can expect faster customer deliveries. If you notice
              that your shipment takes a long time to ship, it’s time to
              consider expedited freight delivery services.
              <br />
              <br />
              2. Protect Valuable Freight: The second of the five benefits of
              expedited freight shipping is that you can protect valuable cargo.
              Since expedited shipping generally does not make any stops and
              transports your cargo quickly, it reduces the risk of theft; when
              your freight travels slowly and makes multiple stops, the risk of
              theft increases.
              <br />
              <br />
              3. Increase Customer Satisfaction: To boost your profits, you need
              to increase your customer satisfaction ratings. One of the best
              ways to boost customer satisfaction ratings is to offer fast and
              efficient shipping options, such as expedited shipping. It also
              incentivizes potential customers to purchase from your business
              instead of others since they will receive their items without
              delay.
              <br />
              <br />
              4. Reduce the Risk of Cargo Damage and Loss: Since your cargo will
              only make a few stops with expedited shipping, it reduces the risk
              of cargo damage. In addition, this shipping service minimizes the
              risk of cargo loss. 5. Lower Packaging Costs: You can also lower
              your packaging costs with expedited shipping. Because expedited
              shipping reduces the risk of cargo damage, you can reduce your use
              of packaging materials. This will lower your packaging costs and
              help your business save money.
              <br />
              <br />
              5. Lower Packaging Costs: You can also lower your packaging costs
              with expedited shipping. Because expedited shipping reduces the
              risk of cargo damage, you can reduce your use of packaging
              materials. This will lower your packaging costs and help your
              business save money.
            </p>
          </div>

          <div className="w-full pt-0 lg:pt-0 p-4 lg:p-10">
            <hr />
          </div>
          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              Types Of Expedited Services
            </p>
            <p className="point-p text-center lg:w-[70%]">
              When using expedited services, finding the best means of transport
              is vital. It doesn't matter if you have a single pallet or if you
              are shipping a full truckload; expedited shipping has few
              boundaries. From ground transport to air shipping, whatever will
              streamline the shipping process. Below are a few examples of
              expedited shipping services by equipment type.
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
            <p className="section-header">Pros of Expedited Freight Services</p>
            <p className="point-p">
              Speed and guarantee: The most significant benefit of expedited
              freight loads are; speed and assurance. It’s also the most
              reliable way to ensure your buyers receive their packages on time.
              One fantastic by-product of increased speed is the increase in
              customer satisfaction. Customer satisfaction equals boosts loyalty
              and sales.
              <br />
              <br /> Lower risk of damages: Expedited shipments often have no
              stops along their delivery route. No stops mean less handling,
              which means the chances of packages getting damaged in transit are
              lower. This is an attractive option for businesses selling fragile
              or high-ticket items.
              <br />
              <br /> Reduces storage space: Expedited shipping is an excellent
              way to make space in your warehouse. More space becomes available
              as quickly as your items get shipped out as soon as possible.
              Shipping fast is especially advantageous if you sell high-value
              and bulky items.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10">
            <p className="section-header">Cons of Expedited Freight Services</p>
            <p className="point-p">
              High cost: The most significant disadvantage of expedited shipping
              is its cost. Expedited shipping is expensive. Higher freight costs
              often only provide an ROI if you have high-ticket products. It’s
              usually not worth spending the extra money to ship via expedited
              freight service as it will quickly eat into your profit margins.
              <br />
              <br />
              Some shippers offset the additional expedited shipping cost to
              their buyers. However, some businesses may have to offer expedited
              shipping because of the nature of the merchandise they sell. This
              includes firms selling time-sensitive items such as perishable
              goods and medical supplies.
              <br />
              <br /> Not always available: Not all delivery companies offer
              expedited shipping. Often time if you are located in a rural area.
              In that case, you may not have access to expedited shipping.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10">
            <p className="section-header">How Does Expedited Shipping Work?</p>
            <p className="point-p">
              Expedited Freight Shipping is for an urgent shipment that must
              arrive by a specific date or time in some instances. This
              faster-than-normal service involves moving time-sensitive or
              time-critical loads. Expedited freight options are worth the
              additional money to those shippers needing their freight delivered
              within a particular delivery window.
              <br />
              <br /> For the most part, any freight shipment can be expedited if
              required. Expedited can be used when you need them for timely
              delivery if you don’t mind. The extra shipping cost provides the
              advantages of faster transit, less handling, and real-time
              delivery updates. All these services are additional security for
              your goods.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10">
            <p className="section-header">
              When To Use Expedited Shipping Services?
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  A medical facility requires emergency tools or emergency
                  medical supplies.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  There is a deadline that demands inventory to be quickly
                  replenished.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Critical equipment or machinery breaks down, and a replacement
                  is needed.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Expedited Freight Shipping Services can be used when you need
                  them for timely delivery. The extra shipping cost provides the
                  advantages of faster transit, less handling, and real-time
                  delivery updates. All these services are additional security
                  for your goods.
                </p>
              </div>
            </div>
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
            <section className="flex p-4 flex-col lg:flex-row w-full justify-center lg:mt-10 items-center gap-12">
              <div className="w-full md:w-[600px] lg:w-[510px] ">
                <img src={expedited_board_2} alt="" />
              </div>
              <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
                <p className="section-header">
                  Expedited Freight In E-commerce
                </p>
                <p className="point-p">
                  Now you have the answer; it’s time to consider whether it’s
                  worth it for your e-commerce business.
                  <br />
                  <br />
                  <span className="font-bold">
                    Here are some key expedited delivery statistics in
                    e-commerce.
                  </span>
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="check-mark-w shrink-0">
                      <img src={check_mark} alt="" />
                    </div>
                    <p className="point-p">
                      25% of online consumers will abandon their shopping due to
                      extended delivery times.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="check-mark-w shrink-0">
                      <img src={check_mark} alt="" />
                    </div>
                    <p className="point-p">
                      51% of online purchases offer free delivery options.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="check-mark-w shrink-0">
                      <img src={check_mark} alt="" />
                    </div>
                    <p className="point-p">
                      30% do so because of the next-day delivery. Example (
                      Amazon Prime)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="check-mark-w shrink-0">
                      <img src={check_mark} alt="" />
                    </div>
                    <p className="point-p">
                      Around 50% of shoppers are willing to pay more money to
                      get faster delivery. Most of the time, when. The consumer
                      is willing to pay more, and they want next-day delivery.
                    </p>
                  </div>
                </div>
                <button className="clear-btn self-center">
                  Expedited Air Shipping Quote
                </button>
              </div>
            </section>

            <div className="flex flex-col gap-10 p-4 lg:p-10">
              <p className="point-p">
                These numbers show that while there is an apparent demand for
                fast shipping from online shoppers, many are lured in by free
                delivery options. So while expedited shipping should undoubtedly
                feature in your shipping strategy, other options exist.
                <br />
                <br /> You can also cushion the financial impact it has on your
                business by offering it to orders that hit a minimum spend
                (ideally more significant than your average order value).
                Furthermore, with more and more consumers willing to pay extra
                for faster deliveries, you can also consider passing down at
                least some of the added cost of expedited shipping to your
                buyers.
              </p>
              <div className="flex flex-col gap-6 ">
                <p className="section-header">Expedited shipping: summary</p>
                <p className="point-p">
                  Expedited shipping is a different mode of freight delivery to
                  ensure a shipment will arrive at the heir destination faster
                  than standard shipping. Its faster-than-usual speeds and clear
                  intent characterize it.
                  <br />
                  <br /> While expedited shipping’s speed and guarantee are
                  attractive perks, they are expensive. They may only make
                  monetary sense for some e-commerce businesses.
                  <br />
                  <br />
                  However, there are ways to lower the cost of expedited
                  shipping. By only offering it to orders that hit a minimum
                  spend or passing some or all of the added cost on to your
                  buyers, you can ensure it only eats a little into.
                </p>
              </div>
              <div className="flex flex-col gap-6 ">
                <p className="section-header">
                  Your Guide to Expedited Shipping
                </p>
                <p className="point-p">
                  MOY Logistics is dedicated to matching you with the
                  best-expedited shipping carrier to meet your needs, budget,
                  and time constraints. For the best rates and information, call
                  800.716.7608 to speak with a MOY Logistics shipping expert,
                  who will help you determine the best way to ship your item.
                </p>
              </div>
              <div className="flex flex-col gap-6 ">
                <p className="section-header">About Expedited Shipping</p>
                <p className="point-p">
                  Expedited shipping is a service for parcel or freight
                  shipments that need to travel faster than usual. In other
                  words, it’s ideal for loads that need to arrive at their
                  destinations by a specific date or time. Carriers prioritize
                  expedited shipments over standard shipments, meaning there are
                  fewer stops and delays during shipping. There are many
                  benefits to expedited shipping, including:
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">Shipping speed</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">Less handling</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">Real-time delivery update</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">Additional security of your goods</p>
                  </div>
                </div>
                <p className="point-p">
                  Before shipping your item, you must determine whether it sends
                  via parcel or freight services. The item’s size determines
                  this. Don’t have time to figure out the details? Your MOY
                  Logistics shipping expert can help you decide whether or not
                  it will go by freight or parcel. Call 800.716.7608 to speak
                  directly with a representative.
                </p>
              </div>
              <div className="flex flex-col gap-6 ">
                <p className="section-header">How Does Size Affect My Cost?</p>
                <p className="point-p">
                  Any shipment can be expedited when needed, regardless of its
                  size. Whether or not an item ships as a parcel or freight
                  depends upon the carrier’s specific limitations. Answer these
                  questions to determine whether your item will ship via parcel
                  or freight:
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Does your shipment weigh more than 150 pounds?
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Is your shipment more than 108 inches in length?
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Is your shipment more than 165 inches in length and Girth*
                      combined?
                    </p>
                  </div>
                </div>
                <p className="point-p">To calculate Girth:</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">Multiply: package width x 2</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">Multiply: package height x 2</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Add: Numbers from Steps 1 and 2 = Girth
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Now, add your length + Girth to see if the total is under
                      165 inches
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 ">
                <p className="section-header">Parcel Shipments</p>
                <p className="point-p">
                  Parcels are small, lightweight shipments that fit on a
                  standard USPS truck.
                  <br />
                  <br /> Freight Shipments
                  <br />
                  <br /> These come with no weight or size limitations, unlike
                  parcel shipments. Freight shipping is designed to ship any
                  large item.
                </p>
              </div>
              <div className="flex flex-col gap-6 ">
                <p className="section-header">
                  Is Expedited Shipping Worth the Extra Cost?
                </p>
                <p className="point-p">
                  Choose expedited shipping if you need an item delivered within
                  a specific timeframe. While expedited shipping is more costly
                  than regular transit, there are times when it is the best
                  option. Here are some examples of when expedited shipping is
                  the best option:
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Emergency medical tools and supplies
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Retailer inventory replenishment from a manufacturer
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Parts to fix a machinery breakdown
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">Any time you need a fast delivery</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">How Long Does it Take?</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Expedited shipping deliveries can be delivered from the
                      same day to as long as three days from departure. The
                      specific timeframes vary based on each shipping carrier’s
                      policies and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Expedited Shipping FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is expedited shipping?
                </p>
                <p className="point-p">
                  A. Expedited shipping refers to a shipping service that
                  prioritizes the fast delivery of goods. It is designed to meet
                  urgent delivery requirements when standard shipping methods
                  are not fast enough. Expedited shipping typically involves
                  speedier transit times, dedicated or priority handling, and
                  specialized services to ensure prompt delivery.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How does expedited shipping differ from standard shipping?
                </p>
                <p className="point-p">
                  A. Expedited shipping differs from standard shipping in terms
                  of speed and priority. While standard shipping follows regular
                  transit schedules and may have longer delivery times,
                  expedited shipping expedites the transportation process to
                  ensure faster delivery. Expedited shipping services often
                  involve dedicated or expedited transportation options,
                  priority handling at facilities, and quicker processing
                  through customs.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the benefits of using expedited shipping?
                </p>
                <p className="point-p">
                  A. The benefits of using expedited shipping include:
                  <br />
                  <br /> Faster delivery: Expedited shipping allows quicker
                  delivery than standard shipping methods, making it ideal for
                  time-sensitive shipments.
                  <br />
                  <br /> Priority handling: Expedited shipping services often
                  provide priority handling at various stages of the shipping
                  process, reducing transit time and the risk of delays.
                  <br />
                  <br /> Reliability: Expedited shipping services are designed
                  to meet strict delivery deadlines, offering higher reliability
                  and dependability.
                  <br />
                  <br /> Enhanced tracking: Expedited shipping usually includes
                  advanced tracking capabilities, allowing you to monitor the
                  progress of your shipment in real time.
                  <br />
                  <br />
                  Customer satisfaction: Expedited shipping helps customers
                  receive their goods promptly, enhancing customer satisfaction
                  and loyalty.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How is the cost of expedited shipping determined?
                </p>
                <p className="point-p">
                  A. Several factors, including the shipment’s weight,
                  dimensions, destination, and desired delivery timeframe,
                  determine the cost of expedited shipping. Expedited shipping
                  often requires dedicated transportation resources, priority
                  handling, and additional efforts to meet the faster delivery
                  requirements, which can result in higher shipping costs than
                  standard shipping. Obtaining quotes from shipping providers or
                  freight forwarders is recommended to understand the specific
                  cost implications for your expedited shipping needs.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I use expedited shipping for international shipments?
                </p>
                <p className="point-p">
                  A. Yes, expedited shipping is available for international
                  shipments as well. However, the availability and speed of
                  expedited international shipping may vary depending on the
                  destination country and customs procedures. Expedited
                  international shipping may involve expedited customs clearance
                  processes, priority handling at customs facilities, and
                  dedicated or faster international transportation options. It’s
                  advisable to work with shipping providers experienced in
                  international expedited shipping to navigate the complexities
                  of global logistics and ensure timely delivery.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I request expedited shipping for my shipment?
                </p>
                <p className="point-p">
                  A. To request expedited shipping for your shipment, you can
                  contact shipping providers, freight forwarders, or logistics
                  companies and inform them about your urgent delivery
                  requirements. They will guide you through the process, assess
                  the feasibility of expedited shipping based on your shipment
                  details, and provide options and associated costs. It’s vital
                  to provide accurate and detailed information about your
                  shipment to ensure proper planning and execution of the
                  expedited shipping service.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Is insurance included in expedited shipping services?
                </p>
                <p className="point-p">
                  A. Insurance coverage may or may not be included in expedited
                  shipping services. It depends on the shipping provider or
                  carrier you choose. It’s recommended to inquire about
                  insurance coverage options and ensure your shipment is
                  adequately protected during transit. If insurance is not
                  automatically included, you can discuss additional insurance
                  options with the shipping provider to safeguard your goods
                  against loss, damage, or theft during expedited shipping.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I track my expedited shipment?
                </p>
                <p className="point-p">
                  A. Yes, most expedited shipping services offer advanced
                  tracking capabilities. You will typically receive a tracking
                  number or waybill number that allows you to monitor the
                  progress of your shipment in real time. Tracking information
                  may include the current location of the shipment, estimated
                  delivery time, and any updates or status changes. The ability
                  to track your expedited shipment provides visibility and lets
                  you stay informed about its progress and estimated arrival
                  time.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What happens if there are delays in expedited shipping?
                </p>
                <p className="point-p">
                  A. Although expedited shipping aims to meet strict delivery
                  deadlines, unforeseen circumstances or external factors may
                  occasionally cause delays. In such cases, it’s essential to
                  stay in communication with the shipping provider or freight
                  forwarder to receive updates on the status of your shipment.
                  They will work to resolve any issues and provide alternative
                  solutions to minimize the impact of delays. Maintaining clear
                  communication and proactively addressing concerns can help
                  manage expectations and ensure a satisfactory resolution.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any restrictions on the type of goods that can be
                  shipped via expedited shipping?
                </p>
                <p className="point-p">
                  A. Expedited shipping generally allows for transporting
                  various types of goods, including general cargo, perishable
                  items, and even hazardous materials, depending on the shipping
                  provider’s capabilities and regulatory restrictions. However,
                  certain goods may have specific requirements or regulations
                  due to safety, security, or legal reasons. It’s essential to
                  verify with the shipping provider or freight forwarder whether
                  there are any limitations or special considerations for
                  shipping your specific type of goods via expedited shipping.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default ExpeditedFreight;
