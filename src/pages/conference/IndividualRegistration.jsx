import { useEffect } from 'react'

export default function IndividualRegistration() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Individual Registration</h1>
        
        {/* Form Container */}
        <div className="w-full" style={{ height: '1659px' }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/nNg44FxPrNUqVcZpwaT6"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '3px'
            }}
            id="inline-nNg44FxPrNUqVcZpwaT6"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 0"
            data-height="1659"
            data-layout-iframe-id="inline-nNg44FxPrNUqVcZpwaT6"
            data-form-id="nNg44FxPrNUqVcZpwaT6"
            title="FSY4CC Individual Registration Form"
          />
        </div>
      </div>
    </div>
  )
}
