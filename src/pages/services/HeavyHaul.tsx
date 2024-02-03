import home_icon from "../../assets/icons/services/home_icon.svg";
import check_mark from "../../assets/icons/services/check_mark.svg";
import details_icon from "../../assets/icons/services/more_details.svg";
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
import banner_d from "../../assets/images/heavy-haul/heavy_haul_bg_d.png";
import banner_t from "../../assets/images/heavy-haul/heavy_haul_bg_t.png";
import expedited_board from "../../assets/images/refrigerated-freight/refrigerated_board.png";
import exped_1 from "../../assets/images/heavy-haul/haul_1.png";
import exped_2 from "../../assets/images/heavy-haul/haul_2.png";
import exped_3 from "../../assets/images/heavy-haul/haul_3.png";
import exped_4 from "../../assets/images/heavy-haul/haul_4.png";
import exped_5 from "../../assets/images/heavy-haul/haul_5.png";
import exped_6 from "../../assets/images/heavy-haul/haul_6.png";
import exped_7 from "../../assets/images/heavy-haul/haul_7.png";
import exped_8 from "../../assets/images/heavy-haul/haul_8.png";
import advantage from "../../assets/images/services/advantages_moy.png";
import best_practices from "../../assets/images/heavy-haul/best_practices.png"
import customized_solution from "../../assets/images/heavy-haul/customized_solution.png"


