"use client";
import React, { useState } from "react";
import logo from "@/img/logo.png";
import Image from "next/image";

export const FormComponent = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };

  const copyLink = () => {
    const link = `api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
      text
    )}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopyMessage("Copied");
      setTimeout(() => {
        setCopyMessage("");
      }, 2000);
    });
  };

  const openLinkInNewTab = () => {
    const link = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
      text
    )}`;
    window.open(link, "_blank");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src={logo} alt="logo" className="mx-auto h-20 w-auto" />
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Whatsapp Link Builder
        </h1>
      </div>
      <div className="chat chat-start mt-4">
        <p className="chat-bubble text-wrap text-xl break-words ...">
          {`api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
            text
          )}`}
        </p>
      </div>
      <div className="w-full mx-auto max-w-md sm:px-6 lg:px-8">
        <div className="col-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="w-full mt-4 flex flex-col justify-center items-center">
              <label
                className="text-xl font-bold leading-9 tracking-tight text-white"
                htmlFor="whatsapp-number"
              >
                Whatsapp Number
              </label>
              <input
                id="whatsapp-number"
                className="mt-1 text-black input input-bordered w-full max-w-md"
                type="text"
                value={number}
                placeholder="Enter whatsapp number"
                onChange={(e) => setNumber(e.target.value)}
                aria-label="Whatsapp Number"
              />
            </div>

            <div className="w-full mt-4 flex flex-col justify-center items-center">
              <label
                className="text-xl font-bold leading-9 tracking-tight text-white"
                htmlFor="message-text"
              >
                Message
              </label>
              <textarea
                id="message-text"
                className="mt-1 text-black textarea textarea-bordered w-full max-w-md resize-none"
                placeholder="Enter text for your link"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                aria-label="Message Text"
              />
            </div>
            <button
              type="button"
              onClick={copyLink}
              className="btn btn-primary w-40 mt-10"
              aria-live="polite"
            >
              {copyMessage || "Copy"}
            </button>
            <button
              type="button"
              disabled={!text || !number}
              onClick={openLinkInNewTab}
              className="btn btn-secondary w-40 mt-10"
              aria-live="polite"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
