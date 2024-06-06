"use client";
import React, { useState } from "react";
import logo from "@/img/logo.png";
import Image from "next/image";

export const FormComponent = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };

  const copyLink = (e) => {
    let link = document.querySelector(".link").innerText;
    let linkNew = link.replace(/\++/g, "");
    navigator.clipboard.writeText(linkNew);
    let button = e.target;
    button.style.color = "greenyellow";
    button.innerText = "Copied";
    const form = button.parentElement;
    const tip = document.createElement("SPAN");
    tip.innerText = "*** Whatsapp link is in your CLIPBOAD ***";
    tip.style.color = "yellow";
    form.insertBefore(tip, button);
    setTimeout(() => {
      button.style.color = "white";
      button.innerText = "Copy";
      form.removeChild(tip);
    }, 1000);
  };

  return (
    <div>
      <div className="justify-content-center text-center">
        <div xs={12} lg={6}>
          <Image src={logo} alt="logo" />
          <h1 className="title">Whatsapp link builder</h1>
        </div>
      </div>
      <div className="justify-content-center text-center">
        <div xs={12} lg={6}>
          <div className="link">{`api.whatsapp.com/send?phone=${number}&text=${text}`}</div>
        </div>
      </div>
      <div className="justify-content-center">
        <div xs={10}>
          <form onSubmit={handleSubmit}>
            <div controlId="formBasicNumber">
              <label className="textlabel">Whatsapp Number</label>
              <input
                type="text"
                value={number}
                placeholder="Enter whatsapp number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div controlId="formBasicText">
              <label className="textlabel">Message</label>
              <input
                as="textarea"
                placeholder="Enter text for your link"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <button
              style={{ height: 100, marginTop: 50 }}
              variant="primary"
              size="lg"
              block
              onClick={copyLink}
              className="animate__lightSpeedOutLeft"
            >
              Copy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
