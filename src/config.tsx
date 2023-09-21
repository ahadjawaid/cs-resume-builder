export const owner = "Ahad Jawaid";
export const sizeStyle = "max-w-6xl px-6 mx-auto";
export const spacingStyle = "mt-16 sm:mt-20"
export const backgroundColor = "bg-slate-100 py-12";

export const navigation = {
    home: "/",
    product: "/product",
    pricing: "/pricing",
    terms: "/terms",
    blog: "/blog",
    getStarted: "#pricing",
    purchaseLink: "https://buy.stripe.com/7sI5oigPQ4NN9nGdQQ",
}

export const navigationLinks = [
    {
        name: 'Home',
        href: '/',
    },
    // {
    //     name: 'Product',
    //     href: navigation.product,
    // },
    {
        name: 'Pricing',
        href: navigation.pricing,
    },
]

export const companyAgreementLinks = [
    // {
    //     name: "Terms of Service",
    //     href: navigation.terms,
    // }
]

export const socials = [
    {
        name: "Twitter",
        url: "https://twitter.com/ahadj0",
        icon: (
            <svg aria-hidden="true" className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
            </svg>
        )
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahad-jawaid/",
        icon: (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
        ),
    },
];

export const companies = [
    {
        name: "Amazon",
        path: "/companies/amazon.svg",
    },
    // {
    //     name: "Optiver",
    //     path: "/companies/optiver.svg",
    // },
    {
        name: "Paycom",
        path: "/companies/paycom.svg",
    },
    {
        name: "Citi Bank",
        path: "/companies/citi.svg",
    },
    // {
    //     name: "Capital One",
    //     path: "/companies/capital-one.svg",
    // },
]

export const pricing = [
    {
        title: "Resume Review",
        price: 19,
        percentageOff: 60,
        features: [
            "1 Full Resume Review",
            "Review are customized according to your ideal role",
            "Receive detailed and actionable suggestions",
            "Line by line feedback",
            "Formating feedback",
            "Spelling and grammar feedback",
        ],
        highlight: true,
    },
    // {
    //     title: "Resume Rewrite",
    //     price: 32,
    //     percentageOff: 70,
    //     features: [
    //         "1 Resume",
    //         "1 Cover Letter",
    //         "1 LinkedIn Review",
    //         "1 Mock Interview",
    //         "1 Hour of 1-on-1 Coaching",
    //         "1 Hour of 1-on-1 Coaching",
    //         "1 Hour of 1-on-1 Coaching",
    //     ],
    //     highlight: true,
    // },
    // {
    //     title: "Full Resume",
    //     price: 48,
    //     percentageOff: 60,
    //     features: [
    //         "1 Resume",
    //     ],
    // },
]

export const faq = [
    {
        question: "What service do we provide?",
        answer: "We provide resume reviews, resume rewrites, and full resume writing services.",
    },
    {
        question: "How long does it take?",
        answer: "We aim to get back to our customers in 1-3 business days since we are doing this manually.",
    },
    {
        question: "How does the writing service work?",
        answer: "We will send you a form to fill out and we will write your resume based on your responses. We also may require additional information to write your resume.",
    },
    {
        question: "When will the CS Resume Builder launch?",
        answer: "We are in developement and we will launch soon but in the mean time you can sign up to get notified when we launch.",
    },
    {
        question: "What is the refund policy?",
        answer: "We offer a 100% money back guarantee if you are not satisfied with our service if you request it within 7 days of purchasing our services.",
    },
]

export const testimonials = [
    {
        name: "Matthew Pham",
        title: "Software Engineer Intern at Paycom",
        text: "I never made a resume before and didn’t really know what to do. After working with CS Resume Builder on my resume, I was able to make my bullet points and descriptions sound much more impactful and concise. Because of this, I was able to land a few internship offers.",
    },
]