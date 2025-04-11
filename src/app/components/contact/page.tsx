


"use client"

import Image from "next/image";
import India from "../../../../public/assets/india.png"
import { useState } from "react"
import { IoChevronDownOutline } from "react-icons/io5";


const organizationTypes = ["Corporate", "Non-Profit", "Educational", "Government", "Other"]

interface FormData {
  firstName: string
  lastName: string
  email: string
  contactNumber: string
  organizationType: string
  zipCode: string
  source: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    organizationType: "",
    zipCode: "",
    source: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mt-[16px] mx-auto p-6 bg-[#fafafa] rounded-lg shadowcss">
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-black mb-2">
            First name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#E6E6E6] border border-[#B3B3B3] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-black mb-2">
            Last name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#B3B3B3] bg-[#E6E6E6] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-black mb-2">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 border border-[#B3B3B3] py-2 bg-[#E6E6E6] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contactNumber" className="block text-black mb-2">
            Contact Number*
          </label>
          <div className="flex border border-[#B3B3B3] rounded-md">
            <div className="flex items-center gap-3 px-3 bg-[#E6E6E6] text-[black]  ">
            <Image src={India} alt="india-image " className="" />
            {/* <img src="./assets/india.png" alt="" /> */}
            <div>+91</div>
            </div>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#E6E6E6] text-black focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
            />
          </div>
        </div>

        {/* Organization Type */}
        <div>
          <div className="relative">
            <select
              id="organizationType"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              required
              className="w-full border border-[#B3B3B3] px-4 py-2 bg-[#E6E6E6] text-[#7E7E84] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
            >
              <option value="" className="text-[#7E7E84]"> Organization Type*</option>
              {organizationTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <IoChevronDownOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Zip Code */}
        <div>
          
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code*"
            required
            className="border border-[#B3B3B3] w-full px-4 py-2 bg-[#E6E6E6] text-[#000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
          />
        </div>
      </div>

      {/* How did you hear about us */}
      <div className="mt-6">
        <label htmlFor="source" className="block text-black mb-2">
          How did you hear about us*
        </label>
        <input
          type="text"
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          required
          placeholder="e.g Instagram, Facebook, friend, linkedIn*"
          className="w-full border border-[#B3B3B3] px-4 py-2 bg-[#E6E6E6] text-[#000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6 ">
        <button
          type="submit"
          className="w-full py-3 bg-[#2D9CDB] text-[#F6F6F6] font-medium rounded-md hover:bg-[#2880b3] transition-colors"
        >
          Submit
        </button>
        
      </div>

      
    </form>
  )
}