// Example 1

function square(number) {
    return number * number
}

const sq = number => number * number;

console.log(sq(2))

// Example 2

const listOfJobs = [
    { id: 1, isActive: true}, 
    { id: 2, isActive: true}, 
    { id: 3, isActive: false}  
]

let activeJobs = listOfJobs.filter(function getActive (job) { return job.isActive })

console.log(activeJobs)

let activeJobs2 = listOfJobs.filter(job => job.isActive);

console.log(activeJobs2)