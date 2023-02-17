import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#49869ea7"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
