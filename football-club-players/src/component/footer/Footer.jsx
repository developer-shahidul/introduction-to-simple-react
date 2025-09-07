//
import logo from "../../assets/football-logo3.jpg";

const Footer = () => {
  return (
    <div className="w-full pt-[240px] bg-[#06091A] z-0">
      <div className="w-4/5 mx-auto pb-16">
        <div className="h-36 w-36 mx-auto mb-16 shadow-red-300  shadow-lg">
          <img
            className="h-full w-full object-cover"
            src={logo}
            alt="football logo"
          />
        </div>
        <div className="md:flex md:justify-between">
          <div className="">
            <h3 className="mb-4 text-[18px] font-semibold text-white">
              About Us
            </h3>
            <div>
              <h5 className=" text-white/60 text-base w-[291px]">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </h5>
            </div>
          </div>
          <div className="text-white">
            <h3 className=" mb-4 text-[18px] font-semibold">Quick Links</h3>
            <div>
              <ul className="list-disc w-[291px] list-inside">
                <li className=" text-white/60 text-base ">
                  <a href="">Home</a>
                </li>
                <li className=" text-white/60 text-base ">
                  <a href="">Services</a>
                </li>
                <li className=" text-white/60 text-base ">
                  <a href="">About</a>
                </li>
                <li className=" text-white/60 text-base ">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white">
            <h3 className="mb-4  text-[18px] font-semibold">Subscribe</h3>
            <div>
              <h5 className=" text-white/60 text-base w-[291px] mb-[21px]">
                Subscribe to our newsletter for the latest updates.
              </h5>
              <div>
                <form className=" border rounded-xl overflow-hidden flex">
                  <input
                    className="py-[18px] px-[32px]  text-base font-normal bg-white text-[#13131340] w-full  md:mb-0"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button
                    className="text-base font-bold text-[#131313] py-[18px] px-[30px]   md:flex w-full 
                    bg-gradient-to-r from-[#f19bb3] to-[#f5c451]
                    "
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-base text-white/60 font-normal text-center py-8">
          @2025 Your Company All Rights Reserved.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
