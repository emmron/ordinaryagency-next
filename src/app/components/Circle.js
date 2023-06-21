import styled from 'styled-components';
import { motion } from 'framer-motion';

const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  z-index: 1; // Add this to bring the circle above the line
`;

const SeoStep = styled(motion.div)`
  font-size: 18px;
  margin-left: 15px;
  text-align: left;
`;

const Line = styled(motion.div)`
  border-left: 2px solid black;
  height: 100%;
  position: absolute;
  left: 25px; // Adjust this to match the center of the circle
  top: -25px; // Move the line up to start from the center of the circle
  z-index: 1; // Ensure the line is below the circle
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 30px 0; // Adjust this to give some space above for the line
  height: 70px; // Define a height for proper line positioning
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

  return (
    <CircleContainer>
      {numbers.map((number, index) => (
        <ItemContainer key={index}>
          <Circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {number}
          </Circle>
          {index < numbers.length - 1 && (
            <Line
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
            />
          )}
          <SeoStep>{seoSteps[index]}</SeoStep>
        </ItemContainer>
      ))}
    </CircleContainer>
  );
};

export default NumberCircles;
