import React from 'react';
import config from '../config';

interface Briefcase2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Briefcase2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/briefcase2)
 * @see {@link https://clicons.dev/icon/briefcase2}
 */
const Briefcase2Icon = React.forwardRef<SVGSVGElement, Briefcase2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.49869 6.50012C8.49869 5.09566 8.49869 4.39343 8.83575 3.88898C8.98167 3.6706 9.16917 3.4831 9.38755 3.33718C9.89199 3.00012 10.5942 3.00012 11.9987 3.00012C13.4032 3.00012 14.1054 3.00012 14.6098 3.33718C14.8282 3.4831 15.0157 3.6706 15.1616 3.88898C15.4987 4.39343 15.4987 5.09566 15.4987 6.50012'
    }
  ],
  [
    'path',
    {
      d: 'M19.9981 6.50028L3.99901 6.50012C2.89455 6.50019 1.99891 7.3958 1.99881 8.50025C1.99891 10.7092 3.7902 12.5005 5.99916 12.5007H17.998C20.2069 12.5006 21.9981 10.7094 21.9982 8.50042C21.9982 7.39594 21.1026 6.50036 19.9981 6.50028Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.49869 11.0001V14.0001M16.4987 14.0001V11.0001'
    }
  ],
  [
    'path',
    {
      d: 'M2.00114 8.50012L1.99899 13.9971C1.9977 17.298 1.99705 18.9485 3.02223 19.9741C4.04741 20.9997 5.69789 20.9998 8.99883 20.9998L14.9999 21C18.2992 21 19.9489 21.0001 20.974 19.9752C21.9991 18.9503 21.9994 17.3006 22.0001 14.0013L22.0011 8.50012'
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

Briefcase2Icon.displayName = 'Briefcase2Icon';
export default Briefcase2Icon;
