import Image from 'next/image';
import { Fade, Zoom } from 'react-reveal';

const index = () => {
    return (
        <div className="bg-white sm:py-20 py-8 px-8 lg:px-20">
            <div className="grid grid-flow-row sm:gap-20 gap-8">
                <Fade left cascade>
                    <h2 className="text-4xl font-bold text-center">Apa Kata Mereka?</h2>
                </Fade>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4">
                    <Zoom>
                        {[...Array(14)].map((x, i) => {
                            let j = i + 1;
                            return (<Image
                                key={i}
                                src={`/media/img/testimoni (${j}).jpeg`}
                                width={221}
                                height={463}
                                layout="responsive"
                                className="rounded-lg"
                                alt="Keripik Singkong Dona Baturaja"
                            />)
                        }
                        )}
                    </Zoom>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-4">
                    <Zoom>
                        {[...Array(6)].map((x, i) => {
                            let j = i + 15;
                            return (<Image
                                key={i}
                                src={`/media/img/testimoni (${j}).jpeg`}
                                width={1080}
                                height={1080}
                                layout="responsive"
                                className="rounded-lg"
                                alt="Keripik Singkong Dona Baturaja"
                            />)
                        }
                        )}
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default index
