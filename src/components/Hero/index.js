import Image from 'next/image';
import { Fade, Zoom } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
import SVGFacebook from '../../assets/svg/facebook.svg';
import SVGInstagram from '../../assets/svg/instagram.svg';

const index = () => {
    return (
        <div id="hero" className="relative">
            <div className="md:px-16 px-4 md:py-10 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="left flex flex-col">
                        <Fade left>
                            <div className="lg:w-44 w-32 mb-4 md:mb-2">
                                <Image src="/media/img/logo.png"
                                    width={251}
                                    height={190}
                                    layout="responsive"
                                />
                            </div>
                        </Fade>
                        <Fade left delay={100}>
                            <div className="inline-flex items-center justify-start mb-4 md:mb-2">
                                <h className="text-5xl sm:text-6xl md:text-4xl lg:text-7xl px-5 py-2.5 bg-gray-100 text-yellow-500 font-bold text-shadow-md">Keripik Dona</h>
                            </div>
                        </Fade>
                        <Fade left delay={200}>
                            <p className="text-4xl md:text-2xl lg:text-3xl text-white font-bold mb-4 md:mb-2">
                                Keripik Singkong<br /> Khas Baturaja
                                </p>
                        </Fade>
                        <Fade left delay={300}>
                            <div className="inline-flex items-center justify-start mb-4 md:mb-2">
                                <Pulse forever>
                                    <a href="http://bit.ly/KeripikDonaOrder" className="p-5 md:p-3 lg:p-4 uppercase text-white rounded-lg shadow-md hover:shadow-2xl text-3xl font-bold bg-yellow-500 text-shadow-sm hover:text-shadow-xl">Pesan Sekarang</a>
                                </Pulse>
                            </div>
                        </Fade>
                        <Fade left delay={400}>
                            <div className="inline-flex">
                                <a href="https://www.facebook.com/Keripik-Dona-Baturaja-763358144017859" className="px-3 py-2 hover:shadow-xl text-white rounded-full bg-danger mr-2"><SVGFacebook className="inline-flex" fill="#ffffff" width={15} height={15} /></a>
                                <a href="https://www.instagram.com/keripiksingkong.dona_baturaja/" className="px-3 py-2 hover:shadow-xl text-white rounded-full bg-danger"><SVGInstagram className="inline-flex" fill="#ffffff" width={15} height={15} /></a>
                            </div>
                        </Fade>
                    </div>
                    <div className="right">
                        <div className="w-full">
                            <Zoom>
                                <Image
                                    width={772}
                                    height={710}
                                    src="/media/img/hero-right.webp"
                                    alt="Keripik Singkong Dona Baturaja"
                                />
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
