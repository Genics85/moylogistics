import norto from "../assets/images/services/norto.png";
import points_one from "../assets/images/services/points_one.png";
import studio_green from "../assets/images/services/studio_green.png";
import outofthe_sandbox from "../assets/images/services/outofthe_sandbox.png";

function StudioGreenBanner() {
  return (
    <section className="flex w-full items-center justify-center">
      <div className="flex  flex-col  lg:flex-row">
        <div className="w-[160px] md:w-[230px] ">
          <img src={studio_green} alt="" />
        </div>
        <div className=" w-[160px] border-[2px] border-solid border-primary_green  md:w-[230px]">
          <img src={norto} alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="w-[160px] md:w-[230px] border-[2px] lg:border-l-0 border-solid border-primary_green ">
          <img src={points_one} alt="" />
        </div>
        <div className="w-[160px] md:w-[230px] border-[2px] border-l-0 border-t-0 lg:border-t-[2px] border-solid  border-primary_green ">
          <img src={outofthe_sandbox} alt="" />
        </div>
      </div>
    </section>
  );
}

export default StudioGreenBanner;
