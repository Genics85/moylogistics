import home_icon from "../../assets/icons/services/home_icon.svg";
import check_mark from "../../assets/icons/services/check_mark.svg";
import details_icon from "../../assets/icons/services/more_details.svg";
import read_more from "../../assets/icons/services/service_read_more.svg";
import avatar from "../../assets/images/services/avatar.png";
import star from "../../assets/icons/services/star.svg";
import quotation from "../../assets/icons/services/quotation.svg";
import back from "../../assets/icons/services/back.svg";
import forward from "../../assets/icons/services/forward.svg";
import certification from "../../assets/icons/services/certification.svg";
import award_tag from "../../assets/icons/services/award_tag.svg";
import freight_truck from "../../assets/images/services/freight_truck.png";
import banner_d from "../../assets/images/container-shipping/containers_bg_d.png";
import banner_t from "../../assets/images/container-shipping/containers_bg_t.png";
import intern_1 from "../../assets/images/internation-freight/international_1.png";
import intern_2 from "../../assets/images/internation-freight/international_2.png";
import container_top from "../../assets/images/container-shipping/container_top.png";
import container_stack from "../../assets/images/container-shipping/container_stack.png";
import insurance from "../../assets/images/container-shipping/shipping_insurance.png";
import partial_truckload from "../../assets/images/container-shipping/container_partial_truckload.png";
import StudioGreenBanner from "../../components/StudioGreenBanner";

