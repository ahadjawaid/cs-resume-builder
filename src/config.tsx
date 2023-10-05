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
    // {
    //     name: 'Blog',
    //     href: navigation.blog,
    // },
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
        title: "Base",
        price: 9,
        href: "https://buy.stripe.com/fZe182fLM2FF57q4gp",
        percentageOff: 60,
        features: [
            "1 Full Resume Review",
            "Customized reviews according to your ideal role",
            "Receive detailed and actionable suggestions",
            "Line by line feedback",
            "Formating feedback",
            "Spelling and grammar feedback",
        ],
        
    },
    {
        title: "Deluxe",
        price: 18,
        href: "https://buy.stripe.com/6oE4ke0QSfsrczS4go",
        percentageOff: 60,
        features: [
            "2 Full Resume Reviews",
            "Customized reviews according to your ideal role",
            "Receive detailed and actionable suggestions",
            "Line by line feedback",
            "Formating feedback",
            "Spelling and grammar feedback",
        ],
        highlight: true,
    },
    {
        title: "Premium",
        price: 39,
        href: "https://buy.stripe.com/28o7wq0QSbcbczS3cj",
        percentageOff: 60,
        features: [
            "2 Full Resume Reviews",
            "1-on-1 30 minute consultation",
            "Customized reviews according to your ideal role",
            "Receive detailed and actionable suggestions",
            "Line by line feedback",
            "Formating feedback",
            "Spelling and grammar feedback",
        ],
    }
]

export const faq = [
    {
        question: "What service do we provide?",
        answer: "We currently provide full resume reviews. We go into depth about how you can improve the formating of you resume and make your description more impactful and concise.",
    },
    {
        question: "How long does it take?",
        answer: "We aim to get back to our customers in 1-3 business days since we are doing this manually.",
    },
    {
        question: "How does the service work?",
        answer: "We will send an email containing a form for your resume to the email address you used for your purchase. Once you've filled it out, we will email you a document containing feedback on how to improve your resume",
    },
    {
        question: "What can we talk about in the one-on-one consultation?",
        answer: "We can address specific issues you face in the job hunting process or answer any questions you may have about the job hunting process."
    },
    {
        question: "Where is the email?",
        answer: "Please check your spam folder. If you still can't find it, please email us at ahad@ahadjawaid.com",
    },
    {
        question: "What is the refund policy?",
        answer: "We offer a 100% money back guarantee if you are not satisfied with our service if you request it within 7 days of purchasing our services.",
    },
    
]

export const testimonials = [
    {
        name: "Mariyam Zaki",
        title: "Student at University of Texas, Dallas",
        text: "Getting my resume reviewed was a fantastic decision. Their professional guidance and attention to detail greatly improved my resume. I'm now more confident than ever in my job search. I highly recommend this for anyone looking to enhance their resume.",
        path: "/testimonials/mariyam-zaki.jpg",
    },
    {
        name: "Joshua Jimmy",
        title: "Student at University of Texas, Dallas",
        text: "Until now, whenever I asked people to review my resume, they wouldn't say much because a big problem was my resume format, and the problems only became addressable once the format was changed. CS Resume Builder provided me with the solutions I needed.",
        path: "/testimonials/joshua-jimmy.jpg",
    },
    {
        name: "Matthew Pham",
        title: "Software Engineer Intern at Paycom",
        text: "I never made a resume before and didn’t really know what to do. After working with CS Resume Builder on my resume, I was able to make my bullet points and descriptions sound much more impactful and concise. Because of this, I was able to land a few internship offers.",
    },
]