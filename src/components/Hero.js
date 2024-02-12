export default function Hero() {
    return (
        <section className="max-w-full w-[95%] m-auto">

            <img src="/Hero (2).jpg" className="w-[100vw] h-[90vh] object-cover relative rounded-2xl" />
            
            <div className="absolute flex flex-col gap-5 top-[50%] left-[40%] translate-x-[-80%] -translate-y-[50%]">
                <h3 className="font-semibold text-[1.5rem] text-[#3e417c] opacity-60">
                    Giảm đến 40%
                </h3>
                
                <h1 className="text-[3rem] font-semibold leading-[4.5rem]">
                    Mua Sắm Đồ Nhà <br></br> Tốt Nhất Cho Con Bạn
                </h1>

                <p className="text-[#3d3d3d]">
                Lorem Ipsum Is Simply Dummy Text Of The Printing 
                And Typesetting Industry. Lorem <br></br> Ipsum Has Been The 
                Industry's Standard Dummy Text Ever Since The 1500s, 
                When An <br></br> Unknown Printer Took A Galley Of Type.
                </p>

                <a href="" className="bg-[#0b312f] text-white font-medium px-[40px] py-[20px] border border-[#0b312f] border[#0b312f] w-fit rounded-full hover:bg-transparent hover:border-1 hover:border-[#0b312f] hover:text-[#0b312f] transition-animate">
                    Mua Ngay
                </a>
            </div>
        </section>
    )
};
