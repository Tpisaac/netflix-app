import{r as a,U as p,c as m,j as e,L as x}from"./index-7b5ca45e.js";const f=()=>{const[t,l]=a.useState(""),[r,c]=a.useState(""),{user:u,signUp:n}=p(),i=m(),d=async s=>{s.preventDefault();try{await n(t,r),i("/")}catch(o){console.log(o)}};return e.jsxs("div",{className:"w-full h-screen",children:[e.jsx("img",{className:"hidden sm:block absolute w-full h-full object-cover",src:"https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/884d76bc-9b8d-4a24-846f-b31d4f6f1057/GB-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg",alt:"/"}),e.jsx("div",{className:"bg-black/20 fixed top-0 left-0 w-full h-screen"}),e.jsx("div",{className:"fixed w-full px-4 py-24 z-50",children:e.jsx("div",{className:"max-w-[450px] h-[600px] mx-auto text-white bg-black/75",children:e.jsxs("div",{className:"max-w-[320px] mx-auto py-16",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Sign Up"}),e.jsxs("form",{onSubmit:d,className:"w-full flex flex-col py-4",children:[e.jsx("input",{onChange:s=>l(s.target.value),className:"p-3 my-2 bg-gray-700 rounded",type:"email",placeholder:"Email",autoComplete:"email",required:!0}),e.jsx("input",{onChange:s=>c(s.target.value),className:"p-3 my-2 bg-gray-700 rounded",type:"password",placeholder:"Password",autoComplete:"current-password",required:!0}),e.jsx("button",{className:"bg-red-600 py-3 my-6 rounded font-bold",children:"Sign Up"}),e.jsxs("div",{className:"flex justify-between items-center text-sm text-gray-500",children:[e.jsxs("p",{children:[e.jsx("input",{className:"mr-2",type:"checkbox"}),"Remember me"]}),e.jsx("p",{children:e.jsx("a",{href:"https://www.netflix.com/gb/",target:"_blank",children:"Need Help?"})})]}),e.jsxs("p",{className:"py-10",children:[e.jsx("span",{className:"text-gray-500",children:"Already subscribed to Netflix?"}),e.jsx(x,{to:"/login",children:" Sign In"})]})]})]})})})]})};export{f as default};
