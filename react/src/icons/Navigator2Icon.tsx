import React from 'react';
import config from '../config';

interface Navigator2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Navigator2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/navigator2)
 * @see {@link https://clicons.dev/icon/navigator2}
 */
const Navigator2Icon = React.forwardRef<SVGSVGElement, Navigator2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 4L2.99997 4M21 20L2.99997 20'
    }
  ],
  [
    'path',
    {
      d: 'M7.13475 9.66101C9.0449 10.6709 9.99997 11.1759 9.99997 12C9.99997 12.8241 9.0449 13.3291 7.13475 14.339L5.83399 15.0267C4.36702 15.8023 3.63353 16.1901 3.28087 15.9082C3.18606 15.8324 3.10784 15.7325 3.05232 15.6163C2.84584 15.1841 3.26182 14.3908 4.09379 12.8043C4.27833 12.4524 4.37059 12.2764 4.3871 12.084C4.39189 12.0281 4.39189 11.9719 4.3871 11.916C4.3706 11.7236 4.27833 11.5476 4.09379 11.1957C3.26182 9.60915 2.84584 8.81587 3.05232 8.38372C3.10784 8.26754 3.18606 8.16764 3.28087 8.09184C3.63353 7.80989 4.36702 8.19769 5.83399 8.97329L7.13475 9.66101Z'
    }
  ],
  [
    'path',
    {
      d: 'M21 12L19 12'
    }
  ],
  [
    'path',
    {
      d: 'M15 12L13 12'
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

Navigator2Icon.displayName = 'Navigator2Icon';
export default Navigator2Icon;
