import { motion } from 'framer-motion';
import { useState } from 'react';
import GradientText from '../GradientText';
import { cn } from '@/lib';
import { toast } from 'sonner';

export const FlipCard = () => {
  console.log(motion);
  const [flip, setFlip] = useState(true);
  const [hiddenFeature, setHiddenFeature] = useState(false);

  return (
    <>
      <motion.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 0 : 180 }}
        className="flex aspect-square w-full items-center justify-center rounded-2xl border border-[#0EA5E9]/30 bg-gradient-to-br from-[#0EA5E9]/20 via-[#7C3AED]/20 to-[#10B981]/20 p-2 max-md:max-h-[35rem] max-sm:max-h-96"
      >
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className={cn(
            'flex h-full flex-col justify-center gap-10 text-center text-xl backface-hidden sm:gap-16 sm:text-3xl lg:gap-20 md:p-3.5',
            flip ? '' : 'hidden',
          )}
        >
          <GradientText
            colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
            animationSpeed={6}
            showBorder={false}
          >
            <p className="font-bold">Products with a genuine impact</p>
          </GradientText>
          <GradientText
            colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
            animationSpeed={5}
            showBorder={false}
            onClick={() => {
              setFlip(prevState => !prevState);
              setHiddenFeature(!hiddenFeature);
              toast.success('Easter Egg', {
                description:
                  'Congrats! You have discovering a hidden feature 🚀',
              });
            }}
          >
            <p className="font-bold cursor-pointer">Technology that truly helps people</p>
          </GradientText>
          <GradientText
            colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
            animationSpeed={4}
            showBorder={false}
          >
            <p className="font-bold">Grow within fast-paced startups</p>
          </GradientText>
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
          className="h-full backface-hidden"
        >
          <div className="flex h-full cursor-pointer">
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
              className="h-full object-contain"
              src="/cyberpunk-character-compressed.png"
              alt="Cyberpunk character illustration"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
