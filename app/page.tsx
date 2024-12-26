'use client'
import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen h-[100%] w-screen flex flex-col items-start bg-white text-black">
      <Navbar />
      <AnimatePresence>
        {!started && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col text-[64px] font-semibold mt-[16vh] font-roboto mx-auto"
          >
            <p className="text-[21px] tracking-[0.011em] pb-[10px] font-thin leading-[1.381002381]">
              Apple Watch Studio
            </p>
            <p className="h-[68px] font-medium tracking-[-.009em] leading-[1]">
              Choose a case.
            </p>
            <p className="h-[68px] font-medium tracking-[-.009em] leading-[1]">
              Pick a band.
            </p>
            <p className="h-[68px] font-medium tracking-[-.009em] leading-[1]">
              Create your own style.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStarted(true)}
              className="z-10 text-[17px] w-[130px] py-[11px] px-[21px] mt-10 bg-[#0071E3] text-white font-thin rounded-full"
            >
              Get started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 1 }}
        animate={
          started
            ? { scale: 0.7, x: "0%", y: "0%" }
            : { scale: 1, x: "0%", y: "0%" }
        }
        transition={{ duration: 0.5 }}
        className="relative size-[844.47px] -mt-[52px] mx-auto"
      >
        <Image
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"
          alt="Apple Watch Design Studio Logo"
          width={236}
          height={102}
          className="absolute left-10 size-[844.47px]"
        />
        <Image
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
          alt="Apple Watch Design Studio Logo"
          width={236}
          height={102}
          className="absolute left-10 size-[844.47px]"
        />
      </motion.div>

      <AnimatePresence>
        {started && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed top-20 left-1/2 -translate-x-1/2"
            >
              <select className="p-2 border rounded">
                <option>Collections</option>
                <option>Cases</option>
                <option>Bands</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-20 left-[42%] -translate-x-1/2 flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[#0071E3] text-white rounded-full"
              >
                Size
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[#0071E3] text-white rounded-full"
              >
                Case
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[#0071E3] text-white rounded-full"
              >
                Band
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;