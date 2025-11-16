import React from 'react';
import config from '../config';

interface AngryBirdIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AngryBirdIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/angry-bird)
 * @see {@link https://clicons.dev/icon/angry-bird}
 */
const AngryBirdIcon = React.forwardRef<SVGSVGElement, AngryBirdIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5 9.19028C16.9878 7.3721 14.7872 6 12.5 6C8.35786 6 4.5 10.5 4.5 14C4.5 18.1421 8.35786 21 12.5 21C13.0064 21 13.5086 20.9573 14 20.8747'
    }
  ],
  [
    'path',
    {
      d: 'M13 8.5L17.7059 10L21 8'
    }
  ],
  [
    'path',
    {
      d: 'M20.6089 16.1305H22L20.1374 14.5872C18.8302 13.5041 18.1766 12.9625 17.4061 13.002C16.6357 13.0415 16.0515 13.6466 14.8831 14.8567L14.7463 14.9984C14.2628 15.4993 14.021 15.7497 14.0017 16.0446C13.9983 16.0956 14 16.1467 14.0066 16.1974C14.0447 16.4908 14.302 16.7278 14.8167 17.2016C16.1158 18.3976 16.7654 18.9957 17.527 19C17.6567 19.0007 17.7862 18.9889 17.9133 18.9648C18.6592 18.823 19.1688 18.1193 20.1879 16.7119L20.6089 16.1305ZM20.6089 16.1305H17.8266'
    }
  ],
  [
    'path',
    {
      d: 'M13.008 12L12.999 12'
    }
  ],
  [
    'path',
    {
      d: 'M20.008 11.5L19.999 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M13 6C12.7333 5 11.56 3 9 3'
    }
  ],
  [
    'path',
    {
      d: 'M11 6C10.5 5.47719 9 4.58841 7 5.21578'
    }
  ],
  [
    'path',
    {
      d: 'M2 11L4 14L2 15'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

AngryBirdIcon.displayName = 'AngryBirdIcon';
export default AngryBirdIcon;
