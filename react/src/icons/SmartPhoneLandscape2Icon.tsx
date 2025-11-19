import React from 'react';
import config from '../config';

interface SmartPhoneLandscape2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SmartPhoneLandscape2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/smart-phone-landscape2)
 * @see {@link https://clicons.dev/icon/smart-phone-landscape2}
 */
const SmartPhoneLandscape2Icon = React.forwardRef<SVGSVGElement, SmartPhoneLandscape2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.00015 10.5L2.00015 13.5C2.00015 15.857 2.00015 17.0355 2.73239 17.7678C3.46462 18.5 4.64313 18.5 7.00015 18.5H17.0002C19.3572 18.5 20.5357 18.5 21.2679 17.7678C22.0002 17.0355 22.0002 15.857 22.0002 13.5V10.5C22.0002 8.14298 22.0002 6.96447 21.2679 6.23223C20.5357 5.5 19.3572 5.5 17.0002 5.5L7.00015 5.5C4.64313 5.5 3.46462 5.5 2.73239 6.23223C2.00015 6.96447 2.00015 8.14298 2.00015 10.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M1.99991 9.5L1.99991 13.5L2.99991 13L2.99991 10L1.99991 9.5Z'
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

SmartPhoneLandscape2Icon.displayName = 'SmartPhoneLandscape2Icon';
export default SmartPhoneLandscape2Icon;
