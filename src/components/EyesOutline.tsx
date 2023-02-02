// THIS FILE IS AUTO GENERATED. DO NOT MODIFY!
import React from 'react';
import { GenIcon, IconBaseProps } from '../support/IconBase';

export interface EyesOutlineProps extends IconBaseProps {
  color?: string;
}

export const EyesOutline: React.FC<EyesOutlineProps> = (
  props: EyesOutlineProps
) =>
  GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 16 16', fill: 'none' },
    child: [
      {
        tag: 'g',
        attr: { clipPath: 'url(#clip0)' },
        child: [
          {
            tag: 'path',
            attr: {
              d: 'M0.667969 7.99984C0.667969 7.99984 3.33464 2.6665 8.0013 2.6665C12.668 2.6665 15.3346 7.99984 15.3346 7.99984C15.3346 7.99984 12.668 13.3332 8.0013 13.3332C3.33464 13.3332 0.667969 7.99984 0.667969 7.99984Z',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            }
          },
          {
            tag: 'path',
            attr: {
              d: 'M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            }
          }
        ]
      },
      {
        tag: 'defs',
        attr: {},
        child: [
          {
            tag: 'clipPath',
            attr: { id: 'clip0' },
            child: [
              {
                tag: 'rect',
                attr: { width: '16', height: '16', fill: 'currentColor' }
              }
            ]
          }
        ]
      }
    ]
  })(props);
