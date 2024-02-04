import home_icon from "../../assets/icons/services/home_icon.svg";
import check_mark from "../../assets/icons/services/check_mark.svg";
import details_icon from "../../assets/icons/services/more_details.svg";
import avatar from "../../assets/images/services/avatar.png";
import star from "../../assets/icons/services/star.svg";
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
import exped_5 from "../../assets/images/refrigerated-freight/ref_5.png";
import exped_6 from "../../assets/images/refrigerated-freight/ref_6.png";
import exped_7 from "../../assets/images/refrigerated-freight/ref_7.png";
import exped_8 from "../../assets/images/refrigerated-freight/ref_8.png";
import StudioGreenBanner from "../../components/StudioGreenBanner";

function WhiteGloves() {
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
            <p className="section-header text-white">White Gloves</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              White glove service extends services beyond those of the LTL
              carrier. MOY Logistics offers a range of white glove services to
              fit your need.Save money shipping refrigerated goods. Compare
              multiple carriers servicing refrigerated services with current
              instant pricing results.
            </p>
            <button className="clear-btn bg-white">
              See White Glove Shipping rates
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
              / Services / <span className="font-semibold ">White Glove</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="font-semibold text-[20px] md:text-[30px] leading-[37px]">
              What Is a White Glove?
            </p>
            <p className="point-p">
              White glove shipping service provides the highest level of service
              and support for your delicate cargo. That means drivers go above
              and beyond the standard curbside pickup and delivery freight
              service provided by carriers. White glove delivery covers extended
              services outside of these responsibilities, which the LTL carrier
              does not offer. Simply, white glove service means that drivers use
              added care with handling and moving cargo. In freight shipping,
              this means taking additional safety measures to deliver your
              shipment, and you don’t lift a finger.
            </p>
            <div className="flex flex-col gap-3">
              <p className="section-header">
                Why Choose Us For A Freight Quote?
              </p>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Shipping Quotes anytime</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Get Freight Shipping Quotes to anywhere in the U.S. & Canada.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Unbeatable discounts on your freight LTL, truckload, rail,
                  air, and more
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Automated Freight tracking, paperwork & invoices
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Manage all quotes & shipments in one place
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  24+ years of logistics experience working for you!
                </p>
              </div>
            </div>
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
              We are a highly acclaimed logistics company and proudly
              veteran-owned, offering unparalleled white glove delivery
              services. With a remarkable track record, competitive pricing, and
              exceptional service, we stand out as leaders in the industry.
              Throughout our extensive journey, we have established a dedicated
              and esteemed network of industry partners, ensuring timely
              deliveries for our customers.
              <br />
              <br /> At the core of our mission lies the commitment to surpass
              customer expectations in every aspect. From start to finish, we
              provide comprehensive white glove shipping services, meticulously
              handling each process step. Our distinguishing feature is
              excellent customer service, which serves as the cornerstone for
              fostering trust-based relationships. When customers choose MOY
              Logistics to handle their freight shipments, they place unwavering
              trust in our capabilities to fulfill the job with utmost
              professionalism.
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
            <p className="section-header">When to Choose White Glove Service</p>
            <p className="point-p">
              White glove services are an excellent choice for shippers with
              specific requirements who want to ensure the utmost care and
              attention for their shipments, particularly regarding shipping and
              insuring valuable or sentimental items. At MOY Logistics, we
              understand the significance of these items and offer comprehensive
              white glove delivery services to meet your needs.
              <br />
              <br /> When you opt for our white glove service, you can expect a
              superior level of care throughout the entire shipping process. Our
              dedicated team takes care of every detail, starting from the
              careful packaging of your items. We understand the importance of
              proper packaging to prevent any damage during transit, and our
              experts utilize industry-leading techniques and materials to
              secure your cargo effectively.
              <br />
              <br /> Moving your items can be a cumbersome task, especially when
              they are large or heavy. With our white glove service, you can
              leave the moving process entirely in our hands. Our experienced
              professionals are well-trained finding providers for handling
              various shipments, including furniture and delicate items. We take
              the utmost care when loading and unloading your cargo, ensuring it
              is done safely and without harm.
              <br />
              <br /> One of the critical advantages of MOY Logistics white glove
              service is the comprehensive nature of our offerings. Our expert
              account managers ensure that the providers carefully unpack your
              items, placing them in their designated locations as instructed,
              ensuring a seamless transition for you. Once your shipment
              arrives, our team will unload the items for you. We understand
              that unpacking can be time-consuming and physically demanding, so
              we take the responsibility off your shoulders.
              <br />
              <br /> We understand that packaging materials, blankets, or other
              debris may need to be cleared after unpacking. Our team handles
              this for you, leaving your home or business clean and
              clutter-free. Additionally, our white glove service includes
              debris removal. You can rest assured that all packaging materials
              and garbage will be appropriately disposed of, saving you the
              hassle and ensuring a hassle-free experience.
              <br />
              <br /> By choosing our white glove service, you can trust that
              every aspect of your shipment, from packaging to unpacking and
              debris removal, will be meticulously handled. We recognize the
              value and importance of your items, and our commitment to
              exceptional service guarantees that they will be treated with the
              utmost care and respect throughout the process.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">White Glove Shipping and Pickup</p>
            <p className="point-p">
              White glove shipping provides the highest level of service and
              support. Standard freight shipping includes curbside pickup and
              delivery. White glove delivery services include packaging(1) and
              loading the item for you, and your goods will be picked up at the
              origination point and delivered to your destination. Consider
              white glove shipping when shipping delicate items or when you
              simply don’t want to be bothered.
              <br />
              <br /> When your cargo reaches its destination, it will be
              unloaded carefully and taken to the exact location where you want
              it.
              <br />
              <br /> These services are beneficial when items are too bulky or
              heavy for one person to move or if you live alone or don’t have
              anyone to help you place your thing where you want it. All
              packaging materials, blankets, and garbage are removed from your
              home or business. (1)
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Getting White Glove Shipping</p>
            <p className="point-p">
              You receive VIP treatment when using any available specialized
              services through MOY Logistics, such as white glove delivery
              service. Our expert freight agents will identify your shipment’s
              specific needs and requirements to move your goods safely and
              securely.
              <br />
              <br /> If your cargo requires the utmost care, our freight agents
              can arrange multi-person white glove services that include inside
              pickup and delivery, packaging of your item, and using best
              practices when handling your shipment.
              <br />
              <br /> You can also choose specialty equipment such as padded vans
              and blanket wrap services. Lift gates are available when needed at
              both ends of the process. All equipment required for transporting
              your shipment can be added as an accessorial at the time of quote
              or by telling your freight agent.
            </p>
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
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">How to: White Glove Delivery</p>
            <p className="point-p">
              Arranging white glove delivery through MOY Logistics is a
              straightforward process ensuring your shipment receives the
              highest care and attention. Here are the steps you need to follow:
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <p className="point-p">1.</p>
                <p className="point-p">
                  <span className="font-bold">Contact MOY Logistics:</span>{" "}
                   Contact our dedicated customer service team via phone, email,
                  or our online platform. Provide them with the details of your
                  shipment, including the nature of the items, dimensions,
                  weight, pickup location, and delivery destination.
                </p>
              </div>
              <div className="flex gap-2">
                <p className="point-p">2.</p>
                <p className="point-p">
                  <span className="font-bold">
                    Consultation and Assessment:
                  </span>{" "}
                   Our team will work closely with you to understand your
                  requirements and provide guidance on the best white glove
                  delivery options. We will assess the unique needs of your
                  shipment to determine the appropriate level of service and any
                  additional requirements, such as specialized equipment or
                  handling instructions.
                </p>
              </div>
              <div className="flex gap-2">
                <p className="point-p">3.</p>
                <p className="point-p">
                  <span className="font-bold">Quotation and Pricing:</span> We
                  will generate a detailed quote for your white glove delivery
                  service based on the information you provide. The quote will
                  include the cost of packaging, loading, unloading, unpacking,
                  debris removal, and any other requested services. We strive to
                  offer competitive pricing that aligns with the value and
                  quality of our service.
                </p>
              </div>
              <div className="flex gap-2">
                <p className="point-p">4.</p>
                <p className="point-p">
                  <span className="font-bold">Confirmation and Booking: </span>{" "}
                   Once you review and accept the quote, our team will confirm
                  the booking and provide you with all the necessary
                  documentation and shipment details. We will coordinate the
                  pickup date, time, and estimated delivery timeframe, ensuring
                  a smooth and reliable logistics process.
                </p>
              </div>
              <div className="flex gap-2">
                <p className="point-p">5.</p>
                <p className="point-p">
                  <span className="font-bold">Packaging and Preparation:</span>{" "}
                   Ensure your items are adequately prepared for shipping before
                  the pickup date. If needed, our team can guide proper
                  packaging techniques or arrange professional packing services
                  to safeguard your valuable items during transit.
                </p>
              </div>
              <div className="flex gap-2">
                <p className="point-p">6.</p>
                <p className="point-p">
                  <span className="font-bold">Pickup and Transit:</span>  Our
                  experienced white glove delivery specialists will arrive at
                  the designated location to carefully load your shipment onto
                  our secure vehicles on the scheduled pickup day. Throughout
                  the transit, we will track and monitor the progress of your
                  shipment, providing regular updates to keep you informed.
                </p>
              </div>
              <div className="flex gap-2">
                <p className="point-p">7.</p>
                <p className="point-p">
                  <span className="font-bold">Delivery and Unpacking:</span> Our
                  team will unload the items with utmost care once your shipment
                  arrives at the destination. Following your instructions, we
                  will unpack the items and place them in their designated
                  locations, ensuring a seamless and hassle-free delivery
                  experience. Any packaging materials, blankets, or debris will
                  be removed, leaving your space clean and organized
                </p>
              </div>
            </div>
            <p className="point-p">
              By following these steps, you can arrange white glove delivery
              through MOY Logistics and experience our exceptional level of
              service, attention to detail, and commitment to customer
              satisfaction. We aim to make the process as smooth as possible,
              providing peace of mind and ensuring that your valuable items
              receive the care they deserve.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">The White Glove Experience</p>
            <p className="point-p">
              Experience the Next Level of Care with MOY Logistics White Glove
              Shipping Solutions
              <br />
              <br /> When it comes to shipping furniture, antiques, or any other
              valuable items, you deserve an unparalleled level of care and
              attention. That’s where our white glove shipping services go above
              and beyond. While an LTL carrier’s responsibilities typically end
              with transportation, we offer a comprehensive range of extended
              services that ensure your cargo receives the utmost care from
              start to finish.
              <br />
              <br /> With MOY Logistics white glove services, you can leave the
              daunting tasks of packaging, moving, loading, and unloading your
              cargo entirely in our hands. Our experienced team will handle
              every process step with precision and care, providing peace of
              mind and allowing you to focus on other important matters.
              <br />
              <br /> But it doesn’t stop there. Our white-glove service goes the
              extra mile by including unpacking the shipment and removing debris
              for you. We understand that unpacking and dealing with packaging
              materials can be time-consuming and burdensome. That’s why we take
              on the responsibility of unpacking your items and ensuring that
              your space is left clean and clutter-free, so you can immediately
              enjoy your new arrivals.
              <br />
              <br /> At MOY Logistics, we believe in tailoring our services to
              your unique needs. We have partnered with several trusted white
              glove shipping companies to provide a customized solution that
              meets your requirements. Our access to lift gates ensures seamless
              loading and unloading at both ends of the process. Whether you
              need special equipment like padded vans or blanket wrap services,
              we have you covered.
              <br />
              <br /> It’s important to note that not all white glove carriers
              offer packaging or debris removal services. However, our team is
              dedicated to meeting your expectations, and if these services are
              essential to you, let your agent know, and we will connect you
              with a white-glove service provider who can accommodate your
              needs.
              <br />
              <br /> Don’t settle for anything less than exceptional white glove
              shipping when transporting your valuable items. Choose MOY
              Logistics and experience the next level of care and convenience
              for your shipments. Contact us today and let us exceed your
              expectations with our unparalleled white glove shipping solutions.
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
              <p className="section-header">White Glove FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: What is white glove shipping?
                </p>
                <p className="point-p">
                  A: White glove shipping is a premium service beyond standard
                  transportation. It involves a higher level of care and
                  attention to detail, including services such as packaging,
                  loading, unloading, unpacking, and debris removal. White glove
                  carriers handle valuable, fragile, or specialized items
                  professionally, ensuring a seamless and hassle-free customer
                  experience.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: When should I choose white glove shipping?
                </p>
                <p className="point-p">
                  A: White glove shipping is recommended when delicate,
                  valuable, or oversized items require extra care during
                  transit. It is ideal for shipping furniture, antiques,
                  electronics, artwork, and other things that demand special
                  handling. If you want a comprehensive solution that covers all
                  aspects of the shipping process, from start to finish, white
                  glove services are the way to go.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: What services are included in white glove shipping?
                </p>
                <p className="point-p">
                  A: White glove shipping typically includes services such as
                  professional packaging, secure loading, and unloading,
                  specialized equipment (if needed), inside delivery, unpacking,
                  and debris removal. The exact services offered may vary
                  depending on the carrier and the specific requirements of your
                  shipment. It’s essential to communicate your needs with your
                  chosen white glove service provider to ensure they can
                  accommodate them.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: How do I choose the right white glove shipping provider?
                </p>
                <p className="point-p">
                  A: When selecting a white glove shipping provider, consider
                  their experience, reputation, and track record in handling
                  similar shipments. Look for companies with expertise in
                  handling the items you need to ship. Read customer reviews and
                  testimonials to gauge their level of customer satisfaction.
                  Additionally, communicate your specific requirements and
                  expectations upfront to ensure the provider can meet them.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: How much does white glove shipping cost?
                </p>
                <p className="point-p">
                  A: The cost of white glove shipping depends on various
                  factors, including the size, weight, fragility, and
                  destination of your shipment, as well as any additional
                  services requested. White glove services are generally more
                  expensive than standard shipping due to the specialized care
                  involved. Obtaining quotes from multiple providers and
                  comparing their offerings is recommended to find a balance
                  between service quality and pricing that fits your budget.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: Is insurance included in white glove shipping?
                </p>
                <p className="point-p">
                  A: Most white glove shipping providers offer insurance
                  coverage for your items during transit. However, the extent of
                  coverage may vary, so it’s essential to clarify this with your
                  chosen provider. Reviewing your insurance policies to
                  determine if additional coverage is necessary for valuable or
                  high-risk items is also advisable.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: How do I prepare my items for white glove shipping?
                </p>
                <p className="point-p">
                  A: When preparing your items for white glove shipping, ensure
                  they are adequately packaged and protected. Use appropriate
                  packing materials, such as bubble wrap, packing peanuts, or
                  foam padding, to safeguard fragile items. Label any delicate
                  or sensitive items clearly. If you’re unsure about the
                  packaging requirements, consult with your white glove service
                  provider for guidance or inquire about the professional
                  packing services they may offer.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: How do I track my white glove shipment?
                </p>
                <p className="point-p">
                  A: White glove shipping providers typically offer tracking
                  capabilities, allowing you to monitor the progress of your
                  shipment. They may provide tracking numbers or online portals
                  where you can access real-time updates on the status and
                  location of your items. Stay in communication with your
                  provider and inquire about their tracking options to ensure
                  you have visibility throughout the shipping process.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q: What should I do if there are issues or damages with my
                  white glove shipment?
                </p>
                <p className="point-p">
                  A: In the unfortunate event of issues or damages with your
                  white glove shipment, promptly contact your service provider.
                  They will guide you through the claims process and work
                  towards resolving the problem to your satisfaction.
                  Documenting any damages or discrepancies and providing
                  supporting evidence, such as photographs, is essential to
                  assist in the claims process.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default WhiteGloves;
