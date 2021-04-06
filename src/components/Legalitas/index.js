import { Zoom } from 'react-reveal';
import SVGBank from '../../assets/svg/bank.svg';
import SVGOss from '../../assets/svg/oss.svg';
import SVGPirt from '../../assets/svg/pirt.svg';

const index = () => {
    return (
        <div className="bg-gray-50 sm:py-20 py-8 px-8 lg:px-20">
            <div className="grid grid-flow-row sm:gap-20 gap-8">
                <h2 className="text-4xl font-bold text-center">Legalitas</h2>
                <div className="grid md:grid-cols-3 gap-8 sm:gap-4">
                    <Zoom>
                        <div className="card rounded-lg shadow-md bg-gray-200 py-6 px-8 grid justify-center">
                            <div className="flex justify-center">
                                <div className="rounded-full bg-white p-6">
                                    <SVGOss className="hover:text-red-800" />
                                </div>
                            </div>
                            <h3 className="text-xl text-center mt-4">Terdaftar Lembaga OSS</h3>
                        </div>
                        <div className="card rounded-lg shadow-md bg-gray-200 py-6 px-8 grid justify-center">
                            <div className="flex justify-center">
                                <div className="rounded-full bg-white p-6">
                                    <SVGPirt />
                                </div>
                            </div>
                            <h3 className="text-xl text-center mt-4">Terdaftar PIRT</h3>
                        </div>
                        <div className="card rounded-lg shadow-md bg-gray-200 py-6 px-8 grid justify-center">
                            <div className="flex justify-center">
                                <div className="rounded-full bg-white p-6">
                                    <SVGBank />
                                </div>
                            </div>
                            <h3 className="text-xl text-center mt-4">Mitra Binaan Bank Sumsel Babel</h3>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default index
