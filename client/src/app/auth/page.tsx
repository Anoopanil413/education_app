"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Form from "@/components/form/form";

import bg1 from "../../../public/bgimg1.jpg";
import bg2 from "../../../public/bgimg2.jpg";

export type PageProp = "signup" | "signin";

const MotionDiv = motion.div;
const MotionButton = motion.button;

export default function Home() {
  const [userpage, setUserpage] = useState<PageProp>("signin");

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden z-0">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image src={bg1} alt="bg1" layout="fill" objectFit="cover" />
        </MotionDiv>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z-0">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-full h-full"
        >
          <Image src={bg2} alt="bg2" layout="fill" objectFit="cover" />
        </MotionDiv>
      </div>

      {/* Authentication Component */}
      <div
        className={`absolute ${userpage == "signup" ? "right-52 top-28" : "left-52 top-28"
          } flex flex-col items-center justify-center z-10 `}
      >
        <AnimatePresence mode="wait">
          <MotionDiv
            key={userpage}
            initial={{ opacity: 0, x: userpage === "signin" ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: userpage === "signin" ? 0 : 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <Form page={userpage} />
          </MotionDiv>
        </AnimatePresence>
      </div>

      {/* Toggle Button */}
      <div className="absolute bottom-10 w-full flex items-center justify-center z-20">
        <div
          className={`w-full max-w-md flex ${userpage === "signup" ? "justify-end" : "justify-start"
            } items-center`}
        >
          <MotionButton
            className="border mt-4 font-semibold rounded-full px-4 py-2 bg-blue-400 text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              setUserpage((prevState) =>
                prevState === "signin" ? "signup" : "signin"
              )
            }
          >
            {userpage === "signin" ? "Sign up" : "Sign in"}{" "}
            {userpage === "signin" ? (
              <FontAwesomeIcon icon={faArrowRight} />
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} />
            )}
          </MotionButton>
        </div>
      </div>
    </div>
  );
}
