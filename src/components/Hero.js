export default function Hero() {
    return (
        <section>

            <img src="/Hero1.jpg" className="w-[100vw] h-[100vh] object-cover -z-50" />
            
            <div className="absolute flex flex-col gap-5 top-[25%] left-[10%]">
                <h3 className="font-semibold text-[1.5vw] text-[#3e417c] opacity-60">
                    Giảm đến 40%
                </h3>
                
                <h1 className="text-[3vw] font-semibold leading-[4.5vw]">
                    Mua Sắm Đồ Nhà <br></br> Tốt Nhất Cho Con Bạn
                </h1>

                <p className="text-[#3d3d3d] text-[1vw]">
                Lorem Ipsum Is Simply Dummy Text Of The Printing 
                And Typesetting Industry. Lorem <br></br> Ipsum Has Been The 
                Industry Standard Dummy Text Ever Since The 1500s, 
                When An <br></br> Unknown Printer Took A Galley Of Type.
                </p>

                <a href="" className="bg-[#0b312f] text-white font-medium px-[2.5vw] py-[1.25vw] border border-[#0b312f] border[#0b312f] w-fit rounded-full hover:bg-transparent border:blur-1 hover:border-1 hover:border-[#0b312f] hover:text-[#0b312f] transition-animate">
                    Mua Ngay
                </a>
            </div>
        </section>
    )
};
