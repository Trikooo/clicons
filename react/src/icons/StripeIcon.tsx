import React from 'react';
import config from '../config';

interface StripeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name StripeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/stripe)
 * @see {@link https://clicons.dev/icon/stripe}
 */
const StripeIcon = React.forwardRef<SVGSVGElement, StripeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17.25 4V8.5C12.9921 6.77511 10.6642 7.08164 10.5482 8.14206C10.4322 9.20249 11.9677 9.82253 12.75 10C12.75 10 18.25 11 18.25 15.5C18.25 20 13.25 21 10.75 21C8.75 21 6.58333 20.1981 5.75 19.8648V15.1633C6.54997 15.6189 8.56994 16.5633 10.25 16.6959C12.3501 16.8616 12.9123 16.3765 13.0543 15.7639C13.3132 14.6468 11.4418 13.9934 10.25 13.5C7.05 12.3 5.75 11 5.75 8.5C5.75 4 9.75 3 12.25 3C14.65 3 16.5833 3.66667 17.25 4Z'
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

StripeIcon.displayName = 'StripeIcon';
export default StripeIcon;
