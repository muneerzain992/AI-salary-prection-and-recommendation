import { motion } from "framer-motion";
import { useState } from "react";

function PredictionForm() {

const [formData,setFormData]=useState({

job_title:"",
experience_years:"",
education_level:"",
skills_count:"",
industry:"",
company_size:"",
location:"",
remote_work:"",
certifications:""

});

const handleChange=(e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};

const handleSubmit=(e)=>{

e.preventDefault();

console.log(formData);

};

return(

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}

viewport={{once:true}}

className="card p-8"

>

<h2 className="text-3xl font-bold text-primary mb-8">

Predict Your Salary

</h2>

<form
onSubmit={handleSubmit}
className="grid md:grid-cols-2 gap-5"
>

<input
type="text"
name="job_title"
placeholder="Job Title"
className="border rounded-xl p-4"
onChange={handleChange}
/>

<input
type="number"
name="experience_years"
placeholder="Years of Experience"
className="border rounded-xl p-4"
onChange={handleChange}
/>

<select
name="education_level"
className="border rounded-xl p-4"
onChange={handleChange}
>

<option>Bachelor</option>
<option>Master</option>
<option>PhD</option>
<option>Diploma</option>

</select>

<input
type="number"
name="skills_count"
placeholder="Skills Count"
className="border rounded-xl p-4"
onChange={handleChange}
/>

<input
type="text"
name="industry"
placeholder="Industry"
className="border rounded-xl p-4"
onChange={handleChange}
/>

<input
type="text"
name="company_size"
placeholder="Company Size"
className="border rounded-xl p-4"
onChange={handleChange}
/>

<input
type="text"
name="location"
placeholder="Location"
className="border rounded-xl p-4"
onChange={handleChange}
/>

<select
name="remote_work"
className="border rounded-xl p-4"
onChange={handleChange}
>

<option>Yes</option>
<option>No</option>
<option>Hybrid</option>

</select>

<input
type="number"
name="certifications"
placeholder="Certifications"
className="border rounded-xl p-4"
onChange={handleChange}
/>

<div className="md:col-span-2">

<button
className="primary-btn w-full"
>

Predict Salary

</button>

</div>

</form>

</motion.div>

)

}

export default PredictionForm;