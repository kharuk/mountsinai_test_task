import React, { useState } from 'react';
import { User } from 'styled-icons/typicons/User';
import { AvatarContainer, AvatarImg } from './styles';
import { colors } from 'shared/variables/colors';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: number;
  url?: string;
  isLink?: boolean;
  ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}

export const Avatar: React.FC<Props> = ({ size, url, isLink, ...props }) => {
  const [isImgExist, setIsImageExist] = useState<boolean>(true);

  const handleError = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.target.onerror = null;
    setIsImageExist(false);
  };

  return (
    <AvatarContainer size={size} isLink={isLink} {...props}>
      {!!url && isImgExist ? (
        <AvatarImg
          src={url}
          alt="avatar"
          onError={(e: React.ChangeEvent<HTMLImageElement>) => handleError(e)}></AvatarImg>
      ) : (
        <User color={colors.grey} />
      )}
    </AvatarContainer>
  );
};
