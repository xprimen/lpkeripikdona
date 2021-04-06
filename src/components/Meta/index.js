import Head from 'next/head'
import { useRouter } from 'next/router'
import { FB_PIXEL_ID } from '../../lib/fbPixel'

const Meta = (props) => {
    const router = useRouter()
    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{props.title}</title>
            {/* <meta name="description" content="" />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content="" />
            <meta name="og:description" property="og:description" content="" />
            <meta property="og:site_name" content="" />
            <meta property="og:url" content="" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="" />
            <meta name="twitter:description" content={props.desc} />
            <meta name="twitter:site" content="" />
            <meta name="twitter:creator" content="" />
            <link rel="icon" type="image/png" href="/public/media/favicon.ico" />
            <link rel="apple-touch-icon" href="/public/media/favicon.ico" />
            <link rel="stylesheet" href="" />
            <meta property="og:image" content="" />
            <meta name="twitter:image" content="" /> */}
            <link rel="canonical" href={router.basePath} />
            {/* <script type="text/javascript" src="" ></script> */}
            {/* Global Site Code Pixel - Facebook Pixel */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                />
            </noscript>
        </Head>
    )
}
export default Meta