function ContainerShipping() {
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
            <p className="section-header text-white">Container Shipping</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Whether it's commercial goods, personal belongings, or oversized
              cargo, our container freight services offer reliable and tailored
              solutions.
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
              <span className="font-semibold ">Container Shipping</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="section-header">
              What Is a Sea Cargo Container?
            </p>
            <p className="point-p">
              What is containerization? For decades containerization has been
              the back bone of international ocean freight shipping. Sea cargo
              containers greatly reduce the expense and transit times for
              international and domestic shipments.
              <br />
              <br /> Sea cargo container shipping companies move approximately
              90% of overseas non-bulk cargo. Containerization also plays a huge
              role in intermodal shipping. Intermodal shipping is the
              transportation of freight using rails and trucking. When
              containers reach ports they need to be dispensed onto other modes
              of transportation (other ships, rails, or trucks) to reach their
              final destination. Most are durable closed steel boxes used for
              dry freight or general purposes, though there are refrigerated sea
              cargo containers, tank in frame containers used specifically for
              liquids, and other kinds of specialized containers.
              <br />
              <br /> Containerization allows shipping companies to transport sea
              cargo containers without ever having to touch the cargo inside.
              This greatly reduces the likelihood for harmed or lost freight
              during transit. Sea cargo containers will be moved directly on to
              rail carts or trucks and delivered to their destination quickly
              and efficiently.
            </p>

            <p className="section-header">
              How Freight Center Can Help
            </p>
            <p className="point-p">
              Shipping sea cargo container shipments are generally arranged by a
              freight logistics company like us. MOY Logistics can arrange
              transportation of goods from the point of origin to the final
              destination. We can handle all modes of transportation required to
              achieve the delivery of the shipment in the arrange time frame.
              <br />
              <br />
              Cargo container carriers are more limited than LTL carriers and
              will require a lot of information to arrange the correct method of
              transport. Let MOY Logistics do the work for you! We can help
              match you with the best carrier fit for your needs. Contact one of
              our freight agents for help with your container requirement today
              by calling 800.716.7608.
            </p>
          </div>
          <div className="p-4">
            <img src={container_top} alt="" />
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
                  Want to learn more about LTI Shipping?
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-primary_green font-semibold">
                  SHIPPING DELAY CAUSES
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-20 pt-20 ">
        <StudioGreenBanner/>
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
            <img src={container_stack} alt="" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
            <p className="section-header">
              Why Choose MOY Logistics For Container Freight Shipping?
            </p>
            <p className="point-p">
              There are several reasons why MOY Logistics may be a good choice
              for container freight shipping:
            </p>
            <div className="flex flex-col gap-5 pt-0 lg:pt-0 p-4 lg:p-10">
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">Wide network of carriers:</span>{" "}
                  MOY Logistics has partnerships with a wide range of carriers,
                  which means they can offer a variety of shipping options at
                  competitive rates.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">
                    Expertise in container shipping:
                  </span>{" "}
                  MOY Logistics has experience and expertise in container
                  shipping, and can provide guidance on everything from
                  selecting the right container size to navigating customs
                  regulations.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">Technology-driven approach:</span>{" "}
                  MOY Logistics uses advanced technology to streamline the
                  shipping process, from getting quotes to tracking shipments,
                  which can save time and reduce the risk of errors.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">
                    Flexibility and customization:
                  </span>{" "}
                  MOY Logistics offers flexible shipping options and can tailor
                  solutions to meet specific needs, whether it’s expedited
                  shipping, specialized handling, or other requirements.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  <span className="font-bold">Excellent customer service:</span>{" "}
                  MOY Logistics has a reputation for providing exceptional
                  customer service, with a team of experts available to answer
                  questions and resolve issues throughout the shipping process.
                  Overall, MOY Logistics’s combination of carrier network,
                  expertise, technology, flexibility, and customer service make
                  it a strong choice for container freight shipping needs.
                </p>
              </div>
            </div>
            <button className="clear-btn self-center">
              Ocean Container Quote
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
            <p className="section-header">Ocean Freight Shipping</p>
            <p className="point-p">
              Ocean freight shipping can often be the most cost-effective
              solution when you have freight cargo that needs to be transported
              around the world. However, overseas shipping can be a
              time-consuming, lengthy process. We can ease the burden and handle
              all your sea freight requests. Through our wide range of
              transportation experience, we can offer cohesive, comprehensive
              solutions to your freight shipping needs. Our ocean international
              shipping services are all-encompassing and guaranteed to lower
              your shipping cost for all container freight.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Importing and Exporting Goods</p>
            <p className="point-p">
              We provide international ocean freight shipping for both exporters
              and importers to help get your ocean freight to its destination.
              Whether you have freight cargo that will take up an entire
              container or only a small portion, we’ll find the right solution
              for you and your container freight. We can expertly move global
              sea freight as LCL (Less than Container Load), FCL (Full Container
              load), and non-conforming shipments. We excel at finding
              cost-effective solutions for our customers and getting you ocean
              freight where and when you need it. Choosing us for your ocean
              freight will ensure you receive the best rates and quality
              customer service.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Shipping by Container</p>
            <p className="point-p">
              Our container options for all ocean cargo shipping include 20’
              standard, 40’ standard, and 40’ high cubes. Have a load that won’t
              fit in a container and needs a flat rack to be transported
              appropriately? We can handle it and will find you the most
              cost-effective solution. No matter your request, your dedicated
              account manager will work with you to determine which
              container/rack, line, vessel, and cargo choices are best matched
              as the answer for your budget and needs.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Steps To Ship A Container?</p>
            <p className="point-p">
              Container freight often entails more than one form of conveyance,
              making it a tall order for an infrequent shipper to arrange.
              Infrequent shippers rely on 3PLs (3rd Party Logistics companies)
              like MOY Logistics to arrange to ship with the carrier(s that
              provide the best combination of rate and service. Carriers prefer
              to work with companies that sign a long-term contract guaranteeing
              a minimum number of shipments.
            </p>
            <p className="point-p">
              Shipping container freight can seem overwhelming if you’re new to
              it, but it’s a straightforward process that involves the following
              steps
            </p>
            <div className="flex flex-col gap-2">
              <p className="point-p">
                1. Determine your shipping needs: Decide on the type of cargo
                you need to ship, the volume of cargo, the destination, and the
                timeline for delivery. This information will help you choose the
                right container size and shipping method
              </p>
              <p className="point-p">
                2. Get a freight quote: Contact a freight forwarder or shipping
                company for a container shipping quote. You’ll need to provide
                information about the cargo, the origin and destination, and any
                special requirements.
              </p>
              <p className="point-p">
                3. Choose a container size: Based on the volume of cargo you
                need to ship, choose a size that best fits your needs. Standard
                container sizes are 20 feet, 40 feet, and 45 feet.
              </p>
              <p className="point-p">
                4. Book your shipment: Once you’ve received a quote and chosen a
                container size, book your shipment with the freight forwarder or
                shipping company. You must provide details about the cargo,
                pickup, delivery locations, and special requirements.
              </p>
              <p className="point-p">
                5. Prepare the cargo: Pack your cargo securely in the container,
                making sure it is appropriately labeled and any necessary
                customs documentation is completed.
              </p>
              <p className="point-p">
                6. Transport the container: The shipping company will transport
                the container to the port and load it onto the ship. Once it
                reaches the destination port, it will be unloaded and
                transported to the final destination.
              </p>
              <p className="point-p">
                7. Receive your cargo: Once the container arrives at the
                destination port, you’ll need to arrange for customs clearance
                and for the container to be delivered to the final destination.
              </p>
            </div>
            <p className="point-p">
              Overall, shipping container freight involves careful planning,
              preparation, and coordination with the shipping company, but it
              can be a reliable and low-cost way to transport goods across long
              distances.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              How to Save Money on Shipping Container Freight?
            </p>
            <p className="point-p font-bold">Rely on MOY Logistics</p>
            <p className="point-p">
              MOY Logistics can help save you money when shipping container
              freight in a few ways:
              <br />
              <br /> Carrier network: MOY Logistics has partnerships with a wide
              range of carriers, which allows them to compare rates and find the
              most cost-effective shipping option for your specific needs.
              <br />
              <br /> Advanced technology: MOY Logistics technology-driven
              approach helps to streamline the shipping process, reducing the
              risk of errors and saving time and money in the long run.
              <br />
              <br /> Expertise and guidance: MOY Logistics team of shipping
              experts can guide everything from choosing the right container
              size to navigating customs regulations, which can help avoid
              costly mistakes and delays.
              <br />
              <br /> Customized solutions: MOY Logistics offers customized
              shipping solutions based on your specific needs, whether expedited
              shipping, specialized handling, or other requirements. This can
              help to minimize costs and optimize efficiency.
              <br />
              <br /> Freight consolidation: MOY Logistics can consolidate your
              cargo with other shipments going to the same destination, which
              can help reduce shipping costs by sharing the cost of
              transportation.
              <br />
              <br /> Overall, MOY Logistics combination of the carrier network,
              advanced technology, expertise, customized solutions, and freight
              consolidation can help save you money when shipping container
              freight while still ensuring your cargo arrives at its destination
              safely and on time.
              <br />
              <br /> 3PLs arrange shipping services for shippers large and
              small. Some 3PLs, like MOY Logistics, specialize in working with
              small-to-medium-size businesses that do not ship frequently enough
              to make signing a contract with one carrier worthwhile. Because of
              the high volume of sending MOY Logistics does, we hold
              heavily-discounted contracts with many carriers. Our customers
              enjoy the benefits of those discounts, frequently saving 25%, 50%,
              75%, or more compared with booking directly through the same
              carrier.
              <br />
              <br /> MOY Logistics arranges pickup and delivery of container
              freight, whether the mode is intermodal or international ocean
              cargo. We work with an extensive network of trucking and freighter
              companies specializing in container freight shipping. Whether you
              have a full container load (FCL) or partial container load (PCL),
              our booking agents can find a suitable carrier at a great rate.
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
                    backgroundImage: `url(${intern_2})`,
                  }}
                ></div>

                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${partial_truckload})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${insurance})`,
                  }}
                ></div>
                <div
                  className="flex gap-2 bg-cover w-[300px] h-[380px]"
                  style={{
                    backgroundImage: `url(${intern_1})`,
                  }}
                ></div>
              </div>
            </div>
            <button className="clear-btn mt-10">
              Look up more freight terms
            </button>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="point-p">
              MOY Logistics is a provider of freight transportation services for
              shippers all across the United States, Canada, and
              internationally. More than 80 U.S. freighter companies have
              negotiated contracted rates with MOY Logistics so that we can save
              you money and time with every shipment you book with us.
              <br />
              <br /> All requests for container freight quotes are welcome—no
              size, location, or destination restrictions. You’ll find our
              agents knowledgeable and helpful. Call us at 800.716.7608 to get
              started.
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

            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Container Shipping FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is container shipping?
                </p>
                <p className="point-p">
                  A. Container shipping is a method of transporting goods in
                  standardized shipping containers. These containers are
                  typically made of steel and come in various sizes, such as 20
                  feet or 40 feet long. Goods are loaded into the containers at
                  the origin and then transported by container ships to their
                  destination ports. Container shipping is widely used for
                  international trade as it allows for efficient and secure
                  transportation of large goods.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the advantages of container shipping?
                </p>
                <p className="point-p">
                  A. Container shipping offers several advantages:
                  <br />
                  <br />
                  Efficiency: Containers can be quickly loaded, unloaded, and
                  transferred between different modes of transportation (such as
                  ships, trucks, and trains), making the process efficient and
                  reducing handling costs.
                  <br />
                  <br /> Security: Containers provide high protection as they
                  can be sealed and protected from theft and damage during
                  transit.
                  <br />
                  <br /> Standardization: Containers are standardized, which
                  ensures compatibility and seamless handling across different
                  transportation networks and modes.
                  <br />
                  <br />
                  Flexibility: Containers can accommodate a wide range of goods,
                  including dry goods, refrigerated goods, and even oversized
                  cargo, providing flexibility for various shipments.
                  <br />
                  <br /> Tracking: Container shipping often includes tracking
                  services, allowing shippers to monitor the location and
                  progress of their shipments.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the different container sizes available?
                </p>
                <p className="point-p">
                  A. The two most typical container sizes are 20 feet (a 20-foot
                  container or TEU) and 40 feet (a 40-foot container or FEU).
                  However, other sizes, such as 10 feet, 45 feet, and high-cube
                  containers with increased height, are available. The choice of
                  container size depends on the volume and weight of the goods
                  being shipped and the capacity requirements.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I determine the right container size for my
                  shipment?
                </p>
                <p className="point-p">
                  A. To determine the right container size for your shipment,
                  consider factors such as the volume and weight of the goods
                  and any specific requirements or restrictions. If the load is
                  relatively small, a 20-foot container may be sufficient, while
                  larger shipments may require a 40-foot container or multiple
                  containers. It’s advisable to consult with shipping providers
                  or freight forwarders who can assist in assessing the
                  shipment’s needs and recommending the appropriate container
                  size.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is a full container load (FCL) and less-than-container
                  load (LCL)?
                </p>
                <p className="point-p">
                  A. A full container load (FCL) refers to a shipment that
                  occupies the entire space of a container. In an FCL shipment,
                  the shipper exclusively uses the container and pays for the
                  whole container, regardless of whether it is fully loaded.
                  Less-than-container load (LCL) refers to a shipment that does
                  not require a full container. In an LCL shipment, multiple
                  shipments from different shippers are consolidated into a
                  single container, and each shipper pays for the space they
                  occupy within the container.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How are container shipping costs determined?
                </p>
                <p className="point-p">
                  A. Container shipping costs are determined by various factors,
                  including the distance between the origin and destination, the
                  size and weight of the container, the type of cargo, the
                  shipping route, and any additional services required, such as
                  customs clearance or inland transportation. Obtaining quotes
                  from different shipping providers or freight forwarders is
                  recommended to compare rates and find the most cost-effective
                  option for your shipment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I ship hazardous materials or perishable goods in
                  containers?
                </p>
                <p className="point-p">
                  A. It is possible to ship hazardous materials or perishable
                  goods in containers. However, special considerations and
                  regulations apply to ensure the safe transportation of these
                  goods. Hazardous materials must comply with international
                  regulations, such as the International Maritime Dangerous
                  Goods (IMDG) Code, and additional documentation and handling
                  procedures may be required. Perishable goods like food
                  products or pharmaceuticals may require refrigerated or
                  insulated containers to maintain their freshness or
                  temperature requirements. Working with shipping providers or
                  freight forwarders experienced in handling hazardous materials
                  or perishable goods is essential to ensure compliance and
                  proper handling.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How can I track my container shipment?
                </p>
                <p className="point-p">
                  A. Container shipments can be tracked using the container
                  number provided by the shipping line or freight forwarder. The
                  container number lets you track the shipment’s progress,
                  including location, estimated arrival time, and any updates or
                  changes. Many shipping lines and freight forwarders provide
                  online tracking services that allow shippers to monitor their
                  container shipments in real time.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any customs procedures involved in container
                  shipping?
                </p>
                <p className="point-p">
                  A. Custom procedures are involved in container shipping,
                  especially for international shipments. These procedures
                  typically include submitting customs declarations, providing
                  documentation such as commercial invoices and packing lists,
                  paying import duties and taxes, and complying with
                  import/export regulations. Working with customs brokers or
                  freight forwarders experienced in container shipping customs
                  procedures can help navigate these requirements and ensure
                  compliance.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I ship goods in containers to landlocked countries?
                </p>
                <p className="point-p">
                  A. Yes, it is possible to ship goods in containers to
                  landlocked countries. However, additional transportation
                  arrangements must be made, typically involving road or rail
                  transportation from the nearest seaport to the final
                  destination. Working with shipping providers or freight
                  forwarders who can facilitate the entire logistics chain,
                  including inland transport, is essential to ensure a smooth
                  delivery to landlocked countries.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default ContainerShipping;
