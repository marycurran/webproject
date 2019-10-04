
/* the output is like following
    <ul>
        <li>D1</li>
        <li>D2</li>
        <li>D3</li>
        <li>D4</li>
        <li>D5</li>
    </ul>
for each name in department, need to generate a list
dept is an object
result +="<li>D1</li>"
${} means string signifier in javacode
the const dept thing is a variable for each element in the const depts
need to add child string to output
can debug on chrome and go through each step
result had to be at the top because it needs to run through it
*/

const depts = [
  {
    name: 'account',
    children: [],
  },
  {
    name: 'it',
    children: [
        {
            name: 'crm',
        },
        {
            name: 'ecommerce'
        },
    ],
  },
  {
      name: 'finance',
      children: [],
  },
]

let result='<ul>'

for (const dept of depts) {
    const deptStr= "<li>"+(dept.name)+"</li>"
    result += deptStr
    if (dept.children.length > 0) {
        let childStr= '<ul>'
        for (const child of dept.children) {
            childStr +='<li>' + child.name + '</li>'
        }
        childStr += '</ul>'
        result += childStr
    }
    
}

result += "</ul>"

const divElement= document.getElementById('output')
divElement.innerHTML = result

console.log(result)