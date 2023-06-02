import Script from 'next/script'

const ChatWidget = () => {
    return (
        <>
            <chat-widget
                location-id="WzA8nqazjd5i7GgKulmp"
                heading="Ordinary is a disguise for greatness"
                sub-heading="Enter your question below and we will get back to you."
                legal-msg="By submitting you agree to receive SMS or e-mails for the provided channel."
                use-email-field="true"
                success-msg="In the ordinary lies the extraordinary"
                thank-you-msg="We will be right with you."
                prompt-avatar="https://firebasestorage.googleapis.com/v0/b/highlevel-backend.appspot.com/o/locationPhotos%2FWzA8nqazjd5i7GgKulmp%2Fchat-widget-person?alt=media&token=8ca57003-f02e-4291-9da5-7bfc01078ccd"
                agency-name="Ordinary Agency"
                agency-website="ordinaryagency.com.au"
            ></chat-widget>


<style jsx>{`
    chat-widget {
        --chat-widget-primary-color: #000000;
        --chat-widget-active-color: #000000;
        --chat-widget-bubble-color: #000000;
    }
`}</style>

            <Script
                src="https://widgets.leadconnectorhq.com/loader.js"
                data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
                strategy="lazyOnload"
            />
        </>
    );
}

export default ChatWidget;
