import Pulse from 'react-reveal/Pulse';

const index = () => {
    return (
        <div id="order" className="sm:py-20 py-8 px-8 lg:px-20">
            <div className="grid grid-flow-row sm:gap-20 gap-8">
                <h2 className="sm:text-5xl text-4xl font-bold text-white text-center">Pesan Sekarang Sebelum Promo Berakhir!!!</h2>
                <div className="grid grid-row sm:grid-cols-2 gap-8 sm:gap-4">
                    <div className="left flex flex-col">
                        <h3 className="text-2xl text-white">Mau Jadi Reseller dan Dapatkan Harga Khusus?</h3>
                        <div className="flex">
                            <Pulse forever>
                                <a href="http://bit.ly/KeripikDonaReseller" className="bg-danger text-3xl rounded-xl hover:text-shadow-lg shadow-lg hover:shadow-2xl text-white p-6 font-bold">MAU DONK!!!</a>
                            </Pulse>
                        </div>
                    </div>
                    <div className="right">
                        <h3 className="text-2xl text-white">Pengen Pesan Tapi Belum Mau Jadi Reseller?</h3>
                        <div className="flex">
                            <Pulse forever delay={400}>
                                <a href="http://bit.ly/KeripikDonaOrder" className="bg-primary text-3xl rounded-xl hover:text-shadow-lg shadow-lg hover:shadow-2xl text-white p-6 font-bold">PESAN DULU AJA!!!</a>
                            </Pulse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
