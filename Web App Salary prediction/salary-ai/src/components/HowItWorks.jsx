import {

Database,

BrainCircuit,

LineChart,

BadgeDollarSign

} from "lucide-react";

const steps=[

{

icon:Database,

title:"Enter Details",

desc:"Provide your job title, experience, education, skills and location."

},

{

icon:BrainCircuit,

title:"AI Processing",

desc:"Machine Learning processes your information."

},

{

icon:LineChart,

title:"Salary Analysis",

desc:"The model compares your profile with historical salary data."

},

{

icon:BadgeDollarSign,

title:"Prediction",

desc:"Receive salary estimate, confidence score and recommendations."

}

];

function HowItWorks(){

return(

<section className="section bg-section">

<div className="container-custom">

<div className="text-center">

<h2 className="text-5xl font-bold text-primary">

How It Works

</h2>

<p className="subtitle">

Four simple steps to predict your expected salary.

</p>

</div>

<div className="grid lg:grid-cols-4 gap-8 mt-20">

{

steps.map((step,index)=>{

const Icon=step.icon;

return(

<div
key={index}
className="card p-8 text-center"
>

<div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">

<Icon

size={38}

className="text-primary"

/>

</div>

<h3 className="text-2xl font-bold mt-6">

{step.title}

</h3>

<p className="mt-4 text-gray-600">

{step.desc}

</p>

</div>

)

})

}

</div>

</div>

</section>

)

}

export default HowItWorks;