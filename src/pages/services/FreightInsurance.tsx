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
import banner_d from "../../assets/images/freight-insurance/insurance_background_d.png";
import banner_t from "../../assets/images/freight-insurance/insurance_background_t.png";
import ltl_1 from "../../assets/images/freight-insurance/insurance_1.png";
import ltl_2 from "../../assets/images/freight-insurance/insurance_2.png";
import ltl_3 from "../../assets/images/freight-insurance/insurance_3.png";
import ltl_4 from "../../assets/images/freight-insurance/insurance_4.png";
import ltl_5 from "../../assets/images/freight-insurance/insurance_5.png";
import ltl_6 from "../../assets/images/freight-insurance/insurance_6.png";
import ltl_7 from "../../assets/images/freight-insurance/insurance_7.png";
import ltl_8 from "../../assets/images/freight-insurance/insurance_8.png";
import ltl_9 from "../../assets/images/freight-insurance/insurance_9.png";
import ltl_10 from "../../assets/images/freight-insurance/insurance_10.png";
import ltl_11 from "../../assets/images/freight-insurance/insurance_11.png";
import ltl_12 from "../../assets/images/freight-insurance/insurance_12.png";
import insurance_board_0 from "../../assets/images/freight-insurance/insurance_board.png"
import insurance_board from "../../assets/images/freight-insurance/insurance_board_2_d.png";
import insurance_board_t from "../../assets/images/freight-insurance/insurance_board_2_t.png";

import StudioGreenBanner from "../../components/StudioGreenBanner";

