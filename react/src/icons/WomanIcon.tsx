import React from 'react';
import config from '../config';

interface WomanIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name WomanIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/woman)
 * @see {@link https://clicons.dev/icon/woman}
 */
const WomanIcon = React.forwardRef<SVGSVGElement, WomanIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.0002 16V20C10.0002 20.9428 10.0002 21.4142 10.2931 21.7071C10.586 22 11.0574 22 12.0002 22C12.943 22 13.4144 22 13.7073 21.7071C14.0002 21.4142 14.0002 20.9428 14.0002 20V16L14.2603 16.0007C15.8127 16.0005 16.5889 16.0004 16.8927 15.5149C17.1965 15.0295 16.8312 14.3728 16.1007 13.0595L14.3008 9.82358C13.8476 9.00874 12.9628 8.49982 11.9996 8.5C11.0368 8.50018 10.1525 9.00901 9.69941 9.82351L7.89935 13.0595C7.1688 14.3728 6.80353 15.0294 7.10731 15.5149C7.41109 16.0004 8.1873 16.0005 9.73972 16.0007L10.0002 16Z'
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

WomanIcon.displayName = 'WomanIcon';
export default WomanIcon;
