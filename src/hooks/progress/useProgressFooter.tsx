import React, { useContext, useEffect } from 'react';
import { FooterContext } from '../../components/Layout';
import ProgressFooter, {
  type ProgressFooterProps,
} from '../../components/ProgressFooter';

const useProgressFooter = (progress: ProgressFooterProps | undefined) => {
  const setFooter = useContext(FooterContext);
  useEffect(() => {
    if (progress) {
      setFooter(<ProgressFooter {...progress} />);
    }
  }, [progress, setFooter]);
};

export default useProgressFooter;
