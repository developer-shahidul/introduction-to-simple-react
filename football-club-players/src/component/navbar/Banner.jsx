//
import bg from "../../assets/bg-shadow.png";
import team from "../../assets/team.jpg";

const Banner = () => {
  return (
    <div className="md:mt-6 mt-56 md:w-4/5 mx-auto pt-20 mb-20 px-2 md:px-0">
      <div
        className="w-full  md:h-lvh bg-cover bg-center mx-auto content-center rounded-2xl overflow-hidden py-10 "
        style={{
          backgroundImage: `
    url(${bg}),
    linear-gradient(to top left, black 30%, transparent 100%),
    linear-gradient(to bottom right, black 30%, transparent 100%)
  `,
        }}
      >
        <div className="flex flex-col items-center justify-between opacity-100  z-50 text-center ">
          <div className="h-[200px] w-[300px] mx-auto mb-6 ">
            <img className="h-full w-full object-cover" src={team} alt="" />
          </div>
          <div className=" text-white">
            <h2 className="text-[40px] font-bold mb-4">
              Assemble Your Ultimate Dream 11 Football Team
            </h2>
            <p className="text-2xl font-medium text-[#FFFFFF70] rounded-xl mb-6">
              “No Boundaries, Just Goals” ⚽
            </p>
            <div className="p-2 border max-w-max rounded-xl mx-auto">
              <button
                className="px-5 py-[14px] border rounded-xl shadow-[inset_0_2px_6px_rgba(0,0,0,0.3)] border-none
               bg-gradient-to-l from-[rgb(250_203_86)] to-[rgba(234_169_195)] text-base font-bold text-[#131313]"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
