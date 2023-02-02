// THIS FILE IS AUTO GENERATED. DO NOT MODIFY!
import React from 'react';
import { GenIcon, IconBaseProps } from '../support/IconBase';

export interface AvatarOutlineProps extends IconBaseProps {
  color?: string;
}

export const AvatarOutline: React.FC<AvatarOutlineProps> = (
  props: AvatarOutlineProps
) =>
  GenIcon({
    tag: 'svg',
    attr: {
      focusable: 'false',
      ariaHidden: 'true',
      viewBox: '0 0 24 24',
      dataTestid: 'PersonIcon'
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
        }
      }
    ]
  })(props);
