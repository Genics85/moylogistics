import home_icon from "../../assets/icons/services/home_icon.svg";
import details_icon from "../../assets/icons/services/more_details.svg";
import banner_d from "../../assets/images/glossary/glossary_d.png";
import banner_t from "../../assets/images/glossary/glossary_t.png";
import container_top from "../../assets/images/container-shipping/container_top.png";
import read_more from "../../assets/icons/services/service_read_more.svg";
import star from "../../assets/icons/services/star.svg";
import avatar from "../../assets/images/services/avatar.png";
import quotation from "../../assets/icons/services/quotation.svg";
import back from "../../assets/icons/services/back.svg";
import forward from "../../assets/icons/services/forward.svg";

import { NavLink } from "react-router-dom";

function FreightGlossary() {
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
            <p className="section-header text-white">Freight Glossary</p>
            <p className=" leading-[24px] w-[380px] md:w-[604px] lg:w-[660px]">
              Commonly Used Freight Terms from A to Z
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
              <span className="font-semibold ">Freight Glossary</span>
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5 items-center md:items-start ">
              <p className="section-header mb-4">Frequently Asked Questions</p>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Standard Freight Glossary and Definitions
                </p>
                <p className="point-p">
                  There are tons of standard freight terms and definitions;
                  sometimes, even the best pros are confused and do not
                  understand them all. Our glossary defines Freight, explains
                  cargo, and identifies the documents with easy-to-understand
                  explanations of the words and acronyms you will encounter
                  most.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Accessorials</p>
                <p className="point-p">
                  (required and optional) enhance the shipping services you
                  receive.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Backhaul</p>
                <p className="point-p">
                  These are the journeys trucks take, cargo in tow, back to (or
                  near) their point of origin to start their next delivery.
                  Drivers typically find backhaul from shippers different from
                  their outbound load. This way, they aren’t left with deadhead
                  mileage.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Bill of Lading (BOL)
                </p>
                <p className="point-p">
                  A bill of lading or “BOL” is a document that establishes a
                  contract between the customer, MOY Logistics, and the carrier.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Billing Adjustment</p>
                <p className="point-p">
                  A billing adjustment represents a portion of unpaid freight
                  shipping costs as reported by the carrier.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Blanket Wrapped Freight
                </p>
                <p className="point-p">
                  Blanket Wrapped Freight involves wrapping thick blankets
                  around goods to cover and cushion them during shipment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Blind Shipment</p>
                <p className="point-p">
                  A blind shipment uses a bill of lading that does not provide
                  the customer or consignee information.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Cargo Carriers</p>
                <p className="point-p">
                  A cargo carrier is a company that transports goods by air,
                  rail, or ship.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Cargo Companies</p>
                <p className="point-p">
                  Cargo companies provide freight services for commercial and
                  residential shippers.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Cargo Containers</p>
                <p className="point-p">
                  A truck trailer can be detached and loaded onto a ship, rail
                  car, or stacked in warehouses.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Carrier Lanes</p>
                <p className="point-p">
                  They are also known as freight lanes, shipping lanes, and
                  trucking lanes. Lanes matter to carriers and shippers.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Cartage Services</p>
                <p className="point-p">
                  Cartage refers to short hauls moving cargo containers
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Cheapest Freight</p>
                <p className="point-p">
                  The cheapest freight services offered by MOY Logistics exist
                  due to the high volume of shipments processed each month.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Commercial Trucking
                </p>
                <p className="point-p">
                  Any truck that is used for transporting goods over roads.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Common Carriers</p>
                <p className="point-p">
                  A transportation company that provides the movement of goods
                  on behalf of customers at published rates.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Common Carriers</p>
                <p className="point-p">
                  A transportation company that provides the movement of goods
                  on behalf of customers at published rates.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Consignor / Consignee
                </p>
                <p className="point-p">
                  Two strange-sounding freight shipping terms are explained.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Consolidated Freight
                </p>
                <p className="point-p">
                  Consolidated Freight service saves shippers money by combining
                  multiple shipments in one conveyance.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Container Freight</p>
                <p className="point-p">
                  Shipments that fill containers may be ventilated, insulated,
                  refrigerated, open-top, liquid-fill body, or equipped with
                  other devices or racks.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Crating Services</p>
                <p className="point-p">
                  A container constructed of wood and affixed to a pallet is
                  used to transport fragile, unboxed items.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Curbside Pickup</p>
                <p className="point-p">
                  A bill of lading that does not include inside pickup or
                  delivery.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Density Calculator</p>
                <p className="point-p">
                  A Density Calculator is used to determine a shipment’s
                  density, an essential factor in a shipment’s freight class.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Discount Freight</p>
                <p className="point-p">
                  Understanding the factors that influence shipping discounts
                  will help you save money.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Domestic Freight</p>
                <p className="point-p">
                  Shipments transported within the continental United States.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Drayage</p>
                <p className="point-p">
                  A freight term commonly used to mean two very different
                  things.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Drop Deck</p>
                <p className="point-p">
                  Specialized truckload equipment has a lower deck system that
                  rolls onto an upper deck.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Drop Shipping</p>
                <p className="point-p">
                  When the goods are shipped from the manufacturer, wholesaler,
                  or another retailer (like Amazon), which sends the goods to
                  the end customer on behalf of the consignor.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Dry Van</p>
                <p className="point-p">
                  An enclosed cargo trailer is used to transport goods that do
                  not require refrigeration or other devices.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  eBay Freight Shipping
                </p>
                <p className="point-p">
                  Freight shipping options for eBay sellers.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Engine Shipping</p>
                <p className="point-p">
                  Shipping of engines, transmissions, and heavy auto parts can
                  all be categorized as Auto Shipping.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Equipment Shipping</p>
                <p className="point-p">
                  Transportation for heavy equipment and machinery, like pinball
                  machines, arcades, CNC milling machines, MRI machines, etc.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Estate Shipping</p>
                <p className="point-p">
                  Residential freight shipping for goods sold at auction or
                  during an estate sale.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Expedited Freight</p>
                <p className="point-p">
                  Time-sensitive freight that utilizes guaranteed and
                  time-critical services to meet fast delivery windows.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Final Mile</p>
                <p className="point-p">
                  This service includes inside delivery and debris removal. If
                  more services are needed, let us know, and we will help you
                  secure those requirements.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">First Mile</p>
                <p className="point-p">
                  FirstMile service includes an inside pickup from the origin
                  and packaging. After the Freight is picked up and packaged,
                  the carrier will take it to its destination.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Free on Board</p>
                <p className="point-p">
                  Free on Board (FOB) is a shipping term that determines when
                  ownership and responsibility for goods transfer from the
                  seller to the buyer.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freeze Protection</p>
                <p className="point-p">
                  Freeze protection is a service provided by many carriers to
                  prevent Freight from being exposed to frigid temperatures.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freeze Protection</p>
                <p className="point-p">
                  Freeze protection is a service provided by many carriers to
                  prevent Freight from being exposed to frigid temperatures.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight</p>
                <p className="point-p">
                  Boxed, crated, or palletized shipments weighing more than 150
                  lbs or more or with a dimension greater than 4 feet in most
                  cases.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Agents</p>
                <p className="point-p">
                  A broker is authorized to transact business on behalf of
                  another person or company.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Bill Audit</p>
                <p className="point-p">
                  An inspection of an invoice to a customer and from a carrier
                  to determine a remaining balance or difference in the cost of
                  services rendered.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Broker</p>
                <p className="point-p">
                  A company that transports goods on behalf of customers and is
                  under contract with asset-based carriers and transportation
                  companies.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Carrier</p>
                <p className="point-p">
                  A Freight Carrier may also be known as a common carrier,
                  freight company, or trucking carrier.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Center</p>
                <p className="point-p">
                  An assigned area where shipping activity takes place.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Class</p>
                <p className="point-p">
                  A number between 50 and 500 classifies or codes the goods
                  inside a shipment.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Companies</p>
                <p className="point-p">
                  Another name for a transportation company or common carrier.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Consolidation
                </p>
                <p className="point-p">
                  Freight Consolidation lowers costs by pairing several orders
                  in one truck, ship, or aircraft.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Cost</p>
                <p className="point-p">
                  Freight Cost is determined by several variables, some of which
                  shippers can control directly.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Forwarder</p>
                <p className="point-p">
                  A company that acts on behalf of a customer to transport goods
                  overseas.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Forwarding</p>
                <p className="point-p">
                  When a third party that does not carry Freight itself
                  organizes freight shipments for businesses, that activity is
                  sometimes called Freight Forwarding.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Hauler</p>
                <p className="point-p">
                  MOY Logistics uses only high-quality Freight Haulers.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Hauling</p>
                <p className="point-p">
                  In most cases, they transport goods weighing more than 150 lbs
                  or more or with dimensions greater than 4 feet.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Insurance</p>
                <p className="point-p">
                  Freight insurance is additional coverage you can purchase
                  through one of MOY Logistics full-service coverage partners or
                  on your own. Freight insurance coverage protects the total
                  value of your shipment beyond what is covered by limited
                  liability.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Liability</p>
                <p className="point-p">
                  Every booked freight shipment comes with included limited
                  liability coverage. The carrier determines this amount and
                  depends on the commodity type.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Lines</p>
                <p className="point-p">
                  Another name for a transportation company.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Load</p>
                <p className="point-p">Another term for cargo or shipment.</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Matching</p>
                <p className="point-p">
                  Automation that pairs the details of a shipment with the
                  capabilities of a freight company.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Quote</p>
                <p className="point-p">
                  An estimated cost of shipping goods before pickup is made and
                  the shipment is measured and weighed.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Rate Calculator
                </p>
                <p className="point-p">
                  How MOY Logistics online quote system saves shippers money.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Rates</p>
                <p className="point-p">
                  The base tariff or contract rate charged by a carrier.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Services</p>
                <p className="point-p">
                  Brokers, forwarders offer the product, and carriers to
                  transport goods by various modes like LTL, TL,
                  rail/intermodal, cargo container, and air freight.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Shipping Calculator
                </p>
                <p className="point-p">
                  A calculator you can place on any eCommerce site so customers
                  can calculate shipping charges.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Shipping Cost
                </p>
                <p className="point-p">The actual cost of shipping cargo.</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Shipping Quotes
                </p>
                <p className="point-p">
                  See Freight Quote. An estimated cost of shipping goods before
                  pickup is made and the shipment is measured and weighed.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Shipping Rates
                </p>
                <p className="point-p">
                  The cost of shipping goods via freight service.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Shipping Services
                </p>
                <p className="point-p">
                  Services that transport goods and packages weighing over 150
                  lbs or more or with a dimension greater than 4 feet in most
                  cases.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freight Terminal</p>
                <p className="point-p">
                  Where a carrier receives incoming Freight that is then
                  prepared for reloading into a truck, rail car, vessel, or
                  plane.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Transportation
                </p>
                <p className="point-p">
                  See Freight Shipping. A service that transports goods weighing
                  more than 150 lbs or more or with a dimension greater than 4
                  feet in most cases.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Freightways</p>
                <p className="point-p">
                  A transportation company or carrier took a lane or route.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Government Shipping
                </p>
                <p className="point-p">
                  Both military and non-military agencies require Government
                  Shipping services.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Ground Freight</p>
                <p className="point-p">
                  Service that involves transporting goods by truck over surface
                  roads.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Handling Unit</p>
                <p className="point-p">
                  Every distinct piece of packaged Freight that will be moved
                  with a forklift, pallet jack, or by hand is a handling unit.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Hazmat</p>
                <p className="point-p">
                  Every distinct piece of packaged Freight that will be moved
                  with a forklift, pallet jack, or by hand is a handling unit.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Hazardous</p>
                <p className="point-p">
                  Hazardous material that is considered to have the capability
                  to cause an unreasonable risk to human health or safety or the
                  environment when transported in commerce used incorrectly or
                  if not properly stored or contained is considered a hazardous
                  material. Hazardous materials include fuels, bio-chemicals,
                  and pharmaceuticals.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Heavy Freight</p>
                <p className="point-p">
                  Freight weighing over 8,000 lbs occupies an entire truck’s
                  space and weight maximums.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Inside Delivery & Pickup
                </p>
                <p className="point-p">
                  Standard freight pickup and delivery are loading dock to
                  loading dock or curb to curb. Inside pickup and delivery go
                  beyond the curb.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  International Freight Shipping
                </p>
                <p className="point-p">
                  Any movement of Freight that occurs outside the United States
                  (excluding Canada) is considered international.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Interstate Freight</p>
                <p className="point-p">
                  Interstate Freight is any freight shipment that moves from one
                  state to another, whether a full truckload or less than a
                  truckload.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Interstate Truckers
                </p>
                <p className="point-p">
                  A truck driver that transports Freight along a domestic
                  interstate highway.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Lift Gate</p>
                <p className="point-p">
                  A lift gate will be required if the pickup or delivery site
                  does not have a loading dock and the cargo weighs too much for
                  an individual to handle.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Limited Access</p>
                <p className="point-p">
                  Trucks do not have clear and unfettered access to the exact
                  pickup or delivery spot at a limited access location, such as
                  a school or an airport.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Freight Logistics Companies
                </p>
                <p className="point-p">
                  Logistics companies help businesses transport Freight while
                  streamlining their supply chain.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Lean Supply Chain</p>
                <p className="point-p">
                  A supply chain strategy aiming to reduce waste while
                  optimizing efficiency during goods and services production and
                  distribution processes.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">LTL</p>
                <p className="point-p">
                  Abbreviation for “Less than Truckload.”{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">LTL Transportation</p>
                <p className="point-p">
                  The movement of loads belonging to multiple customers that are
                  consolidated to occupy the space of a single dry van trailer.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">LTL Trucking</p>
                <p className="point-p">
                  Defined as transporting freight more oversized than a parcel
                  and smaller than a truckload, LTL shipments usually weigh more
                  than 150 lbs but less than 20,000 lbs.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Military Freight</p>
                <p className="point-p">
                  As a veteran-owned third-party logistics company (3PL), MOY
                  Logistics is proud to provide our military and government with
                  the required shipping services.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Motor Freight</p>
                <p className="point-p">
                  They transport goods by motor carrier over public highways.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Motorcycle Shipping
                </p>
                <p className="point-p">
                  Motorcycle Shipping transports your bike where you need it
                  next.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Moving Companies</p>
                <p className="point-p">
                  A company that relocates household property over short or long
                  distances.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Moving Freight</p>
                <p className="point-p">
                  See Freight Shipping. A service that transports goods weighing
                  more than 150 lbs or more or with a dimension greater than 4
                  feet in most cases.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Not Otherwise Indicated (NOI)
                </p>
                <p className="point-p">
                  Abbreviation for “Not Otherwise Indicated.”” Use the linked
                  calculator to determine the freight class for goods and
                  commodities not classified by the NMFCA.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Oversize Freight</p>
                <p className="point-p">
                  It was transporting goods that were longer, wider, or taller
                  than the footprint of a trailer.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Overweight or Heavy Freight
                </p>
                <p className="point-p">
                  See Heavy Freight. Shipments weighing more than 8,000 lbs that
                  occupy the space and weight maximums of an entire truck.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Parcel Shipping</p>
                <p className="point-p">
                  A parcel company like the United States Parcel Service
                  transports a standard package.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Personal Effects</p>
                <p className="point-p">
                  Another term used for household goods or personal property.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Pounds per Cubic Foot (PCF)
                </p>
                <p className="point-p">
                  Density (the number of pounds occupying a cubic foot of space)
                  is an essential measurement for calculating freight class.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Proof of Delivery</p>
                <p className="point-p">
                  Also known as the Delivery Receipt, the Proof of Delivery
                  serves three essential functions.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Refrigerated Freight
                </p>
                <p className="point-p">
                  They are transporting goods that require refrigeration or
                  freezing. Trucks used to transport these goods are known as
                  “Reefers.”{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">SCAC Codes</p>
                <p className="point-p">
                  The Standard Carrier Alpha Code (or SCAC Code) is a unique
                  two-to-four-letter code used to identify transportation
                  companies.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Sea Cargo Container
                </p>
                <p className="point-p">
                  See Container Freight. Shipments that fill containers may be
                  ventilated, insulated, refrigerated, open-top, liquid-fill
                  body, or equipped with other devices or racks.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Shippers</p>
                <p className="point-p">
                  A shipper is a person who ships goods—also referred to as a
                  customer or consignor.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Shipping</p>
                <p className="point-p">
                  A service that transports Freight weighing more than 150 lbs
                  or more or with a dimension greater than 4 feet in most cases.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Shipping Companies</p>
                <p className="point-p">
                  Another name for a company that transports goods on behalf of
                  a customer.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Shipping Cost</p>
                <p className="point-p">
                  See Freight Shipping Cost. The actual cost of shipping cargo.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Shipping Furniture</p>
                <p className="point-p">
                  Shipping Furniture can be intricate, especially if you’re a
                  newbie. MOY Logistics has the experience you need.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Shipping Labels</p>
                <p className="point-p">
                  Shipping labels help make sure your cargo is delivered to the
                  correct location.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Shipping Motorcycles
                </p>
                <p className="point-p">
                  Shipping Motorcycles means transporting your bike where you
                  need it next.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Shipping Rates</p>
                <p className="point-p">
                  Prices are charged by freight carriers based on a variety of
                  factors.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Shipping Service</p>
                <p className="point-p">
                  See Freight Shipping Service. In most cases, the
                  transportation of goods and packages weighing more than 150
                  lbs or more or with a dimension greater than 4 feet.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Small Business Shipping
                </p>
                <p className="point-p">
                  A Small Business Shipping service that combines world-class
                  technology with personally delivered freight shipping
                  expertise allows small business operators to focus on what
                  they do best.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Supply Chain Logistics
                </p>
                <p className="point-p">
                  Times change. The right Supply Chain Logistics plan responds
                  to those changes.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Third-Party Logistics (3PL)
                </p>
                <p className="point-p">
                  Outsourced provider of freight brokerage and supply chain
                  services.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Tradeshow Shipping</p>
                <p className="point-p">
                  Reserving your booth space is just step #1. Tradeshow Shipping
                  gets that booth to the show on time.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Transportation Brokers
                </p>
                <p className="point-p">
                  See Freight Broker. A company that transports goods on behalf
                  of customers and is under contract with asset-based carriers
                  and transportation companies.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Transportation Companies
                </p>
                <p className="point-p">
                  In the freight industry, a term refers to a common carrier or
                  trucking company.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Trucking</p>
                <p className="point-p">
                  Transporting goods over the road (OTR) via truck.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Trucking Broker</p>
                <p className="point-p">
                  See Freight Broker. A company that transports goods on behalf
                  of customers and is under contract with asset-based carriers
                  and transportation companies.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Trucking Business</p>
                <p className="point-p">
                  A general motor carrier that provides freight transportation
                  by truck.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Trucking Companies</p>
                <p className="point-p">
                  A transportation company that services ground Freight.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  Trucking Cost per Mile
                </p>
                <p className="point-p">
                  The cost incurred for each mile that goods are transported by
                  trucks.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Trucking Rates</p>
                <p className="point-p">
                  See Freight Rates. A national trucking index determines the
                  base tariff or contract rate charged by a carrier or spot
                  market rate.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Trucking Service</p>
                <p className="point-p">
                  The most common way of shipping freight in the USA is via
                  Trucking Service.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">
                  White Glove Service
                </p>
                <p className="point-p">
                  Service that involves inside delivery and light installation,
                  and packaging removal.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="section-header text-[21px]">Yellow Freight</p>
                <p className="point-p">
                  They are now known as YRC. Yellow Freight is a subsidiary of
                  YRC Worldwide and YRC Freight, Inc.
                </p>
              </div>
            </div>
            <button className="clear-btn self-center">
              Get A Freight Quote
            </button>
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
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
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

export default FreightGlossary;
