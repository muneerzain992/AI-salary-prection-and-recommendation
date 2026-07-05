import { motion } from "framer-motion";
import {

DollarSign,

TrendingUp,

BadgeCheck

} from "lucide-react";

function ResultCard(){

return(

<motion.div

initial={{opacity:0,x:50}}

whileInView={{opacity:1,x:0}}

transition={{duration:.8}}

viewport={{once:true}}

className="card p-8"

>

<div className="flex justify-between">

<h2 className="text-3xl font-bold">

Prediction Result

</h2>

<DollarSign
size={42}
className="text-primary"
/>

</div>

<div className="mt-10 text-center">

<h1 className="text-6xl font-bold text-primary">

$82,450

</h1>

<p className="mt-3">

Estimated Annual Salary

</p>

</div>

<div className="mt-10">

<div className="flex justify-between">

<span>Confidence</span>

<span>96%</span>

</div>

<div className="h-4 rounded-full bg-gray-200 mt-2">

<div

className="bg-primary h-4 rounded-full"

style={{

width:"96%"

}}

>

</div>

</div>

</div>

<div className="mt-8 space-y-5">

<div className="flex items-center gap-3">

<BadgeCheck
className="text-primary"
/>

Market Competitive

</div>

<div className="flex items-center gap-3">

<TrendingUp
className="text-primary"
/>

Salary Growth Expected

</div>

</div>

</motion.div>

)

}

export default ResultCard;