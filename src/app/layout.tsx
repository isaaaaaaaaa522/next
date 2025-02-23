import "./globals.css";
import ImageCarousel from "@/app/image.carrousel";

export default function RootLayout(){
    const images = [
        '/img/img1.jpg',
        '/img/img2.jpg',
        '/img/img3.jpg',
        '/img/img4.jpg',
        '/img/img5.jpg',
        '/img/img6.jpg',
        '/img/img7.jpg',
    ];
    return (
        <html lang="en">
            <body className="m-0 pt-12">
                <nav className="w-full h-[10vh] text-lg min-[300px]:text-sm fixed top-0 oveflow-hidden bg-gradient-to-t from-[#0a0a0a] to-[#333] z-50 flex flex-col justify-center" >
                    <ul className="flex justify-end gap-12 text-white  p-5 font-serif text-[30px] content">
                        <li className="list-none hover:scale-110 transition-transform duration-200" >Inicio</li>
                        <li className="list-none hover:scale-110 transition-transform duration-200">Productos</li>
                        <li className="list-none pr-[50px] hover:scale-110 transition-transform duration-200">Sobre nosotros</li>
                    </ul>
                </nav>

                <div className="bg-[#1a1a1a]">
                    <ImageCarousel
                        imagesUrls={images}
                        imagesToShow={5}
                        containerWidth="100%"
                        containerHeight="400px"
                        padding="0"
                        animationDelay={0}
                        animationDuration={2.5}
                    />



                    <div className="grid grid-cols-3 grid-rows-4 mt-4 h-[100rem] gap-5">
                        <div className=" text-center col-span-1 row-span-1 item item--a">
                            <div className="content text-[transparent] bg-[transparent] hover:bg-[#00000066] hover:text-white
                                            h-[100%] flex flex-col p-5 transition-all text-[24px] justify-end items-end">
                                Flan
                            </div>
                        </div>
                        <div className=" text-center col-span-1 col-span-2 item item--b">
                            <div className="content text-[transparent] bg-[transparent] hover:bg-[#00000066] hover:text-white
                                            h-[100%] flex flex-col p-5 transition-all text-[24px] justify-end items-end">
                                Flan
                            </div>
                        </div>

                        <div className=" text-center col-span-2 row-span-1 item item--d">
                            <div className="content text-[transparent] bg-[transparent] hover:bg-[#00000066] hover:text-white
                                            h-[100%] flex flex-col p-5 transition-all text-[24px] justify-end items-end">
                                Flan
                            </div>
                        </div>
                        <div className=" text-center col-span-1 row-span-2 item item--e">
                            <div className="content text-[transparent] bg-[transparent] hover:bg-[#00000066] hover:text-white
                                            h-[100%] flex flex-col p-5 transition-all text-[24px] justify-end items-end">
                                Flan
                            </div>
                        </div>

                        <div className=" text-center col-span-1 row-span-1 item item--f">
                            <div className="content text-[transparent] bg-[transparent] hover:bg-[#00000066] hover:text-white
                                            h-[100%] flex flex-col p-5 transition-all text-[24px] justify-end items-end">
                                Flan
                            </div>
                        </div>
                        <div className=" text-center col-span-1 row-span-1 item item--g">
                            <div className="content text-[transparent] bg-[transparent] hover:bg-[#00000066] hover:text-white
                                            h-[100%] flex flex-col p-5 transition-all text-[24px] justify-end items-end">
                                Flan
                            </div>
                        </div>

                        <div className=" text-center col-span-1 row-span-1 item item--h">
                            <div className="content text-[transparent] bg-[transparent] hover:bg-[#00000066] hover:text-white
                                            h-[100%] flex flex-col p-5 transition-all text-[24px] justify-end items-end">
                                Flan
                            </div>
                        </div>
                        <div className=" text-center col-span-2 row-span-1 item item--i">
                            <div className="content text-[transparent] bg-[transparent] hover:bg-[#00000066] hover:text-white
                                            h-[100%] flex flex-col p-5 transition-all text-[24px] justify-end items-end">
                                Flan
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="bg-gradient-to-t from-[#0a0a0a] to-[#333] text-white py-6">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        <div>
                            <h3 className="text-lg font-bold mb-2">¿Qué hacemos?</h3>
                            <ul className="text-sm space-y-1">
                                <li>**********</li>
                                <li>********************</li>
                                <li>************************</li>
                                <li>******************</li>
                                <li>**********************</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center">
                        <h3 className="text-lg font-bold mb-2">Síguenos en nuestras redes sociales</h3>
                            <div className="flex space-x-4">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6 transition-all text-[24px] justify-end items-end duration-300 transform hover:scale-125 hover:opacity-80" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-6 h-6 transition-all text-[24px] justify-end items-end duration-300 transform hover:scale-125 hover:opacity-80" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6 transition-all text-[24px] justify-end items-end duration-300 transform hover:scale-125 hover:opacity-80" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="w-6 h-6 transition-all text-[24px] justify-end items-end duration-300 transform hover:scale-125 hover:opacity-80" />
                                </a>
                            </div>
                        </div>

                        <div className="text-sm">
                            <h3 className="text-lg font-bold mb-2">¿Nos cuentas tu proyecto?</h3>
                            <p>Empresa X - Agencia de desarrollo y diseño web</p>
                            <p>Av. Principal 123, Ciudad, País</p>
                            <p>Teléfono: 999-999-999</p>
                            <p>correo: contacto@empresa.com</p>
                        </div>

                    </div>
                </footer>
            </body>
        </html>
    );
}