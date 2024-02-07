import home_icon from "../../assets/icons/services/home_icon.svg";
import details_icon from "../../assets/icons/services/more_details.svg";
import banner_d from "../../assets/images/faqs/frequently_asked_questions_d.png";
import banner_t from "../../assets/images/faqs/frequently_asked_questions_t.png";
import container_top from "../../assets/images/container-shipping/container_top.png";
import read_more from "../../assets/icons/services/service_read_more.svg";
import star from "../../assets/icons/services/star.svg";
import avatar from "../../assets/images/services/avatar.png";
import quotation from "../../assets/icons/services/quotation.svg";
import back from "../../assets/icons/services/back.svg";
import forward from "../../assets/icons/services/forward.svg";

import { NavLink } from "react-router-dom";

function FrequentlyAskedQuestions() {
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
              Frequently Asked Questions
            </p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              MOY Logistics provides affordable services for shipping heavy
              freight via over-the-road trucking methods. Here are some
              Frequently Asked Questions
            </p>
            <button className="clear-btn bg-white">Get a Freight Quote</button>
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
              <span className="font-semibold ">Frquently Asked Questions </span>
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5 items-center md:items-start ">
              <p className="section-header mb-4">Frequently Asked Questions</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  I’m in business, and my needs are more specialized. Why should
                  I use MOY Logistics?
                </p>
                <p className="point-p">
                  MOY Logistics is a 3rd-Party Logistics provider that manages
                  less-than-truckload (LTL) freight shipping, truckload (TL)
                  freight shipping, international shipping,{" "}
                  <a
                    href="https://www.freightcenter.com/services/trade-show/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    trade show shipments
                  </a>
                  , and specialty shipping. We integrate our proprietary
                  technology solutions with service delivered by your dedicated
                  account managers to provide an unsurpassed level of service at
                  the lowest available price. Our top shippers are our business
                  customers, who rely on us multiple times each month to handle
                  their shipping needs and reduce their supply chain costs. No
                  matter your shipping problem, we will find a cost-effective
                  solution.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  What are estimated transit times?
                </p>
                <p className="point-p">
                  MOY Logistics makes every effort to offer the most
                  cost-effective mode of transportation. Transit times depend on
                  location, destination, service options, mode of
                  transportation, weather, and carrier chosen at the booking
                  time. Transit times are provided by carriers and are
                  estimated, not guaranteed.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Do you know if I can ship to a trade show?
                </p>
                <p className="point-p">
                  Yes, our carriers are experts in shipping in time for trade
                  shows, exhibitions, and expos. Shipment can be to a warehouse
                  or the front, depending upon the date and number of transit
                  days. Trade show shipments can be picked up from and delivered
                  to the show site outside regular business hours only when the
                  show dates demand alternative scheduling.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  What is LTL shipping?
                </p>
                <p className="point-p">
                  Freight shipping is the easiest way to move large and bulky
                  items quickly and efficiently while keeping shipping costs
                  low. LTL (Less-Than-Truckload) shipping handles freight
                  shipments ranging from 100 lbs to 20,000 lbs. When the thing
                  you need shipped or transported is too large to take to the
                  post office or your local parcel company, freight is
                  considered a more economical approach.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Could you let me know how claims are handled?
                </p>
                <p className="point-p">
                  If your freight arrives damaged, it is essential to accept the
                  shipment to document the claim correctly. A claim must be
                  filed within 48 hours of delivery and can be done directly
                  online on our site. MOY Logistics will act as liaison and
                  assist the customer in processing the claim and filing all
                  necessary paperwork. However, we cannot guarantee the shipping
                  company will accept all claims.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  What happens if I receive a bill directly from the carrier?
                </p>
                <p className="point-p">
                  This usually occurs when MOY Logistics BOL is not used at the
                  pick-up time, resulting in a double booking in two systems and
                  a change in shipping rates. Our freight brokers will promptly
                  take care of the paperwork and have the charges properly
                  credited for your freight shipment when notified. Contact our
                  customer service department at 1-800-716-7608. They will
                  instruct you on the best way to send us the bill you’ve
                  received from the carrier.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start ">
              <p className="section-header mb-4">
                Shipping Costs: Frequently Asked Questions
              </p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  How do I determine my shipping cost?
                </p>
                <p className="point-p">
                  The quote process is simple and fast at MOY Logistics and is
                  available 24/7. You only need the shipment’s origin,
                  destination, weight, dimensions, and contact information to
                  determine your shipping cost. Your free, instant freight quote
                  results will list real-time freight rates from the trusted
                  carriers in our network which meet your shipping requirements.
                  Select your preferred quote and click the CHOOSE button to
                  save your selection. That way, your freight agent can access
                  and review the section before you book your shipment. If you
                  want to get your quote by phone, please call us at
                  800.716.7608.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  What is a freight class, and how does it affect my shipping
                  cost?
                </p>
                <p className="point-p">
                  Freight class is an essential factor in determining the total
                  cost charged by the carrier for shipping your item(s).
                  According to the National Motor Freight Transportation
                  Association, Inc., 18 freight classes, ranging numerically
                  from 50 to 500, classify a commodity based on an evaluation of
                  4 characteristics: density, stowability, handling, and
                  liability. If you need to figure out the freight class of the
                  thing you are shipping, use our Freight Class Lookup Tool,
                  which covers many popularly shipped items. Our{" "}
                  <a
                    href="https://www.freightcenter.com/quote/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    instant freight quote 
                  </a>
                   tool allows you to get quotes from multiple carriers without
                  knowing the exact freight class of your shipment by
                  calculating the freight class for you based on density. Just
                  plug in the numbers, and the tool does all the work. Once you
                  run a freight quote, your agent will verify that the freight
                  class entered is correct. If you want help determining a
                  freight class, please call us at 800.716.7608.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Do quotes expire?</p>
                <p className="point-p">
                  Yes. Quotes are based on freight class, dimensions, and
                  weight, but pricing is also subject to fuel price fluctuation.
                  Due to fluctuating fuel costs, a rate or quote is only valid
                  for 24 hours. To lock in the discounted rate, your shipment
                  details need to be 100% accurate, and the shipment needs to be
                  booked within 24 hours of receiving your quoted rate.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  How do I add another item to my quote?
                </p>
                <p className="point-p">
                  Click the +Add Another Item button on the quick quote form to
                  include an item of a different packaging type, weight,
                  dimensions, or freight class. Example: If shipping one pallet
                  and two boxed or crated items, add the pallet shipment details
                  first and click Add Another Item to enter the details for the
                  other packaged items.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Are there additional fees for residential delivery or pick-up?
                </p>
                <p className="point-p">
                  Yes. Residential delivery fees apply to shipping freight to a
                  non-commercial location, including apartments, residences,
                  farms, estates, remote areas, and possibly even schools and
                  churches. So that you know, home-based businesses in
                  residential zip codes are billed as residential due to special
                  arrangements that need to be made by the carrier. The cost to
                  ship also can change when delivering to a limited access
                  location (i.e., construction sites, military bases, camps, and
                  storage facilities). Be sure to ask your MOY Logistics
                  representative if you are still determining if your location
                  would fall into one of the above categories.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Can I estimate the weight of my shipment?
                </p>
                <p className="point-p">
                  No. It is critical to the integrity of your quote that you
                  determine the exact weight of the freight items you are
                  shipping. If you book your shipment at an incorrect weight,
                  the freight carrier will discover the error when they weigh
                  the freight (which they can do at any time). If an inaccurate
                  weight is used in booking, a billing adjustment will be made
                  at the carrier’s non-discounted rate and added to your
                  account. Incorrect weight is the cause of more than half of
                  all billing adjustments MOY Logistics customers receive.
                  Refrain from guessing. Could you get the weight right?
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Are your rates final and inevitable?
                </p>
                <p className="point-p">
                  Due to the high volume, we ship through our network of
                  carriers; we can secure deeply discounted shipping rates. I
                  just wanted to let you know that your shipping quote is based
                  on the information you gave MOY Logistics at the booking time.
                  Any changes or differences in the weight, class, size, or
                  location can directly result in additional shipping costs from
                  the carrier. To ensure that your shipping rates stay in line
                  with what was quoted initially, you can use the MOY Logistics
                  BOL provided. This lets the page know to bill MOY
                  Logistics.com at the pre-negotiated freight rates and
                  discounts.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start ">
              <p className="section-header mb-4">
                Booking: Frequently Asked Questions
              </p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  How far in advance should I schedule a pick-up?
                </p>
                <p className="point-p">
                  Please allow a 4-hour window of time for freight pick-up, and
                  note that most shipping companies make pick-ups in the
                  afternoon and spend their mornings with freight deliveries.
                  Depending on the time of booking in your time zone, we can
                  arrange for same-day pick-up. Always speak directly to a MOY
                  Logistics freight agent for special arrangements and urgent
                  bookings.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Would you like me to be present at pick-up?
                </p>
                <p className="point-p">
                  Someone authorized to sign over the shipment and MOY Logistics
                  BOL must be at the pick-up time. If the driver arrives at the
                  pick-up location and either the freight is not ready or there
                  is no one available to sign the BOL, he/she will not usually
                  wait. The pick-up must then be re-dispatched, and some freight
                  companies charge an attempted pick-up fee to cover extra time
                  and miles.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Do you know if my shipment is automatically insured?
                </p>
                <p className="point-p">
                  It’s essential to understand the difference between freight
                  insurance and carrier liability. The industry-standard
                  liability cargo insurance coverage offered by all LTL carriers
                  booked through MOY Logistics is 0.10 cents per pound. That
                  doesn’t cover the value of most shipments, so MOY Logistics
                  offers its customers the ability to purchase supplementary
                  freight insurance accessed directly during the freight quote
                  and booking process.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Who will transport my shipment?
                </p>
                <p className="point-p">
                  We are a freight broker that utilizes the trucks of{" "}
                  <a
                    href="https://www.freightcenter.com/carriers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {" "}
                     the largest, most reputable carriers
                  </a>
                  . We ship thousands of loads through our extensive carrier
                  network. If you want a list of the available carriers and
                  shipping costs to move your freight, you can get a quote now.
                  At MOY Logistics, we present carrier options. You choose the
                  carrier.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Are transit times guaranteed?
                </p>
                <p className="point-p">
                  Freight shipping transit times begin the day after your
                  freight has been picked up. Freight transit times are not
                  guaranteed unless expressly noted on the freight quote option
                  you select when booking your shipping rates. All other
                  delivery times are estimates that cannot be guaranteed, though
                  they are usually reliable.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  What is a Bill of Lading (BOL)?
                </p>
                <p className="point-p">
                  A bill of lading is standard, mandatory paperwork providing
                  the carrier and driver with all pertinent information related
                  to the shipping costs and news. This paperwork allows for
                  proper billing to be processed by the shipping company and MOY
                  Logistics. All parties involved should have a copy of the BOL
                  (shipper, receiver, and carrier). The MOY Logistics BOL must
                  be given to the carrier at pick-up time. Also, could you keep
                  one copy for your records? Not using our paperwork could
                  result in more hassle and extra shipping costs from freight
                  carriers.{" "}
                  <a
                    href="https://www.freightcenter.com/bill-of-lading/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LEARN MORE ABOUT THE MOY Logistics BOL
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start ">
              <p className="section-header mb-4">
                Packaging: Frequently Asked Questions
              </p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  How should I package my freight?
                </p>
                <p className="point-p">
                  A securely, properly packed shipment is excellent protection
                  against potentially dangerous road and warehouse conditions.
                  Please ensure that all shipped items are properly and securely
                  packaged to prevent damage. Improper packaging may decrease or
                  nullify the carrier’s liability for damage claims or loss. All
                  freight should be packaged, crated, or stacked and secured
                  onto pallets with banding, stretch-wrap, or breakaway
                  adhesive. Labels should be placed on every freight piece in
                  multiple places. MOY Logistics offers tips to help you with
                  palletizing, crating, proper skidding and wrapping.{" "}
                  <a
                    href="https://www.freightcenter.com/services/crating/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Packaging and Crating Freight Shipments
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Does MOY Logistics sell or provide packaging material?
                </p>
                <p className="point-p">
                  No. MOY Logistics does not sell or provide packaging material,
                  nor does your driver carry items used to package your freight
                  correctly. Before your driver’s arrival, your package should
                  be secured to a pallet and protected from damage.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Where can I purchase packaging materials?
                </p>
                <p className="point-p">
                  Packaging materials can be found at any home improvement store
                  or parcel shipping store.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  How do I ship unpackaged furniture?
                </p>
                <p className="point-p">
                  The safest mode of shipment is to use a white glove or blanket
                  wrap service. At an additional cost, this shipping option
                  includes secure packaging by a professional and safe delivery
                  by truck. Ask your MOY Logistics agent about white glove or
                  blanket wrap services.{" "}
                  <a
                    href="https://www.freightcenter.com/10-helpful-furniture-packing-tips/"
                    className="underline"
                  >
                    MORE ON PACKING FURNITURE
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start ">
              <p className="section-header mb-4">
                Tracking: Frequently Asked Questions
              </p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  How do I track my shipment?
                </p>
                <p className="point-p">
                  Enter your PRO number or Shipment ID number to track the
                  location of your shipment after pick-up has been made. If you
                  need help tracking your shipment on our website, contact
                  customer service using the chat feature in the
                  lower-right-hand corner of the page or call 800.716.7608.{" "}
                  <a
                    className="underline"
                    href="https://www.freightcenter.com/track/"
                    target="_blank"
                  >
                    TRACK SHIPMENT
                  </a>{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  What is a PRO Number, and how do I get one?{" "}
                </p>
                <p className="point-p">
                  Carriers use a PRO number to organize and track the progress
                  of each shipment.{" "}
                  <a
                    href="https://www.freightcenter.com/freight-agent/"
                    className="underline"
                    target="_blank"
                  >
                    {" "}
                    Your dedicated freight agent 
                  </a>{" "}
                  should be able to give you the PRO number for your shipment.
                  If you encounter problems tracking your shipment on our
                  website, contact customer service using the chat feature in
                  the lower-right-hand corner of the page or 800.716.7608.{" "}
                  <a
                    href="https://www.freightcenter.com/track/pro-number/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    read more{" "}
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  What is proof of delivery?
                </p>
                <p className="point-p">
                  Your driver will bring a 
                  <a
                    href="https://www.freightcenter.com/proof-of-delivery-vs-bill-of-lading/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Proof of Delivery Receipt
                  </a>
                   (also known as a Delivery Receipt or DR). This is a document
                  signed at the time of delivery by the consignee; notating
                  freight received in good form, the time of delivery, and the
                  receiver’s name.{" "}
                  <a
                    href="https://www.freightcenter.com/help/proof-of-delivery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    read more
                  </a>{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  How do I check my shipping status?
                </p>
                <p className="point-p">
                  The best way to check your shipping status may depend on the
                  carrier you selected. In some cases, your MOY Logistics agent
                  will notify you before pick-up or delivery.{" "}
                  <a
                    href="https://www.freightcenter.com/track/shipment-status/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    read more
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start ">
              <p className="section-header mb-4">
                Billing Frequently Asked Questions
              </p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Why did I receive a billing adjustment?
                </p>
                <p className="point-p">
                  A billing adjustment represents a portion of unpaid freight
                  shipping costs as reported by the carrier. Most billing
                  adjustments result from the incorrect weight being
                  communicated by the shipper. Wrong freight class and the need
                  to add accessorial charges for residential or limited access
                  locations account for a significant percentage of billing
                  adjustments.{" "}
                  <a
                    href="https://www.freightcenter.com/help/billing-adjustments/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    read more
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  How can I avoid receiving a billing adjustment?
                </p>
                <p className="point-p">
                  When obtaining a freight quote, the type of commodity, weight,
                  dimensions, pick-up, delivery location, and distance influence
                  the shipping cost. The best way to avoid a change in shipping
                  rates is to ensure that all information given to MOY Logistics
                  at the time of booking is 100% complete and accurate. When you
                  schedule your freight shipping, please ensure you are as
                  honest and precise as you can be about your freight’s
                  contents, size, and weight. Do you know where I can view my
                  bill?To view your bill, click the login or MY ACCOUNT button
                  in the top right-hand corner of any screen. You will be
                  prompted to log in with your email address if you aren’t
                  logged in.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  What are my payment options?
                </p>
                <p className="point-p">
                  MOY Logistics accepts all major credit cards for freight
                  shipments booked online or over the phone with a Freight
                  Agent. Arrangements for other payment options, such as
                  domestic, international, or business checks, are accepted case
                  by case.{" "}
                  <a
                    href="https://www.freightcenter.com/help/billing-adjustments/payment-options/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    read more
                  </a>{" "}
                  Have Frequently Asked Questions we haven’t answered here? Call
                  MOY Logistics at 800.716.7608.
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
      <section className="p-4 pt-10 gap-10  lg:p-20  flex flex-col">
        <p className="section-header">Related links</p>
        <div className="flex gap-10 flex-col lg:flex-row justify-between">
          <div className=" lg:w-1/2 ">
            <img src={container_top} alt="" />
          </div>
          <div className="flex lg:w-1/2 flex-col w-full ">
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Freight Services
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">Freight Rates</p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <NavLink
              to={"service/ltl-freight"}
              className="flex p-4 border-t border-solid border-gray-300 items-center justify-between"
            >
              <p className="text-primary_green font-semibold">LTL Freight</p>
              <img src={read_more} className="w-[28px]" alt="" />
            </NavLink>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Flatbed Solutioins
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Small Business Shipping Services
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Residential Shipping
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <div className="flex p-4 border-t border-solid border-gray-300 items-center justify-between">
              <p className="text-primary_green font-semibold">
                Furniture Shipping Shipping
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </div>
            <NavLink
              to={"service/truckload"}
              className="flex p-4 border-t border-solid border-gray-300 items-center justify-between"
            >
              <p className="text-primary_green font-semibold">
                Truckload Equiptment
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </NavLink>
            <NavLink
              to={"/service/rail-freight"}
              className="flex p-4 border-t border-solid border-gray-300 items-center justify-between"
            >
              <p className="text-primary_green font-semibold">
                Rail/ Intermodal Shipping
              </p>
              <img src={read_more} className="w-[28px]" alt="" />
            </NavLink>
            <button className="clear-btn mt-5 self-center">
              Get a Freight Quote
            </button>
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
      <div className="bg-primary_green px-4 py-10 mt-10 flex flex-col gap-5 items-center justify-center">
        <p className="section-header text-center text-white">
          Let's Get Started! Compare shipping rates in an instant!
        </p>
        <button className="clear-btn bg-white">
          <p className="px-5">Get a Quote</p>
        </button>
      </div>
    </main>
  );
}

export default FrequentlyAskedQuestions;