function FreightInsurance() {
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
            <p className="section-header text-white">Freight Insurance</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Protect Your Cargo with Freight Insurance - Safeguard your
              shipments from unforeseen mishaps and damages. Learn how freight
              insurance can provide peace of mind and financial security. Get
              comprehensive coverage for your valuable cargo today.
            </p>
            <button className="clear-btn bg-white">
              Instanct Freight Quote
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
            <p>/ Freight Insurance</p>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <p className="section-header">What is Freight Insurance?</p>
            <p className="point-p">
              It’s like adding a superhero cape to your cargo’s protection!
              While carriers have their basic coverage, it’s often as reliable
              as a rubber duck in a storm. Independent freight insurance gives
              you the full-value shield your precious shipments deserve. No need
              to prove liability or play the blame game when damages strike –
              you’re covered, my friend! Forget the headaches – the claims
              process is a direct hotline between you and the insurance company,
              smoothing out any transportation bumps. And let’s face it; freight
              damage is as typical as a sneaky squirrel in a truck – from subpar
              packing to weather tantrums and even thieving mishaps!
              <br />
              <br /> An independent policy is your secret weapon if your
              shipment’s value exceeds carrier limits. Even if you’re within
              their range, insurance means ultimate peace of mind for you and
              your superiors. So, suit up with freight insurance and let your
              cargo fly worry-free! Trust us; it’s the funkiest way to safeguard
              your goods.
            </p>
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
                  10 HELPFUL FURNITURE PACKING TIPS
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </div>
              <div className="flex gap-4 items-center">
                <p className="text-primary_green font-semibold">
                  4 FASCINATING FREIGHT FACTS
                </p>
                <img src={read_more} className="w-[28px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-10 pt-20 lg:pt-52 ">
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
            <img src={insurance_board_0} alt="" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-[600px] lg:w-[700px] ">
            <p className="section-header">What Is Carrier Liability?</p>
            <p className="point-p">
              Carrier liability encompasses the legal obligation of a shipping
              carrier to compensate customers for any loss or damage incurred by
              their goods during transportation.
              <br />
              <br /> It establishes the carrier’s responsibility for ensuring
              the goods’ safe delivery to the intended destination in the same
              condition as when picked up. Carrier liability can be set through
              contractual agreements between the carrier and shipper or by
              adhering to relevant laws and regulations. The significance of
              carrier liability lies in its ability to protect customers in
              cases of lost, damaged, or stolen goods during transit. In such
              instances, the carrier is obligated to provide compensation for
              the value of the goods and cover the costs of repair or
              replacement. This safeguard prevents customers from facing
              financial losses in the event of shipping complications. However,
              it is essential to note that carrier liability has limitations and
              may not encompass all losses or damages. For example, it may
              impose a specific monetary limit per pound of the shipped goods,
              which means that if the goods’ value exceeds this limit, the
              customer may only recover a fraction of their actual loss.
              Additionally, carrier liability may exclude certain types of
              damage, such as those caused by natural disasters or acts of war.
              <br />
              <br /> To address these potential gaps in coverage, customers can
              opt for extra shipment protection, which provides supplemental
              insurance beyond carrier liability. This additional coverage
              extends protection against broader risks, including theft,
              breakage, and damage caused by weather events. Moreover, extra
              shipment protection can cover the goods’ full value, overcoming
              the limitations imposed by the carrier’s liability limit.
              Therefore, securing additional shipment protection is vital for
              comprehensive coverage beyond carrier liability.
              <br />
              <br /> By offering customers greater peace of mind and protection
              against unforeseen events during the shipping process, extra
              shipment protection is a valuable complement to carrier liability.
              While carrier liability provides an essential level of protection,
              it may not offer complete coverage for all risks, making including
              extra shipment protection crucial to address potential gaps in
              insurance coverage.
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
              5 Things to Know Before Buying Freight Insurance
            </p>
            <p className="point-p">
              Before purchasing freight insurance, there are five essential
              things you should know:
              <br />
              <br /> Coverage Options: Familiarize yourself with the various
              coverage options available. Understand the risks and perils that
              can be covered, such as damage, loss, theft, and delays. Evaluate
              the extent of coverage offered, including the value of goods
              covered, deductibles, and any applicable exclusions or
              limitations. Choose a policy that aligns with your specific
              shipment needs.
              <br />
              <br /> Valuation of Goods: Determine how the value of your goods
              will be assessed for insurance purposes. Some policies may offer
              “actual cash value” coverage, which considers depreciation, while
              others provide “agreed value” coverage, which sets a predetermined
              value for your goods. Understand the valuation method used and
              ensure it adequately reflects the value of your shipment.
              <br />
              <br /> Policy Limits and Deductibles: Review the policy limits,
              which indicate the maximum amount the insurance will pay out in
              case of a claim. Consider whether these limits align with the
              value of your goods and the potential risks involved.
              Additionally, take note of any deductibles or self-insured
              portions you will be responsible for before the insurance coverage
              kicks in.
              <br />
              <br /> Claims Process: Familiarize yourself with the claims
              process of the insurance provider. Understand the documentation,
              timelines, and steps in filing a claim. Clarify any specific
              requirements for reporting damages or losses promptly. A smooth
              and efficient claims process can make a significant difference in
              recovering losses and minimizing disruptions to your business.
              <br />
              <br />
              Reputation and Financial Stability: Research the reputation and
              financial stability of the insurance provider. Look for
              established insurance companies with a track record of reliable
              service and prompt claims settlement. Consider factors such as
              customer reviews, ratings from independent insurance rating
              agencies, and the company’s financial strength. Choosing a
              reputable and financially stable insurer ensures that your claims
              will be handled efficiently and that they have the resources to
              honor their obligations.
              <br />
              <br /> Understanding these crucial aspects enables you to make an
              informed decision when purchasing freight insurance. Take the time
              to evaluate your specific needs, compare different policies, and
              select an insurance provider that offers comprehensive coverage, a
              straightforward claims process, and financial stability.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10">
            <p className="section-header">
              Freight Insurance and All Risk Freight Insurance
            </p>
            <p className="section-header text-[22px]">
              Here’s a comparison of the two:
            </p>
            <p className="section-header text-[16px]">
              Basic Freight Insurance:
            </p>
            <p className="point-p">
              Freight insurance, also known as limited liability coverage, is
              the standard coverage provided by carriers. It typically covers
              loss or damage to goods during transportation, but the coverage
              limits are predetermined and may not reflect the full value of the
              shipment. Basic freight insurance may have specific exclusions and
              limitations, such as certain types of damage or a maximum
              liability amount per pound.
            </p>
            <p className="section-header text-[16px]">
              All-Risk Freight Insurance:
            </p>
            <p className="point-p">
              All-risk freight insurance, also known as comprehensive freight
              insurance or broad-form cargo insurance, provides a higher
              coverage level than basic freight insurance. It covers a broader
              range of risks and perils that can cause damage or loss to the
              cargo unless expressly excluded. All Risk insurance covers
              accidental damage, theft, fire, natural disasters, and other
              unforeseen events during transit. This type of insurance offers
              more extensive protection and can be tailored to specific needs.
            </p>
            <p className="point-p">
              When deciding between basic freight insurance and All Risk freight
              insurance, it’s essential to consider the value of your goods, the
              level of risk you’re willing to assume, and the potential
              financial impact of damage or loss during transit. All Risk
              freight insurance offers more comprehensive coverage and peace of
              mind but comes at a higher cost. Assessing your specific needs and
              consulting with insurance professionals can help you make an
              informed decision and choose the appropriate level of coverage for
              your shipments.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10">
            <p className="section-header">Reason to Buy Freight Insurance</p>
            <p className="point-p">
              There are several compelling reasons to choose to insure your
              freight:
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-start">
                <div className="bg-[#1a2900] shrink-0 mt-2 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Protection against Loss or Damage: Freight insurance provides
                  coverage in case your goods are lost, damaged, or stolen
                  during transit. It offers financial protection, ensuring you
                  are compensated for the value of your goods if they are
                  compromised.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="bg-[#1a2900] shrink-0 mt-2 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Peace of Mind: Insuring your freight offers peace of mind,
                  knowing that you are financially protected even if unforeseen
                  circumstances occur. It allows you to focus on your business
                  operations without worrying about potential losses during
                  transportation.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="bg-[#1a2900] shrink-0 mt-2 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Legal Requirements: In some cases, freight insurance may be a
                  legal requirement. Certain countries, industries, or shipping
                  methods may mandate insurance coverage for goods in transit.
                  It is crucial to comply with these requirements to avoid legal
                  issues and potential penalties.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="bg-[#1a2900] shrink-0 mt-2 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Comprehensive Coverage: Unlike carrier liability, which may
                  have limitations and exclusions, freight insurance typically
                  provides broader coverage. It can encompass risks such as
                  theft, damage due to accidents, natural disasters, or
                  unforeseen events that carrier liability may not fully cover.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="bg-[#1a2900] shrink-0 mt-2 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Customized Coverage: Freight insurance allows you to tailor
                  coverage based on your needs. You can select the appropriate
                  level of coverage, declare the value of your goods, and add
                  additional coverage options as required. This flexibility
                  ensures that you have the proper protection for your unique
                  shipment.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <div className="bg-[#1a2900] shrink-0 mt-2 w-[6px] h-[6px] rounded-full"></div>
                <p className="point-p">
                  Financial Protection for Your Business: Insuring your freight
                  safeguards your business from potential financial setbacks. If
                  your goods are damaged or lost, the insurance coverage can
                  help offset replacement or repair costs, minimizing the impact
                  on your bottom line.
                </p>
              </div>
              <p className="point-p">
                Ultimately, choosing to insure your freight is a proactive step
                that mitigates risks and provides financial security in the
                unpredictable realm of shipping and logistics.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-4 lg:p-10">
            <p className="section-header">
              Understanding Coverage, Claims, and Best Practices
            </p>
            <p className="point-p">
              When shipping valuable items, relying solely on the carrier’s
              limited liability coverage may not provide sufficient protection.
              That’s where freight insurance comes into play. Freight insurance
              offers additional coverage beyond the carrier’s default protection
              policy, ensuring the full value of your shipment is covered in
              case of accidents or damages during transit.
              <br />
              <br /> Carrier-provided limited liability coverage is the baseline
              protection mandated by law for every freight shipment. However,
              this coverage often falls short of reflecting the actual value of
              shipped items. In the event of damage, filing a liability claim
              requires proving that the carrier is at fault, and damages must be
              documented on the delivery receipt. It’s important to note that
              damages resulting from inadequate packaging, loading errors, or
              weather-related incidents may not be the carrier’s responsibility.
              <br />
              <br /> To bridge the gaps in coverage, purchasing independent
              freight insurance, also known as cargo insurance, is highly
              recommended for valuable shipments. This additional insurance
              offers comprehensive coverage for the full value of your goods,
              removing the burden of proving liability if damage or loss occurs
              during transit. However, it’s crucial to ensure that your specific
              items are eligible for coverage, as certain categories, such as
              fresh foods, laptops, jewelry, cell phones, boats, yachts, or
              household goods, may have restrictions or exclusions.
              <br />
              <br /> When purchasing freight insurance, you can choose the
              coverage limits and deductibles that suit your needs. The coverage
              limit represents the maximum amount the insurance provider will
              pay in the event of damage, and the deductible is the
              out-of-pocket amount you’re responsible for when filing a claim.
              While increasing the deductible can lower the premium, consider
              the potential cost you’ll have to bear if a claim arises.
              Exploring all available options and assessing the trade-offs
              before deciding is essential.
              <br />
              <br /> While freight insurance is not legally mandated, it is
              generally advisable for both shippers and recipients to consider
              insuring their cargo. Freight insurance protects against loss,
              damage, theft, or unforeseen events during transportation,
              ensuring adequate compensation for all parties involved. Claims
              for freight insurance are handled directly between the shipper,
              the consignee, and the insurance company, giving you peace of mind
              and comprehensive coverage.
              <br />
              <br /> To increase the chances of a successful claim outcome, it’s
              essential to follow best practices. Inspect the external packaging
              upon delivery and document any damages on the Bill of Lading or
              Point of Delivery Receipt. Taking photographs of both the outer
              packaging and the damaged products provides additional evidence.
              Immediately report damages to the freight carrier and refrain from
              discarding any items, as they may be required for inspection.
              Directly communicating with the carrier regarding the claim is
              crucial, as relying solely on third-party logistics service
              providers may lead to delays or miscommunication.
              <br />
              <br /> Understanding the difference between carrier liability and
              freight insurance empowers you to make informed decisions and
              protects your valuable shipments. By considering comprehensive
              coverage and adhering to best practices, you can navigate the
              claims process smoothly and mitigate potential risks effectively.
            </p>
          </div>

          <div className="w-full pt-0 lg:pt-0 p-4 lg:p-10">
            <hr />
          </div>
          <div className="flex flex-col items-center gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header text-center">
              Types of Freight Damage
            </p>
            <p className="point-p text-center">
              Freight loads can be subjected to various types of damage during
              transportation, impacting the condition and integrity of the
              shipped goods. Here are 12 common types of damage that can occur
              to a freight load:
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
            <p className="section-header">The Carmack Amendment</p>
            <p className="point-p">
              The Carmack Amendment, also known as the Interstate Commerce Act
              of 1906, is a federal law in the United States that governs the
              liability of carriers in interstate freight transportation. It
              establishes rules and regulations to protect shippers and regulate
              carriers’ liability for loss, damage, or delay to goods during
              transport. Under the Carmack Amendment, carriers are considered
              liable for the total actual loss or damage to the goods
              transported. It holds carriers responsible for taking possession
              of the goods until they are delivered to the consignee. This
              liability extends to motor carriers (trucking companies) and rail
              carriers engaged in interstate transportation.
              <br />
              <br /> Key provisions of the Carmack Amendment include:
              <br />
              <br /> Carrier Liability: The Amendment establishes that carriers
              are responsible for the goods’ loss, damage, or delay during
              transportation unless they can prove that the loss or damage
              occurred due to circumstances beyond their control (known as “act
              of God” defense) or due to the shipper’s negligence.
              <br />
              <br /> Notice and Time Limitations: The law requires shippers to
              provide written notice of any loss or damage to the carrier within
              a specified period. The carrier must acknowledge the claim within
              a specific timeframe and respond to it promptly.
              <br />
              <br /> Valuation of Goods: The Carmack Amendment sets forth
              provisions for the valuation of goods in case of loss or damage.
              It allows shippers to declare the value of their goods, which
              determines the carrier’s maximum liability for compensation.
              However, carriers can offer a higher liability limit to shippers
              by issuing a written receipt or agreement. The burden of Proof:
              The burden of proof lies with the carrier to prove that they are
              not liable for the loss, damage, or delay. Shippers are not
              required to prove carrier negligence; carriers must demonstrate
              their adherence to proper procedures and precautions.
              <br />
              <br /> The Carmack Amendment provides a standardized framework for
              carrier liability in interstate freight transportation, ensuring
              consistency and protection for shippers. However, it is essential
              to note that the Amendment’s provisions can be modified or
              superseded by specific contractual agreements between the shipper
              and carrier as long as they do not violate public policy or the
              requirements of the Amendment itself. Want to maximize shipment
              coverage and protection? Partner with a 3PL like MOY Logistics
              today and get all your shipping needs taken care of!
              <br />
              <br /> The Carmack Amendment dictates carriers legally have a
              financial responsibility to their customers if freight is damaged
              in transit, but only to a certain amount. Limited Liability
              coverage promises cents on the pound of the total weight of cargo
              if the shipper can prove negligence. Built-in coverage appears as
              a good enough safety net when planning shipments, but many damages
              accrued between points A and B often fall outside the carrier’s
              scope. For instance, the carrier is not liable for Acts of God
              (extraordinary weather events, like hurricanes or tornadoes),
              strikes or riots, shipper/packager error, or if the Proof of
              Delivery (POD) or Bill of Lading (BOL) was signed clean.
              <br />
              <br /> Freight insurance is an independent insurance policy that
              can offer protection for the full value of your shipment without
              the need to prove liability if any loss or damage occurs.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">
              Understanding Freight Insurance for Full or Partial Truckload
              Freight Shipping
            </p>
            <p className="point-p">
              Regarding freight insurance, it’s crucial to grasp the
              fundamentals. Two types of coverage exist carrier-provided limited
              liability coverage and additional third-party insurance that
              shippers can purchase.
              <br />
              <br /> The carrier-provided limited liability coverage is the
              carrier’s default protection policy, required by law for all
              shipping methods, including LTL, full truckload, and partial
              truckload shipping. This coverage is typically a flat rate policy
              or adjusts based on the weight and freight class of the shipped
              items. However, it’s important to note that this coverage may not
              reflect the actual value of the cargo. Furthermore, in the event
              of damage or loss, the shipper must prove liability by
              demonstrating the shipment was delivered in good condition, the
              carrier caused unreasonable delays or damage, and the value of the
              damages incurred.
              <br />
              <br /> To ensure adequate coverage, particularly for valuable
              shipments that exceed the carrier-provided policy’s limits,
              purchasing additional third-party insurance is advisable.
              Independent freight insurance can protect the full value of your
              shipment and eliminate the need to prove liability in case of
              damage or loss.
              <br />
              <br /> Independent freight insurance can provide peace of mind and
              comprehensive coverage for full or partial truckload freight
              shipping. Full truckload shipping involves using an entire trailer
              for a single shipment, whereas partial truckload shipping occupies
              a portion of the trailer, sharing space with other loads. While
              full and partial truckload shipping may reduce the risks of damage
              and loss due to less handling and shared space, having insurance
              remains essential.
              <br />
              <br /> Regarding freight insurance considerations, there are
              notable differences between Full Truckload (FTL) and Less Than
              Truckload (LTL) shipments. FTL shipments typically involve more
              significant quantities of goods occupying an entire truck,
              necessitating comprehensive insurance coverage to protect the
              whole shipment’s value. In contrast, LTL shipments occupy a
              portion of a truck, and insurance coverage is proportional to the
              share of the truck occupied by the specific shipment. This means
              that the coverage for an LTL shipment may be lower than FTL,
              reflecting the portion of the overall load.
              <br />
              <br />
              Liability allocation differs as well. FTL shipments hold the
              carrier responsible for the entire load, while in LTL shipments,
              liability may be divided among multiple carriers and parties
              handling different portions of the load.
              <br />
              <br /> Cost considerations come into play, with FTL insurance
              generally having higher premiums due to the truckload’s increased
              value and coverage requirements. With their lower coverage
              amounts, LTL shipments may have relatively lower insurance costs.
              <br />
              <br /> Proper documentation is crucial regardless of shipment type
              when filing a freight insurance claim. This includes bills of
              lading, proof of shipment value, and evidence of damages. The
              claims process may vary between FTL and LTL shipments, considering
              the involvement of a single carrier in FTL shipments versus
              coordination among multiple carriers in LTL transportation.
              <br />
              <br /> Consider shipment size, value, liability allocation, and
              cost to determine the most suitable insurance coverage. Consulting
              with insurance providers or freight specialists will help you
              navigate the complexities and make an informed decision tailored
              to your requirements.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">What Could Possibly Go Wrong?</p>
            <p className="point-p">
              Choosing not to purchase freight insurance can lead to various
              risks and potential problems:
              <br />
              <br /> Financial Loss: Without freight insurance, you bear the
              full financial responsibility for any loss, damage, or theft of
              your goods during transit. This can result in significant
              financial losses, especially if your shipment involves valuable or
              high-cost items. Replacing or repairing damaged goods can
              substantially impact your business’s profitability.
              <br />
              <br /> Limited Compensation: Carrier liability, which is the
              default coverage provided by the carrier, often has limitations
              and may not cover the full value of your goods. In case of damage
              or loss, the carrier’s liability may be restricted to a specific
              dollar amount per pound of the shipment. You may only receive a
              fraction of their value if your goods exceed this limit. Without
              freight insurance, you may not be adequately compensated for your
              losses.
              <br />
              <br /> Unforeseen Circumstances: Shipping involves inherent risks
              that are beyond your control. Accidents, natural disasters, theft,
              or unexpected events can occur during transit, potentially
              damaging or losing your goods. Without insurance, you are left
              vulnerable and must bear the consequences of such incidents.
              <br />
              <br /> Legal and Contractual Obligations: In some instances,
              freight insurance may be a legal or contractual requirement.
              Failing to comply with these obligations can result in legal
              consequences, including potential penalties, loss of business
              contracts, or damaged relationships with partners and customers.
              Understanding and fulfilling any insurance obligations stipulated
              in contracts or by relevant laws and regulations is essential.
              <br />
              <br /> Business Reputation: If your shipments consistently
              experience problems or delays without insurance coverage, it can
              negatively impact your business’s reputation. Customers may lose
              trust in your ability to deliver goods safely and securely,
              leading to a loss of business opportunities and a damaged brand
              image.
              <br />
              <br /> Inadequate Recovery Options: Your options for recovering
              losses are limited without freight insurance. You may have to rely
              on negotiations with the carrier or pursue legal action, which can
              be time-consuming, costly, and uncertain. Insurance provides a
              streamlined and efficient process for claims, ensuring faster
              recovery and minimizing disruptions to your business operations.
              <br />
              <br />
              In summary, not purchasing freight insurance exposes you to
              significant financial risks, limited compensation, potential legal
              consequences, and damage to your business reputation. Investing in
              freight insurance to protect your shipments and mitigate potential
              problems during transit is prudent.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Global Coverage</p>
            <p className="point-p">
              Insuring your freight shipments, whether domestic or
              international, is essential to protect your goods and mitigate
              potential risks during transit. However, some key differences
              exist when insuring shipments based on their destination. Let’s
              explore the factors to consider for domestic and international
              freight insurance:
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">Domestic Freight Insurance:</p>
            <p className="point-p">
              Coverage Scope: Domestic freight insurance typically covers
              shipments within the same country or region. It offers protection
              against various risks, such as damage, theft, or loss during
              transportation. The coverage may vary depending on the chosen
              insurance provider and policy.
              <br />
              <br /> Regulatory Requirements: While domestic freight insurance
              is not legally mandated in most countries, it is highly
              recommended to mitigate potential financial losses. Carriers may
              provide limited liability coverage by default, but it may not
              fully cover the value of your goods. Purchasing additional
              insurance ensures comprehensive coverage.
              <br />
              <br />
              Familiarity with Local Regulations: When insuring domestic
              shipments, navigating local regulations and insurance requirements
              is more accessible. You can work directly with insurance providers
              with expertise in the domestic market and understand the specific
              risks associated with domestic transportation.
              <br />
              <br /> Premium Costs: Domestic freight insurance premiums are
              typically lower than international shipments. Since the shipments
              are within the same country or region, insurers often assess lower
              risks, resulting in more affordable premiums.
            </p>
          </div>
          <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
            <p className="section-header">International Freight Insurance:</p>
            <p className="point-p">
              Coverage for Multiple Countries: International freight insurance
              covers shipments traveling across borders and between countries.
              It offers protection against various risks, including damage,
              theft, loss, customs-related issues, and political unrest.
              <br />
              <br />
              Compliance with International Laws: International shipments
              involve compliance with various international laws, regulations,
              and trade agreements. Insurance coverage must align with these
              requirements, ensuring compliance with customs regulations,
              import/export laws, and international shipping standards.
              <br />
              <br /> Enhanced Risk Factors: International shipments face
              additional risks compared to domestic shipments. These risks
              include longer transit times, multiple handling points, customs
              inspections, diverse transportation modes, language barriers, and
              geopolitical factors. International freight insurance takes into
              account these increased risks.
              <br />
              <br /> The complexity of Coverage: Insuring international
              shipments may involve more complex coverage options due to the
              various risks and regulations. Insurance providers specializing in
              international freight insurance can guide you through the
              complexities, offer tailored coverage, and ensure compliance with
              local laws and international standards.
              <br />
              <br /> Premium Costs: International freight insurance premiums are
              generally higher than domestic shipments due to increased risks.
              Factors affecting premiums include the destination country,
              transportation route, nature of goods, mode of transportation, and
              shipment value.
              <br />
              <br /> It is crucial to assess the specific risks, regulations,
              and coverage options when insuring your freight shipments, whether
              domestic or international. Consider working with experienced
              insurance providers who understand domestic and international
              logistics intricacies to ensure comprehensive coverage that aligns
              with your needs and protects your valuable shipments throughout
              the journey.
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
              <div className="w-full lg:w-[300px] self-center  shrink-0">
                <img className="hidden lg:block w-full" src={insurance_board} alt="" />
                <img className="lg:hidden" src={insurance_board_t} alt="" />

              </div>
              <div className=" flex flex-col gap-7 ">
                <p className="section-header">
                  What Freight Coverage Options Are Available?
                </p>
                <p className="point-p">
                  There are a variety of freight insurance coverages available
                  for your freight. It’s a good idea to familiarize yourself
                  with the variations before purchasing. Not all ranges are
                  built the same—consider what you’re shipping and how it will
                  travel. Here are some different classifications:
                  <br />
                  <br /> All Risks: All Risks freight insurance is there to
                  cover unexpected property damage. However, “all risks” is not
                  to be taken literally. While all risk coverage is extensive,
                  it’s still limited, and shippers should familiarize themselves
                  with the limitations and exclusions of their policy before
                  purchasing.
                  <br />
                  <br />
                  Annual: This policy stays on the records for a year. It
                  involves sharing in-depth information about the company’s
                  shipments, the maximum value of the freight in any one
                  shipment, and annual turnover. This is perfect for frequent
                  shippers, so you know each freight shipment is handled in
                  advance.
                  <br />
                  <br /> Named Perils: Named Perils insurance covers damages
                  caused by perils specifically listed in the policy.
                  <br />
                  <br /> Open Cover: Open cover policies cover all shipments, no
                  matter the value, from beginning to end and have no expiration
                  date.
                  <br />
                  <br />
                  Single Shipment: This one-time-only policy applies to a single
                  shipment. It covers a shipment from origin to destination and
                  takes the least generation time.
                  <br />
                  <br /> Total loss means protecting your goods during
                  catastrophic events or total loss. It does not cover a partial
                  loss. It’s typical to have all your bases covered when you
                  purchase insurance. This includes the invoice cost of the
                  freight being shipped, freight costs, and additional expenses
                  related to the shipping cost (think of it like tipping—10% is
                  okay, 20% is ideal).
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">
                Handling Damaged Freight Shipments at Delivery: A Comprehensive
                Guide
              </p>
              <p className="point-p">
                The transportation of freight shipments involves inherent risks,
                and occasionally, despite all precautions, damages may occur.
                Discovering that your freight shipment is damaged upon delivery
                can be disheartening and frustrating. However, taking immediate
                action to safeguard your interests and initiate the claims
                process is crucial. This comprehensive report provides a
                step-by-step guide on what to do if you encounter a damaged
                freight shipment during delivery. By following these guidelines,
                shippers can maximize their chances of a successful resolution
                and ensure fair compensation for the damages incurred.
              </p>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Introduction</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Importance of Prompt Action In the fast-paced world of
                      logistics, prompt action is essential when dealing with
                      damaged freight shipments. Acting quickly increases the
                      likelihood of a successful claim and demonstrates your
                      diligence and commitment to protecting your interests.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Purpose of the Report This report is a comprehensive guide
                      for shippers encountering damaged freight shipments during
                      delivery. It outlines the necessary steps to document the
                      damages, communicate with the carrier, file a claim, and
                      work toward a resolution. Following these guidelines will
                      empower shippers to navigate the claims process
                      effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Preparing for the Delivery</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Familiarize Yourself with the Shipment Details Before the
                      delivery, review all relevant information, including the
                      shipping documents, tracking numbers, and delivery
                      schedules. Understanding the specifics of your shipment
                      will enable you to detect any deviations or discrepancies
                      upon arrival.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Verify the Shipment’s Condition and Packaging. Carefully
                      inspect the outer packaging for signs of damage, such as
                      dents, punctures, or tears. Please take note of any
                      visible issues or concerns, as they may indicate potential
                      damage to the goods inside.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Inspect the External Packaging for Signs of Damage.
                      Examine the packaging closely, paying attention to seals,
                      shrink wrap, or strapping. If the packaging appears
                      compromised or tampered with, document these observations,
                      as they may be crucial during the claims process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Documenting the Damage</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Note the Damage on the Delivery Receipt When the delivery
                      is made, thoroughly inspect the contents for any visible
                      damage. If damages are detected, clearly and accurately
                      describe them on the delivery receipt before signing. Be
                      specific, using terms relating to the damage’s type,
                      extent, and location.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Take Photographs or Videos as Evidence. Capture visual
                      evidence of the damages using a camera or
                      smartphone—photograph or record videos of the damaged
                      areas from different angles to record the condition upon
                      delivery comprehensively.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Record Detailed Descriptions of the Damage In addition to
                      photographs, provide detailed written descriptions of the
                      damages. Include information such as the nature of the
                      damage, specific items affected, and any relevant serial
                      numbers or identifying marks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Contacting the Carrier</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Notify the Carrier Immediately. Once damages are
                      identified, promptly contact the carrier to report the
                      situation. Obtain the appropriate contact information from
                      the delivery personnel or shipping documents. Inform the
                      carrier of the damages and express your intention to file
                      a claim.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Provide Clear and Concise Information When communicating
                      with the carrier, clearly state the facts, including the
                      date, time, location of delivery, and specific damages
                      incurred. Provide accurate and concise information to
                      facilitate the claims process.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Request a Damage Inspection, if Necessary Depending on the
                      extent of the damages, request a damage inspection by the
                      carrier or a designated representative. This can help
                      substantiate your claim and provide additional evidence to
                      support your case.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Preserving the Evidence</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Retain the Packaging and Contents Maintaining the damaged
                      packaging and its contents is vital. Do not discard or
                      alter any part of the shipment, as these items may be
                      necessary for inspection or evidence during the claims
                      process. Store the damaged goods securely until the
                      carrier or insurance provider provides further
                      instructions.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Secure Witness Statements, if Applicable If any witnesses
                      were present during the delivery or if others were
                      involved in handling the shipment, obtain their contact
                      information. Witness statements can strengthen your case
                      and provide additional evidence if needed.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Follow Proper Storage Procedures. Ensure the damaged goods
                      are stored appropriately to prevent further deterioration
                      or loss. Consider factors such as temperature control,
                      security, and protection from environmental elements that
                      may exacerbate the damages.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Filing a Freight Claim</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Gather All Relevant Documentation Collect all relevant
                      documentation related to the shipment and damages. This
                      may include the delivery receipt, photographs or videos of
                      the damages, packing slips, invoices, and other supporting
                      documents.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Complete the Necessary Claim Forms. Contact the carrier or
                      insurance provider to obtain the appropriate claim forms.
                      Fill out the forms accurately, providing detailed
                      information about the shipment, damages, and supporting
                      documentation.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Submit the Claim to the carrier within the Specified
                      Timeframe. Adhere to the designated timeframe for filing
                      the claim, as the carrier or insurance provider specified.
                      Submit all required documentation, ensuring that it is
                      complete and accurate. Retain copies of all submitted
                      materials for your records.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Working with the Carrier</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Maintain Open Communication Keep the lines of
                      communication open with the carrier throughout the claims
                      process. Respond promptly to any requests for additional
                      information or documentation. Stay informed about the
                      progress of your claim and seek updates if necessary.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Cooperate with the Carrier’s Investigation Cooperate fully
                      with any investigations conducted by the carrier or its
                      designated representatives. Provide any additional
                      information or evidence as requested and assist in
                      resolving the claim.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Seek Updates on the Claim Status. Regularly inquire about
                      the status of your claim to ensure that it is progressing
                      as expected. Understand the carrier’s timeline for review
                      and resolution, and follow up accordingly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Resolving the Claim</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Evaluate the Carrier’s Offer Once the carrier presents a
                      settlement offer, carefully review it to assess its
                      fairness and adequacy. Consider factors such as the extent
                      of damages, the value of the goods, and any other relevant
                      expenses incurred due to the damage.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Negotiate a Fair Settlement, if Required If you believe
                      the initial settlement offer is insufficient, negotiate
                      with the carrier in good faith—present evidence,
                      documentation, and any additional information supporting
                      your claim for a fair resolution.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Seek Legal Advice if the Dispute Persists If you cannot
                      reach a satisfactory resolution through negotiation,
                      consider seeking legal advice to protect your interests.
                      Consult an attorney experienced in transportation and
                      logistics law who can guide you through the legal process
                      if necessary.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">
                  Preventive Measures for Future Shipments
                </p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Reassess Packaging Methods Evaluate your packaging methods
                      to ensure they are sufficient to protect your goods during
                      transit. Consider implementing additional measures such as
                      reinforced packaging, cushioning materials, or specialized
                      containers, depending on the nature of your shipments.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Evaluate Carrier Performance and Insurance Options Assess
                      the performance and reliability of your chosen carriers.
                      Research carriers’ track records, reputation, and
                      insurance coverage to select those prioritizing safe
                      handling and providing comprehensive insurance options.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Implement Quality Control Procedures Establish quality
                      control procedures within your organization to minimize
                      the risk of damages during shipping. This may include
                      pre-shipment inspections, standardized packaging
                      guidelines, and training programs for employees involved
                      in the shipping process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="point-p font-bold">Conclusion</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 point-p">
                    <p>1.</p>
                    <p>
                      Recap of Key Steps and Considerations This section
                      summarizes the critical steps outlined in the report,
                      emphasizing the importance of prompt action, thorough
                      documentation, effective communication, and diligence
                      throughout the claims process.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>2.</p>
                    <p>
                      Importance of Diligence and Proactivity Emphasize the
                      importance of being proactive and diligent when dealing
                      with damaged freight shipments. Shippers can maximize
                      their chances of success by following the recommended
                      steps and guidelines and ensuring fair compensation for
                      any damages incurred.
                    </p>
                  </div>
                  <div className="flex gap-2 point-p">
                    <p>3.</p>
                    <p>
                      Ensuring a Successful Outcome Reiterate the significance
                      of timely action, accurate documentation, and effective
                      communication in navigating the claims process. Highlight
                      that a successful resolution depends on the shipper’s
                      commitment to actively pursue their claim and work
                      collaboratively with the carrier or insurance provider.
                    </p>
                  </div>
                </div>
              </div>
              <p className="point-p">
                References Include a list of all the sources referenced
                throughout the report using the appropriate citation format.
                This comprehensive report provides a step-by-step guide for
                shippers who encounter damaged freight shipments at the time of
                delivery. Shippers can effectively document the damages,
                communicate with the carrier, file a claim, and work toward a
                resolution by following the outlined procedures. It emphasizes
                the importance of prompt action, accurate documentation,
                effective communication, and diligence throughout the process.
                By adhering to these guidelines, shippers can protect their
                interests, maximize their chances of a successful claim, and
                ensure fair compensation for any damages incurred.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-0 lg:pt-0 p-4 lg:p-10">
              <p className="section-header">Freight Insurance FAQs</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What is freight insurance?
                </p>
                <p className="point-p">
                  A. Freight insurance is a type of insurance coverage that
                  protects goods and cargo during transportation. It offers
                  financial compensation in case of loss, damage, theft, or
                  other unforeseen events that may occur during shipping.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Why do I need freight insurance?
                </p>
                <p className="point-p">
                  A. Freight insurance is essential to mitigate the risks
                  associated with shipping. While carriers may offer limited
                  liability coverage, it may not fully cover the value of your
                  goods or certain types of damages. By having freight
                  insurance, you can ensure that your cargo is adequately
                  protected and that you receive fair compensation for any loss
                  or damage.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. What does freight insurance cover?
                </p>
                <p className="point-p">
                  A. Freight insurance coverage can vary depending on the policy
                  and insurance provider. Generally, it covers loss, damage,
                  theft, and other unforeseen events during transportation. It
                  can include protection for the full value of the goods being
                  shipped, as well as additional coverage for specific risks
                  such as breakage, weather-related damage, or theft.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Are all types of goods insurable?
                </p>
                <p className="point-p">
                  A. While most types of goods can be insured, some exceptions
                  and restrictions exist. Certain high-value items, perishable
                  goods, hazardous materials, and illegal or prohibited goods
                  may have limitations or exclusions in coverage. It is
                  essential to check with your insurance provider regarding the
                  insurability of specific interests.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How is the cost of freight insurance determined?
                </p>
                <p className="point-p">
                  A. The cost of freight insurance is typically based on several
                  factors, including the value of the goods being shipped, the
                  shipping route and mode of transportation, the level of
                  coverage required, and the insurance provider’s rates.
                  Insurance premiums are usually calculated as a percentage of
                  the declared value of the goods.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Is freight insurance mandatory?
                </p>
                <p className="point-p">
                  A. Freight insurance is not compulsory by law but highly
                  recommended. It provides an additional layer of protection and
                  peace of mind for shippers, ensuring they are adequately
                  compensated for any loss or damage during transit.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. How do I file a freight insurance claim?
                </p>
                <p className="point-p">
                  A. In the event of loss or damage, you should promptly notify
                  your insurance provider and provide them with all necessary
                  documentation, such as photographs, delivery receipts, and
                  other relevant evidence. Your insurance provider will guide
                  you through the claims process and may require specific forms
                  to be filled out and submitted.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I choose my insurance provider for freight insurance?
                </p>
                <p className="point-p">
                  A. Yes, you have the freedom to choose your insurance provider
                  for freight insurance. Researching different insurance
                  providers and comparing their coverage options, rates, and
                  reputation is recommended before selecting the one that best
                  suits your needs.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Does freight insurance cover international shipments?
                </p>
                <p className="point-p">
                  A. Yes, freight insurance can cover both domestic and
                  international shipments. However, coverage may vary depending
                  on the insurance policy and the specific terms and conditions
                  the insurance provider outlines. It is essential to clarify
                  the extent of coverage for international shipments with your
                  insurance provider.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I purchase freight insurance for a single shipment?
                </p>
                <p className="point-p">
                  A. You can buy freight insurance for a single shipment or a
                  single-trip policy. Alternatively, if you have regular loads,
                  you may opt for an annual policy that covers multiple
                  shipments within a specified period.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Does freight insurance cover international shipments?
                </p>
                <p className="point-p">
                  A. Yes, freight insurance can cover both domestic and
                  international shipments. However, coverage may vary depending
                  on the insurance policy and the specific terms and conditions
                  the insurance provider outlines. It is essential to clarify
                  the extent of coverage for international shipments with your
                  insurance provider.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I cancel or modify my freight insurance policy?
                </p>
                <p className="point-p">
                  A. Insurance policies often have specific terms and conditions
                  regarding cancellation or modification. It is essential to
                  review your policy documents and consult with your insurance
                  provider to understand your options.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Can I track my freight shipment while it is insured?
                </p>
                <p className="point-p">
                  A. Freight insurance and shipment tracking are different
                  services. Freight insurance provides coverage for potential
                  loss or damage, while shipment tracking allows you to monitor
                  the progress and location of your shipment. Many carriers
                  offer tracking services that enable you to stay informed about
                  the status of your shipment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Q. Does freight insurance cover delays in delivery?
                </p>
                <p className="point-p">
                  A. Freight insurance typically covers loss, damage, and theft
                  but may not.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
      <section className="flex flex-col w-full items-start justify-center gap-10 p-4 lg:p-10">
        <p className=" section-header ">3 Reasons To Buy Insurance</p>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            <p className="font-semibold text-[23px]">
              Protect Your Valuable Cargo:
            </p>
            <p className="point-p leading-[20px] ">
              Freight insurance is a superhero cape for your shipments. It
              provides an additional layer of protection beyond the primary
              coverage carriers offer. With comprehensive coverage, you can
              ensure that the full value of your cargo is safeguarded against
              potential losses, including damages, theft, accidents, and more.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            <p className="font-semibold text-[23px]">Peace of Mind:</p>
            <p className=" point-p leading-[20px] ">
              When shipping valuable goods, peace of mind is priceless. By
              purchasing freight insurance, you can rest easy knowing your cargo
              is covered. You won't have to worry about proving liability or
              dealing with complex claims processes. Instead, you can focus on
              your business while the insurance company handles any potential
              issues that may arise during transportation.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            <p className="font-semibold text-[23px]">Tailored Coverage:</p>
            <p className=" point-p leading-[20px] ">
              Unlike carrier policies, freight insurance allows you to customize
              your coverage to align with the specific needs of your shipments.
              Whether your cargo exceeds the standard coverage limits provided
              by carriers or falls within their range, obtaining independent
              insurance ensures that you have the appropriate level of
              protection. This tailored coverage offers flexibility and peace of
              mind, allowing you to ship confidently.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FreightInsurance;
