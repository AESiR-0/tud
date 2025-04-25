"use client"

import React, { useState } from "react"
import {useForm, } from "@formspree/react"
import { dfont, mfont } from "./fonts"


export const Contact = () => {

    // const initValues = {fullname: "", email: "", phone: "", spends: "0-5 Lakh", link: "" }
    const initValues = { phone: "", spends: "0-5 Lakh", industry: "Coaching", scale: "Within 1 Month",
                        invest: "Yes, I’m looking to scale", link: "" }
    const initState = {values: initValues}

    const [state, setState ] = useState(initState)

    const handleChange = ({target}: {target: any}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }

    }) )

    const { values} = state
    const [sub, handleSubmit] = useForm('mnnadvgv')

    const submitDisabled = ({values}: {values:any}) => {
        // if (!values.fullname || !values.email || !values.link || !values.phone) {
        if (!values.spends || !values.industry || !values.scale || !values.invest || !values.link || !values.phone) {
            return true
        } else {
            return false
        }
    }
    const onFormSubmit = (values: any) => {
        handleSubmit(values)
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                ...initValues
            }
        }))
    }
 
    return (
        <div className="flex w-full flex-col justify-center max-w-5xl items-center pt-2  pb-2">
            <h1 className={`${mfont.variable} font-sans  text-center text-2xl md:text-4xl pt-6 lg:text-6xl 
                font-medium pb-2`}>Submit the form and we will contact you.</h1>
                {/* Want an Audit to your AD Account */}
            <form id="leads" className="py-4 mt-4 flex flex-col gap-5 w-full justify-center items-center" method="POST" onSubmit={onFormSubmit}>
                {/* <div className="flex flex-col gap-1 w-[20em] md:w-[25em]">
                    <label htmlFor="fullname" className={`${dfont.variable} font-dfont`}>Full Name</label>
                    <input type="text" id="fullname" placeholder="John Doe" required value={values.fullname} name="fullname"
                        onChange={handleChange}
                        className="shadow-md px-6 py-2 border border-slate-300 bg-white rounded-2xl"/>
                </div> */}
                {/* <div className="flex flex-col gap-1 w-[20em] md:w-[25em]">
                    <label htmlFor="email" className={`${dfont.variable} font-dfont`}>Email</label>
                    <input type="email" id="email" placeholder="john@gmail.com" required value={values.email} name="email"
                        onChange={handleChange}
                        className="shadow-md px-6 py-2 border border-slate-300 bg-white rounded-2xl"/>
                </div> */}
                <div className="flex flex-col gap-1 w-[20em] md:w-[25em]">
                    <label htmlFor="spends" className={`${dfont.variable} font-dfont`}>Your Monthly Ad Spend?</label>
                    <select name="spends" id="spends" className="shadow-md px-6 py-2 border bg-white border-slate-300 rounded-2xl"
                        onChange={handleChange} required value={values.spends}>
                        <option  className={`${dfont.variable} font-dfont`}>0-5 Lakh</option>
                        <option  className={`${dfont.variable} font-dfont`}>5-10 Lakh</option>
                        <option className={`${dfont.variable} font-dfont`}>10-15 Lakh</option>
                        <option  className={`${dfont.variable} font-dfont`}>More than 15 Lakh</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 w-[20em] md:w-[25em]">
                    <label htmlFor="industry" className={`${dfont.variable} font-dfont`}>Industry Type?</label>
                    <select name="industry" id="industry" className="shadow-md px-6 py-2 border bg-white border-slate-300 rounded-2xl"
                        onChange={handleChange} required value={values.industry}>
                        <option  className={`${dfont.variable} font-dfont`}>Coaching</option>
                        <option  className={`${dfont.variable} font-dfont`}>E-Commerce</option>
                        <option className={`${dfont.variable} font-dfont`}>Other</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 w-[20em] md:w-[25em]">
                    <label htmlFor="scale" className={`${dfont.variable} font-dfont`}>How Soon Do You Want to Scale?</label>
                    <select name="scale" id="scale" className="shadow-md px-6 py-2 border bg-white border-slate-300 rounded-2xl"
                        onChange={handleChange} required value={values.scale}>
                        <option  className={`${dfont.variable} font-dfont`}>Within 1 Month</option>
                        <option  className={`${dfont.variable} font-dfont`}>1-3 Months</option>
                        <option className={`${dfont.variable} font-dfont`}>Just Exploring</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 w-[20em] md:w-[25em]">
                    <label htmlFor="invest" className={`${dfont.variable} font-dfont`}>Are You Open to Investing in Paid Ads for Growth?</label>
                    <select name="invest" id="invest" className="shadow-md px-6 py-2 border bg-white border-slate-300 rounded-2xl"
                        onChange={handleChange} required value={values.invest}>
                        <option  className={`${dfont.variable} font-dfont`}>Yes, I’m looking to scale</option>
                        <option  className={`${dfont.variable} font-dfont`}>No, I just want free advice</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1 w-[20em] md:w-[25em]">
                    <label htmlFor="phone" className={`${dfont.variable} font-dfont`}>Whatsapp Number</label>
                    <input type="tel" id="phone" placeholder="Your 10 digit whatsapp number" required value={values.phone} name="phone"
                        onChange={handleChange} pattern="[0-9]{10}"
                        className="shadow-md px-6 py-2 border border-slate-300 bg-white rounded-2xl"/>
                </div>
                
                <div className="flex flex-col gap-1 w-[20em] md:w-[25em]">
                    <label htmlFor="link" className={`${dfont.variable} font-dfont`}>Your Business link or website</label>
                    <input id="link" placeholder="https://businessname.in/" required value={values.link} name="link"
                        onChange={handleChange} type="url"
                        className="shadow-md px-6 py-2 border border-slate-300 bg-white rounded-2xl h-16"/>
                </div>
                <div className="flex flex-col gap-2">
                <button className={`${dfont.variable} font-dfont bg-black rounded-2xl p-2 font-bold w-[10rem] ${submitDisabled(state) ? 'bg-black-200 text-white-200': 'bg-black text-white'}`} 
                        disabled={submitDisabled(state)}  type="submit">Submit</button>
                </div>
            </form>
            {sub.succeeded &&
                <div className="flex flex-col">
                    <div className="text-green-600 px-5 py-2">Submitted</div>
                </div>
             }
            {sub.errors &&
                <div className="flex flex-col">
                    <div className="text-red-600 px-5 py-2">Form not submitted</div>
                </div>
             }

            
        </div>
    )
}