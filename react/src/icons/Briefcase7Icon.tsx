import React from 'react';
import config from '../config';

interface Briefcase7IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Briefcase7Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/briefcase7)
 * @see {@link https://clicons.dev/icon/briefcase7}
 */
const Briefcase7Icon = React.forwardRef<SVGSVGElement, Briefcase7IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M1.99934 12.4999H21.9993'
    }
  ],
  [
    'path',
    {
      d: 'M7.49934 10.9999V13.9999M16.4993 13.9999V10.9999'
    }
  ],
  [
    'path',
    {
      d: 'M1.99934 14L1.99935 13.4999C1.99935 10.2 1.99936 8.55012 3.02448 7.525C4.04961 6.49988 5.69952 6.49988 8.99935 6.49988H15.0005C18.2999 6.49988 19.9495 6.49988 20.9746 7.5248C21.9997 8.54971 22 10.1994 22.0005 13.4987L22.0006 13.999C22.0012 17.2994 22.0015 18.9496 20.9763 19.9749C19.9511 21.0003 18.3009 21.0002 15.0005 21.0002L8.99919 21C5.69941 21 4.04953 20.9999 3.02443 19.9748C1.99933 18.9497 1.99934 17.2998 1.99934 14Z'
    }
  ],
  [
    'path',
    {
      d: 'M8.49934 6.49988C8.49934 5.09542 8.49934 4.39318 8.8364 3.88874C8.98232 3.67036 9.16982 3.48286 9.3882 3.33694C9.89265 2.99988 10.5949 2.99988 11.9993 2.99988C13.4038 2.99988 14.106 2.99988 14.6105 3.33694C14.8289 3.48286 15.0164 3.67036 15.1623 3.88874C15.4993 4.39318 15.4993 5.09542 15.4993 6.49988'
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

Briefcase7Icon.displayName = 'Briefcase7Icon';
export default Briefcase7Icon;
