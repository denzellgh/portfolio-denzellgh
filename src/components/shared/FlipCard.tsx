import { motion } from 'framer-motion';
import { useState } from 'react';

export const FlipCard = () => {
  console.log(motion);
  const [flip, setFlip] = useState(true);
  const [hiddenFeature, setHiddenFeature] = useState(false);

  return (
    <>
      <motion.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 0 : 180 }}
        className="flex aspect-square items-center justify-center rounded-2xl border border-[#0EA5E9]/30 bg-gradient-to-br from-[#0EA5E9]/20 via-[#7C3AED]/20 to-[#10B981]/20 backdrop-blur-sm"
      >
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          style={{ display: flip ? 'block' : 'none' }}
          className="backface-hidden"
        >
          <div className="text-center">
            <div
              className="mb-4 cursor-alias text-8xl"
              onClick={() => {
                setFlip(prevState => !prevState);
                setHiddenFeature(!hiddenFeature);
              }}
            >
              👨‍💻{' '}
            </div>
            <p className="text-sm text-[#A1A1AA]">
              Crafting digital experiences
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: flip ? 180 : 0 }}
          style={{ display: flip ? 'none' : 'block' }}
          transition={{ duration: 0.7 }}
          onClick={() => {
            setFlip(prevState => !prevState);
            setHiddenFeature(!hiddenFeature);
          }}
          className="backface-hidden"
        >
          <div className="flex h-[32rem] cursor-alias">
            {hiddenFeature ? (
              <iframe
                width="1"
                height="1"
                src="//www.youtube.com/embed/JVTS3fyoAEQ?autoplay=1&playlist=JVTS3fyoAEQ&start=7&end=55"
              ></iframe>
            ) : (
              <></>
            )}
            ;
            <img
              className="h-full w-full"
              src="/cyberpunk-character.png"
              alt="logo"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
