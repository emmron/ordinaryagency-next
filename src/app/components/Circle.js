import styled from 'styled-components';
import { motion } from 'framer-motion';

const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
  margin-bottom: 80px;
`;

const SeoStep = styled(motion.div)`
  font-size: 18px;
  margin-left: 15px;
  text-align: left;
`;

const Line = styled(motion.div)`
  border-left: 2px solid black;
  height: 80%;
  position: absolute;
  bottom: -80%;
  left: 50%;
`;

const NumberCircles = () => {
  const numbers = [1, 2, 3, 4, 5];
  const seoSteps = [
    'Step 1: Keyword Research',
    'Step 2: On-page Optimization',
    'Step 3: Content Creation',
    'Step 4: Off-page Optimization',
    'Step 5: Performance Analysis',
  ];
  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };
  const lineVariants = {
    hidden: { height: '0%' },
    visible: { height: '80%' },
  };

  return (
    <CircleContainer>
      {numbers.map((number, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: index < numbers.length - 1 ? '30px' : '0',
          }}
        >
          <Circle
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {number}
            {index < numbers.length - 1 && (
              <Line
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
              />
            )}
          </Circle>
          <SeoStep>{seoSteps[index]}</SeoStep>
        </div>
      ))}
    </CircleContainer>
  );
};

export default NumberCircles;
