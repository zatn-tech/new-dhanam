import BranchCard from './BranchCard';
import AnimatedContainer from './AnimatedContainer';

const BranchesContainer = ({ branches }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
      {branches.map((branch, index) => (
        <AnimatedContainer key={index} delay={index * 200}>
          <BranchCard {...branch} />
        </AnimatedContainer>
      ))}
    </div>
  );
};

export default BranchesContainer;