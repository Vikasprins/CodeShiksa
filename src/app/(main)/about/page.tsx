import Image from "next/image";
import aboutus from "public/aboutus.jpg"

export default function AboutPage() {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Building Stronger Communities through Collaboration and Empowerment</h2>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                        </div>
                        <button className="sm:w-fit w-full px-3.5 py-2 text-white cursor-pointer bg-[#008dc0] hover:bg-[#008dc0] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex ">
                            Get Started
                        </button>
                    </div>
                    <Image
                        className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                        src={aboutus}
                        alt="about Us image"
                        width={600}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </section>

    );
}
