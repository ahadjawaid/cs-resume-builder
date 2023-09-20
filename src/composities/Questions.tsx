import { sizeStyle } from "@/config";

interface QuestionsProps {
    questions: {
        question: string;
        answer: string;
    }[];
}

export default function Questions({ questions }: QuestionsProps) {
    const columns = 2;

    return (
        <div className={`flex flex-col gap-y-12 ${sizeStyle}`}>
            <div>
                <div>
                    <h2 className="text-blue-600 font-bold tracking-tight uppercase text-md sm:text-lg">
                        Questions
                    </h2>
                    <h3 className="text-slate-800 text-4xl sm:text-5xl font-bold tracking-tight mt-1">
                        Frequently Asked Questions
                    </h3>
                </div>
                <p className="text-slate-500 text-md sm:text-lg mt-4">
                    Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                </p>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6`}>
                {
                    questions.map(({ question, answer }, index) => (
                        <div key={index} className="flex flex-col gap-3 max-w-xl">
                            <h4 className="text-slate-800 text-lg font-bold tracking-tight">
                                {question}
                            </h4>
                            <p className="text-slate-500 text-md sm:text-lg">
                                {answer}
                            </p>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
}