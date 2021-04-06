import Image from 'next/image';
import { Fade, Roll, Zoom } from 'react-reveal';
import SVGRightArrow from '../../assets/svg/right-arrow.svg';
import SVGStar from '../../assets/svg/star.svg';

const index = () => {
    return (
        <div className="bg-gray-50 sm:py-20 py-8 px-8 lg:px-20">
            <div className="grid grid-flow-row sm:gap-20 gap-8">
                <Fade Top>
                    <h2 className="text-4xl font-bold text-center">Ingin Tahu Rasa Keripik Dona?</h2>
                </Fade>
                <div className="grid grid-row md:grid-cols-2 gap-8 sm:gap-4">
                    <div className="left">
                        <Fade cascade left>
                            <ul className="list-none">
                                <li><div className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGStar />Potongan Keripik yang sangat Tipis</div></li>
                                <li><div className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGStar />Dari Bumbu rempah-rempah Terbaik dan Fresh</div></li>
                                <li><div className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGStar />Sensasi Rasa Daun Kunyit di lidah yang membuat Ketagihan</div></li>
                            </ul>
                        </Fade>
                    </div>
                    <div className="right">
                        <Zoom>
                            <div className="aspect-w-16 aspect-h-9 shadow-2xl w-full h-full z-0">
                                <iframe src="https://www.youtube.com/embed/2tQ9Ir4Xx-k?controls=0&autoplay=1&loop=1&modestbranding=1&origin=http://www.google.com" title="Keripik Dona" frameBorder={0} allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </Zoom>
                    </div>
                </div>
                <div className="grid grid-row md:grid-cols-2 gap-8 sm:gap-4">
                    <div className="left inline-grid justify-center">
                        <Roll left>
                            <div className="w-64">
                                <Image
                                    src="/media/img/human.png"
                                    width={357}
                                    height={464}
                                    layout="responsive"
                                    alt="Keripik Singkong Dona Baturaja"
                                />
                            </div>
                        </Roll>
                    </div>
                    <div className="right">
                        <Fade right>
                            <h3 className="text-3xl mb-4 font-bold">Beda Dari Lainnya!!!</h3>
                        </Fade>
                        <Fade cascade right>
                            <ul className="list-none">
                                <li className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGRightArrow />Potongan Keripik yang sangat Tipis</li>
                                <li className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGRightArrow />Dari Bumbu rempah-rempah Terbaik dan Fresh</li>
                                <li className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGRightArrow />Sensasi Rasa Daun Kunyit di lidah yang membuat Ketagihan</li>
                            </ul>
                        </Fade>
                    </div>
                </div>
                <div className="grid grid-row md:grid-cols-2 gap-8 sm:gap-4">
                    <div className="left">
                        <Zoom>
                            <h3 className="text-3xl mb-4 font-bold">Ingin Mendapatkan Untung Menjadi Reseller?</h3>
                        </Zoom>
                        <Fade left>
                            <p>Dengan menjadi reseller, kamu bisa mendapatkan harga khusus. <br />Kamu juga bisa memasarkan produk-produk <strong>Keripik Dona</strong> dengan varian lainnya seperti:</p>
                        </Fade>
                        <Fade down cascade>
                            <ul className="list-none">
                                <li><div className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGStar />Keripik Pisang Keju</div></li>
                                <li><div className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGStar />Keripik Pisang Balado</div></li>
                                <li><div className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGStar />Keripik Pisang Coklat</div></li>
                                <li><div className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGStar />Keripik Pisang Jagung</div></li>
                                <li><div className="inline-grid grid-flow-col gap-2 items-start text-xl"><SVGStar />Kacang Tojin</div></li>
                            </ul>
                        </Fade>
                    </div>
                    <div className="right inline-grid justify-center">
                        <div className="max-w-full w-80 sm:w-120 md:w-96 md:h-52 lg:w-120 lg:h-80 shadow-xl">
                            <Image
                                src="/media/img/kenapa.jpg"
                                width={1072}
                                height={712}
                                layout="responsive"
                                className="rounded-lg"
                                alt="Keripik Singkong Dona Baturaja"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
