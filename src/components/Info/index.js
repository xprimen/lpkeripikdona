import SVGFacebook from '../../assets/svg/facebook.svg'
import SVGInstagram from '../../assets/svg/instagram.svg'
import SVGLocation from '../../assets/svg/location.svg'
import { Fade, Zoom, Roll } from 'react-reveal';

const index = () => {
    return (
        <div id="info" className="bg-gray-50 sm:py-20 py-8 px-8 lg:px-20">
            <div className="grid grid-flow-row py-4 px-4 sm:py-16 md:px-16 gap-2 bg-black bg-opacity-30">
                <Fade down>
                    <div className="flex space-x-4 justify-between items-center">
                        <SVGLocation className="flex-none" />
                        <div className="text-white text-lg md:text-2xl flex-grow text-shadow-lg">
                            Jl.Husni Thamrin, Gang Sukamaju No.455H, Sukaraya, Kec. Baturaja Timur, Kabupaten Ogan Komering Ulu, Sumatera Selatan. Kode POS : 32125.
                    </div>
                    </div>
                    <div className="flex justify-center sm:space-x-4 item-center flex-col sm:flex-row">
                        <div className="flex items-center">
                            <SVGFacebook height={20} width={20} className="flex-none" fill="#ffffff" />
                            <a href="https://www.facebook.com/Keripik-Dona-Baturaja-763358144017859" className="text-lg text-white">Keripik Dona Baturaja</a>
                        </div>
                        <div className="flex items-center space-x-1">
                            <SVGInstagram height={20} width={20} className="flex-none" fill="#ffffff" />
                            <a href="https://www.instagram.com/keripiksingkong.dona_baturaja/" className="text-lg text-white">Keripik Singkong Dona Baturaja</a>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default index
