import React from 'react';
import config from '../config';

interface SmartPhoneLandscapeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SmartPhoneLandscapeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/smart-phone-landscape)
 * @see {@link https://clicons.dev/icon/smart-phone-landscape}
 */
const SmartPhoneLandscapeIcon = React.forwardRef<SVGSVGElement, SmartPhoneLandscapeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 12.0039H19.01'
    }
  ],
  [
    'path',
    {
      d: 'M2 10.5L2 13.5C2 15.857 2 17.0355 2.73223 17.7678C3.46447 18.5 4.64298 18.5 7 18.5H17C19.357 18.5 20.5355 18.5 21.2678 17.7678C22 17.0355 22 15.857 22 13.5V10.5C22 8.14298 22 6.96447 21.2678 6.23223C20.5355 5.5 19.357 5.5 17 5.5L7 5.5C4.64298 5.5 3.46447 5.5 2.73223 6.23223C2 6.96447 2 8.14298 2 10.5Z'
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

SmartPhoneLandscapeIcon.displayName = 'SmartPhoneLandscapeIcon';
export default SmartPhoneLandscapeIcon;
