'use client'

import Script from 'next/script'

const GA_TRACKING_ID = 'AW-11151875862'
const CONVERSION_ID = 'AW-11151875862/_Vc5CP7J7bYbEJa-0MUp'

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      <Script id="ga-conversion-fn" strategy="afterInteractive">
        {`
          window.gtag_report_conversion = function(url) {
            try {
              var callback = function () {
                if (typeof(url) !== 'undefined') {
                  window.location = url;
                }
              };
              if (window.gtag) {
                window.gtag('event', 'conversion', {
                  'send_to': '${CONVERSION_ID}',
                  'event_callback': callback
                });
              }
              return false;
            } catch (e) {
              return true;
            }
          }
        `}
      </Script>
    </>
  )
}
