'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Luis_Vivar_Machine_Learning.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
