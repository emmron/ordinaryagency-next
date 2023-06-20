import styled from 'styled-components';
import { motion } from 'framer-motion';

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const Line = styled(motion.div)`
  border-top: 2px solid black;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NumberCircles = () => {
  const numbers = [1, 2, 3, 4, 5];
  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 }
  };
  const lineVariants = {
    hidden: { width: '0%' },
    visible: { width: '80%' }
  };

  return (
    <CircleContainer>
      {numbers.map((number, index) => (
        <Circle
          key={index}
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
      ))}
    </CircleContainer>
  );
};

export default NumberCircles;