function HeavyHaul() {
  const itemsLeft = [
    "Air Conditioners",
    "Aircraft Propellers",
    "Aircraft Seats",
    "ATMs",
    "ATVs",
    "Auto Body Parts",
    "Automobile Clutches",
    "Bathroom Tiles",
    "Batteries",
    "Beds",
    "Brewery Systems Equipment",
    "Car and Truck Accessories",
    "Carpets",
    "Ceramic Tile",
    "Chandeliers",
    "Chemicals",
    "Christmas Trees",
    "Computers",
    "Conveyor Systems",
    "Deck Tiles",
    "Doors",
    "Dry Goods",
    "Electronics",
    "Exercise Machines",
    "Farm Equipment",
    "Floor Tiles",
    "Food Beverage",
    "Freezers",
    "Golf Course Mowers",
    "Hardwood Flooring",
    "Hoods",
    "Laminate Wood Flooring",
    "Lamps",
    "Landscaping",
    "Lawn Mower",
    "Light Bulbs",
  ];

  const itemsRight = [
    "Lighting",
    "Lumber",
    "Luxury Vinyl Flooring",
    "Machine Parts",
    "Manufacturing Equipment",
    "Marble Tiles",
    "Medical Machines",
    "Metal Racks",
    "Metal Rails",
    "Metal Rods",
    "Mulch",
    "Outboard Motors",
    "Pavers",
    "Plows",
    "Power Generation Equipment",
    "Power Tools",
    "Printers",
    "Pumps",
    "Restaurant Equipment",
    "Roofing Tiles",
    "Salt",
    "Sheet Metal",
    "Shipping Medical Supplies",
    "Speakers",
    "Taxidermy",
    "Televisions",
    "Tillers",
    "Transmissions",
    "Used Auto RV Parts",
    "Vinyl Flooring",
    "Vitamins",
    "Welding Equipment",
    "Wheelchair",
    "Wood Floors",
  ];
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
            <p className="section-header text-white">Heavy Haul</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Looking for a reliable and experienced heavy haul freight shipping
              service? Our specialized transportation solutions can move your
              large and heavy cargo safely and efficiently, with unbeatable
              discounts and automated tracking and paperwork. Trust our 24+
              years of logistics expertise to handle your heavy haul freight
              needs. Get a quote today!
            </p>
            <button className="clear-btn bg-white">
              Heavy Haul Shipping Quote
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
              / Services / <span className="font-semibold ">Heavy Haul</span>
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="section-header">What Is Heavy Haul Shipping?</p>
            <p className="point-p">
              Heavy haul shipping, also known as heavy equipment transportation,
              involves moving extremely large or heavy items that cannot be
              transported using standard shipping methods. This can include
              construction equipment, industrial machinery, oversized vehicles,
              and even entire buildings.
              <br />
              <br /> Heavy haul shipping requires specialized equipment and
              expertise to transport these large and heavy items safely.
              Typically, heavy haul carriers use specialized trailers such as
              lowboys, flatbeds, or extendable trailers to transport these
              goods. The drivers of these specialized trailers must be trained
              and experienced in handling large and heavy cargo.
              <br />
              <br />
              In addition to the specialized equipment and expertise, heavy-haul
              shipping also requires careful planning and coordination. This may
              include obtaining permits and coordinating with local authorities
              for road closures or other necessary preparations. It is essential
              to ensure that the route is suitable for the cargo’s size and
              weight and that all safety measures are in place to prevent
              accidents or damage to the load.
              <br />
              <br /> Overall, heavy haul shipping is critical in transporting
              large and heavy items, allowing for the essential movement of
              equipment and machinery needed for construction and industrial
              projects.
            </p>
            <div className="flex flex-col gap-3">
              <p className="section-header ">
                Why Choose Our Heavy Haul Shipping Services?
              </p>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Receive Freight Shipping Quotes for transporting heavy and
                  oversized items anywhere in the U.S. & Canada.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Unbeatable discounted heavy haul transportation rates include
                  LTL, truckload, rail, air, and more.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Our automated system tracks your shipment and generates all
                  necessary paperwork and invoices.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">
                  Manage all your quotes and shipments in one place with our
                  user-friendly platform.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Automated Tracking and Paperwork</p>
              </div>
              <div className="flex gap-3">
                <div className="check-mark-w shrink-0 ">
                  <img src={check_mark} alt="" />
                </div>
                <p className="point-p">Experience You Can Trust</p>
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
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-20 lg:mt-32 ">
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
            <p className="section-header">
              Why Choose MOY Logistics for Heavy Haul?
            </p>
            <p className="point-p">
              There are many reasons to choose MOY Logistics for your heavy-haul
              shipping needs.
            </p>
            <p className="point-p font-bold">Here are just a few</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Specialized Equipment: We can access various specialized
                  trailers and carriers to safely and efficiently handle your
                  heavy haul shipments safely and efficiently.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Expertise: Our team of transportation experts has the
                  knowledge and experience to handle the complex logistics
                  involved in heavy haul shipping, including obtaining permits,
                  coordinating with local authorities, and ensuring the safe
                  transport of your cargo.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Technology: We use advanced technology to provide automated
                  tracking, real-time status updates, and streamlined paperwork
                  and invoicing, making it easy to manage your heavy haul
                  shipments.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Competitive Rates: Our relationships with carriers and
                  industry-leading negotiating power allow us to offer
                  unbeatable heavy-haul shipping rates.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Customer Service: We pride ourselves on providing exceptional
                  customer service, with dedicated representatives available
                  24/7 to answer your questions and ensure a smooth shipping
                  experience.
                </p>
              </div>
            </div>
            <p className="point-p">
              In short, when you choose MOY Logistics for your heavy haul
              shipping needs, you can trust that your cargo will be in good
              hands and that you’ll receive the best possible service at a
              competitive rate.
            </p>
            <button className="clear-btn self-center">
              Instant Freight Quote
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
            <p className="section-header">Heavy Haul Criteria</p>
            <p className="point-p">
              When it comes to heavy haul shipments, the dimensions and weight
              of the cargo are crucial factors to consider. At MOY Logistics, we
              specialize in heavy-haul shipping and can help you determine
              whether your load requires specialized equipment and permits for
              transportation.
              <br />
              <br /> Typically, heavy haul trucking services are needed for
              shipments that exceed the following loaded dimensions: 14 feet 6
              inches high, 14 feet 6 inches wide, and 100 feet long. Any load
              with a single extreme size (i.e., more than 16 feet across or
              tall) will also require heavy haul trucking service. It’s
              important to note that heavy haul freight dimensions may vary
              between carriers, and it’s essential to consult with your provider
              to ensure that your specific shipment meets the requirements.
              <br />
              <br /> As for the weight of the cargo, any load with an overall
              piece weight exceeding 55,000 pounds is considered a heavy haul
              shipment. These shipments require additional truck and trailer
              axles to safely transport the cargo, ensuring that it complies
              with weight and size limits set by state and local regulations.
              <br />
              <br /> At MOY Logistics, we have a vast network of carriers and
              specialized equipment to handle any heavy haul shipment,
              regardless of size or weight. Contact us today to learn more about
              our heavy-haul shipping services and how we can help move your
              oversized or heavy cargo.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Here are 8 types of products that often require heavy haul
              transportation:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Large construction equipment: Heavy haul transportation is
                  often used to move large construction equipment, such as
                  bulldozers, excavators, and cranes, which are too large or
                  heavy to be transported using standard shipping methods.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Industrial machinery: Large and heavy industrial machinery
                  such as turbines, generators, and presses may require heavy
                  haul transportation due to their size and weight.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Oversized vehicles: Heavy haul shipping can move large trucks,
                  buses, and other oversized vehicles that cannot be transported
                  using standard trailers.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Prefabricated buildings: Modular homes, commercial buildings,
                  and other prefabricated structures often require heavy haul
                  transportation due to their size and weight.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Heavy and oversized raw materials: Large steel beams, concrete
                  barriers, and other raw materials may require heavy haul
                  transportation due to their size and weight.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Mining equipment: Heavy haul transportation can move large
                  mining equipment such as haul trucks, draglines, and shovels.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Aerospace equipment: Large aerospace equipment such as
                  aircraft parts and engines may require heavy haul
                  transportation due to their size and weight.
                </p>
              </div>
              <div className="flex items-start gap-2 ">
                <div className="bg-[#1a2941] shrink-0 mt-1 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Wind turbine components: The blades, towers, and other parts
                  of wind turbines can be huge and heavy and often require heavy
                  haul transportation to move them to their installation sites.
                </p>
              </div>
            </div>
            <p className="point-p">
              Overall, heavy haul transportation is ideal for moving huge,
              heavy, or oversized items that cannot be transported using
              standard shipping methods. It requires specialized equipment and
              expertise to ensure safe and efficient transportation of these
              types of products.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 pt-0 p-4 lg:p-10">
            <p className="section-header">
              Oversize Freight General Dimensions
            </p>
            <p className="point-p">
              1. Exceeds eight ft. six in (2.59 m) in width
              <br />
              2. Exceeds 13 ft. six in (4.11 m) in height
              <br />
              3. 34k to 80k; depends on number of axles
              <br />
              <br />
              Some examples of oversized freight include boats, heavy equipment,
              machinery, generators, trusses, etc. Consult your freight agent if
              you aren’t sure what your cargo qualifies.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 pt-0 p-4 lg:p-10">
            <p className="section-header">
              Does Oversize Freight Require Specific Transportation Equipment?
            </p>
            <p className="point-p">
              <span className="font-bold">
                Oversize freight requires specific transportation equipment,
                such as:
              </span>
              Lowboys—A semi-trailer with a drop deck. The trailer sits very low
              to the ground. There are two drops, the first behind the gooseneck
              and the second in front of the wheels.
              <br />
              <br /> Drop decks—A semi-trailer on a platform. It lacks a roof,
              sides, and doors. Drop decks have 2 deck levels and sit higher
              than the lowboy.
              <br />
              <br /> Stretch trailers—A stretch trailer is an extendable flatbed
              lacking roofs, sides, and doors.
              <br />
              <br /> Stretch trailers carry oversized loads that are too long
              for standard trailers by providing support and circumventing
              overhangs. These can be single or double.
              <br />
              <br /> Removable gooseneck trailer (RGN)—These trailers are
              suitable for carrying long, tall freight. The front is detachable,
              and the trailer can be dropped to the ground to make a ramp. 3-20+
              axles.
              <br />
              <br /> Extendable double drop trailers—An extendable double drop
              trailer is used to carry and haul freight that exceeds the length
              of a standard double drop trailer. The number of axles (2-3)
              depends on the freight’s weight.
            </p>
            <p className="point-p">
              These services specialize in moving shipments that exceed the
              limitations of LTL and FTL carriers. State, federal, and local
              laws will restrict the weight and dimensions that freight trucks
              can haul without special permits and equipment. Packaging
              requirements may also push the shipment outside the size
              limitations.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 pt-0 p-4 lg:p-10">
            <p className="section-header">
              The Difference Between Oversize and Overlength
            </p>
            <p className="point-p">
              <span className="font-bold">
                Oversize freight and over-length freight are both types of cargo
                that exceed the standard size or weight limits for standard
                shipping containers or trucks, but they refer to slightly
                different aspects of a shipment:
              </span>
              <br />
              <br />
              Oversize freight: This term generally refers to shipments that
              exceed the standard size or weight limits, regardless of whether
              the excess is due to length, width, height, or weight. Oversized
              freight can include heavy machinery, large vehicles, or oversized
              building materials.
              <br />
              <br /> Over-length freight: This term refers explicitly to
              shipments that exceed the standard length limits for shipping
              containers or trucks. The maximum legal length of a truck or
              trailer can vary depending on the country or region, but
              over-length freight typically refers to shipments that exceed this
              maximum length. Over-length freight can include pipes, poles, or
              other long and narrow items.
              <br />
              <br /> While oversize freight can include over-length freight, not
              all oversize cargo is necessarily over-length. For example, a
              large piece of machinery may be oversize due to its width or
              height rather than its length. It’s essential to carefully
              consider a shipment’s specific dimensions and weight when
              determining the best way to transport it and to work with a
              shipping company or freight forwarder with experience in handling
              oversize or over-length freight.
              <br />
              <br /> Unlike oversize freight, the term overlength freight
              pertains only to shipments for which length is the only
              outstanding dimension. Pipe and lumber are examples of freight
              that can face an overlength limit. Individual carriers establish
              their limits for length.
              <br />
              <br /> Several MOY Logistics carriers continue to accept cargo up
              to 12′ (144″) in length without charging an overlength fee.
              Increasingly, pages are setting 96″ as their overlength limit.
              They will still take on freight beyond the limit but charge extra
              for it.d to ship something that is longer than eight ′ and doesn’t
              want to pay an overlength fee? Contact your shipping agent at
              800.716.7608.
            </p>
          </div>

          <div className="w-full pt-0 lg:pt-0 p-4 lg:p-10">
            <hr />
          </div>
          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              Finely-tailored freight solutions
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
            <p className="section-header">How Does Heavy Haul Shipping Work?</p>
            <p className="point-p">
              At MOY Logistics, we understand that heavy haul shipping involves
              transporting large, heavy, or oversized items that cannot be moved
              using standard shipping methods. The process of heavy haul
              shipping can be broken down into several steps: Here’s a breakdown
              of the process:
            </p>
            <div className="flex flex-col">
              <div className="flex gap-1">
                <p className="point-p">1.</p>
                <p className="point-p">
                  Consultation: The first step is to consult with us, your
                  trusted transportation provider that specializes in heavy haul
                  shipments. We’ll assess your transportation needs and develop
                  a plan for moving your cargo.
                </p>
              </div>
              <div className="flex gap-1">
                <p className="point-p">2.</p>
                <p className="point-p">
                  Planning: Our experienced team will plan the logistics of your
                  shipment, including the route, permits, and equipment needed
                  for the move.
                </p>
              </div>
              <div className="flex gap-1">
                <p className="point-p">3.</p>
                <p className="point-p">
                  Equipment: Heavy haul shipments require specialized equipment,
                  such as lowboy trailers, extendable trailers, and multi-axle
                  trailers, depending on the size and weight of the cargo.
                  Fortunately, we have a vast network of trusted carriers and
                  specialized equipment to handle any heavy haul shipment,
                  regardless of size or weight
                </p>
              </div>
              <div className="flex gap-1">
                <p className="point-p">4.</p>
                <p className="point-p">
                  Permits and Approvals: Heavy haul shipments require permits
                  and approvals from state and local authorities, including
                  permits for overweight and oversized loads and approval for
                  the proposed transportation route. Our team will handle all
                  necessary permits and approvals on your behalf.
                </p>
              </div>
              <div className="flex gap-1">
                <p className="point-p">5.</p>
                <p className="point-p">
                  Execution: We’ll execute the move once the plan is in place
                  and all necessary permits and approvals have been obtained.
                  We’ll provide escort vehicles to ensure safe and efficient
                  transportation, giving you peace of mind knowing that your
                  cargo is in good hands
                  <br />
                  <br />
                </p>
              </div>
              <p className="point-p">
                Choose MOY Logistics for your heavy haul shipping needs and let
                us help move your oversized or heavy cargo. Contact us today to
                learn more about our heavy haul shipping services.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Challenges With Heavy Haul Shipping
            </p>
            <p className="point-p">
              Heavy haul shipping presents unique logistical challenges that
              require careful consideration to ensure the safe and efficient
              transport of the cargo. Specialized equipment, such as lowboy,
              extendable, and multi-axle trailers, is needed to transport heavy
              haul shipments. Coordinating the availability of this equipment
              can be challenging, especially for complex shipments. In addition,
              heavy haul shipments require permits and approvals from state and
              local authorities, which can vary depending on the size, weight,
              and type of cargo. Navigating these regulations and obtaining the
              necessary permits can be complex and time-consuming.
              <br />
              <br /> Route planning is another critical aspect of heavy haul
              shipping. The transportation route must be planned carefully to
              avoid obstacles such as low bridges, narrow roads, and weight
              restrictions. This can be challenging, requiring careful
              consideration of the cargo’s size, weight, and dimensions.
              Sometimes, heavy haul shipments may require escort services, such
              as pilot cars or police escorts, to ensure safe transportation.
              Coordinating these services can be an additional logistical
              challenge.
              <br />
              <br /> Clear communication between all parties involved in the
              shipment is essential to ensure the cargo is transported safely
              and efficiently. This includes coordination between shippers,
              carriers, and government agencies regulating heavy haul shipments.
              At MOY Logistics, we have the experience and expertise to manage
              these logistical challenges and ensure that your heavy haul
              shipment is transported safely and efficiently. Contact us today
              to learn more about our heavy haul shipping services.
            </p>
            <p className="point-p font-bold">How Can MOY Logistics Help?</p>
            <p className="point-p">
              You could spend your time researching which carriers are available
              to service your area and call for pricing, or you could save time
              and money using our services that will handle all the research
              work for you so that you can save time and money! Our freight
              quote will instantly compare rates from many highly-rated U.S.
              carriers.
              <br />
              <br /> Next time you have an oversize freight or package, contact
              MOY Logistics immediately, and we’ll carry the load instead. Start
              your free freight quote today, or call one of our expert freight
              agents at 800.716.7608.ne of our specialist freight agents at
              800.716.7608.
            </p>
            <div className="flex justify-between md:justify-normal md:gap-40">
              <div className="flex flex-col gap-2">
                {itemsLeft.map((item) => (
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {itemsRight.map((item) => (
                  <div className="flex items-center gap-2 ">
                    <div className="bg-[#1a2941] shrink-0 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">{item}</p>
                  </div>
                ))}
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
            <div className="flex flex-col gap-6 pt-0  p-4 lg:p-10">
              <p className="section-header">
                The Difference Between Oversize Load and Heavy Haul
              </p>
              <p className="point-p">
                While “oversize load” and “heavy haul” are often used
                interchangeably, they refer to different aspects of a shipment.
                An oversize load refers to a shipment that exceeds the legal
                size limits for transportation on public roads, typically in
                terms of height, width, or length. Oversized loads require
                special permits and pilot cars or escorts to ensure safe
                transit.
                <br />
                <br /> On the other hand, heavy haul refers to a shipment that
                exceeds the weight capacity of standard trucks and trailers.
                Heavy haul shipments typically require specialized equipment,
                such as lowboy, extendable, or multi-axle trailers, to
                accommodate the weight of the cargo. Heavy haul shipments also
                require special permits, approvals from state and local
                authorities, and careful route planning to ensure safe
                transportation.
                <br />
                <br /> In summary, oversize load refers to a shipment that
                exceeds legal size limits, while heavy haul refers to a shipment
                that exceeds weight capacity. However, many shipments may fall
                under both categories, requiring specialized equipment, permits,
                and careful planning to ensure safe and efficient
                transportation.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-0  p-4 lg:p-10">
              <p className="section-header">Heavy Haul FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is heavy haul transportation?
                </p>
                <p className="point-p">
                  A. Heavy haul transportation refers to the movement of
                  oversized or overweight cargo that exceeds the standard legal
                  limits for size or weight. It involves specialized equipment,
                  such as flatbed trailers, lowboys, or multi-axle trailers, to
                  accommodate the dimensions and weight of the cargo. Heavy haul
                  transportation often requires special permits and adherence to
                  specific regulations and safety protocols.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How is heavy haul transportation different from regular
                  transportation?
                </p>
                <p className="point-p">
                  A. Heavy haul transportation differs from regular
                  transportation in size, weight, and specialized handling
                  required. Regular transportation typically involves
                  standard-sized cargo that can be accommodated by standard
                  trailers or shipping containers. Heavy haul transportation
                  involves specialized equipment, permits, and expertise to
                  safely handle and transport oversized or overweight cargo that
                  exceeds legal limits.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What are the challenges of heavy haul transportation?
                </p>
                <p className="point-p">
                  A. Heavy haul transportation presents several challenges,
                  including:
                  <br />
                  <br />
                  Permits and regulations: Transporting oversized or overweight
                  cargo requires obtaining special permits from transportation
                  authorities. Compliance with rules related to weight limits,
                  height restrictions, route restrictions, and safety protocols
                  is crucial.
                  <br />
                  <br /> Specialized equipment: Heavy haul transportation
                  requires specialized trailers or trucks capable of carrying
                  heavy loads and accommodating oversized cargo. Coordinating
                  and arranging the appropriate equipment can be challenging.
                  <br />
                  <br />
                  Route planning: Navigating through roads and highways with
                  oversized cargo requires careful route planning. Identifying
                  potential obstacles such as low bridges, narrow streets, or
                  weight-restricted areas is essential.
                  <br />
                  <br /> Safety considerations: Safety is paramount in heavy
                  haul transportation. Ensuring proper load securement,
                  compliance with safety regulations, and employing trained and
                  experienced drivers are critical to prevent accidents and
                  ensure the safe transport of cargo.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I determine if my cargo requires heavy haul
                  transportation?
                </p>
                <p className="point-p">
                  A. Determining if your cargo requires heavy haul
                  transportation depends on its weight, dimensions, and legal
                  limits set by transportation authorities. Heavy haul
                  transportation is likely needed if your shipment exceeds the
                  standard size or weight limits for regular transportation
                  methods. Consulting with transportation experts, freight
                  forwarders, or logistics providers experienced in heavy haul
                  can help assess your cargo and determine the appropriate
                  transportation method.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I arrange heavy haul transportation for my cargo?
                </p>
                <p className="point-p">
                  A. To arrange heavy haul transportation for your cargo, you
                  should work with transportation specialists, freight brokers,
                  or logistics companies specializing in heavy haul services.
                  Please provide them with detailed information about your
                  shipment, including its weight, dimensions, and any specific
                  requirements. They will assess your needs, determine the
                  appropriate equipment and permits, and coordinate the
                  transportation process, including route planning and securing
                  any necessary escorts or pilot vehicles.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are there any legal requirements for heavy haul
                  transportation?
                </p>
                <p className="point-p">
                  A. Yes, heavy haul transportation is subject to various legal
                  requirements. These include obtaining permits from
                  transportation authorities, complying with weight and size
                  restrictions, following specific safety regulations, and
                  adhering to any additional rules imposed by local, state, or
                  national authorities. It’s crucial to work with transportation
                  experts who are well-versed in the legal requirements for
                  heavy-haul transportation and can ensure compliance.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can heavy haul transportation be done internationally?
                </p>
                <p className="point-p">
                  A. Yes, heavy haul transportation can be done internationally,
                  but it requires additional planning and coordination.
                  International heavy haul transportation involves complying
                  with the transportation regulations of each country along the
                  route, obtaining appropriate permits and approvals, and
                  coordinating with local authorities and transportation
                  partners. Working with freight forwarders or logistics
                  providers experienced in international heavy haul can help
                  navigate the complexities of cross-border transportation.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Is insurance necessary for heavy haul transportation?
                </p>
                <p className="point-p">
                  A. Yes, insurance coverage is highly recommended for
                  heavy-haul transportation. Given the unique challenges and
                  risks of transporting oversized or overweight cargo, insurance
                  provides financial protection against potential damages,
                  accidents, or liability. Consult with insurance providers
                  specializing in transportation to ensure that your heavy haul
                  shipments are adequately covered.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I ensure my heavy haul cargo’s safe and successful
                  transportation?
                </p>
                <p className="point-p">
                  A. To ensure the safe and successful transportation of heavy
                  haul cargo, follow these key steps:
                </p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Work with experienced transportation specialists or
                      logistics providers who specialize in heavy haul.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Obtain the necessary permits and comply with all legal
                      requirements and safety regulations.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Properly secure and load the cargo to prevent shifting or
                      damage during transit.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Conduct thorough route planning, considering any obstacles
                      or restrictions.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Communicate effectively with all stakeholders, including
                      drivers, escorts, and destination contacts.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Regularly monitor the progress of the transportation and
                      address any issues promptly.
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 w-[6px] h-[6px] rounded-full"></div>
                    <p className="point-p">
                      Maintain clear documentation of all aspects of heavy haul
                      transportation, including permits, insurance coverage, and
                      safety records.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What should I do if there are temperature deviations or
                  issues with my refrigerated freight shipment?
                </p>
                <p className="point-p">
                  A. If you encounter temperature deviations or issues with your
                  refrigerated freight shipment, it’s essential to address them
                  promptly. Contact your shipping provider or logistics partner
                  to report the issue and provide them with all relevant
                  details. They will work to investigate the problem, determine
                  the cause of the temperature deviation, and take appropriate
                  actions to resolve the issue. It’s advisable to document any
                  temperature deviations or damage to the goods with photographs
                  or written records for potential insurance claims or
                  reimbursement purposes.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className="flex flex-col w-full items-center justify-center gap-10 p-4 lg:p-10">
          <p className=" section-header ">
            3 Advantages of Using MOY Logistics for Heavy Haul Shipping:
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <div>
                <img className="w-full" src={advantage} />
              </div>
              <p className="font-semibold text-[23px]">
                Experience and Expertise:
              </p>
              <p className="  leading-[20px] point-p ">
                MOY Logistics has over 20 years of experience in the logistics
                industry and specializes in heavy haul shipping. Our team of
                logistics experts has the knowledge and expertise to handle even
                the most complex heavy haul shipments, ensuring safe and
                efficient transportation.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <div>
                <img className="w-full" src={customized_solution} />
              </div>
              <p className="font-semibold text-[23px]">Customized Solutions:</p>
              <p className="leading-[20px] point-p ">
                We understand that every heavy haul shipment is unique, and
                requires customized solutions. MOY Logistics offers a range of
                specialized equipment, including lowboy trailers, flatbeds, and
                multi-axle trailers, to ensure that your shipment is transported
                safely and efficiently. We also handle all necessary permits and
                approvals, taking the hassle out of heavy haul logistics.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              <div>
                <img className="w-full" src={best_practices} />
              </div>
              <p className="font-semibold text-[23px]">Competitive Pricing:</p>
              <p className="leading-[20px] point-p ">
                Heavy haul shipping can be expensive, but MOY Logistics offers
                competitive pricing for all of our services, including heavy
                haul. By leveraging our relationships with carriers and our
                expertise in logistics, we can help you save money on your heavy
                haul shipment without sacrificing quality or safety.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HeavyHaul;
