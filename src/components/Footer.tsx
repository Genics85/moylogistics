import logo from "../assets/icons/logo.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/x.svg";
import facebook from "../assets/icons/facebook.svg";
import email_icon from "../assets/icons/homepage/email_icon.svg";
import call_icon from "../assets/icons/homepage/call_icon.svg";

function Footer() {
  return (
    <>
      <div className="hidden lg:flex flex-col gap-5 mt-10">
        {/* footer */}
        <section className="flex flex-col text-primary_green items-center justify-center ">
          <div className="flex font-medium border-t-[1px] border-b-[1px] py-8 border-primary_green border-opacity-25 border-solid w-full gap-20 pl-40">
            <div className="w-52">
              <img src={logo} alt="" />
            </div>
            <div>
              <p>Pages</p>
            </div>
            <div>
              <p>Utitlity</p>
            </div>
            <div>
              <p>Subscribe</p>
            </div>
          </div>
          <div className="flex items-start w-full pl-40 gap-[70px] pt-6">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-4 text-[12px]">
                <div className="flex gap-2 items-center ">
                  <div className="w-[47px]">
                    <img src={email_icon} alt="" />
                  </div>
                  <p>
                    Email
                    <br />
                    Support@moylogistics.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-[12px]">
                <div className="flex gap-2 items-center ">
                  <div className="w-[47px]">
                    <img src={call_icon} alt="" />
                  </div>
                  <p>
                    Call Us
                    <br />
                    (00) 112 365 489 Call Us
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-[13px]">
              <a href="">About Us</a>
              <a href="">Our Team</a>
              <a href="">Our Project</a>
              <a href="">Pricing</a>
              <a href="">Contact</a>
            </div>
            <div className="flex flex-col gap-3 text-[13px]">
              <a href="">Style Guide</a>
              <a href="">Changelog</a>
              <a href="">Licenses</a>
              <a href="">Protected</a>
              <a href="">Not Found</a>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Email here*"
                className="border border-primary_green placeholder:text-primary_green placeholder:text-[13px] p-3"
              />
              <div className="flex gap-3">
                <button className="clear-btn text-[13px]">Send Now</button>
                <img className="w-[24px]" src={whatsapp} alt="" />
                <img className="w-[24px]" src={linkedin} alt="" />
                <img className="w-[24px]" src={twitter} alt="" />
                <img className="w-[24px]" src={facebook} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex py-4 border-t border-primary_green border-solid pl-20 gap-40 text-primary_green">
          <div className="w-52">
            <img src={logo} alt="" />
          </div>
          <p>Logistics Supply Chain Solutions</p>
        </section>
      </div>

      <div className=" hidden md:flex lg:hidden flex-col gap-5 text-primary_green p-4 mt-10">
        <div className="w-52">
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center ">
            <div className="w-[47px]">
              <img src={email_icon} alt="" />
            </div>
            <p>
              Email
              <br />
              Support@moylogistics.com
            </p>
          </div>
          <div className="flex flex-col gap-4 text-[12px]">
            <div className="flex gap-2 items-center ">
              <div className="w-[47px]">
                <img src={call_icon} alt="" />
              </div>
              <p>
                Call Us
                <br />
                (00) 112 365 489 Call Us
              </p>
            </div>
          </div>
        </div>
        <div className="flex py-7 gap-24 font-bold border-solid border-b-[1px] border-t-[1px] border-primary_green">
          <p>Pages</p>
          <p>Utility</p>
          <p>Subscribe</p>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-3 text-[13px]">
            <a href="">About Us</a>
            <a href="">Our Team</a>
            <a href="">Our Project</a>
            <a href="">Pricing</a>
            <a href="">Contact</a>
          </div>
          <div className="flex flex-col gap-3 text-[13px]">
            <a href="">Style Guide</a>
            <a href="">Changelog</a>
            <a href="">Licenses</a>
            <a href="">Protected</a>
            <a href="">Not Found</a>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Email here*"
              className="border border-primary_green placeholder:text-primary_green placeholder:text-[13px] p-3"
            />
            <div className="flex gap-3">
              <button className="clear-btn text-[13px]">Send Now</button>
              <img className="w-[24px]" src={whatsapp} alt="" />
              <img className="w-[24px]" src={linkedin} alt="" />
              <img className="w-[24px]" src={twitter} alt="" />
              <img className="w-[24px]" src={facebook} alt="" />
            </div>
          </div>
        </div>
        <section className="flex py-4 border-t border-primary_green border-solid justify-between text-primary_green">
          <div className="w-52">
            <img src={logo} alt="" />
          </div>
          <p>Logistics Supply Chain Solutions</p>
        </section>
      </div>

      {/* Mobile footer */}
      <div className=" flex md:hidden flex-col gap-5 text-primary_green p-4 mt-10">
        <div className="w-52">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-2 items-center ">
          <div className="w-[47px]">
            <img src={email_icon} alt="" />
          </div>
          <p>
            Email
            <br />
            Support@moylogistics.com
          </p>
        </div>
        <div className="flex flex-col gap-4 text-[12px]">
          <div className="flex gap-2 items-center ">
            <div className="w-[47px]">
              <img src={call_icon} alt="" />
            </div>
            <p>
              Call Us
              <br />
              (00) 112 365 489 Call Us
            </p>
          </div>
        </div>
        <div className="flex border-solid border-b-[1px] border-t-[1px] border-primary_green py-5 justify-between font-bold">
          <p>Pages </p>
          <p>Utitility</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3 text-[13px]">
            <a href="">About Us</a>
            <a href="">Our Team</a>
            <a href="">Our Project</a>
            <a href="">Pricing</a>
            <a href="">Contact</a>
          </div>
          <div className="flex flex-col gap-3 text-[13px]">
            <a href="">Style Guide</a>
            <a href="">Changelog</a>
            <a href="">Licenses</a>
            <a href="">Protected</a>
            <a href="">Not Found</a>
          </div>
        </div>
        <p className="font-bold border-solid border-b-[1px] border-t-[1px] border-primary_green py-5">
          Subscribe
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email here*"
            className="border border-primary_green placeholder:text-primary_green placeholder:text-[13px] p-3"
          />
          <div className="flex flex-col gap-5 ">
            <button className="clear-btn text-[13px]">Send Now</button>
            <div className="flex justify-between">
              <img className="w-[24px]" src={whatsapp} alt="" />
              <img className="w-[24px]" src={linkedin} alt="" />
              <img className="w-[24px]" src={twitter} alt="" />
              <img className="w-[24px]" src={facebook} alt="" />
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-3 py-4 border-t border-primary_green border-solid justify-between text-primary_green">
          <div className="w-52">
            <img src={logo} alt="" />
          </div>
          <p>Logistics Supply Chain Solutions</p>
        </section>
      </div>
    </>
  );
}

export default Footer;
