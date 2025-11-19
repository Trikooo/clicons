import React from 'react';
import config from '../config';

interface LungsIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LungsIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/lungs)
 * @see {@link https://clicons.dev/icon/lungs}
 */
const LungsIcon = React.forwardRef<SVGSVGElement, LungsIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.97769 11C8.38875 11.2063 8.71501 11.5615 8.97397 11.9954M8.97397 11.9954C9.97037 13.665 9.97025 16.5 9.97025 16.5C9.97025 20 8.18605 21 5.98512 21C4.98884 21 2 20.5 2 16C2 9.5 5.48698 5 8.47583 5C10.8669 5 9.97174 10 8.97397 11.9954Z'
    }
  ],
  [
    'path',
    {
      d: 'M16.0216 11C15.6104 11.2063 15.2841 11.5615 15.0251 11.9954M15.0251 11.9954C14.0286 13.665 14.0287 16.5 14.0287 16.5C14.0287 20 15.8132 21 18.0144 21C19.0108 21 22 20.5 22 16C22 9.5 18.5126 5 15.5234 5C13.132 5 14.0301 10 15.0251 11.9954Z'
    }
  ],
  [
    'path',
    {
      d: 'M14 7L12 5.66667M12 5.66667L10 7M12 5.66667V3'
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

LungsIcon.displayName = 'LungsIcon';
export default LungsIcon;
