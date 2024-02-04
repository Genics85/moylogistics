import home_icon from "../../assets/icons/services/home_icon.svg";
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
import banner_d from "../../assets/images/rail-freight/rail_freight_d.png";
import banner_t from "../../assets/images/rail-freight/rail_freight_t.png";
import intern_1 from "../../assets/images/internation-freight/international_1.png";
import intern_2 from "../../assets/images/internation-freight/international_2.png";
import container_top from "../../assets/images/container-shipping/container_top.png";
import rail_board from "../../assets/images/rail-freight/rail_freight_board.png";
import insurance from "../../assets/images/container-shipping/shipping_insurance.png";
import partial_truckload from "../../assets/images/container-shipping/container_partial_truckload.png";
import StudioGreenBanner from "../../components/StudioGreenBanner";

function RailFreight() {
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
            <p className="section-header text-white">Rail Freight</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              MOY Logistics offers reliable and cost-effective rail shipping
              solutions for all types of freight. Get instant quotes and compare
              rates from top carriers today.
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
              / Services / <span className="font-semibold ">Rail Freight</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="section-header">What Is a Rail Shipping?</p>
            <p className="point-p">
              Rail shipping refers to transporting goods and commodities via
              railroads using trains. Rail shipping can be a cost-effective and
              efficient way to move large quantities of goods over long
              distances. It is commonly used for transporting heavy and bulky
              items, such as raw materials, coal, and finished products like
              cars and electronics. Rail shipping is often used for intermodal
              transportation, where goods are transferred between different
              modes of transportation, such as trucks, trains, and ships.
            </p>

            <p className="section-header">How MOY Logistics Can Help</p>
            <p className="point-p">
              MOY Logistics can help with your rail freight needs by providing
              you access to a network of reliable rail carriers at competitive
              rates. We can help you with everything from finding the best
              carrier for your specific needs to tracking your shipment
              throughout transportation. Our user-friendly platform and expert
              customer support team make it easy to manage your rail shipments
              from start to finish.
              <br />
              <br /> Trust MOY Logistics to help you manage all your rail
              freight needs. With MOY Logistics, you can easily compare rates
              and transit times from multiple rail carriers, ensuring you get
              the best service at the best price. We offer various rail
              services, including intermodal, heavy haul, and specialized
              freight. Whether you need to move freight across the country or
              just a few states over, we can help you find a cost-effective and
              efficient rail shipping solution.
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
            <div className="flex flex-col gap-5 lg:pl-20">
              <div className="flex gap-4 items-center">
                <p className="point-p font-semibold">
                  Learn more about our Truckload Solutions?
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-primary_green font-semibold">
                  SHIPPING DELAY CAUSES
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </div>
              <div className="flex">
                <p className="text-primary_green font-semibold leading-[20px]">
                  IF YOU'RE NOT IN A HURRY, SAVE MONEY WITH INTERMODAL RAIL
                  SHIPPING
                </p>
                <img src={read_more} className=" w-[28px]" alt="" />
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-primary_green font-semibold">
                  ELECTRONIC EXPORT INFORMATION
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-20 pt-20 ">
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
            <img src={rail_board} alt="" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
            <p className="section-header">
              Why Choose MOY Logistics For Container Rail Shipping?
            </p>
            <p className="point-p">
              MOY Logistics is a reliable and efficient solution for rail
              freight shipping. Our platform offers access to a wide network of
              rail carriers, allowing us to find the best rates and services for
              your specific needs. We also provide you with a single point of
              contact for all your rail freight needs, simplifying the shipping
              process and providing peace of mind.
              <br />
              <br /> In addition, MOY Logistics offers advanced tracking and
              reporting tools to help you stay informed about the status of your
              rail shipment at all times. Our team of dedicated logistics
              experts is available to answer any questions you may have and
              provide you with top-notch customer service. With MOY Logistics,
              you can trust that your rail freight shipment will be handled with
              care and delivered on time.
            </p>

            <button className="clear-btn self-center">
              Free Container Freight Quote
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
            <p className="section-header">Rail Freight Shipping</p>
            <p className="point-p">
              Rail freight shipping can be an efficient and cost-effective way
              to transport large quantities of goods over land. However,
              coordinating rail shipments and navigating the various logistics
              involved can be challenging. At MOY Logistics, we offer rail
              shipping solutions that take the hassle out of the process. With
              our experience and industry connections, we can help you find the
              right carrier, negotiate rates, and manage all the details of your
              rail freight shipments.
              <br />
              <br /> Whether you need to move a single rail car or an entire
              trainload of freight, we have the expertise and resources to get
              your shipment where it needs to go. Our comprehensive rail
              shipping services include everything from arranging pick-up and
              delivery to handling all necessary documentation and customs
              clearance. With MOY Logistics, you can trust that your rail
              freight is in good hands and that you’ll receive the best possible
              rates and customer service. Contact us today to learn more about
              our rail shipping solutions.
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
              <br />
              <br />
              Shipping container freight can seem overwhelming if you’re new to
              it, but it’s a straightforward process that involves the following
              steps:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 point-p">
                <p>1.</p>
                <p>
                  Determine your shipping needs: Decide on the type of cargo you
                  need to ship, the volume of cargo, the destination, and the
                  timeline for delivery. This information will help you choose
                  the right container size and shipping method.
                </p>
              </div>
              <div className="flex gap-2 point-p">
                <p>2.</p>
                <p>
                  Get a freight quote: Contact a freight forwarder or shipping
                  company for a container shipping quote. You’ll need to provide
                  information about the cargo, the origin and destination, and
                  any special requirements.
                </p>
              </div>
              <div className="flex gap-2 point-p">
                <p>3.</p>
                <p>
                  Choose a container size: Based on the volume of cargo you need
                  to ship, choose a size that best fits your needs. Standard
                  container sizes are 20 feet, 40 feet, and 45 feet.
                </p>
              </div>
              <div className="flex gap-2 point-p">
                <p>4.</p>
                <p>
                  Book your shipment: Once you’ve received a quote and chosen a
                  container size, book your shipment with the freight forwarder
                  or shipping company. You must provide details about the cargo,
                  pickup, delivery locations, and special requirements
                </p>
              </div>
              <div className="flex gap-2 point-p">
                <p>5.</p>
                <p>
                  Prepare the cargo: Pack your cargo securely in the container,
                  making sure it is appropriately labeled and any necessary
                  customs documentation is completed.
                </p>
              </div>
              <div className="flex gap-2 point-p">
                <p>6.</p>
                <p>
                  Transport the container: The shipping company will transport
                  the container to the port and load it onto the ship. Once it
                  reaches the destination port, it will be unloaded and
                  transported to the final destination.
                </p>
              </div>
              <div className="flex gap-2 point-p">
                <p>7.</p>
                <p>
                  Receive your cargo: Once the container arrives at the
                  destination port, you’ll need to arrange for customs clearance
                  and for the container to be delivered to the final
                  destination.
                </p>
              </div>
              <p className="point-p">
                Overall, shipping container freight involves careful planning,
                preparation, and coordination with the shipping company, but it
                can be a reliable and low-cost way to transport goods across
                long distances.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              How to Save Money on Shipping Container Freight?
            </p>
            <p className="point-p">
              <span className="font-bold">Rely on MOY Logistics</span>
              <br />
              <br />
              MOY Logistics can help save you money when shipping container
              freight in a few ways:
              <br />
              <br /> <span className="font-bold">Carrier network:</span>  MOY
              Logistics has partnerships with a wide range of carriers, which
              allows them to compare rates and find the most cost-effective
              shipping option for your specific needs.
              <br />
              <br /> <span className="font-bold">
                Advanced technology:
              </span>{" "}
               MOY Logistics technology-driven approach helps to streamline the
              shipping process, reducing the risk of errors and saving time and
              money in the long run.
              <br />
              <br /> <span className="font-bold">
                Expertise and guidance:
              </span>{" "}
               MOY Logistics team of shipping experts can guide everything from
              choosing the right container size to navigating customs
              regulations, which can help avoid costly mistakes and delays.
              <br />
              <br />
              <span className="font-bold">Customized solutions:</span> MOY
              Logistics offers customized shipping solutions based on your
              specific needs, whether expedited shipping, specialized handling,
              or other requirements. This can help to minimize costs and
              optimize efficiency.
              <br />
              <br /> <span className="font-bold">
                Freight consolidation:
              </span>{" "}
               MOY Logistics can consolidate your cargo with other shipments
              going to the same destination, which can help reduce shipping
              costs by sharing the cost of transportation.Overall, MOY Logistics
              combination of the carrier network, advanced technology,
              expertise, customized solutions, and freight consolidation can
              help save you money when shipping container freight while still
              ensuring your cargo arrives at its destination safely and on time.
              <br />
              <br />
              3PLs arrange shipping services for shippers large and small. Some
              3PLs, like MOY Logistics, specialize in working with
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
              cargo. We work with an extensive network of trucking and freight
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
            <p className="section-header">Rail vs. Intermodal</p>
            <p className="point-p">
              Rail and intermodal transportation are two modes of shipping that
              are commonly used to move freight across long distances. Both
              modes of transportation use trains, but there are significant
              differences between the two.
              <br />
              <br /> Rail transportation refers to the movement of freight by
              train from one point to another. It is a dedicated mode of
              transportation, meaning that trains are used exclusively for
              shipping freight. Rail is most commonly used for bulk commodities,
              such as coal, grain, and petroleum products, which can be
              transported in large quantities.
              <br />
              <br /> Intermodal transportation, on the other hand, is a
              combination of two or more modes of transportation, usually
              involving rail and trucking. Intermodal transportation typically
              involves the use of shipping containers or trailers that are
              transferred between trains and trucks at designated terminals.
              This allows for greater flexibility in transportation options and
              the ability to move freight to locations that may not have direct
              rail access.
              <br />
              <br /> When it comes to cost, rail transportation is generally
              less expensive than intermodal transportation for long-haul
              shipments over 500 miles. However, intermodal transportation
              offers greater flexibility and can often be more cost-effective
              for shorter distances or for shipments that require multiple modes
              of transportation.
              <br />
              <br /> In terms of environmental impact, rail transportation is
              generally considered to be more environmentally friendly than
              intermodal transportation. Trains are more fuel-efficient than
              trucks, and rail transportation produces fewer greenhouse gas
              emissions per ton of freight transported.
              <br />
              <br /> Overall, both rail and intermodal transportation have their
              advantages and disadvantages, and the choice between the two will
              depend on factors such as distance, cost, and the specific needs
              of the shipment.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Who Are The large Rail Providers?</p>
            <p className="point-p">
              Rail freight transportation is a vital aspect of the
              transportation industry, providing a cost-effective way of moving
              goods over long distances. Many rail freight companies operate in
              the United States, with some being larger than others. In this
              report, we will discuss the top five largest rail freight
              providers in the US based on revenue.
              <br />
              <br /> Union Pacific Railroad: Union Pacific Railroad is the
              largest rail freight provider in the US, with a revenue of over
              $21.7 billion in 2020. The company has a vast network that spans
              23 states in the western two-thirds of the US, covering over
              32,000 miles. Union Pacific serves a wide range of industries,
              including agriculture, automotive, chemical, energy, and
              intermodal.
              <br />
              <br /> BNSF Railway: BNSF Railway is the second-largest rail
              freight provider in the US, with a revenue of over $20.5 billion
              in 2020. The company has a network that spans 28 states in the
              western two-thirds of the US, covering over 32,500 miles. BNSF
              Railway serves a wide range of industries, including agricultural,
              automotive, consumer products, industrial products, and
              intermodal. CSX Transportation: CSX Transportation is the
              third-largest rail freight provider in the US, with a revenue of
              over $10.6 billion in 2020. The company has a network that spans
              23 states in the eastern US, covering over 21,000 miles.
              <br />
              <br /> CSX Transportation serves a wide range of industries,
              including automotive, chemicals, consumer goods, intermodal, and
              minerals.
              <br />
              <br /> Norfolk Southern Railway: Norfolk Southern Railway is the
              fourth-largest rail freight provider in the US, with a revenue of
              over $9.9 billion in 2020. The company has a network that spans 22
              states in the eastern US, covering over 19,500 miles. Norfolk
              Southern Railway serves a wide range of industries, including
              agriculture, automotive, chemicals, intermodal, and metals and
              construction.
              <br />
              <br /> Kansas City Southern Railway: Kansas City Southern Railway
              is the fifth-largest rail freight provider in the US, with a
              revenue of over $2.8 billion in 2020. The company has a network
              that spans 10 states in the central and southern US, covering over
              6,600 miles. Kansas City Southern Railway serves a wide range of
              industries, including automotive, chemicals and petroleum,
              agriculture and minerals, intermodal, and energy.
              <br />
              <br /> In conclusion, the rail freight industry plays a
              significant role in the US economy, and the top five largest rail
              freight providers contribute significantly to the movement of
              goods across the country. These companies operate extensive
              networks and serve a wide range of industries, providing
              cost-effective and efficient transportation solutions to their
              customers.
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
              <p className="section-header">Rail Freight FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is rail freight? 
                </p>
                <p className="point-p">
                  A. Rail freight refers to transporting goods using trains and
                  rail infrastructure. It involves loading cargo onto railcars
                  or containers designed for rail transportation and moving them
                  between locations. Rail freight is commonly used for
                  long-distance transport of bulk goods, such as commodities,
                  minerals, chemicals, and manufactured goods.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I determine the cost of rail freight? 
                </p>
                <p className="point-p">
                  A. Rail freight offers several advantages:
                  <br />
                  <br />
                  <span className="font-bold">Cost-effective: </span>
                  Rail transport is often more cost-effective than other modes,
                  especially for long-distance transportation and large cargo
                  volumes.
                  <br />
                  <br /> <span className="font-bold">
                    Fuel efficiency:
                  </span>{" "}
                   Trains are more fuel-efficient than trucks, resulting in
                  lower greenhouse gas emissions and environmental impact.
                  <br />
                  <br />
                  <span className="font-bold">Capacity:</span> Rail networks can
                  handle large volumes of cargo, making it suitable for
                  transporting bulk goods.
                  <br />
                  <br />{" "}
                  <span className="font-bold">
                    Reduced road congestion:
                  </span>{" "}
                   Using rail transport helps alleviate congestion by shifting
                  freight from highways to rail lines.
                  <br />
                  <br /> <span className="font-bold">Safety:</span>  Rail
                  transport has a strong safety record, with fewer accidents
                  than other transportation modes.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What types of goods are suitable for rail freight?
                </p>
                <p className="point-p">
                  A. Rail freight is suitable for a wide range of goods,
                  including:
                  <br />
                  <br /> <span className="font-bold">
                    Bulk commodities:
                  </span>{" "}
                   Such as coal, grains, ores, minerals, and chemicals.
                  <br />
                  <br />
                  <span className="font-bold">Intermodal containers:</span>
                   Goods packed in containers that can be easily transferred
                  between rail and other modes of transportation, such as trucks
                  or ships.
                  <br />
                  <br /> <span className="font-bold">Finished goods:</span>{" "}
                   Products requiring long-distance transportation, such as
                  automobiles, appliances, and electronics.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I arrange rail freight for my cargo?
                </p>
                <p className="point-p">
                  A. You can work with rail freight operators, logistics
                  providers, or freight forwarders to arrange rail freight for
                  your cargo. They can help you with the necessary arrangements,
                  including coordinating the pickup and delivery of your
                  shipment, providing railcar or container options, obtaining
                  rail freight rates, and assisting with documentation and
                  customs procedures if applicable.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How long does rail freight take? 
                </p>
                <p className="point-p">
                  A. The transit time for rail freight varies depending on the
                  distance traveled and the specific rail network. Generally,
                  rail freight takes longer than air freight but is faster than
                  ocean freight. Transit times can range from a few days to
                  several weeks, depending on the origin and destination, the
                  route, and any potential delays or congestion along the rail
                  network.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I track my rail freight shipment? 
                </p>
                <p className="point-p">
                  A. Yes, many rail freight operators provide tracking services
                  that allow you to monitor the progress of your shipment. They
                  offer online tracking systems or customer service support to
                  update your rail freight shipment’s location and estimated
                  arrival time. This tracking capability allows you to stay
                  informed and plan accordingly.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any limitations or restrictions on rail freight?
                </p>
                <p className="point-p">
                  A. Rail freight has certain limitations and restrictions. Some
                  factors to consider include:
                  <br />
                  <br />
                  <span className="font-bold">Accessibility:</span>
                   Rail transport requires access to rail lines and terminals,
                  so locations far from rail infrastructure may have limited or
                  no rail freight options.
                  <br />
                  <br /> <span className="font-bold">
                    Size and weight:
                  </span>{" "}
                   Railcars and containers have specific height and weight
                  limits. Oversized or cumbersome cargo may require specialized
                  equipment or alternative transportation methods.
                  <br />
                  <br /> <span className="font-bold">
                    Hazardous materials:
                  </span>{" "}
                   Some hazardous materials may restrict rail transport due to
                  safety regulations. Certain classes of hazardous materials may
                  require additional permits or precautions for rail freight.
                  <br />
                  <br />
                  <span className="font-bold">Customization:</span>  Rail
                  freight may need more flexibility regarding door-to-door
                  delivery options or specific routing requests than trucking.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Is insurance necessary for rail freight shipments? 
                </p>
                <p className="point-p">
                  A. While insurance is not mandatory for rail freight
                  shipments, protecting your cargo against potential loss,
                  damage, or theft during transit is highly recommended.
                  Insurance coverage can be obtained through cargo insurance
                  providers or freight forwarders. Consult with your insurance
                  provider to understand the coverage options for rail freight
                  shipments.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can rail freight be used for international shipments?
                </p>
                <p className="point-p">
                  A. Rail freight can be used for international shipments,
                  primarily land-based transportation between neighboring
                  countries or regions. Rail networks connect many countries and
                  provide an alternative to road or sea transport for
                  cross-border shipments. International rail freight services
                  may require coordination with different rail operators and
                  adherence to international customs procedures and regulations.
                  Working with experienced logistics providers or freight
                  forwarders specializing in international rail freight can help
                  facilitate smooth cross-border transportation.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default RailFreight;
